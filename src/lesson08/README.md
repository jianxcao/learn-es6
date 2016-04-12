#es6 class 主要demo 内容


==================

##基本类定义概要

``` javascript
	var myPoint = class Point {
	  constructor(x, y) {
	    this.x = x;
	    this.y = y;
	  }
	  toString() {
	    return '(' + this.x + ', ' + this.y + ')';
	  }
	};
```
###基本类定义注意事项
-  类定义不存在变量提升，即 new后才可以使用
-  类定义可以采用别名(表达式)，即类名变成新的，如上(myPoint)
-  类定义必须有 constructor，类似es5中的 构造方法，如果没有，会有一个缺省的空方法
-  类定义中的方法 如上的 toString（）都将放到原型中去，也可以自己修改原型为类添加方法
-  类的 constructor应该指向自己 ,即(类.prototype.constructor === 类 // true)
-  类中所有原型上的方法是不可以枚举的（要是你自己修改原型定义的方法就不已定义了）

##类的继承
``` javascript
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
```

###继承注意事项
-  继承使用关键字 extend，不支持多继承
-  类继承 在构造器中要调用 super，调用后才可以使用this
-  类继承可以通过 ```super['方法名'] --- super.方法名```，调用父类函数
-  子类实例的__proto__属性的__proto__属性，指向父类实例的__proto__属性也就是子类的原型的原型指向父类
-  可以继承原声的 类型，比如 Array

## getter,setter
``` javascript
class CustomHTMLElement {
  constructor(element) {
    this.element = element;
  }
  get html() {
    return this.element.innerHTML;
  }
  set html(value) {
    this.element.innerHTML = value;
  }
}
var descriptor = Object.getOwnPropertyDescriptor(
  CustomHTMLElement.prototype, "html");
"get" in descriptor  // true
"set" in descriptor  // true
```
###getter setter说明
- 可以向对象那样使用geter，setter定义一个对象的值
- 定义的getter和setter其实是在 该属性的 描述对象上，可以通过 Object.getOwnPropertyDescriptor获取到

## 可以使用 生成器(Generator)
``` javascript
class Find {
	*test() {
		for(let i = 0; i < 10; i++) {
			yield i;
		}
	};
}
var f = new Find();
console.log('定义test方法是一个 generator，返回一个generator', f.test());
```
### Generator 说明
-  和普通生成器使用相同

##类的静态方法和属性
``` javascript
class Foo {
  static classMethod() {
    return 'hello';
  }
}
class Bar extends Foo {
  static classMethod() {
	//静态方法调用
    return super.classMethod() + ', too';
  }
}
Foo.classMethod() // 'hello'
var foo = new Foo();
// TypeError: undefined is not a function
foo.classMethod();
//子类调用 静态方法
Bar.classMethod();
```
### 类的静态方法说明
- 静态方法使用关键字 static
- 静态方法可以继承，也可以通过 super调用父类的静态方法
- 注意看babble的编译后的代码，类的 静态方法都是直接写在 构造函数下，相当于 Foo.方法，这么写。
- super调用静态方法其实就是取到父类的构造器，直接调用父类构造器的静态方法，以子类的上下文 (Object.getPrototypeOf(父类).静态方法)

## 类的静态属性
``` javascript
// 老写法
class Foo {
}
Foo.prop = 1;

// 新写法
class Foo {
  static prop = 1;
  //这种写法错误，语法不过
  static prop : 1
}
```
- 静态属性关键字  static
- 与旧的写法直接往类上挂属性是相同的

## 类的 实例属性
``` javascript
class MyClass {
  myProp = 42;
  //这种写法错误
  myProp : 3
  constructor() {
    console.log(this.myProp); // 42
  }
}
```
- 实例属性和直接给 new 出来的对象上 挂属性是一样的
- 与在方法中调用 this.方法名称定义的属性也是一样的

