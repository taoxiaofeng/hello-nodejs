// setTimeout(() => {
//     console.log('hello world!');
// },3000)


// var time = 0;
// var timer = setInterval(function () {
//     time += 2;
//     console.log(time + 'hello world!');

//     if (time > 5) {
//         clearInterval(timer);
//     }
// }, 2000)

// console.log(__dirname); //输出当前目录
// console.log(__filename); //输入当前文件

/**
 * 
 * @param {*} fun 函数
 * @param {*} name 字符串
 */
// function callFunction(fun, name) {
//     //回调函数
//     fun(name);
// }

// function sayHi() {
//     console.log('Hi');
// }
// sayHi();
//函数表达式
// var sayBye = function (name) {
//     console.log(name + 'world');
// }
// sayBye();
// callFunction(sayBye, 'rails365');

//另外一种写法
// callFunction(function (name) {
//     console.log(name + 'world');
// }, 'rails365');

/**
 * 模块 
 * require 引用这个模块
 */


// var counter = require('./counter');
// var stuff = require('./counter');

// // var pi = require('./counter').pi;


// console.log(stuff.counter(['ruby', 'nodejs', 'react']));
// console.log(stuff.adder(3));
// console.log(pi);

/**
 * events 事件
 */

// var events = require('events');
// var util = require('util');

// var Person = function (name) {
//     this.name = name;
// }

//Person 继承 events.EventEmitter
// util.inherits(Person, events.EventEmitter);


//新建三个对象
// var xiaoming = new Person('xiaoming');
// var lili = new Person('lili');
// var lucy = new Person('lucy');

//把三个对象封装到数组中
// var person = [xiaoming, lili, lucy];

//循环给三个对象绑定事件
// person.forEach(function (person) {
//     person.on('speak', function (message) {
//         console.log(person.name + ' said: ' + message);
//     })
// })

//触发事件
// xiaoming.emit('speak', 'hi');
// lucy.emit('speak', 'I want a curry');

// //新建事件对象
// var myEmitter = new events.EventEmitter();

// //绑定事件
// myEmitter.on('someEvent', function (message) {
//     console.log(message);
// });

// //触发事件
// myEmitter.emit('someEvent', 'the event was emitted');

//导入模块
// var stuff = require('./counter');
// var pi = require('./counter').pi;
// console.log(stuff.counter(['ruby','nodejs','react']));
// console.log(stuff.adder(3));
// console.log(pi);

//事件操作
// var events = require('events');
// var util = require('util');

// var Person = function(name) {
//     this.name = name;
// }

//Person 继承事件类
// util.inherits(Person, events.EventEmitter);

//创建三个对象
// var xiaoming = new Person('xiaoming');
// var lili = new Person('lili');
// var lucy = new Person('lucy');

//把创建的三个对象放到person数组中
// var person = [xiaoming, lili, lucy];

//遍历person数组增加speak事件
// person.forEach(function(person) {
//     person.on('speak', function(message) {
//         console.log(person.name + " said: " + message);
//     });
// });

// 调用 speak 事件
// xiaoming.emit('speak', 'hi');
// lucy.emit('speak', '');

// var myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent', function(message) {
//     console.log(message);
// });

// myEmitter.emit('someEvent', 'the event was emitted');

//读写文件(同步，异步)
 var fs = require('fs'); //文件系统的一个库
//  var readMe = fs.readFileSync("readMe.txt", "utf8"); //同步读取文件
//  console.log(readMe);

// fs.writeFileSync("writeMe.txt", readMe); //创建 writeMe.txt 文件

//异步读取文件 
// var readMe = fs.readFile("readMe.txt", "utf8", function(err,data) {
//     // console.log(data);
//     //异步创建文件
//     fs.writeFile('writeMe.txt', data, function() {
//         console.log('writeMe has finished');
//     })
// });

// var waitTill = new Date(new Date().getTime() + 4 * 1000);
// while(waitTill > new Date()) {}

// console.log("finished");
//PS:先执行同步方法，在执行异步队列中的方法，如果同步方法执行过慢/执行阻塞，就会导致异步延后执行

//测试异步读取文件

// var readMeOne = fs.readFile("readMe.txt", "utf8", function(err, data) {
//     var waitTill = new Date(new Date().getTime() + 2 * 1000);
//     while (waitTill > new Date()) {}
//     console.log("first async");
// });

// var readMeTwo = fs.readFile("readMe.txt", "utf8", function(err, data) {
//     var waitTill = new Date(new Date().getTime() + 2 * 1000);
//     while (waitTill > new Date()) {}
//     console.log("second async");
// });

// console.log("finished");

//创建和删除目录
// fs.unlink("writeMe.txt", function() { //删除 writeMe.txt文件
//     console.log("delete writeMe.txt file");
// });

// fs.mkdirSync('stuff'); //创建目录
// fs.rmdirSync('stuff'); //删除目录

// fs.mkdir('stuff', function() {  // 创建目录
//     fs.readFile('readMe.txt', 'utf8', function (err, data) {    //读取文件
//         fs.writeFile('./stuff/writeMe.txt', data, function() {  //创建 writeMe.txt在 stuff目录下
//             console.log('copy successfully')
//         })
//     })
// })

var myReadStrem = fs.createReadStream(__dirname + "/readMe.txt"); //读取一个流 文件
var myWriteStream = fs.createWriteStream(__dirname + "/writeMe.txt");
myReadStrem.setEncoding('utf8'); //字符编码
var data = "";

myReadStrem.on('data', function(chunk) {
    myWriteStream.write(chunk);
    // data += chunk;
    // console.log('new chunk received');
    // console.log(chunk);
});

myReadStrem.on('end', function() {
    console.log(data);
});