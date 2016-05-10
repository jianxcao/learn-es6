#变量作用域，let和const

## [const](./consts.es6)

``` javascript
const cjx ="last";
const test = "oneone";
```
> const 用来表示一个不能改变的变量定义后值不可变
> 声明不可重复声明
> 需要先声明后使用

## [let](./index.es6)

``` javascript
var getFn = function() {
	var arrs = [];
	for (var i = 0; i < 3; i++) {
		arrs.push(function() {
			return i;
		});
	}
	return arrs;
};
var fns = getFn();
console.log("使用var情况下的输出", fns[0]() + fns[1]());


// 使用 let情况下的输出
 var getFn = function() {
	var arrs = [];
	for (let i = 0; i < 3; i++) {
		arrs.push(function() {
			return i;
		});
	}
	return arrs;
};
var fns = getFn();

console.log("使用let情况下的输出", fns[0]() + fns[1]());
```
> - let在块级作用于生效（if，for ， fun等都生效）
> - 一定要先定义后使用，否则会出现 referenceError错误
> - 不要重复声明一个变量在同一个块级作用域内(重复定义bable会报错)

## [scope](./scope.es6)

``` javascript
	// 下面这几种写法， 标准的es6是有错误的，但是babel转换成es5后是没错的

	// 不存在变量提升
	console.log(foo); // 输出undefined
	console.log(bar); // 报错ReferenceError

	var foo = 2;
	var bar = 2;

	if (true) {
		//报错，if为新的块级作用域，新定义了bar 覆盖外面的bar，但是未定义即使用，报ReferenceError
		bar = 3;
		let bar;1
	}

	// ES6由于引入了块级作用域，这种情况可以理解成函数在块级作用域内声明，因此不报错，但是构成区块的大括号不能少，否则还是会报错。
	// 报错
	// 'use strict';
	// if (true)
	//   function f() {}
```

> 变量提升
``` javascript
//if作用域下理论上外部不能访问 a变量和fun f，但是实际测试发现，f是能被访问到得
if (true) {
  let a = 'secret';
  function f() {
    return a;
  }
}
```
