// 解构成功
var [a, b, c] = [1, 2, 3];
console.log(a, b, c);

// foo结构失败, foo值为 undefined
// var [foo] = [];
// var [bar, foo] = [1];


// 复杂点的解构
// 
var [foo, [[bar], baz]] = [1, [[2], 3]];
// foo // 1
// bar // 2
// baz // 3


// 本质上，这种写法属于“模式匹配”，
// 要等号两边的模式相同，左边的变量就会被赋予对应的值。下面是一些使用嵌套数组进行解构的例子。
var [ , , third] = ["foo", "bar", "baz"];
// third // "baz"

var [x, , y] = [1, 2, 3];
// x // 1
// y // 3

var [head, ...tail] = [1, 2, 3, 4];
// head // 1
// tail // [2, 3, 4]

var [x, y, ...z] = ['a'];
// x // "a"
// y // undefined
// z // []