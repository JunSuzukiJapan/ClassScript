export interface Node {
    compile(): void
    execute(): void
}

export class NodeChar implements Node {
    character: string = null

    constructor(ch: string){
        this.character = ch
    }

    compile(){
        console.log('<NodeChar: "' + this.character + '" >')
    }

    execute(){
    }
}

