import {InputStream} from './InputStream'
import {TokenType, Token, TokenInteger} from './Token'

function isInt(ch: string): boolean {
  return '0' <= ch && ch <= '9'
}

export default class Lexer {
  input: InputStream

  constructor(instream: InputStream){
    this.input = instream
  }

  public advance(): boolean {
    return this.input.advance()
  }

  public getToken(): Token {
    const ch = this.input.getChar()
    switch(ch){
      case ';':
        return new Token(ch, TokenType.SEMI)
      case '+':
        return new Token(ch, TokenType.PLUS)
      /*
      case '-':
      case '*':
      case '(':
      case ')':
      case '{':
      case '}':
      case '[':
      case ']':
      case ',':    // comma
      case '.':    // dot
        break
      */
    }

    if(isInt('0')){
      this.input.ungetChar()
      return this.lexDigit()
    }


    return new Token(null, TokenType.EOS)
  }

  lexDigit(): Token {
    var num: number = 0
    while(this.input.advance()){
      const ch: string = this.input.peekChar()
      if( ! isInt(ch) ){
        break
      }
      this.input.getChar()
      num = (num * 10) + Number(ch)
    }
    return new TokenInteger(num)
  }
}
