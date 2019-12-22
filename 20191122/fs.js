const fs = require('fs');

fs.stat('./1.html', (err, stat) =>{
    if(err) {
        console.log('获取文件失败')
    } else {
        console.log(stat)
    }
})