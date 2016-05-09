var o = {};
console.groupCollapsed('Object.defineProperty');

//给o对象定义一个test属性
//可以 配置，可以 迭代，可以取值，设置值
Object.defineProperty(o, "test", {
	enumerable: true,
	configurable: true,
	get: function() {
		console.log('in get', this.__t);
		return this.__t;
	},
	set: function(val) {
		console.log('in set');
		return this.__t = val + (this.__t || "cjx");
	}
});
o.test = 1;

//为o对象定义 cjx属性
//writable表示 该属性是否可以修改
//enumerable表示该属性是否可以迭代，不可以迭代的属性不能通过 for...in循环
//configurable表示 该对象的 定义对象是否可以被修改
//value 表示改对象的值，可以没有value，但是得用 get和set方法代替
//默认writable,enumerable, configurable就为false
Object.defineProperty(o, "cjx", {
	writable: false,
	enumerable: false,
	configurable: false,
	value: 1,
});
console.log(o.test, o.cjx);
console.groupEnd();

var cjx  = {};
cjx.a = {
	ff: "test"
};


console.groupCollapsed('Object.defineProperties');
//一次定义多个对象
//后面的描述对象 键是属性名称，值是描述对象
Object.defineProperties(o, {
	prop1: {
		value:1
	},
	prop2: {
		value: 2
	}
});
console.log(o.prop1, o.prop2);
console.groupEnd();



console.groupCollapsed('Object.preventExtensions, Object.isExtensible');
//避免加新属性加入对象(Extensible设置为false);
Object.preventExtensions(cjx.a);
console.log(Object.getOwnPropertyDescriptor(cjx, 'a'));
//是否禁止对象扩展
console.log('isExtensible', Object.isExtensible(cjx.a));
console.groupEnd();

var cjx = {};
cjx.b = {
	ff: "test"
};
console.groupCollapsed('Object.seal,Object.isSealed');
//锁定对象,无法加入新的属性.并把ECMAScript对象的所有属性configurable设置为false;
Object.seal(cjx.b);
console.log(Object.getOwnPropertyDescriptor(cjx.b, "ff"));
console.log('isExtensible', Object.isExtensible(cjx.b.ff));
//是否锁定对象
console.log("isSealed", Object.isSealed(cjx.b));
console.groupEnd();


var cjx = {};
cjx.c =  {
	ff: "test"
};
console.groupCollapsed('Object.freeze,Object.isFrozen');
//冻结对象,无法修改对象的属性,无法加入新的属性.(与seal的区别为,freeze会把对象的所有属性的Writable设置为false)
Object.freeze(cjx.c);
console.log(Object.getOwnPropertyDescriptor(cjx.c, "ff"));
console.log('isExtensible', Object.isExtensible(cjx.c.ff));
//是否冻结对象
console.log("isFrozen", Object.isFrozen(cjx.c));
console.groupEnd();



