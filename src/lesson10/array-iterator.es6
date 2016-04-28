/**
 * Symbol.iterator返回一个 Symbol对象,多次调用返回相同
 * Symboliterator作为键，去获取迭代器，迭代器即可用迭代
 */

console.groupCollapsed('es6 array iterator');
let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();

console.log('Array iterator', iter.next()); // { value: 'a', done: false }
console.log('Array iterator', iter.next()); // { value: 'b', done: false }
console.log('Array iterator', iter.next()); // { value: 'c', done: false }
console.log('Array iterator', iter.next()); // { value: undefined, done: true };

console.groupEnd();

console.groupCollapsed('es6 array for of');
var arr1 = ['a', 'b', 'c'];

for(let key of arr1) {
	console.log('array for of', key);
}

console.groupEnd();