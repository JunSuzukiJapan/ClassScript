import {InputStream} from './InputStream'
import {Token, TokenType} from './Token'

export default class Lexer {
  input: InputStream

  constructor(instream: InputStream){
    this.input = instream
  }

  public getToken(): Token {




    return new Token(null, TokenType.NONE)
  }
}
