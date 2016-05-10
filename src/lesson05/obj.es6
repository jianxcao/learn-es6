console.groupCollapsed('对象解构');
//最简单的对象 解构
var { foo, bar } = { foo: "aaa", bar: "bbb" };
console.log(foo); // "aaa"
console.log(bar); // "bbb"

	
//变量名称和对象的属性名称匹配，如果不匹配必这么写,不匹配不取别名只会去取你写的那个属性的值，会去到undefined

let obj = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj;
console.log(f); // 'hello'
console.log(l); // 'world'

//先声明后使用的解构必须家一个 ()
let mm;
({mm} = {foo: 1, mm: 2}); // 成功

//可以嵌套使用
var cjx = {
  p: [
    "Hello",
    { y: "World" }
  ]
};
//这个时候只有x和y是变量，p并不是变量 

var { p: [x, { y }] } = cjx;
// console.log(p);
console.log(x); // "Hello"
console.log(y); // "World"

//解构默认值
var {a:c = 3, b=4} = {};


console.groupEnd();