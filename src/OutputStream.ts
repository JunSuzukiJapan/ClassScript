/// <reference path="../typings/main.d.ts" />

import fs = require('fs')

export interface OutputStream {
  puts(str: string): void
  close(): void
  put_indent(): void
  indent(): number;
  unindent(): number;
}

export class FileOutputStream implements OutputStream {
  filename:string
  fout;
  current_indent: number

  constructor(filename: string){
    this.filename = filename
    this.fout = fs.createWriteStream(this.filename, { flags: 'w', encoding: 'utf8'})
    this.current_indent = 0
  }

  puts(str: string){
    this.fout.write(str)
  }

  close(){
    this.fout.end()
  }

  put_indent(){
    const s = "  ".repeat(this.current_indent)
    this.fout.puts(s)
  }

  indent(): number {
    this.current_indent++
    return this.current_indent
  }

  unindent(): number {
    if(this.current_indent > 0){
      this.current_indent--
    }
    return this.current_indent
  }
}
