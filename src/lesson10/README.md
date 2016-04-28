#Iterator(迭代器)和for...of循环

## 迭代器说明

> 迭代器（Iterator）就是这样一种机制。它是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署Iterator接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）
> Iterator接口的目的，就是为所有数据结构，提供了一种统一的访问机制，即for...of循环。当使用for...of循环遍历某种数据结构时，该循环会自动去寻找Iterator接口。

## 迭代器的调用过程
> - 创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。

> - 第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。

> - 第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。

> - 不断调用指针对象的next方法，直到它指向数据结构的结束位置。

>     每一次调用next方法，都会返回数据结构的当前成员的信息。具体来说，就是返回一个包含value和done两个属性的对象。其中，value属性是当前成员的值，done属性是一个布尔值，表示遍历是否结束。
## 模拟Iterator接口
``` javascript
/**
 * 模拟一个 Iterator接口
 * 
 * @param  {[Array]} array 要迭代的数组
 * @return {[Iterator]}       迭代器
 */
function makeIterator(array){
  var nextIndex = 0;
  return {
    next: function(){
      return nextIndex < array.length ?
        {value: array[nextIndex++], done: false} :
        {value: undefined, done: true};
    }
  };
};
var it = makeIterator(['a', 'b']);
console.log('{ value: "a", done: false }', it.next()); 
console.log('{ value: "b", done: false }', it.next());
console.log('{ value: undefined, done: true }', it.next());
```

##原生Iterator接口
> es6有些数据结构原生具备Iterator接口（比如数组），即不用任何处理，就可以被for...of循环遍历，有些就不行（比如对象）。原因在于，一些数据结构原生部署了Symbol.iterator属性，另外一些数据结构没有。凡是部署了Symbol.iterator属性的数据结构，就称为部署了遍历器接口。调用这个接口，就会返回一个遍历器对象。


##数组原生
``` javascript
let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();
iter.next(); // { value: 'a', done: false }
iter.next(); // { value: 'b', done: false }
iter.next(); // { value: 'c', done: false }
iter.next(); // { value: undefined, done: true };
```
### 数组原生说明
- Symbol.iterator返回一个 Symbol对象,多次调用返回相同
- ```Symboliterator```作为键，去获取迭代器，迭代器即可用迭代

##对象
> 对象（Object）没有Iterator接口， 之所以没有默认部署Iterator接口，是因为对象的哪个属性先遍历，哪个属性后遍历是不确定的，需要开发者手动指定。本质上，遍历器是一种线性处理，对于任何非线性的数据结构，部署遍历器接口，就等于部署一种线性转换。
> 当然可用自己给对象定义一个 ```Symbol.iterator```接可以实现Iterator接口，并且可以用```for..of```循环
> 但是对象其实没必要实现这个，用for...in循环已经足够


##调用Iterator接口的场合
``` javascript
  var [a, b] = [1, 2]
  console.log(...[1,2]);
  let generator = function* () {
	  yield 1;
	  yield* [2,3,4];
	  yield 5;
  };
var iterator = generator();
iterator.next() // { value: 1, done: false }
iterator.next() // { value: 2, done: false }
iterator.next() // { value: 3, done: false }
iterator.next() // { value: 4, done: false }
iterator.next() // { value: 5, done: false }
iterator.next() // { value: undefined, done: true }
```
-  解构赋值 var [a, b] = [1, 2]
-  扩展运算符 console.log(...[1,2]);
- 生成器中的 ``` yield* [1,2,3]```会返回 数组的 iterator,所以会被遍历

