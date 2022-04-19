// 26장 ES6 함수의 추가 기능
// 26.1 함수의 구분

const { isArguments, times } = require("lodash");

// 26-01
var foo = function () {
  return 1;
};

foo(); // 1

new foo(); // foo {}

var obj = { foo: foo };
obj.foo(); // 1

// 26-02
var foo = function () {};

// ES6 이전의 모든 함수는 callable이면서 constructor다.
foo(); // undefined
new foo(); // foo{}

// 26-03
// 프로퍼티 f 에 바인딩된 함수는 callable이면서 constructor다.
var obj = {
  x: 10,
  f: function () {
    return this.x;
  },
};

// 프로퍼티 f 에 바인딩된 함수를 메서드로서 호출
console.log(obj.f()); // 10

// 프로퍼티 f 에 바인딩된 함수를 일반 함수로서 호출
var bar = obj.f;
console.log(bar()); // undefined

// 프로퍼티 f 에 바인딩된 함수를 생성자 함수로서 호출
console.log(new obj.f()); // f {}

// 26-04
// 콜백 함수를 사용하는 고차 함수 map. 콜백 함수도 constructor 이며 프로토타입을 생성한다.
[1, 2, 3].map(function (item) {
  return item * 2;
}); // [2, 4, 6]

// 26.2 메서드
// 26-05
const obj = {
  x: 1,
  // foo는 매서드다.
  foo() {
    return this.x;
  },
  // bar에 바인딩된 함수는 메서드가 아닌 일반 함수다.
  bar: function () {
    return this.x;
  },
};

console.log(obj.foo()); // 1
console.log(obj.bar()); // 1

// 26-06
new obj.foo(); // TypeError:
new obj.bar(); // bar {}

// 26-07
// obj.foo 는 constructor 가 아닌 ES6 메서드이므로 prototype 프로퍼티가 없다.
obj.foo.hasOwnProperty("prototype"); // false

// obj.bar 는 constructor 인 일반 함수이므로 prototype 프로퍼티가 있다.
obj.bar.hasOwnProperty("prototype"); // true

// 26-08
String.prototype.toUpperCase.prototype; // undefined
String.fromCharCode.prototype; // undefined

Number.prototype.toFixed.prototype; // undefined
Number.isFinite.prototype; // undefined

Array.prototype.map.prototype; // undefined
Array.from.prototype; // undefined

// 26-09
const base = {
  name: "Lee",
  sayHi() {
    return `Hi! ${this.name}`;
  },
};

const derived = {
  __proto__: base,
  // sayHi 는 ES6 메서드다. ES6 메서드는 [[HomeObject]]를 갖는다.
  // sayHi 의 [[HomeObject]]는 sayHi 가 바인딩된 객체인 derived를 가리키고
  // sayHi 는 sayHi의 [[HomeObject]]의 프로토타입인 base를 가리킨다
  sayHi() {
    return `${super.sayHi()}. how are you doing?`;
  },
};

console.log(derived.sayHi()); // Hi! Lee. how are you doing?

// 26-10
const derived2 = {
  __proto__: base,
  // sayHi 는 ES6 메서드가 아니다.
  // 따라서 sayHi는 [[HomeObject]]를 갖지 않으므로 super 키워드를 사용할 수 없다.
  sayHi: function () {
    // SyntaxError:
    return `${super.sayHi()}. how are you doing?`;
  },
};

// 26.3 화살표 함수
// ____26.3.1 화살표 함수 정의
// 26-11
const multiply = (x, y) => x * y;
multiply(2, 3); // 6

// 26-12
const arrow1 = (x, y) => {
  something;
};

// 26-13
const arrow2 = (x) => {
  something;
};

// 26-14
const arrow3 = () => {
  something;
};

// 26-15
// concise body
const power1 = (x) => x ** 2;
power(2); // 4

// 위 표현은 다음과 동일하다
// block body
const power2 = (x) => {
  return x ** 2;
};

// 26-16
// const arrow = () => const x = 1; // SyntaxError:

// 위 표현은 다음과 같이 해석된다.
// const arrow = () => { return const x = 1 };

// 26-17
const arrow = () => {
  const x = 1;
};

// 26-18
const create = (id, content) => ({ id, content });
create(1, "JavaScript"); // {id: 1, content: "JavaScript"}

// 위 표현은 다음과 같이 해석된다.
const create = (id, content) => {
  return { id, content };
};

// 26-19
// { id, content } 를 함수 몸체 내의 수미표 현산자문으로 해석한다.
const create = (id, content) => {
  id, content;
};
create(1, "JavaScript"); // undefined

// 26-20
const sum = (a, b) => {
  const result = a + b;
  return result;
};

// 26-21
const person = ((name) => ({
  sayHi() {
    return `Hi? My name is ${name}.`;
  },
}))("Lee");

console.log(person.sayHi()); // Hi? My name is Lee

// 26-22
// ES5
[1, 2, 3]
  .map(function (v) {
    return v * 2;
  })

  [
    // ES6
    (1, 2, 3)
  ].map((v) => v * 2); // [2, 4, 6]

// ____26.3.2 화살표 함수와 일반 함수의 차이
// 1. 화살표 함수는 인스턴스를 생성할 수 없는 non-constructor다.
// 26-23
const Foo = () => {};
// 화살표 함수는 생성자 함수로서 호출할 수 없다.
new Foo(); // TypeError:

// 26-24
const Foo = () => {};
// 화살표 함수는 prototype 프로퍼티가 없다.
Foo.hasOwnProperty("prototype"); // false

// 2. 중복된 매개변수 이름을 선언할 수 없다.
// 26-25
function normal(a, a) {
  return a + a;
}
console.log(normal(1, 2)); // 4

// 26-26
("use strict");

function normal(a, a) {
  return a + a;
} // SyntaxError:

// 26-27
const arrow = (a, a) => a + a; // SyntaxError:

// 3. 화살표 함수는 함수 자체의 this, arguments, super, new.target 바인딩을 갖지 않는다.

// ____26.3.3 this
// 26-28
class Prefixer {
  constructor(prefix) {
    this.prefix = prefix;
  }

  add(arr) {
    // add 메서드는 인수로 전달된 배열 arr을 순회하며 배열의 모든 요소에 prefix를 추가한다.
    // 1.
    return arr.map(function (item) {
      return this.prefix + item; // 2.
      // TypeError:
    });
  }
}

const prefixer = new Prefixer("-webkit-");
console.log(prefixer.add(["transition", "user-select"]));

// 26-29
// ...
// add(arr) {
// this를 일단 회피시킨다.
//   const that = this;
//   return arr.map(function(item) {
//     // this 대신 that을 참조한다.
//     return that.prefix + ' ' + item;
//   });
// }
// ...

// 26-30
// ...
// add(arr) {
//   return arr.map(function(item) {
//     return that.prefix + ' ' + item;
//   }, this); // this에 바인딩된 값이 콜백 함수 내부의 this에 바인딩된다.
// }
// ...

// 26-31
// ...
// add(arr) {
//   return arr.map(function (item) {
//     return this.prefix + ' ' + item;
//   }.bind(this)); // this에 바인딩된 값이 콜백 함수 내부의 this에 바인딩된다.
// }

// 26-32
class Prefixer {
  constructor(prefix) {
    times.prefix = prefix;
  }

  add(arr) {
    return arr.map((item) => this.prefix + item);
  }
}

const prefixer = new Prefixer("-webkit-");
console.log(prefixer.add(["transition", "user-select"]));
// ["-webkit-transition", "-webkit-user-select"]

// 26-33
// 화살표 함수는 상위 스코프의 this를 참조한다.
() => this.x;

// 익명 함수에 상위 스코프의 this를 주입한다. 위 화살표 함수와 동일하게 동작한다.
(function () {
  return this.x;
}.bind(this));

// 26-34
//
//
(function () {
  const foo = () => console.log(this);
  foo();
}.call({ a: 1 })); // { a: 1 }

// bar 함수는 화살표 함수를 반환한다.
// bar 함수가 반환한 화살표 함수의 상위 스코프는 화살표 함수 bar 다.
// 하지만 화살표 함수는 함수 자체의 this 바인딩을 갖지 않으므로 bar 함수가 반환한
// 화살표 함수 내부에서 참조하는 this는 화살표 함수가 아닌 즉시 실행 함수의 this를 가리킨다.
(function () {
  const bar = () => () => console.log(this);
  bar()();
}.call({ a: 1 })); // { a: 1 }

// 26-35
// 전역 함수 foo의 상위 스코프는 전역이므로 화살표 함수 foo의 this는 전역 객체를 가리킨다.
const foo = () => console.log(this);
foo(); // window

// 26-36
// increase 프로퍼티에 할당한 화살표 함수의 상위 스코프는 전역이다.
// 따라서 increase 프로퍼티에 할당한 화살표 함수의 this는 전역 객체를 가리킨다.
const counter = {
  num: 1,
  increase: () => ++this.num,
};

console.log(counter.increase()); // NaN

// 26-37
window.x = 1;

const normal = function () {
  return this.x;
};
const arrow = () => this.x;

console.log(normal.call({ x: 10 })); // 10
console.log(arrow.call({ x: 10 })); // 1

// 26-38
const add = (a, b) => a + b;

console.log(add.call(null, 1, 2)); // 3
console.log(add.apply(null, [1, 2])); // 3
console.log(add.bind(null, 1, 2)()); // 3

// 26-39
// Bad
const person = {
  name: "Lee",
  sayHi: () => console.log(`Hi ${this.name}`),
};

// sayHi 프로퍼티에 할당된 화살표 함수 내부의 this는 상위 스코프인 전역의 this가 가리키는
// 전역 객체를 가리키므로 이 예제를 브라우저에서 실행하면 this.name은 빈 문자열을 갖는 window name과 같다.
// 전역 객체 window 에는 빌트인 프로퍼티 name이 존재한다.
person.sayHi(); // Hi

// 26-40
// Good
const person = {
  name: "Lee",
  sayHi() {
    console.log(`Hi ${this.name}`);
  },
};

person.sayHi(); // Hi Lee

// 26-41
// Bad
function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = () => console.log(`Hi ${this.name}`);

const person = new Person("Lee");
// 이 예제를 브라우저에서 실행하면 this.name은 빈 문자열을 갖는 window.name과 같다.
person.sayHi(); // Hi

// 26-42
// Good
function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function () {
  console.log(`Hi ${this.name}`);
};

const person = new Person("Lee");
person.sayHi(); // Hi Lee

// 26-43
function Person(name) {
  this.name = name;
}

Person.prototype = {
  // constructor 프로퍼티와 생성자 함수 간의 연결을 재설정
  constructor: Person,
  sayHi() {
    console.log(`Hi ${this.name}`);
  },
};

const person = new Person("Lee");
person.sayHi(); // Hi Lee

// 26-44
// Bad
class Person {
  // 클래스 필드 정의 제안
  name = "Lee";
  sayHi = () => console.log(`Hi ${this.name}`);
}

const person = new Person();
person.sayHi(); // Hi Lee

// 26-45
class Person {
  constructor() {
    this.name = "Lee";
    // 클래스가 생성한 인스턴스(this)의 sayHi 프로퍼티에 화살표 함수를 할당한다.
    // 따라서 sayHi 프로퍼티는 인스턴스 프로퍼티다.
    this.sayHi = () => console.log(`Hi ${this.name}`);
  }
}

// 26-46
// Good
class Person {
  //
  name = "Lee";

  sayHi() {
    console.log(`Hi ${this.name}`);
  }
}
const person = new Person();
person.sayHi(); // Hi Lee

// ____26.3.4 super
// 26-47
class Base {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    return `Hi! ${this.name}`;
  }
}

class Derived extends Base {
  //
  sayHi = () => `${super.sayHi()} how are you doing?`;
}

const derived = new Derived("Lee");
console.log(derived.sayHi()); // Hi! Lee how are you doing?

// ____26.3.5 arguments
// 26-48
(function () {
  // 화살표 함수 foo의 arguments는 상위 스코프인 즉시 실행 함수의 arguments를 가리킨다
  const foo = () => console.log(arguments); // [Arguments] { "0": 1, "1": 2 }
  foo(3, 4);
})(1, 2);

// 화살표 함수 foo 의 arguments는 상위 스코프인 전역의 arguments를 가리킨다.
// 하지만 전역에는 arguments 객체가 존재하지 않는다. arguments 객체는 함수 내부에서만 유효하다.
const foo = () => console.log(arguments);
foo(1, 2); // ReferenceError:

// 26.4 Rest 파라미터
// ____26.4.1 기본 문법
// 26-49
function foo(...rest) {
  // 매개변수 rest는 인수들의 목록을 배열로 전달받는 Rest 파라미터다.
  console.log(rest); // [ 1, 2, 3, 4, 5 ]
}

foo(1, 2, 3, 4, 5);

// 26-50
function foo(param, ...rest) {
  console.log(param); // 1
  console.log(rest); // [ 2, 3, 4, 5 ]
}

foo(1, 2, 3, 4, 5);

function bar(param1, param2, ...rest) {
  console.log(param1); // 1
  console.log(param2); // 2
  console.log(rest); // [ 3, 4, 5 ]
}

bar(1, 2, 3, 4, 5);

// 26-51
function foo(...rest, param1, param2) {} // SyntaxError:

foo(1, 2, 3, 4, 5);

// 26-52
function foo(...rest1, ...rest2) {} // SyntaxError

foo(1, 2, 3, 4, 5);

// 26-53
function foo(...rest) {}
console.log(foo.length); // 0

function bar(x, ...rest) {}
console.log(bar.length); // 1

function baz(x, y, ...rest) {}
console.log(baz.length); // 2

// ____26.4.2 Rest 파라미터와 arguments 객체
// 26-54
// 매개변수의 개수를 사전에 알 수 없는 가변 인자 함수
function sum() {
  // 가변 인자 함수는 arguments 객체를 통해 인수를 전달받는다.
  console.log(arguments);
}

sum(1, 2); // {length: 2, "0": 1, "1": 2 }

// 26-55
function sum() {
  // 유사 배열 객체인 arguments 객체를 배열로 변환한다.
  var array = Array.prototype.slice.call(arguments);

  return array.reduce(function (pre, cur) {
    return pre + cur;
  }, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15

// 26-56
function sum(...args) {
  // Rest 파라미터 args에는 배열 [1, 2, 3, 4, 5] 가 할당된다.
  return args.reduce((pre, cur) => pre + cur, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15

// 26.5 매개변수 기본값
// 26-57
function sum(x = 0, y = 0) {
  return x + y;
}

console.log(sum(1)); // NaN

// 26-58
function sum(x, y) {
  // 인수가 전달되지 않아 매개변수의 값이 undefined인 경우 기본값을 할당한다.
  x = x || 0;
  y = y || 0;

  return x + y;
}

console.log(sum(1, 2)); // 3
console.log(sum(1)); // 1

// 26-59
function sum(x = 0, y = 0) {
  return x + y;
}

console.log(sum(1, 2)); // 3
console.log(sum(1)); // 1

// 26-60
function logName(name = "Lee") {
  console.log(name);
}

logName(); // Lee
logName(undefined); // Lee
logName(null); // null

// 26-61
function foo(...rest = []) {
  console.log(rest)
}
// SyntaxError:

// 26-62
function sum(x, y = 0) {
  console.log(arguments);
}

console.log(sum.length); // 1

sum(1); // Arguments { "0": 1 }
sum(1, 2); // Arguments { "0": 1, "1": 2 }
