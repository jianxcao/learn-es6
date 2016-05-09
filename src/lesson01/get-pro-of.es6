//获取父类原型中的方法
console.groupCollapsed('getPrototypeOf');
function Person() {
	this.method1 = function() {
		console.log(1);
	};
}
Person.prototype.method2 = function() {
	console.log(2);
};
Person.prototype.test = "cjx";

function Man() {
	this.m3 = function() {
		//获取父类的 test方法
		console.log(Object.getPrototypeOf(this).test);
		//获取 父类的method1的方法并调用
		Object.getPrototypeOf(this).method1();
	};
};

Man.prototype = new Person();
Man.prototype.test ='zhangsan';

Man.prototype.m2 = function() {
	Object.getPrototypeOf(this).method2();
};

var man = new Man();
console.log(man);
man.m3();

man.m2();
console.groupEnd();