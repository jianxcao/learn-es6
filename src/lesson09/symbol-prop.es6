/**
   * ymbol作为属性名有上面三种使用方式
   * Symbol作为属性名定义的变量 无法for…in循环遍历，也无法 for…of遍历出来
   * Symbol作为属性名定义的变量 ，无法通过Object.keys(),Object.getOwnPropertyNames获取属性名称
   * Symbol可以通过Object.getOwnPropertySymbols()去获取
   * 如果你丢失了Symbol的原始引用，那么你只能通过Object.getOwnPropertySymbols获取到全部的Symbol在去找你需要的
   * 由于 symbol是个对象，对象作为key的时候，不能用 .操作符
   * Symbol由于是唯一的，可以作为常量，生成唯一的键值
  * Reflect.ownKeys()获取到所有的键值包括 Symbol (Reflect指反射)
 */
console.groupCollapsed('es6 Symbol prop');

var mySymbol = Symbol('test');
var a = {};

a[mySymbol] = 'Hello';

var a = {
	[mySymbol] : "Hello"
};


// 第三种写法
var a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });
// 以上写法都得到同样结果
console.log('a[mySymbol]', a[mySymbol] );

console.groupEnd();