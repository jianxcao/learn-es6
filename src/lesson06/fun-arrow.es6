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

// （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
// （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
// （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。
// （4）不可以使用yield命令，因此箭头函数不能用作Generator函数。

function foo() {
  setTimeout( () => {
    console.log("id:", this.id);
  },100);
}

var id = 21;

foo.call( { id: 42 } );
// id: 42
// 
// 注意这里 箭头函数和普通函数的  this指向是不同的，箭头函数指向当前，即 传入的对象， 而普通函数指向 window
// 可以观察balbel的编译结果


//箭头函数嵌套使用
let insert = (value) => ({
	into: (array) => ({
		after: (afterValue) => {
			array.splice(array.indexOf(afterValue) + 1, 0, value);
			return array;
		}
	})
});
insert(2).into([1, 3]).after(1); //[1, 2, 3]


//箭头函数管道使用
//
//

var pipeline = (...funcs) =>
	val => funcs.reduce((a, b) => b(a), val);


