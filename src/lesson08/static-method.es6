console.groupCollapsed('es6 class static method');
class Foo {
  static classMethod() {
    return 'hello';
  }
}
class Bar extends Foo {
  static classMethod() {
	//静态方法调用
    return super.classMethod() + ', too';
  }
}
console.log('父类调动静态方法', Foo.classMethod()); // 'hello'
var foo = new Foo();
// TypeError: undefined is not a function
// foo.classMethod();
//子类调用 静态方法
console.log('子类调用静态方法', Bar.classMethod());
Bar.classMethod();

console.groupEnd();