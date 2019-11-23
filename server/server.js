const http = require('http');

let server = http.createServer((req, res) => {
    // request  请求   接收到数据(输入)
    // response  响应   发送的数据(输出)

    // res.write('aaa');
    // res.end();
    // 解析访问返回不同内容
    switch (req.url) {
        case '/aaa':
            res.write('abc');
            break;
        case '/bbb':
            res.write('bbbddd');
            break;
        case '/1.html':
            res.write('<!DOCTYPE html><html lang="en">  <head>  <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <meta http-equiv="X-UA-Compatible" content="ie=edge"> <title>测试网页</title> </head>  <body> 测试网页  </body>   </html>')
            break;
        default:
            break;
    }

    res.end();
});

// server 监听
server.listen(1111);