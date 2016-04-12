//y 默认值是 Word ，只有当y时undfined的时候才能 取默认值

function log(x, y = 'World') {
  console.log(x, y);
}

log('Hello') // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hello


//与解构一同使用
function foo({x, y = 5}) {
  console.log(x, y);
}

foo({}) // undefined, 5
foo({x: 1}) // 1, 5
foo({x: 1, y: 2}) // 1, 2
//foo() // TypeError: Cannot read property 'x' of undefined

//下面2个写法是有区别的，注意右侧是 默认值，一个设置的是  空对象，一个设置的是有 x,y属性的对象
//左侧的是解构，一个在解构的时候设置了 默认值，一个在解构的时候没有设置默认值

// 写法一
function m1({x = 0, y = 0} = {}) {
  return [x, y];
}

// 写法二
function m2({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}

function test (a = 1, b) {

}
//获取函数的形参长度
console.log('length', test.length);