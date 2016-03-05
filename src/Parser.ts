import {InputStream} from './InputStream'
import {Node, NodeChar} from './Node'

export default class Parser {
    private stream: InputStream

    constructor(stream: InputStream){
        this.stream = stream
    }

    public parse(): Node {
        const ch = this.stream.getChar()
        const node = new NodeChar(ch)
        return node
    }
}