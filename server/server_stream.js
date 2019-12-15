const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res) => {
    let rs = fs.createReadStream(`../www${req.url}`);

    rs.pipe(res);
})

server.listen(1111);