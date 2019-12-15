const fs = require('fs');

let rs = fs.createReadStream('../1.txt');
let ws = fs.createWriteStream('../5.txt');

rs.pipe(ws);

rs.on('error', error => {
    console.log('读取失败：', error)
})

rs.on('end', () => {
    console.log('写入成功');
})