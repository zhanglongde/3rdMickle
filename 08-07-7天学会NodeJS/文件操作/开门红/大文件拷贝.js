/**
 * Created by Administrator on 2017/6/11.
 */

var fs = require('fs')

function copy(src,dst) {
  fs.createReadStream(src).pipe(fs.createWriteStream(dst))
}

function main(argv) {
  console.log(argv)
  copy(argv[2],argv[3])
}

main(process.argv)