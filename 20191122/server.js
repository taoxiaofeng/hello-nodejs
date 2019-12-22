const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    let { pathname } = url.parse(req.url);

    fs.stat(`./${pathname}`, (err, stat) => {
        if (err) {
            res.writeHead(404);
            res.write('Not Found');
            res.end();
        } else {
            if (req.headers['if-modified-since']) {
                let oDate = new Date(req.headers['if-modified-since']);

                let time_client = Math.floor(oDate.getTime() / 1000);
                let time_server = Math.floor(stat.mtime.getTime() / 1000);
                // console.log(oDate.getTime() / 1000);
                if(time_server > time_client) { // 服务器的文件时间 > 客户手机的版本
                    sendFileToClient();
                } else {
                    res.writeHeader(304);
                    res.write('Not Modified');
                    res.end();
                }

            } else {
                sendFileToClient();
            }
        }

        function sendFileToClient() {


            // 发送
            let rs = fs.createReadStream(`./${pathname}`);

            // 设置 header

            // 设置 no-cache
            res.setHeader('Cache-Control', 'no-cache');
            
            res.setHeader('Last-Modified', stat.mtime.toUTCString());


            // 输出
            rs.pipe(res);

            rs.on('error', err => {
                res.writeHead(404);
                res.write('Not Found');
                res.end();
            });
        }
    })

});

server.listen(8080);
