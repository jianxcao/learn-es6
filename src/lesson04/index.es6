import consts from './consts';

// 关于 let 的使用
// console.log(status.cjx);
// console.log(cjx);
console.log(consts);
// 使用 var情况下的输出
var getFn = function() {
	var arrs = [];
	for (var i = 0; i < 3; i++) {
		arrs.push(function() {
			return i;
		});
	}
	return arrs;
};
var fns = getFn();
console.log("使用var情况下的输出", fns[0]() + fns[1]());


// 使用 let情况下的输出
 var getFn = function() {
	var arrs = [];
	for (let i = 0; i < 3; i++) {
		arrs.push(function() {
			return i;
		});
	}
	return arrs;
};
var fns = getFn();

console.log("使用let情况下的输出", fns[0]() + fns[1]());
