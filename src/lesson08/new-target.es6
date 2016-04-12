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