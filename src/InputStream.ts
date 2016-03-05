/// <reference path="../typings/main.d.ts" />

import fs = require('fs')

export interface InputStream {
    peekChar(): string
    getChar(): string
    ungetChar(): void
}

export class FileInputStream implements InputStream {
    private buffer: string
    private index: number

    constructor(filename: string){
        this.buffer = fs.readFileSync(filename, 'utf8')
        this.index = 0
    }

    peekChar(): string {
        return this.buffer[this.index]
    }

    getChar(): string {
        return this.buffer[this.index++]
    }

    ungetChar(): void {
        this.index--
    }
}
