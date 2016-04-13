/**
 * Symbol.for它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的Symbol值。如果有，就返回这个Symbol值，否则就新建并返回一个以该字符串为名称的Symbol值。
 * 如果有2个同名字符串的Symol，则会返回其中一个
 * 必须都是Symbol.for产生的才会有效 比如 Symbol.for('t')和Symbol('t')产生的是不相同的
 * keyFor方法可以用于对for方法产生的Symbol发回他的string说明
 */
console.groupCollapsed('es6 Symbol.key,Symbol.keyFor');
var s1 = Symbol.for('foo');
var s2 = Symbol.for('foo');
//s1 === s2 // true
console.log("Symbol.for('foo') === Symbol.for('foo')", s1 === s2);


var s1 = Symbol.for("foo");
Symbol.keyFor(s1); // "foo"

var s2 = Symbol("foo");
Symbol.keyFor(s2); // undefined

console.log('s1 = Symbol.for("foo");Symbol.keyFor(s1)', Symbol.keyFor(s1));

console.log('s2 = Symbol("foo");Symbol.keyFor(s2)', Symbol.keyFor(s2));

console.groupEnd();