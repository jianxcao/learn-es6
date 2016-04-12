console.groupCollapsed('es6-string');
console.groupCollapsed('String.prototype.includes');
//字符串中包含某个字符
console.log("helloe world".includes('d'));
console.groupEnd();

console.groupCollapsed('stString.prototype.artsWith');
//字符串以 什么开头
console.log("hello".startsWith('h'));
console.groupEnd();

console.groupCollapsed('String.prototype.endsWith');
console.log("hello".endsWith('o'));
console.groupEnd();



//将字符串重复num次，并返回新的字符串
console.groupCollapsed('String.prototype.repeat');
console.log("hello".repeat(3));
console.groupEnd();

//以指定的 fillets填充 指定长度len到字符中，填充到前面
console.groupCollapsed('String.prototype.padStart');
// console.log("hello".padStart(10, "cjx"));
console.groupEnd();

//以指定的 fillets填充 指定长度len到字符中, 填充到后面
console.groupCollapsed('String.prototype.padEnd');
// console.log("hello".padEnd(10, "cjx"));
console.groupEnd();
console.groupEnd();

import * as es6Tpl from "./str-tpl";