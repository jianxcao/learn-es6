var af = [1, 3];
var foo = {
	test: function() {}
};
var bar = function() {console.log(this)};

var a = foo::bar;

// 等同于
var b = bar.bind(foo);


var c = foo::bar(...af);
// 等同于
var d = bar.apply(foo, af);


var method = foo::foo.test;
// 等同于
var method = ::foo.test;
