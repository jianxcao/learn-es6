# 函数扩展

## [length属性 ](./fun-default.es6)
``` javascript
var test = function(a, b) {}
//获取函数的形参长度
console.log('length', test.length);
```

## [函数默认值](./fun-default.es6)
``` javascript
function log(x, y = 'World') {
  console.log(x, y);
}

//下面2个写法是有区别的，注意右侧是 默认值，一个设置的是  空对象，一个设置的是有 x,y属性的对象
//左侧的是解构，一个在解构的时候设置了 默认值，一个在解构的时候没有设置默认值
// 写法一
function m1({x = 0, y = 0} = {}) {
  return [x, y];
}

// 写法二
function m2({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}
```
### [...运算符](./fun-reset.es6)

``` javascript
console.log(...[1, 2])
//相当于
console.log(1, 2);
 
var a = [2, 3];
var test = {
  f: function(...val) { console.log(val);}
};
test.f(1, ...a);
//相当于
test.f.apply(test, [1].concat(a));
```

## [函数绑定](./fun-bind.es6)

``` javascript 
var af = [1, 3];
var foo = {
	test: function() {}
};
var bar = function() {console.log(this)};

var a = foo::bar;
// 等同于
var b = bar.bind(foo);

var c = foo::bar(...af);
// 等同于
var d = bar.apply(foo, af);

var method = foo::foo.test;
// 等同于
var method = ::foo.test;

```

> 函数绑定运算符是并排的两个双冒号（::），双冒号左边是一个对象，右边是一个函数。该运算符会自动将左边的对象，作为上下文环境（即this对象），绑定到右边的函数上面

## [箭头函数](./fun-arrow.es6)

``` javascript
//如果返回多条语句需要 {},如果只有一个参数，则直接写参数名称
var f = v => v;
//等同于
var f = function(v) {return v};
var f = () => 5;
// 等同于
var f = function (){ return 5 };
var sum = (num1, num2) => num1 + num2;
// 等同于
var sum = function(num1, num2) {
  return num1 + num2;
};
```

> - 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。可以嵌套使用，但不建议嵌套太多层，否则真心看不懂, 可以使用管道
> - 不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
> - 不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。
> - 不可以使用yield命令，因此箭头函数不能用作Generator函数

