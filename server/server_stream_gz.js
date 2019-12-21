const http = require('http');
const fs = require('fs');
const zlib = require('zlib');

let server = http.createServer((req, res) => {
    let rs = fs.createReadStream(`../www${req.url}`);

    // rs.pipe(res); 
    // 节省带宽，使用gz压缩
    res.setHeader('content-encoding', 'gzip');
    let gz = zlib.createGzip();
    rs.pipe(gz).pipe(res);

    rs.on('error', error => {
        res.writeHeader(404);
        res.write('Not Found');

        res.end();
    });
})

server.listen(1111);