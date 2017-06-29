/**
 * Created by Administrator on 2017/6/11.
 */

var fs = require('fs')

function copy(src,dst) {
//   同步方法
//   fs.writeFileSync(dst,fs.readFileSync(src))
//   异步方法
  fs.readFile(src,'utf-8',function (err,data) {
    if (err) {
      throw(err)
    }
    fs.writeFile(dst,data)
  })
}

function main(argv) {
  console.log(argv)
  copy(argv[2],argv[3])
}

main(process.argv)