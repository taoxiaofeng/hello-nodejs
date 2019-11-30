const http = require('http');
const common = require('../libs/common');

let server = http.createServer((req, res) => {

    let arr = [];

    req.on('data', data => {
        arr.push(data);
    });

    req.on('end', () => {
        let data = Buffer.concat(arr);
        // console.log(data);

        // 解析二进制文件上传数据
        // console.log(req.headers)
        if(req.headers['content-type']) {
            
        }














        res.end();
    })
})

server.listen(1111);