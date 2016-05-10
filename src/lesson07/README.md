#模块

## [Module(import)](./index.es6)

``` javascript
	//导入profile下面的 {firstName, lastName, year}
    import {firstName, lastName, year} from './profile';
    //导入profile下面的lastName并重命名为 surname
    import { lastName as surname } from './profile';
    // 导入defalut方法
    import profile from './profile';
    //将模块整体导入
    import *  as test from './someModule';
     // 同时导入导出--不推荐使用
    export { es6 as default } from './someModule';
    // 等同于
    import { es6 } from './someModule';
    export default es6;

```

## [Module(export)](./mod.es6)
``` javascript
	export var a = 1;
	//导出一个方法
	export var test = function() {
	    console.log('1111');
	};
	var c = { cjx: 11};
	var fn = {aa: 222};
	//导出一个对象模块，并且起别名
	export {
	    c,
	    fn as f
	};
	//导出为默认模块
	export default {
	    a: 'bbb'
	};

```

## [Module(extend)](./extends.es6)

``` javascript
//导出mod的所有方法，忽略 default下的方法 
//相当于当前模块继承了 mod模块下的所有方法，忽略default的方法
export * from './mod';
export var fff = 1;
```

