console.groupCollapsed('es6 class  generator');
class Find {
	*test() {
		for(let i = 0; i < 10; i++) {
			yield i;
		}
	};
}

var f = new Find();

console.log('定义test方法是一个 generator，返回一个generator', f.test());

console.groupEnd();