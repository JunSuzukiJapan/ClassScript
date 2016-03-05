/// <reference path="../typings/main.d.ts" />

import {FileInputStream} from './InputStream'
import {FileOutputStream} from './OutputStream'
import Parser from './Parser'

class Main {
    public run(){
        const argv = process.argv

        if(argv.length <= 3){
            this.help()
            process.exit(0)
        }

        const filename = argv[2]
        const dist_filename = argv[3]
        const instream = new FileInputStream(filename)
        const parser = new Parser(instream)
        const node = parser.parse()

        const outstream = new FileOutputStream(dist_filename)
        try {
          node.compile(outstream)
        }finally{
          outstream.close()
        }
    }

    private help(){
        console.log('usage: node main.js source dist')
    }
}

const main = new Main()
main.run()
