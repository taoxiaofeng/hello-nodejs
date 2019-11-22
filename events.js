const Event = require('events').EventEmitter;

let ev = new Event();


// // 1、监听(接收)
// ev.on('msg', function (a, b, c) {
//     console.log('收到了msg事件', a, b, c);
// });

// // 2、派发(发送)
// ev.emit('msg', 12, 5, 88);

// 利用普通函数实现上述功能
function msg(a, b, c) {
    console.log('收到了msg事件', a, b, c);
}

msg(12, 5, 8);

// events 事件和普通函数调用的区别是可以解除耦合。 events调用可以随意指定函数名