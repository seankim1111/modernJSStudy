// 26장 ES6 함수의 추가 기능
// 26.1 함수의 구분
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
const derived = {
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
// 26-13
// 26-14
// 26-15
// 26-16
// 26-17
// 26-18
// 26-19
// 26-20
// 26-21
// 26-22

// ____26.3.2 화살표 함수와 일반 함수의 차이
// 26-23
// 26-24
// 26-25
// 26-26
// 26-27

// ____26.3.3 this
// 26-28
// 26-29
// 26-30
// 26-31
// 26-32
// 26-33
// 26-34
// 26-35
// 26-36
// 26-37
// 26-38
// 26-39
// 26-40
// 26-41
// 26-42
// 26-43
// 26-44
// 26-45
// 26-46

// ____26.3.4 super
// 26-47

// ____26.3.5 arguments
// 26-48

// 26.4 Rest 파라미터
// ____26.4.1 기본 문법
// 26-49
// 26-50
// 26-51
// 26-52
// 26-53

// ____26.4.2 Rest 파라미터와 arguments 객체
// 26-54
// 26-55
// 26-56

// 26.5 매개변수 기본값
// 26-57
// 26-58
// 26-59
// 26-60
// 26-61
// 26-62
