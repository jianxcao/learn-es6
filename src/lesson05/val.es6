// 如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值
// 
function f(){
  console.log('aaa');
}

let [x = f()] = [1];

let [y = 1] = [x];

//这里的 f并不会一定执行，只有在 x的值是undefined的时候才能使用