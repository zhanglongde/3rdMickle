/**
 * Created by Administrator on 2017/6/11.
 */

var fs = require('fs')

function copy(src,dst) {
  fs.writeFileSync(dst,fs.readFilesync(src))
}

function main(argv) {
  console.log(argv)
  copy(argv[2],argv[3])
}

main(process.argv)