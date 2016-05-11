console.groupCollapsed('函数reset');

//函数可以用reset参数，就可以避免用arguments了
// 注意多个参数  Reset参数必须放在最后
function add(...values) {
  let sum = 0;

  for (var val of values) {
    sum += val;
  }

  return sum;
}

add(2, 5, 3) // 10


//下面2中写法 是 spread 扩展运算符


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



//数组合并
var more = [3, 4];
// ES5
var c = [1, 2].concat(more);
// ES6
var nc = [1, 2, ...more];

([1, 2, ...more]);


//数组的拆分
//
var [a, ...b] = [1, 2, 3];

console.groupEnd();
//字符串拆分
var f = [...'hello'];


// 任何Iterator接口的对象，都可以用扩展运算符转为真正的数组。 (arguments也是这个道理)
var nodeList = document.querySelectorAll('div');
var array = [...nodeList];




