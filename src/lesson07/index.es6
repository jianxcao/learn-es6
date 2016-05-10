//导入非es6的AMD模块，会生成一个 default下和当前对象下都有属性的对象，可以看编译结果
import test from "./test";
//导入默认方法 defalut下的方法 
import mod from './mod';
// //导入模块下的方法
// import {a, test, c, f} from 'mod';
// 

import * as mods from './mod';


import * as ext from './extends';


console.log('extends', ext);

console.log('mod', mod);
// console.log(a, test, c, f);

console.log('mods', mods, mods.a);