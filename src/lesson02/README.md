#字符串扩展

1. [String.prototype.includes](./index.es6)
``` javascript
//字符串包括str，返回 boolean
String.prototype.includes(str);
```

2. [String.prototype.startsWith](./index.es6)
``` javascript
//字符串以str开头，返回 boolean
String.prototype.startsWith(str);
```

3. [String.prototype.endsWith](./index.es6)
``` javascript
//字符串以str结尾，返回 boolean
String.prototype.endsWith(str);
```

4. [String.prototype.repeat](./index.es6)
``` javascript
//将字符串重复num次，并返回新的字符串
String.prototype.repeat(num)
```

5. [String.prototype.padStart](./index.es6)
``` javascript
//以指定的 fillets填充 指定长度len到字符中，填充到前面
String.prototype.padStart(len, fillStr)
```

6. [String.prototype.padEnd](./index.es6)
``` javascript
//以指定的 fillets填充 指定长度len到字符中, 填充到后面
String.prototype.padEnd(len, fillStr)
```
> ```padStart```和```padEnd```方法支撑的浏览器非常的少，仅仅只是个提案


##[字符串模板](./str-tpl.es6)

> 非常有用的东西，在以前如果不采用第三方模板，那么我们输出一段html，带动态内容，只能通过字符串相加实现，写起来不爽， 字符串模板就事为了解决这个问题。

###基本用法
``` javascript
 ` 
  ${name}, how are you ${time}
 `
```
> -  用反引号实现多行字符串的编写
> -  用```${}```表示动态的变量  
> - 动态变量不是必须得

###写成方法调用
``` javascript
	//定义一个模板用得方法
	var test = function() {
	  console.log('调用test', this);
	  return "test";
	};
	//模板方法
	var getTpl  = function({name = "cjx", time = "111"}) {
	  // name 和 time是通过对象解构获取的默认值
	  //test则是调用方法，注意，当前的this是null
	  var tpl = `
	    Hello ${name}, how are you ${time}?
	    cjx  what this;
	    ${test.call(this)};
	  `;
	  console.log(tpl);
	  return tpl;
	};
	//这里调用模板方法，null为当前的this
	getTpl.call(null, {});
```
### 标签tag
> 即在使用模板的时候调用一个函数

``` javascript
var name = "cjx";
var time = '222';
//literars 是个数组表示所有的 静态字符串， values表示需要填充的值,都是按顺序来
var my = function(literals, ...values) {
  console.log(arguments); 
  var output = "";
  for (var index = 0; index < values.length; index++) {
    output += literals[index] + values[index];
  }
  output += literals[index];
  return output;
};
var tpl = my`start ${name} hhhhh ${time} end`;
```

