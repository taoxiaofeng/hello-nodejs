const http = require('http');

let server = http.createServer((req, res) => {
    // request  请求   接收到数据(输入)
    // response  响应   发送的数据(输出)

    res.write('aaa');
    res.end();
});

// server 监听
server.listen(8080);