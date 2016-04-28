#Symbol(标记,符号)

##ES6引入了一种新的原始数据类型Symbol，表示独一无二的值。它是JavaScript语言的第七种数据类型，前六种是：Undefined、Null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。

### 有什么用
>在es5中变量名只能是字符串，极容易冲突 symobl是产生一个唯一的值，生成一个变量名

## [基本使用方法](symbol-base.es6)
``` javascript
  var s1 = Symbol('foo');
  var s2 = Symbol('bar');
  s1 // Symbol(foo)
  s2 // Symbol(bar)
  s1.toString() // "Symbol(foo)"
  s2.toString() // "Symbol(bar)"
```
### 使用说明
- symbol 可以跟字符串作为参数，该参数主要是为了识别每个symbol(注意在控制台输出 会显示不同)
-  symbol产生的 symbol对象都是唯一的
-  symbol 不能参与运算,可以转换成boolean类型，其他类型均不可以


##[symbol 作为属性名称](symbol-prop.es6) 

``` javascript
var mySymbol = Symbol();
// 第一种写法
var a = {};
a[mySymbol] = 'Hello!';

// 第二种写法
var a = {
  [mySymbol]: 'Hello!'
};

// 第三种写法
var a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });
// 以上写法都得到同样结果
a[mySymbol] // "Hello!"
```

###使用注意事项
- Symbol作为属性名有上面三种使用方式
- Symbol作为属性名定义的变量 无法for...in循环遍历，也无法 for...of遍历出来
- Symbol作为属性名定义的变量 ，无法通过```Object.keys(),Object.getOwnPropertyNames```获取属性名称
- Symbol可以通过```Object.getOwnPropertySymbols()```去获取
- 如果你丢失了Symbol的原始引用，那么你只能通过```Object.getOwnPropertySymbols```获取到全部的Symbol在去找你需要的
- 由于 symbol是个对象，对象作为key的时候，不能用 ```.```操作符
- Symbol由于是唯一的，可以作为常量，生成唯一的键值
- ```Reflect.ownKeys()```获取到所有的键值包括 Symbol (Reflect指反射)

##  [Symbol.for()，Symbol.keyFor()](symbol-for-keyfor.es6)
``` javascript
var s1 = Symbol.for('foo');
var s2 = Symbol.for('foo');
s1 === s2 // true
```

###Symbol.for说明
- ```Symbol.for```它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的Symbol值。如果有，就返回这个Symbol值，否则就新建并返回一个以该字符串为名称的Symbol值。
- 如果有2个同名字符串的Symol，则会返回其中一个
- 必须都是```Symbol.for```产生的才会有效 比如 ```Symbol.for('t')和Symbol('t')```产生的是不相同的 

##Symbol.keyFor
``` javascript
var s1 = Symbol.for("foo");
Symbol.keyFor(s1) // "foo"

var s2 = Symbol("foo");
Symbol.keyFor(s2) // undefined
```

###Symbol.keyFor说明
- ```keyFor```方法可以用于对```for```方法产生的Symbol发回他的string说明

##内置Symbol值（有11个内置的Symbol）
> 待补充

