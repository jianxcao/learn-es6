console.groupCollapsed('es6 class  new.target');

class Rectangle {
  constructor(length, width) {
    console.log(new.target === Rectangle, new.target);
  }
}

class Square extends Rectangle {
  constructor(length) {
    super(length, length);
  }
}
var obj = new Rectangle(2);
console.log('父类实例中的new.target', obj);
// 输出 false
var obj = new Square(3); 
console.log('子类实例中的new.target', obj);
console.groupEnd();

console.groupCollapsed('es6 class  new.target 只能被继承的类');
//这种写法规定类只能继承
class Interface {
   constructor() {
    if (new.target === undefined) {
      throw new Error('不能直接调用构造函数');
    }
    if (new.target === Interface) {
      throw new Error('该类只能被继承，不能被创建');
    }
  }
}
try{
  var i = new Interface();
} catch(e) {
  console.log(e);
}
console.groupEnd();