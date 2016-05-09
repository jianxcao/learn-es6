console.groupCollapsed('Object.create');
//以 a 对象为原型创建b对象
var a = {a: "1"};

var b = Object.create(a, {
	b: {
		value: "2"
	}
});
b.cjx = '222';

a.test = "cjx";

console.log(b, b.test);


var c = function() {

};
console.log('继承一个fun');
var d = Object.create(new c(), {
	f: {
		value: 1
	}
});
console.log(d);
console.groupEnd();

//返回一个由对象属性名组成的数组(包含不可枚举的,不包括继承的)
console.groupCollapsed('Object.getOwnPropertyNames');
  console.log(...Object.getOwnPropertyNames(b));
console.groupEnd();

//获取对象中属性的ECMAScript对象
console.groupCollapsed('Object.getOwnPropertyDescriptor');
console.log(Object.getOwnPropertyDescriptor(b, 'b'));
console.groupEnd();

//返回可以枚举的所有属性名称(不包括继承而来的)
//b对象的   cjx属性是可以枚举的，其他属性不可以枚举
console.groupCollapsed('Object.keys');
console.log(Object.keys(b));
console.groupEnd();


