/// <reference path="../typings/main.d.ts" />

import {FileInputStream, InputStream} from './InputStream'
import Parser from './Parser'

class Main {
    public run(){
        const argv = process.argv

        console.log(argv)

        if(argv.length <= 2){
            this.help()
            process.exit(0)
        }

        const filename = argv[2]
        const instream = new FileInputStream(filename)
        const parser = new Parser(instream)
        const node = parser.parse()
        node.compile()
    }

    private help(){
        console.log('no help')
    }
}

const main = new Main()
main.run()
