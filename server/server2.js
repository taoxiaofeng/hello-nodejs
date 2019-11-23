const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res) => {
    // request  请求   接收到数据(输入)
    // response  响应   发送的数据(输出)

    // req.url => '/a.txt'
    console.log(req.url, `www${req.url}`)
    fs.readFile(`../www${req.url}`, (err, data) =>{
        if(err) {
            res.writeHeader(404)    // header 状态码是给机器看的。
            res.write('404');       // write 里面放的是内容 是给人看的。
        } else {
            res.write(data);
        }
        res.end();
    });

});

// server 监听
server.listen(1111);