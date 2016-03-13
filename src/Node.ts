import { OutputStream } from './OutputStream'
import {TokenType} from './Token'

export interface Node {
    compile(output: OutputStream): void

}

export class NodeProgram implements Node {
  compile(output: OutputStream): void {
    // TODO
  }
}

export class NodeInteger implements Node {
  num: number

  constructor(num: number){
    this.num = num
  }

  compile(output: OutputStream): void {
    // TODO
  }
}

export class NodeBinExpr implements Node {
  op: TokenType
  nodeLeft: Node
  nodeRight: Node

  constructor(op, left, right){
    this.op = op
    this.nodeLeft = left
    this.nodeRight = right
  }

  compile(output: OutputStream){
    // TODO
  }
}

export class NodeChar implements Node {
    character: string = null

    constructor(ch: string){
        this.character = ch
    }

    compile(output: OutputStream){
        output.puts('<NodeChar: "' + this.character + '" >')
    }
}
