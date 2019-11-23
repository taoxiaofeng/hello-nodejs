const http = require('http');
const url = require('url');

let server = http.createServer((req, res) => {
    let {pathname, query} = url.parse(req.url);

    console.log(pathname, query);
    // console.log(req.url)

    res.end();
});

server.listen(1111);