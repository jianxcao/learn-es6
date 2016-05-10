# 解构  数组解构 对象解构 解构默认值

## [数组的解构赋值](./index.es6)

``` javascript
  //a,b,c分别赋值 1，2，3
    var [a, b, c] = [1, 2, 3];
    //将数组1到n截取
    var [, ...a] = [1, 2, 3];
    //将数组截取成 a, b, c三个变量 c从数组的地三位开始
    var [a, b, ...c] = [1, 2, 3, 4, 5]
  
  // 复杂点的解构  匹配模式
  var [foo, [[bar], baz]] = [1, [[2], 3]];
  // foo // 1
  // bar // 2
  // baz // 3
```
### [数组解构默认值](./index.es6)
``` javascript
let [y = 1, b, c] = [, 1, 2];
```

> - 数组结构在赋值的时候，如果不存在则赋值为undefined
> - 数组解构右侧必须是数组，如果是null，或者undefined,或者对象会报错
> - 这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。
> -  解构只有在值是undefined得时候才会取默认值

## [对象的解构](./obj.es6)
``` javascript
let obj = { first: 'hello', last: 'world' };
//解构出值
var {first, last} = obj;
//解构出带别名的值
var { first: f, last: l } = obj;
//先声明后使用的解构必须家一个 ()
//否则语法上面出错
let foo;
({foo} = {foo: 1}); // 成功
```
### [对象解构默认值](./obj.es6)
``` javascript
//a起别名为c 并且默认值为3
var {a:c = 3, b=4} = {};
```
> 解构只有在值是undefined得时候才会取默认值

## [解构的嵌套使用](./obj.es6)

``` javascript
    var obj = {
      p: [
        "Hello",
        { y: "World" }
      ]};
    var { p: [x, { y }] } = obj;
    x // "Hello"
    y // "World"
```
> 只要左边右边匹配则能用解构
> 嵌套最内层的为变量，外层就是标记，不是一个变量


## [函数解构](./fun.es6)
``` javascript
//对象传递
var fun1 = function({a, b}) {
  console.log(a, b);
};

//数组传递
var fun2 = function([a, b]) {
  console.log(a, b);
};

fun1({a: 1, b: 2});
fun2([2, 3]);
```
### [函数解构默认值](./fun.es6)

``` javascript
//默认值
var fun3 = function([x= 1, y = 1]) {
  console.log(x, y);
};

var fun4 = function({a = 1, b = 1}) {
  console.log(a, b);
}

fun3([]);
//这里如果调用会报语法错误滴
//fun4(); 应为整个对象米有默认值
fun4({});
```


## [解构默认值可以是个变量](./val.es6)
``` javascript
// 如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值
function f(){
  console.log('aaa');
}
let [x = f()] = [1];
let [y = 1] = [x];
//这里的 f并不会一定执行，只有在 x的值是undefined的时候才能使用
```


