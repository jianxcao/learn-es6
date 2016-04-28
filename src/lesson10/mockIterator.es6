console.groupCollapsed('es6 mock Iterator');
/**
 * 模拟一个 Iterator接口
 * 
 * @param  {[Array]} array 要迭代的数组
 * @return {[Iterator]}       迭代器
 */
function makeIterator(array){
  var nextIndex = 0;
  return {
    next: function(){
      return nextIndex < array.length ?
        {value: array[nextIndex++], done: false} :
        {value: undefined, done: true};
    }
  };
};
var it = makeIterator(['a', 'b']);
console.log('输出{ value: "a", done: false }', it.next()); 
console.log('输出{ value: "b", done: false }', it.next()) ;
console.log('输出{ value: undefined, done: true }', it.next()) ;

console.groupEnd();