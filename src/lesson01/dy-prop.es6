console.groupCollapsed('动态属性名称');
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

//所有在object内部定义的属性都可以用 [动态变量]表示
console.groupEnd();