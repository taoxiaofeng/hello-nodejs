
// 加密
const crypto = require('crypto');

// md5
// let obj = crypto.createHash('md5');

// sha1
let obj = crypto.createHash('sha1');

// obj.update('123456');



obj.update('123');
obj.update('4');
obj.update('56');

console.log(obj.digest('hex'));
