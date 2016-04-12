console.groupCollapsed('es6 class static prop');
class Foo {
  static prop = 1;
  //这种写法错误，语法不过
  //static prop : 1
};
console.log('通过新语法定义的 静态prop属性', Foo.prop);
console.groupEnd();



console.groupCollapsed('es6 class prop');
class Bar {
  myProp = 42;
  //这种写法错误
  //myProp : 3
  constructor() {
    console.log(this.myProp); // 42
  }
};
console.log('通过新语法定义的 myProp属性', new Bar().myProp);
console.groupEnd();