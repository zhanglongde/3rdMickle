/**
 * Created by Administrator on 2017/6/11.
 */
const path = require('path')

var cache = {};

function store(key, value) {
//   path.normalize将传入的路径转换为标准路径
  cache[path.normalize(key)] = value;
}

store('foo/bar', 1);
console.log(cache);
store('foo//baz//../bar', 2);
console.log(cache);  // => { "foo/bar": 2 }


// 将传入的多个路径拼接为标准路径
var tPath = path.join('foo/','baz/','../bar')
console.log(tPath)
