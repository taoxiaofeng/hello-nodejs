
// 加密
const crypto = require('crypto');

function md5(str) {
    // md5
    let obj = crypto.createHash('md5');
    obj.update(str);

    return obj.digest('hex');
}

// 所谓的二次md5加密  
console.log(md5(md5('123456') + 'se1231241232142'));
