26. ES6함수의 추가기능 
26.1 함수의 구분
//[예제풀이 26 -01]
var foo = function(){
    return 1;
};
//일반적인 함수로서 호출
foo(); //1 
//생성자 함수로서 호출 
new foo(); //foo{}
//메서드로서 호출
var obj = { foo:foo };
obj.foo(); //1 
//[예제풀이 26 -02]
var foo = function(){};
//ES6이전의 모든 함수는 callable 이면서 constructor다. 
foo(); //undefined 
new foo(); //foo{}
//[예제풀이 26 -03]
//프로퍼티 f에 바인딩된 함수는 callable이며 constructor 이다. 
var obj = {
    x: 10,
    f: function (){return this.x; }
};
//프로퍼티 f에 바인딩된 함수를 메서드로서 호출 
console.log(obj.f()); //10
//프로퍼티 f에 바인딩된 함수를 일반함수로 호출
var bar = obj.f;
console.log(bar()); //undefined 

//프로퍼티 f에 바인딩된 함수를 생성자 함수로서 호출
console.log(new obj.f()); //f{}
//[예제풀이 26 -04]
//콜백함수를 사용하는 고차함수map.콜백함수도 constructor이며 프로토타입을 생성한다. 
[1,2,3].map(function(item){
    return item *2 ;
}); //[2,4,6]

26.2 메서드 
//[예제풀이 26 -05]
const obj = {
    x:1, //foo는 메서드다. 
    foo(){return this.x;}, 
    //bar에 바인딩된 함수는 메서드가 아닌 일반함수다. 
    bar: function(){return this.x; }
};
console.log(obj.foo()); //1
console.log(obj.bar()); //1

//[예제풀이 26 -06]
new obj.foo(); //TypeError: obj.foo is not a constructor 
new obj.bar(); //bar{}
//[예제풀이 26 -07]
//obj.foo는 constructor가 아닌 ES6메서드 이므로 prototype 프로퍼티가 없다. 
obj.foo.hasOwnProperty('prototype'); //false
//obj.bar는 constructor가 아닌 일반함수이므로 prototype프로퍼티가 있다. 
obj.bar.hasOwnProperty('prototype'); //true

//[예제풀이 26 -08]
String.prototype.toUpperCase.prototype; //undefined
String.fromCharCode.prototype //undefined

Number.prototype.toFixed.prototype; //undefined
Number.isFinite.prototype;//undefined

Array.prototype.map.prototype;//undefined
Array.from.prototype;//undefined
//[예제풀이 26 -09]
const base = {
    name: 'Lee',
    sayHi() {
        return `Hi! ${this.name}`;
    }
};
const derived = {
    __proto__ : base,
    //sayHi는 ES6메서드 이다. ES6메서드는 [[HomeObject]]를 갖는다. 
    //sayHi의 [[HomeObject]]는 sayHi 가 바인딩된 객체인 derived 를 가리키고
    //super는 sayHi의 [[HomeObject]]의 프로토타입인 base를 가리킨다.
    sayHi(){
        return `${super.sayHi()}.How are you doing?`; 
    }
};
console.log(derived.sayHi());//Hi! Lee. How are you doing?
//[예제풀이 26 -10]
const derived = {
    __proto__ : base,
    //sayHi는 ES6메서드가 아니다.
    //따라서 sayHi는 [[HomeObject]]를 갖지 않으므로 super키워드를 사용할 수 없다. 
    sayHi: function(){
        //SyntaxError: 'super' keyword unexpected here
        return `${super.sayHi()}. how are you doing?`;
    }
};

26.3 화살표 함수
26.3.1 화살표함수의 정의 
//[예제풀이 26 -11]
const multiply = (x,y) =>x * y;
multiply(2,3);// 6
//[예제풀이 26 -12]
const arrow = (x,y) => { ... }; 
//[예제풀이 26 -13]
const arrow = x => { ... }; 
//[예제풀이 26 -14]
const arrow = () => { ... }; 
//[예제풀이 26 -15]
//concise body 
const power = x => x ** 2;
power(2); //4
//위표현은 다음과 동일하다.
//block body 
const power = x => {return x **2; }; 
//[예제풀이 26 -16]
const arrow = () => const x = 1; //SyntaxError: Unexpected token 'const'
//위 표현은 다음과 같이 해석된다. 
const arrow = () => {return const x = 1; }; 
//[예제풀이 26 -17]
const arrow = () => {const x = 1; }; 
//[예제풀이 26 -18]
const create = (id, content) => ({id, content}); 
create(1, 'JavaScript'); //{id: 1, content: "JavaScript"}
//위 표현은 다음과 동일하다.
const create = (id, content) =>{return {id, content};};
//[예제풀이 26 -19]
//{id, content}를 함수 몸체 내의 쉼표 연산자문으로 해석한다.
const create= (id, content) => {id, content};
create(1, 'JavaScript'); //undefined
//[예제풀이 26 -20]
const sum = (a,b)=>{
    const result = a + b;
    return result;
}; 
//[예제풀이 26 -21]
const person = (name => ({
    sayHi() { return `Hi? My name is ${name}.`;}
}))('Lee');
console.log(person.sayHi()); //Hi? My Name is Lee.
//[예제풀이 26 -22]
//ES5
[1,2,3].map(function(v) {
    return v * 2; 
});
//ES6
[1,2,3].map(v=>v*2); //[2,4,6]
//[예제풀이 26 -23]
const foo = () =>{}; 
//화살표 함수는 생성자 함수로서 호출할수없다 .
new foo(); //TypeError : Foo is not a constructor 
//[예제풀이 26 -24]
const foo = () => {}; 
//화살표 함수는 prototype 프로퍼티가 없다. 
Foo.hasOwnProperty('prototype'); //false

//[예제풀이 26 -25]
function normal(a, a) {return a + a;}
console.log(normal(1,2)); //4
//[예제풀이 26 -26]
'use strict'
function normal(a, a) {return a + a;}
//SyntaxError: Duplicate parameter name not allowed in this context 
//[예제풀이 26 -27]
const arrow = (a,a) => a + a;
//SyntaxError: Duplicate parameter name not allowed in this context
//[예제풀이 26 -28]
class Prefixer {
   constructor (prefix) {
       this.prefix = prefix ;
   }
}
//[예제풀이 26 -29]
//[예제풀이 26 -30]
//[예제풀이 26 -31]
//[예제풀이 26 -32]
//[예제풀이 26 -33]
//[예제풀이 26 -34]
//[예제풀이 26 -35]
//[예제풀이 26 -36]
//[예제풀이 26 -37]
//[예제풀이 26 -38]
//[예제풀이 26 -39]
//[예제풀이 26 -40]
//[예제풀이 26 -41]
//[예제풀이 26 -42]
//[예제풀이 26 -43]
//[예제풀이 26 -44]
//[예제풀이 26 -45]
//[예제풀이 26 -46]
//[예제풀이 26 -47]
//[예제풀이 26 -48]
//[예제풀이 26 -49]
//[예제풀이 26 -50]
//[예제풀이 26 -51]
//[예제풀이 26 -52]
//[예제풀이 26 -53]
//[예제풀이 26 -54]
//[예제풀이 26 -55]
//[예제풀이 26 -56]
//[예제풀이 26 -57]
//[예제풀이 26 -58]
//[예제풀이 26 -59]
//[예제풀이 26 -60]
//[예제풀이 26 -61]
//[예제풀이 26 -62]