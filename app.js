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
var stuff = require('./counter');

// var pi = require('./counter').pi;


console.log(stuff.counter(['ruby', 'nodejs', 'react']));
console.log(stuff.adder(3));
// console.log(pi);