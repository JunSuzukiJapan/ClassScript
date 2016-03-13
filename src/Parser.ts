import {InputStream} from './InputStream'
import {Node, NodeInteger, NodeBinExpr} from './Node'
import Lexer from './Lexer'
import {Token, TokenType, TokenInteger} from './Token'

export default class Parser {
    private lexer: Lexer
    private token: Token

    constructor(lexer: Lexer){
        this.lexer = lexer
    }

    protected getToken(){
      if(this.lexer.advance()){
        this.token = this.lexer.token();
      }else{
        this.token = null;           // 次のトークンが存在しないときにはnullを設定しておく。
      }
    }

    public parse(): Node {
      var node: Node = null
      this.getToken()              // あらかじめトークンを先読みしておく。
      try {
        node = this.program()
      } catch (e){
        console.error(e)
      }
      return node
    }

    protected program(): Node {
      return this.stmt()
    }

    protected stmt(): Node {
      return this.expr()
    }

    protected expr(): Node {
      var node: Node = this.first()
      if(this.token == null){
        return node
      }

      switch(this.token.tokenType){
      case TokenType.PLUS:
      case TokenType.MINUS:
      case TokenType.OR:
        node = this.simpleExpr2(node)
        break
      }
      return node
    }

    protected simpleExpr2(code: Node): Node {
      var node: Node = null
      while(this.token && ((this.token.tokenType == TokenType.PLUS) || (this.token.tokenType == TokenType.MINUS) || (this.token.tokenType == TokenType.OR))){ // +,-,||
        const op = this.token
        this.getToken()
        const code2: Node = this.expr()
        if(node == null){
          node = new NodeBinExpr(op, code, code2);
        }else{
          node = new NodeBinExpr(op, node, code2);
        }
      }
      return node
    }

    protected first(): Node {
      var node = null

      switch(this.token.tokenType){
      case TokenType.INTEGER:
        const token = this.token as TokenInteger
        node = new NodeInteger(token.num)
        this.getToken()
        break
      default:
      }

      return node
    }

}
