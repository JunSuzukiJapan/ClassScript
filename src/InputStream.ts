/// <reference path="../typings/main.d.ts" />

import fs = require('fs')
import {TokenType} from './Token'

export interface InputStream {
  advance(): boolean
  peekChar(): string
  getChar(): string
  ungetChar(): void
}

export class StringInputStream implements InputStream {
  private buffer: string
  private index: number

  constructor(s: string){
    this.buffer = s
    this.index = 0
  }

  advance(): boolean {
    return this.index < this.buffer.length
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

export class FileInputStream implements InputStream {
  private buffer: string
  private index: number

  constructor(filename: string){
    this.buffer = fs.readFileSync(filename, 'utf8')
    this.index = 0
  }

  advance(): boolean {
    return this.index < this.buffer.length
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
