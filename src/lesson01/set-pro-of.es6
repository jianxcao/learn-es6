console.groupCollapsed('setPrototypeOf');
var a = {a: 1};
var b = {b: 2};


//b 将继承 a对象上的属性
Object.setPrototypeOf(b, a);

console.log(b);

console.groupEnd();