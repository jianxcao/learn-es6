
console.groupCollapsed('es6-array');

console.log('%c es6 array---------', "color: gray;font-size: 16px");




console.groupCollapsed('%c Array.from', "color: #3c3c3c;font-size: 16px");
// Array.from 用于将 类似数组的转换成数组，忽略非数字的键值, 不连续则会被截断
// 写原声的时候有用可以把 nodeList转换哼array
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '4': 'c',
    'f': "a",
    length: 4
};

// ES5的写法
var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']
console.log(arr1.length, ...arr1);

// ES6的写法事实上
/**
 * @param {object} [array] 一个类似数组的对象有 length属性就可以,
 * 如果object的键值不能转换成数组，或者超过数组的长度都将抛弃
 * @param {fun} [callback] callBack(current, index) 每次迭代的会掉函数 非必须参数
 * @return {array} 返回定义后的数组 长度为传递进来的 元素的 length
 */
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c'];

console.log(arr2.length, ...arr2);

//转换时候带 fun可以对数组每个元素进行操作
let arr3 = Array.from(arrayLike, function(current, index) {
	if (index === 0) {
		console.log(this);
	}
	return current + "netease";
}, {});
console.log(...arr3);
console.groupEnd();





console.groupCollapsed('%c Array.of', "color: #3c3c3c;font-size: 16px");

/**
 * @param ...val 任意类型的多个参数
 * 将传入的多个参数按照顺序定义成一个新的数组，代替 Array(1, 2, 3)
 * 与Array的区别在与 Array(1)如果给一个参数，这个参数代表的意思是定义个 长度为第一个形参长度的数组
 * @return {array} [返回定义后的数组]
 */
console.log(Array.of(1, 2, 3));

console.groupEnd();




/**
 * 将数组的指定一段拷贝到另一段
 * target（必需）：从该位置开始替换数据。
 * start（可选）：从该位置开始读取数据，默认为0。如果为负值，表示倒数。
 * end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。
 * @type {[type]}
 */
console.groupCollapsed('%c Array.prototype.copyWithin', "color: #3c3c3c;font-size: 16px");;
console.log(...[1, 2, 3, 4, 5].copyWithin(0, 3));
console.groupEnd();


/*
 *find findIndex方法参数相同，find返回第一个查找到的元素，findIndex返回第一个查找到元素的索引
 * @param {fun} [callback(context, index, arr)] 每次迭代的回调函数
 * @return target 返回要查找的元素或者元素的 index
 */
console.groupCollapsed('%c Array.prototype.find', "color: #3c3c3c;font-size: 16px");;
var result = [1, 5, 10, 15].find(function(value, index, arr) {
  return value > 9;
}); // 10
console.log('find', result);
console.groupEnd();

//查找第一个符合的元素并返回该元素的索引 仅仅一个参数  callback
console.groupCollapsed('%c Array.prototype.findIndex', "color: #3c3c3c;font-size: 16px");
var result = [1, 5, 10, 15].findIndex(function(value, index, arr) {
  return value > 9;
}); // 10
console.log('findIndex', result);
console.groupEnd();




/**
 * 数组填充方法 fill 用于填充空的数组最合适 
 * param1 填充元素
 * param2 开始填充位置
 * param3 结束填充的位置(遵循substring 前包后不包)
 */
console.groupCollapsed('%c Array.prototype.fill', "color: #3c3c3c;font-size: 16px");
console.log('fill', ...['a', 'b', 'c'].fill(7, 1, 2));
console.groupEnd();




//会返回一个迭代器，迭代器即可迭代元素
console.groupCollapsed('%c keys entries values', "color: #3c3c3c;font-size: 16px");
//['a', 'b'].keys()
for (let index of ['a', 'b'].keys()) {
  console.log(index);
}
// for (let elem of ['a', 'b'].values()) {
//   console.log(elem);
// }

for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem);
}
console.groupEnd();



//该方法属于es7 该方法认为 NAN 等于 NAN
console.groupCollapsed('%c Array.prototype.includes', "color: #3c3c3c;font-size: 16px");
/**
 * 查找一个数组是否包含一个元素 (注意这个方法会认为NAN等于NAN,判断是 严格等于 如2 !== "2"
 * @param {object} [val] 要查找的元素
 * @param {number} [fromIndex]开始查找的位置 非必须
 * @return {boolean} 元素是否存在
 */
console.log([1, 2, 3].includes(2, 0));
console.groupEnd();



console.groupEnd();

