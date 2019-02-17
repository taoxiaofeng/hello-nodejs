// var counter = function (arr) {
//     return 'three are' + arr.length + 'elements in  the array';
// }

// var adder = function (a) {
//     return `the sum of the 2 number is ${a+pi}`;
// }

// var pi = 3.14;

// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

//改造
// module.exports = {
//     counter: function (arr) {
//         return 'three are' + arr.length + 'elements in  the array';
//     },
//     adder: adder,
//     pi: pi
// }

// var counter = function(arr) {
//     return "There are " + arr.length + " element in the array"
// }

// var adder = function(a, b) {
//     return `the sum of 2 number is ${a+b}`;
// }

var pi = 3.14;

//抛出 
// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

//简写
module.exports = {
    counter: function(arr) {
        return "There are " + arr.length + " element in the array"
    },
    adder: adder = function(a) {
        return `the sum of 2 number is ${a+pi}`;
    },
    // pi:pi
}