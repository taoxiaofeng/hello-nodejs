const http = require('http');
const common = require('../libs/common');
const fs = require('fs');
const uuid = require('uuid/v4')

let server = http.createServer((req, res) => {

    let arr = [];

    req.on('data', data => {
        arr.push(data);
    });

    req.on('end', () => {
        let data = Buffer.concat(arr);
        // console.log(data);

        // 解析二进制文件上传数据
        let post = {};
        let files = {};
        if (req.headers['content-type']) {
            let str = req.headers['content-type'].split('; ')[1];
            if (str) {
                let boundary = '--' + str.split('=')[1];


                // 1、 用分割符切分整个数据
                let arr = data.split(boundary);

                //2、 丢弃头尾的两个数据
                arr.shift();
                arr.pop();

                // console.log(arr);
                //3、 丢弃掉每个数据头尾的 /r /n
                arr = arr.map(buffer => buffer.slice(2, buffer.length - 2));

                // console.log(arr);

                //4、 每个数据在第一个 /r/n 处切成两半
                arr.forEach(buffer => {
                    let n = buffer.indexOf('\r\n\r\n');
                    let disposition = buffer.slice(0, n);
                    let content = buffer.slice(n + 4);


                    disposition = disposition.toString();
                    // console.log(n, disposition, content);
                    if (disposition.indexOf('\r\n') == -1) {
                        // 普通数据
                        // 'Content-Disposition: form-data; name="user"'
                        // 'Content-Disposition: form-data; name="pass"'
                        content = content.toString();

                        let name = disposition.split('; ')[1].split('=')[1];
                        name = name.substring(1, name.length - 1);

                        post[name] = content;
                    } else {
                        // 文件数据
                        // 'Content-Disposition: form-data; name="f1"; filename="CSS世界-张鑫旭.pdf"\r\nContent-Type: application/pdf'
                        let [line1, line2] = disposition.split('\r\n');
                        let [, name, filename] = line1.split('; ');
                        let type = line2.split(': ')[1];

                        name = name.split('=')[1];
                        name = name.substring(1, name.length - 1);

                        filename = filename.split('=')[1];
                        filename = filename.substring(1, filename.length - 1);

                        // console.log(name, filename, type, content);

                        let path = `../upload/${uuid().replace(/\-/g, '')}`;

                        fs.writeFile(path, content, err => {
                            if (err) {
                                console.log('文件写入失败', err);
                            } else {
                                files[name] = { filename, path, type };
                                console.log('成功', files);
                            }
                        });
                    }
                });

                // 5、完成；
                console.log(post);


            }
        }














        res.end();
    })
})

server.listen(1111);