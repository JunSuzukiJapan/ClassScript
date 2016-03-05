import { OutputStream } from './OutputStream'

export interface Node {
    compile(output: OutputStream): void
    execute(): void
}

export class NodeChar implements Node {
    character: string = null

    constructor(ch: string){
        this.character = ch
    }

    compile(output: OutputStream){
        output.puts('<NodeChar: "' + this.character + '" >')
    }

    execute(){
    }
}
