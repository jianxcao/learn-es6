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

//默认值
var fun3 = function([x= 1, y = 1]) {
	console.log(x, y);
};

var fun4 = function({a = 1, b = 1}) {
	console.log(a, b);
}

fun3([]);

//这里如果调用会报语法错误滴
//fun4();

fun4({});

var a = '';
