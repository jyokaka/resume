//test1
function test() {
    console.log(a);
    console.log(foo());

    var a = 1;
    function foo() {
        return 2;
    }
}

test();
//变成
function test() {
    function foo() {
        return 2;
    }
    var a;
    console.log(a);
    console.log(foo());
    a = 1;
}

test();



//test2
function test() {
    console.log(foo);
    console.log(bar);

    var foo = 'Hello';
    console.log(foo);
    var bar = function () {
        return 'world';
    }

    function foo() {
        return 'hello';
    }
}

test();


function test(){
    function foo(){
        return "hello";
    }
    var foo;
    var bar;
    console.log(foo);
    console.log(bar);
    foo="Hello";
    console.log(foo);
    bar=function(){
        return "word";
    }
}
test();  //只有var和function有优先级，创建阶段var声明的变量遇到听命属性时，会跳过而不覆盖。
//执行阶段会覆盖 ，变量提升只是提升了申明。另外，全局变量始终处于执行阶段。
//当变量从AO变成VO时，变量始终是同一个变量，只是存在于不同的执行周期而已。

//每次当控制器（js引擎）转到可执行代码的时候，就会进入一个执行上下文。
//也就是当前代码的执行环境，而在执行上下文的生命周期中，有两个阶段，一个创建阶段，一个执行阶段。
//创建阶段的第一步是创建变量对象，而创建变量对象的三步：（变量函数的形参）、（var, 变量声明)、（函数声明）。
// 而执行阶段才会变量赋值，就是先声明，后赋值。


for (var i=1;i<6;i++){
    function timer(i){
        setTimeout(function(){
            console.log(i)
        },i*1000);
    }
    timer(i);
}

for(var i=1;i<60;i++){
    setTimeout((function(i){
        return function(){
            console.log(i);
        }
    })(i),i*1000)
}

(function timer1(){
    if(" "){
        console.log('aaaaaaaa');
    }
})();

(function test(){
    for(var i = 1;i<10;i++){
        console.log(i)
    }
})();
