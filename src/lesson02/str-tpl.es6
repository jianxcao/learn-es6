console.groupCollapsed('es6-tpl');
// 字符串中嵌入变量
// 模板中动态js放入 ${}
// ${}中可调用方法或者 插入任意变量
var test = function() {
  return "test";
};

var getTpl  = function({name = "cjx", time = "111"}) {
  var tpl = `
    Hello ${name}, how are you ${time}?
    cjx  what this;
    ${test()};
  `;
  console.log(tpl);
};
console.log(getTpl({}));

console.groupEnd();


console.groupCollapsed('es6-tag-tpl');
console.log('标签tag，即在使用模板的时候调用一个函数');
var name = "cjx";
var time = '222';
var my = function(literals, ...values) {
  console.log(arguments); 
  var output = "";
  for (var index = 0; index < values.length; index++) {
    output += literals[index] + values[index];
  }
  output += literals[index];
  return output;
};
var tpl = my`${name} hhhhh ${time}`;


console.log(tpl);
console.groupEnd();
