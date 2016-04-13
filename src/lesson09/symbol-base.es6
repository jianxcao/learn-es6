/**
 * symbol 可以跟字符串作为参数，该参数主要是为了识别每个symbol(注意在控制台输出 会显示不同)
 * symbol产生的 symbol对象都是唯一的
 * symbol 不能参与运算,可以转换成boolean类型，其他类型均不可以
 */

console.groupCollapsed('es6 Symbol base');
	var s1 = Symbol('foo');
	var s2 = Symbol('bar');
	var s3 = Symbol();
	console.log(s1, s2, s3);
console.groupEnd();