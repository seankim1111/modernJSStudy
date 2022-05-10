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
... 
add(arr) {
    //this를 일단 회피시킨다. 
    const that = this;
    return arr.map(function (item){
        //this 대신 that을 참조한다. 
        return that.prefix + ' ' + item;
    });
}
...
//[예제풀이 26 -30]
add (arr) {
    return arr.map(function (item){
        return this.prefix + ' ' + item;
    }, this); //this에 바인딩된 값이 콜백함수 내부의 this에 바인딩된다. 
    }
}
//[예제풀이 26 -31]
...add (arr) {
    return arr.map (function (item){
        return this.prefix + ' ' + item;
    }.bind(this)); //this에 바인딩 된 값이 콜백함수 내부의 this에 바인딩 된다.
}
...
//[예제풀이 26 -32]
class Prefixer {
    constructor(prefix) {
        this.prefix = prefix ;
    }
    add(arr){
        return arr.map(item => this.prefix + item ;)
    }
}
const prefix = new prefixer = new Prefixer('-webkit-');
console.log(prefixer.add (['transition','user-select']));
//['webkit-transition', '-webkit-user-select']
//[예제풀이 26 -33]
//화살표 함수는 상위 스코프의 this를 참조한다. 
() => this.x; 
//익명 함수에 상위 스코프의 this를 주입한다. 위 화살표 함수와 동일하게 동작한다. 
(function () {return this.x; }).bind(this);
//[예제풀이 26 -34]
//중첩함수 foo의 상위 스코프는 즉시 실행 함수이다.
//따라서 화살표 함수 foo의 this는 상위 스코프인 즉시 실행함수의 this를 가리킨다.
(function () {
    const foo = () =>console.log(this); 
    foo();
}).call({ a : 1 }); //{ a : 1 }
//bar 함수는 화살표 함수를 반환한다.
//bar함수가 반환한 화살표 함수의 상위 스코프는 화살표 함수 bar이다.
//하지만 화살표 함수는 함수자체의 this ㅏ인딩을 갖지 않으므로 bar 함수가 반환한 화살표 함수 내부에서 참조하는 this는 화살표함수가 아닌 즉시실행 함수의 this를 가리키낟. 
(function () { 
    const bar = () => () => console.log(this); 
    bar()(); 
}).call({ a : 1 }); //{ a : 1}
//[예제풀이 26 -35]
// 전역 함수 foo의 상위 스코프는 전역이므로 화살표 함수 foo의 this는 전역 객체를 가리킨다.
const foo = () => console.log(this);
foo(); // window
console.log(counter.increase()); // NaN
//[예제풀이 26 -36]
// increase 프로퍼티에 할당한 화살표 함수의 상위 스코프는 전역이다.
// 따라서 increase 프로퍼티에 할당한 화살표 함수의 this는 전역 객체를 가리킨다.
const counter = {
    num: 1,
    increase: () => ++this.num
  };
  console.log(counter.increase()); // NaN
//[예제풀이 26 -37]
window.x = 1;
const normal = function () { return this.x; };
const arrow = () => this.x;
console.log(normal.call({ x: 10 })); // 10
console.log(arrow.call({ x: 10 }));  // 1
//[예제풀이 26 -38]
const add = (a, b) => a + b;

console.log(add.call(null, 1, 2));    // 3
console.log(add.apply(null, [1, 2])); // 3
console.log(add.bind(null, 1, 2)());  // 3
//[예제풀이 26 -39]
// Bad
const person = {
  name: 'Lee',
  sayHi: () => console.log(`Hi ${this.name}`)
};
//sayHi 프로퍼티에 할당된 화살표 함수 내부의 this는 상위 스코프인 전역의 this가 가리키는
//전역 객체를 가리키므로 이 예제를 브라우저에서 실행하면 this.name은 빈 문자열을 갖는 window.name과 같다. 전역 객체 window에는 빌트인 프로퍼티 name이 존재한다.
person.sayHi(); // Hi
//[예제풀이 26 -40]
// Good
const person = {
    name: 'Lee',
    sayHi() {
      console.log(`Hi ${this.name}`);
    }
  };
  person.sayHi(); // Hi Lee
//[예제풀이 26 -41]
// Bad
function Person(name) {
    this.name = name;
  }
  Person.prototype.sayHi = () => console.log(`Hi ${this.name}`);
  const person = new Person('Lee');
  // 이 예제를 브라우저에서 실행하면 this.name은 빈 문자열을 갖는 window.name과 같다.
  person.sayHi(); // Hi
//[예제풀이 26 -42]
  // Good
  function Person(name) {
    this.name = name;
  }
  Person.prototype.sayHi = function () { console.log(`Hi ${this.name}`); };
  const person = new Person('Lee');
  person.sayHi(); // Hi Lee
//[예제풀이 26 -43]
function Person(name) {
    this.name = name;
  }
  
  Person.prototype = {
    // constructor 프로퍼티와 생성자 함수 간의 연결을 재설정
    constructor: Person,
    sayHi() { console.log(`Hi ${this.name}`); }
  };
  const person = new Person('Lee');
  person.sayHi(); // Hi Lee
//[예제풀이 26 -44]
  // Bad
  class Person {
    // 클래스 필드 정의 제안
    name = 'Lee';
    sayHi = () => console.log(`Hi ${this.name}`);
  }
  const person = new Person();
  person.sayHi(); // Hi Lee
//[예제풀이 26 -45]
class Person {
    constructor() {
      this.name = 'Lee';
      // 클래스가 생성한 인스턴스(this)의 sayHi 프로퍼티에 화살표 함수를 할당한다.
      // sayHi 프로퍼티는 인스턴스 프로퍼티이다.
      this.sayHi = () => console.log(`Hi ${this.name}`);
    }}
//[예제풀이 26 -46]
 // Good
 class Person {
    // 클래스 필드 정의
    name = 'Lee';
  
    sayHi() { console.log(`Hi ${this.name}`); }
  }
  const person = new Person();
  person.sayHi(); // Hi Lee
//[예제풀이 26 -47]
class Base {
    constructor(name) {
      this.name = name;
    }
    sayHi() {
      return `Hi! ${this.name}`;
    }
  }
  class Derived extends Base {
    //화살표 함수의 super는 상위 스코프인 constructor의 super를 가리킨다.
    sayHi = () => `${super.sayHi()} how are you doing?`;
  }
  const derived = new Derived('Lee');
  console.log(derived.sayHi()); // Hi! Lee how are you doing?
//[예제풀이 26 -48]
(function () {
    // 화살표 함수 foo의 arguments는 상위 스코프인 즉시 실행 함수의 arguments를 가리킨다.
    const foo = () => console.log(arguments); // [Arguments] { '0': 1, '1': 2 }
    foo(3, 4);
  }(1, 2));
  
  // 화살표 함수 foo의 arguments는 상위 스코프인 전역의 arguments를 가리킨다.
  // 하지만 전역에는 arguments 객체가 존재하지 않는다. arguments 객체는 함수 내부에서만 유효하다.
  const foo = () => console.log(arguments);
  foo(1, 2); // ReferenceError: arguments is not defined
//[예제풀이 26 -49]
function foo(...rest) {
    // 매개변수 rest는 인수들의 목록을 배열로 전달받는 Rest 파라미터다.
    console.log(rest); // [ 1, 2, 3, 4, 5 ]
  }
  foo(1, 2, 3, 4, 5);
//[예제풀이 26 -50]
 function foo(param, ...rest) {
    console.log(param); // 1
    console.log(rest);  // [ 2, 3, 4, 5 ]
  }
  
  foo(1, 2, 3, 4, 5);
  function bar(param1, param2, ...rest) {
    console.log(param1); // 1
    console.log(param2); // 2
    console.log(rest);   // [ 3, 4, 5 ]
  }
  bar(1, 2, 3, 4, 5);
//[예제풀이 26 -51]
  function foo(...rest, param1, param2) { }
  foo(1, 2, 3, 4, 5);
  // SyntaxError: Rest parameter must be last formal parameter
//[예제풀이 26 -52]
function foo(...rest1, ...rest2) { }
foo(1, 2, 3, 4, 5);
// SyntaxError: Rest parameter must be last formal parameter
//[예제풀이 26 -53]
function foo(...rest) {}
console.log(foo.length); // 0
function bar(x, ...rest) {}
console.log(bar.length); // 1
function baz(x, y, ...rest) {}
console.log(baz.length); // 2
//[예제풀이 26 -54]
// 매개변수의 개수를 사전에 알 수 없는 가변 인자 함수
function sum() {
    // 가변 인자 함수는 arguments 객체를 통해 인수를 전달받는다.
    console.log(arguments);
  }
  sum(1, 2); // {length: 2, '0': 1, '1': 2}
//[예제풀이 26 -55]
function sum() {
    // 유사 배열 객체인 arguments 객체를 배열로 변환한다.
    var array = Array.prototype.slice.call(arguments);
    return array.reduce(function (pre, cur) {
      return pre + cur;
    }, 0);
  }
  console.log(sum(1, 2, 3, 4, 5)); // 15
//[예제풀이 26 -56]
function sum(...args) {
    // Rest 파라미터 args에는 배열 [1, 2, 3, 4, 5]가 할당된다.
    return args.reduce((pre, cur) => pre + cur, 0);
  }
  console.log(sum(1, 2, 3, 4, 5)); // 15
//[예제풀이 26 -57]
function sum(x, y) {
    return x + y;
  }
  console.log(sum(1)); // NaN
//[예제풀이 26 -58]
function sum(x, y) {
    // 인수가 전달되지 않아 매개변수의 값이 undefined인 경우 기본값을 할당한다.
    x = x || 0;
    y = y || 0;
    return x + y;
  }
  console.log(sum(1, 2)); // 3
  console.log(sum(1));    // 1
//[예제풀이 26 -59]
function sum(x = 0, y = 0) {
    return x + y;
  }
  
  console.log(sum(1, 2)); // 3
  console.log(sum(1));    // 1
//[예제풀이 26 -60]
function logName(name = 'Lee') {
    console.log(name);
  }
  logName();          // Lee
  logName(undefined); // Lee
  logName(null);      // null
//[예제풀이 26 -61]
function foo(...rest = []) {
    console.log(rest);
  }
  // SyntaxError: Rest parameter may not have a default initializer
//[예제풀이 26 -62]
function sum(x, y = 0) {
    console.log(arguments);
  }
  console.log(sum.length); // 1
  sum(1);    // Arguments { '0': 1 }
  sum(1, 2); // Arguments { '0': 1, '1': 2 }