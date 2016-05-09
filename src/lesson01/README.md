#对象扩展

## es5的方法
1.  [Object.create](./create.es6)

``` javascript
//以某个对象为原型创建一个新的对象
Object.create(prototype[,descriptors]);
//以 a 对象为原型创建b对象
var a = {a: "1"};
var b = Object.create(a, {
	b: {
		value: "2"
	}
});
```
2.  [Object.defineProperty, Object.defineProperties](./define-pro.es6)
``` javascript
//给对象新定义一个属性
Object.defineProperty(O,Prop, descriptor);
Object.defineProperties(O, descriptors);

//为o对象定义 cjx属性
//writable表示 该属性是否可以修改
// enumerable表示该属性是否可以迭代，不可以迭代的属性不能通过 for...in循环
// configurable表示 该对象的 定义对象是否可以被修改
//value 表示改对象的值，可以没有value，但是得用 get和set方法代替
//默认writable,enumerable, configurable就为false
Object.defineProperty(o, "cjx", {
	writable: false,
	enumerable: false,
	configurable: false,
	value: 1,
});


//一次定义多个对象
//后面的描述对象 键是属性名称，值是描述对象
Object.defineProperties(o, {
	prop1: {
		value:1
	},
	prop2: {
		value: 2
	}
});
```

3.  [Object.getPrototypeOf](./get-pro-of.es6)
``` javascript
//获取父类原型中的方法
Object.getPrototypeOf(object);
```

4.  [Object.setPrototypeOf](./set-pro-of.es6) 
``` javascript
//es6才有，写到这里方便对比getPrototypeOf
var a = {a: 1};
var b = {b: 2};
//b 将继承 a对象上的属性
Object.setPrototypeOf(b, a);
```

5.  [getOwnPropertyDescriptor](./create.es6)
``` javascript
//获取对象中属性的ECMAScript对象
Object.getOwnPropertyDescriptor(object, propertyName);

var a = {a: "1"};
Object.getOwnPropertyDescriptor(a, 'a')
```

6.  [Object.keys](./create.es6)
``` javascript
//返回一个由对象可枚举的属性组成的数组.
Object.keys(object);
```

7. [Object.getOwnPropertyNames](./create.es6)
``` javascript
//返回一个由对象属性名组成的数组(包含不可枚举的)
Object.getOwnPropertyNames(object);
```

##es6方法

1. [Object.preventExtensions](./define-pro.es6)
``` javascript
//避免加新属性加入对象(Extensible设置为false);
Object.preventExtensions(object);
```

2. [Object.seal](./define-pro.es6)
``` javascript
//锁定对象,无法修改对象的属性,无法加入新的属性.并把对象的所有属性configurable设置为false;
Object.seal(object);
```

3. [Object.freeze](./define-pro.es6)
``` javascript
//冻结对象,无法修改对象的属性,无法加入新的属性.(与seal的区别为,freeze会把对象的所有属性的Writable设置为false)
Object.freeze(object);
```

4. [Object.isSealed](./define-pro.es6)
``` javascript
//是否锁定对象
Object.isSealed(object);
```

5. [Object.isFrozen](./define-pro.es6)
``` javascript
//是否冻结对象
Object.isFrozen(object);
```

6. [Object.isExtensible](./define-pro.es6)
``` javascript
//是否禁止对象扩展
Object.isExtensible(object);
```
7. [Object.assign](./)
``` javascript
//将属于对象上的属性（不包括继承而来的,不包括不能迭代的属性 引用到当前对象）
Object.assign(target, ...sources);

var obj = { a: 1 };
var copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
```
> 注意仅仅 能通过for...in循环，或者for...of循环的属性，或者symbol属性能够被复制

## [动态属性](./dy-prop.es6)
``` javascript
var lastWord = 'last word';
var a = {
  'first word': 'hello',
  [lastWord]: 'world'
};
console.log(a['first word']) // "hello"
console.log(a[lastWord]) // "world"
console.log(a['last word']) // "world"
let obj = {
  ['h'+'ello']() {
    return 'hi';
  }
};
obj.hello() // hi
```

