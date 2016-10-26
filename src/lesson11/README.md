# 生成器

## es6 生成器
``` javascript
var c = function () {
	return new Promise(function(resolve, reject) {
		resolve(1);
	});
};
var d = function*() {
	var b = yield 1;
	console.log(b);
	var c = yield 88;
	console.log(c);
};

function* gen() {
	// yield 的返回值是当作一个元素
	var x = yield c();
	console.log('x', x);
	// yield* 的返回值是一个 iterator，会依次返回这个 iterator 中的每个元素
	var y = yield*  d();

	var z =  yield  'end';
	console.log('z', z);
};

var a = gen();
console.log(a.next());
console.log(a.next(2));
console.log(a.next(3));
console.log(a.next(4));
console.log(a.next(5));
console.log(a.next(6));
```

> 上述是生成器的写法，fun后带 ***** 号表示一个生成器 **yield** 只能在生成器的方法中出现，每次 yield执行相当于形成一个时间点，在这个时间点 函数会去执行 yield后得语句，其他都先暂停执行，等yield执行完毕后在去执行后续操作
>
> 生成器函数会返回一个对象，该对象会有 next，throw方法，每次调用next会执行 一个yield，直到结束。
>
> 调用next会返回一个对象  有value表示返回值，有done表示 该生成器是不是全部执行完毕
>
> 每次调用next可以传参数，作为生成器的返回值

## es7 asnyc await

``` javascript

var b = function() {
	return 1;
};

async function test() {
	var a = await 1;
	var c = await 2;
	return a + c;
}
test().then(function(result) {
	console.log(result);
});


```

> async await 是 生成器的进化版本
>
> 所有async函数 以 async开始  ，await只能出现在 async函数中   await将返回 后跟表达式的执行结果
>
> async函数将返回promise
>
> async函数其实就是对 生成器的包装，包装后并在包装内按顺序调用 生成器，同时处理异常
>
> 