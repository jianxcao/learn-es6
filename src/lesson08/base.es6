console.groupCollapsed('es6 base class');

//定义类
//myPoint 和 point是相同的
//如果定义了别名，原本的名字将消失
//
var myPoint = class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
};
/**
 * 类内定义的方法 相当于向 prototype上添加属性， 也可以通过修改prototype添加，和这个效果一样
 * 注意方式 ，  constructor是构造器，和以前es5中的构造方法相同
 *  constructor 和 类本身应该是=== 是相同的, constructor必须有，如果没有，会有一个缺省的
 *  类内部定义方法均不可以枚举
 * @type {Point}
 */
console.log(`
	/**
	 * 类内定义的方法 相当于向 prototype上添加属性， 也可以通过修改prototype添加，和这个效果一样
	 * 注意方式 ，  constructor是构造器，和以前es5中的构造方法相同
	 *  constructor 和 类本身应该是=== 是相同的
	 *  类内部定义方法均不可以枚举
	 * @type {Point}
	 */
`);
var a = new myPoint(1, 2); 
console.log("测试是否可以枚举", Object.keys(myPoint.prototype), Object.getOwnPropertyNames(myPoint.prototype));
console.log('new myPoint', a, a.toString());

//像原型上添加方法

myPoint.prototype.test = function() {
	console.log('test');
};
console.log("像原型添加方法", a.test());

a.__proto__.hello = function() {
	console.log('hello');
};
console.log('通过创建的对象像原型添加方法', a.hello());
console.groupEnd();

export {myPoint};