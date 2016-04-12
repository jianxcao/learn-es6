//定义 带有 getter setter的对象
//感觉还是definePropety()好用
//
console.groupCollapsed('getter setter');
var cart = {
  _wheels: 4,
  get wheels () {
    return this._wheels;
  },

  set wheels (value) {
    if (value < this._wheels) {
      throw new Error('数值太小了！');
    }
    this._wheels = value;
  }
};
console.groupEnd();