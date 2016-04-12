
console.groupCollapsed('es5-array');
console.groupCollapsed('%c es5 array---------', "color: gray;font-size: 16px");
//es-5下的一些方法
//
var test = [0, , undefined ,1, 2, 8];
//显示给值undfined和什么都不给的效果并不一样
//注意这里的 直接给第8个元素给值，也就是说前7的都没定义，类似于上面的 直接写,
// var test =[];
// test[8] = 1;

//注意可以在数组中什么都不写，就写一个，表示是undefined
console.log(test.length, ...test);
console.groupEnd();


console.groupCollapsed('%c Array.isArray', "color: #3c3c3c;font-size: 16px");
//检测是否是数组
console.log(Array.isArray(test));
console.groupEnd();

console.groupCollapsed('%c Array.prototype.some', "color: #3c3c3c;font-size: 16px");
//检测数组中是否有大于1的数字
//test.some((current, index) => {console.log(current);return current > 1});
//这里如果数组中没有定义任何值，则会跳过这次循环,但是显示的定义undefined并不会跳过这个循环
var result = test.some(function(current, index) {
 console.log(index);
 return current > 10;
});

console.log('some', result);
console.groupEnd();


console.groupCollapsed('%c Array.prototype.every', "color: #3c3c3c;font-size: 16px");
//所有的值都符合要求, 注意这里 改变了context
var result = test.every(function(current, index) {
	console.log('every', this.cjx);
	return current > this.cjx;
}, {cjx: 6});

console.log('every', result);
console.groupEnd();


console.groupCollapsed('%c Array.prototype.filter', "color: #3c3c3c;font-size: 16px");
//过滤数组，将数组中的  0,nan,undefined过滤掉
var result = test.filter(function(current) {
	return !!current;
});

console.log('filter过滤数组', result);
console.groupEnd();


console.groupCollapsed('%c Array.prototype.indexof', "color: #3c3c3c;font-size: 16px");
//注意 这里的indexOf是强等于,第二个参数表示从那个位置开始查找,返回位置从0开始，找不到返回-1
console.log("indexOf方法", test.indexOf(1), test.indexOf(1, 1), test.indexOf("1"));
console.groupEnd();



console.groupCollapsed('%c Array.prototype.lastIndexOf', "color: #3c3c3c;font-size: 16px");
//从末尾开始查找， 第二个参数默认值是 数组长度-1，返回位置从0开始，找不到返回-1
console.log("lastIndexOf方法", test.lastIndexOf(2), test.lastIndexOf(2, 4), test.lastIndexOf("2"));
console.groupEnd();


console.groupCollapsed('%c Array.prototype.forEach', "color: #3c3c3c;font-size: 16px");
//数组循环
// 注意,未定义的那个也不会被循环到
test.forEach(function() {
	console.log("数组循环", ...arguments);
});
console.groupEnd();

console.groupCollapsed('%c Array.prototype.map', "color: #3c3c3c;font-size: 16px");
//map方法
result = test.map(function(current) {
	return !!current ? current * 3 : current;
});
console.log('map', ...result);
console.groupEnd();


console.groupCollapsed('%c Array.prototype.reduce', "color: #3c3c3c;font-size: 16px");
//数组的值相乘 
result = test.reduce(function(all, current, index) {
	return !!current ? all * current : all;
}, 1);
console.log('reduce', result);
console.groupEnd();


console.groupCollapsed('%c Array.prototype.reduceRight', "color: #3c3c3c;font-size: 16px");
//同样相乘 只不过是从 末尾开始
result = test.reduceRight(function(all, current, index) {
	return !!current ? all * current : all;
}, 1);
console.log('reduceRight', result);
console.groupEnd();


console.groupEnd();