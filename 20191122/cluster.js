const cluster = require('cluster');
const os = require('os');
const http = require('http');

if (cluster.isMaster) { // 判断是否是主进程，如果是主进程再创建子进程
    for (let i = 0; i < os.cpus().length; i++) {
        cluster.fork();
    }
    console.log('主进程');
} else {
    // console.log('子进程');
    let server = http.createServer((req, res) =>{
        console.log(process.pid); // 进程ID
        res.write('aaa');
        res.end();
    })

    server.listen(8080);

}


// console.log(cluster)