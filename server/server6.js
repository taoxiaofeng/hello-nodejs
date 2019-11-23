const http = require('http');
const url = require('url');
const querystring = require('querystring');
const fs = require('fs');

let users = {
    // 'blue': '123456',
    // 'zhangsan': '654321'
}

let server = http.createServer((req, res) => {

    // GET 
    let { pathname, query } = url.parse(req.url, true);

    // POST
    let str = '';
    req.on('data', data => {
        str += data;
    });

    req.on('end', () => {
        let post = querystring.parse(str);

        // console.log(pathname, query, post)

        //写东西
        switch (pathname) {
            case '/reg':    //  注册
                break;
            case '/login':  // 登录
                break;
            default:        // 其他；文件
                fs.readFile(`../www${pathname}`, (err, data) => {
                    if(err) {
                        res.writeHeader(404);
                        res.write('Not Found');
                    } else {
                        res.write(data);
                    }
                    res.end();
                });
                break;
        }
    })

});

server.listen(1111);