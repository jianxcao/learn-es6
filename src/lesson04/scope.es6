if (true) {
  let a = 'secret';
  function f() {
    return a;
  }
}
// f() // 报错


/**************************************************************/
	// 下面这几种写法， 标准的es6是有错误的，但是babel转换成es5后是没错的

	// 不存在变量提升
	console.log(foo); // 输出undefined
	console.log(bar); // 报错ReferenceError

	var foo = 2;
	let bar = 2;

	if (true) {
		//报错，if为新的块级作用域，新定义了bar 覆盖外面的bar，但是未定义即使用，报ReferenceError
		bar = 3;
		let bar;
	}

	// ES6由于引入了块级作用域，这种情况可以理解成函数在块级作用域内声明，因此不报错，但是构成区块的大括号不能少，否则还是会报错。
	// 报错
	// 'use strict';
	// if (true)
	//   function f() {}

/***************************************************************/