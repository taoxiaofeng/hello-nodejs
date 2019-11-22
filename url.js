// 解析url
const url = require('url');

let obj = url.parse('https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=1462,21079,20882,29568,29220,26350&wd=%E9%AD%94%E5%85%BD%E4%B8%96%E7%95%8C&req=2&bs=%E9%AD%94%E5%85%BD%E4%B8%96%E7%95%8C&pbs=%E9%AD%94%E5%85%BD%E4%B8%96%E7%95%8C&csor=4&pwd=%E9%AD%94%E5%85%BD%E4%B8%96%E7%95%8C&cb=jQuery1102021340956041267223_1574437914517&_=1574437914541');
console.log(obj)