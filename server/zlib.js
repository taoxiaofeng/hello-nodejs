const zlib = require('zlib');
const fs = require('fs');

let rs = fs.createReadStream('../libs/jquery-3.4.1.min.js');
let ws = fs.createWriteStream('../libs/jquery-3.4.1.min_gz.js');

let gz = zlib.createGzip();

rs.pipe(gz).pipe(ws);

ws.on('finish', () => {
    console.log('完成');
});