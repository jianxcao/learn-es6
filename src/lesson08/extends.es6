console.groupCollapsed('es6 class extends');
import * as Base from './base';

class ColorPoint extends Base.myPoint {
	constructor(x, y, color) {
		//错误，必须先调用super才能调用 this，否则this是undefined
		// this.test = 3;
		super(x, y); // 调用父类的constructor(x, y)
		this.color = color;
	}
	toString() {
		return this.color + ' ' + super.toString(); // 调用父类的toString()
	}
}
var c = new ColorPoint(3, 4, 'red');
console.log('通过继承得到的类，并覆盖父类的方法', c.toString());
console.groupEnd();



/**
 * 一个列子说明 可以继承原声的对象
 */
console.groupCollapsed('es6 class 继承原声 error对象');

class ExtendableError extends Error {
  constructor(message) {
    super();
    this.message = message;
    this.stack = (new Error()).stack;
    this.name = this.constructor.name;
  }
}
console.groupEnd();