console.groupCollapsed('Object.assign');
var obj = { a: {b: 1} };

Object.defineProperty(obj, 'no', {value: 'no'});
var mySymbol = Symbol('cjx');
obj[mySymbol] = 3;

var copy = Object.assign({}, obj);

console.log('复制一个对象上的属性,复制的是引用,如果是对象的话', copy, copy.b === obj.b); // { a: 1 }
console.groupEnd();