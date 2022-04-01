// 21장 빌트인 객체
// 21.1 자바스크립트 객체의 분류
// 21.2 표준 빌트인 객체
// 21-01
// String 생성자 함수에 의한 String 객체 생성
const strObj = new String("Lee"); // String {"Lee"}
console.log(typeof strObj); // object

// Number 생성자 함수에 의한 Number 객체 생성
const numObj = new Number(123); // Number {123}
console.log(typeof numObj); // object

// Boolean 생성자 함수에 의한 Boolean 객체 생성
const boolObj = new Boolean(true); // Boolean {true}
console.log(typeof boolObj); // object

// Function 생성자 함수에 의한 Function 객체(함수) 생성
const func = new Function("x", "return x * x"); // ƒ anonymous(x )
console.log(typeof func); // function

// Array 생성자 함수에 의한 Array 객체(배열) 생성
const arr = new Array(1, 2, 3); // (3) [1, 2, 3]
console.log(typeof arr); // object

// RegExp 생성자 함수에 의한 RegExp 객체(정규 표현식) 생성
const regExp = new RegExp(/ab+c/i); // /ab+c/i
console.log(typeof regExp); // object

// Date 생성자 함수에 의한 Date 객체 생성
const date = new Date(); // 2022-04-01T22:15:19.859Z
console.log(typeof date); // object

// 21-02
// String 생성자 함수에 의한 String 객체 생성
const strObj = new String("Lee"); // String {"Lee"}

// String 생성자 함수를 통해 생성한 strObj 객체의 프로토타입은 String.prototype이다.
console.log(Object.getPrototypeOf(strObj) === String.prototype); // true

// 21-03
// Number 생성자 함수에 의한 Number 객체 생성
const numObj = new Number(1.5); // Number {1.5}

// toFixed 는 Number.prototype 의 프로토타입 메서드다.
// Number.prototype.toFixed는 소수점 자리를 반올림하여 문자열로 반환한다.
console.log(numObj.toFixed()); // 2

// isInteger 는 Number 의 정적 메서드다.
// Number.isInteger는 인수가 정수(integer) 인지 검사하여 그 결과를 Boolean으로 반환한다.
console.log(Number.isInteger(0.5)); // false

// 21.3 원시값과 래퍼 객체
// 21-04
const str = "hello";

// 원시 타입인 문자열이 프로퍼티와 메서드를 갖고 있는 객체처럼 동작한다.
console.log(str.length); // 5
console.log(str.toUpperCase); // HELLO

// 21-05
const str = "hi";

// 원시 타입인 문자열이 래퍼 객체인 String 인스턴스로 변환된다.
console.log(str.length); // 2
console.log(str.toUpperCase); // HI

// 래퍼 객체로 프로퍼티에 접근하거나 메서드를 호출한 후, 다시 원시값으로 되돌린다.
console.log(typeof str); // string

// 21-06
// 1. 식별자 str은 문자열을 값으로 가지고 있다.
const str = "hello";

// 2. 식별자 str은 암묵적으로 생성된 래퍼객체를 가리킨다.
// 식별자 str의 값 "hello"는 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된다.
// 래퍼객체에 name 프로퍼티가 동적 추가된다.
str.name = "Lee";

// 3. 식별자 str은 다시 원래의 문자열, 즉 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된 원시값을 갖는다.
// 이때 2. 에서 생성된 래퍼 객체는 아무도 참조하지 않는 상태이므로 가비지 컬렉션의 대상이 된다.

// 4. 식별자 str은 새롭게 암묵적으로 생성된(2.에서 생성된 래퍼 객체와는 다른) 래퍼 객체를 가리킨다.
// 새롭게 생성된 래퍼 객체에는 name 프로퍼티가 존재하지 않는다.
console.log(str.name);

// 5. 식별자 str은 다시 원래의 문자열, 즉 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된 원시값을 갖는다.
// 이때 4. 에서 생성된 래퍼 객체는 아무도 참조하지 않는 상태이므로 가비지 컬렉션의 대상이 된다.
console.log(typeof str, str); // string hello

// 21-07
const num = 1.5;

//원시 타입인 숫자가 래퍼 객체인 Number 객체로 변환된다.
console.log(num.toFixed()); // 2

// 래퍼 객체로 프로퍼티에 접근하거나 메서드를 호출한 후, 다시 원시값으로 되돌린다.
console.log(typeof num, num);

// 21.4 전역 객체
// 21-08
globalThis === this; // true
globalThis === window; // true
globalThis === self; // true
globalThis === frames; // true

// Node.js 환경 (12.0.0 이상)
globalThis === this; // true
globalThis === global; // true

// 21-09
// 문자열 'F'를 16진수로 해석하여 10진수로 변환하여 반환한다.
window.parseInt("F", 16); // 15
// window.parseInt 는 parseInt 로 호출할 수 있다.
parseInt("F", 16); // 15

window.parseInt === parseInt; // true

// 21-10
// var 키워드로 선언한 전역 변수
var foo = 1;
console.log(window.foo); // 1

// 선언하지 않은 변수에 값을 암묵적 전역. bar 는 전역 변수가 아니라 전역 객체의 프로퍼티다.
bar = 2;
console.log(window.bar); // 2

// 전역 함수
function baz() {
  return 3;
}
console.log(window.baz()); // 3

// 21-11
let foo = 123;
console.log(window.foo); // undefined

// ____21.4.1 빌트인 전역 프로퍼티
// Infinity
// 21-12
// 전역 프로퍼티는 window 를 생략하고 참조할 수 있다.
console.log(window.Infinity === Infinity); // true

// 양의 무한대
console.log(3 / 0); // Infinity
// 음의 무한대
console.log(-3 / 0); // -Infinity
// Infinity 는 숫자값이다.
console.log(typeof Infinity); // number

// NaN
// 21-13
console.log(window.NaN); // NaN

console.log(Number("xyz")); // NaN
console.log(1 * "string"); // NaN
console.log(typeof NaN); // number

// undefined
// 21-14
console.log(window.undefined); // undefined

var foo;
console.log(foo); // undefined
console.log(typeof undefined); // undefined

// ____21.4.2 빌트인 전역 함수
// eval
// 21-15
// 표현식인 문
eval("1 + 2"); // 3
// 표현식이 아닌 문
eval("var x = 5"); // undefined

// eval 함수에 의해 런타임에 변수 선언문이 실행되어 x 변수가 선언되었다.
console.log(x); // 5

// 객체 리터럴은 반드시 괄호로 둘러싼다.
const o = eval("({ a: 1 })");
console.log(o); // {a: 1}

// 함수 리터럴은 반드시 괄호로 둘러싼다.
const f = eval("(function() { return 1;})");
console.log(f()); // 1

// 21-16
// 마지막 결과값을 반환
eval("1 + 2; 3 + 4;"); // 7

// 21-17
const x = 1;

function foo() {
  // eval 함수는 런타임에 foo 함수의 스코프를 동적으로 수정한다.
  eval("var x = 2");
  console.log(x); // 2
}

foo();
console.log(x); // 1

// 21-18
const x = 1;

function foo() {
  "use strict";

  // strict mode에서 eval 함수는 기존의 스코프를 수정하지 않고 eval 함수 자신의 자체적인 스코프를 생성한다.
  eval("var x = 2; console.log(x);"); // 2
  console.log(x); // 1
}

foo();
console.log(x); // 1

// 21-19
const x = 1;

function foo() {
  eval("var x = 2; console.log(x);"); // 2
  // let, const 키워드를 사용한 변수 선언문은 strict mode 가 적용된다.
  eval("const x = 3; console.log(x);"); // 3
  console.log(x); // 2
}

// isFinite
// 21-20
// 인수가 유한수이면 true 를 반환한다.
isFinite(0); // true
isFinite(2e64); // true
isFinite("10"); // true '10' -> 10
isFinite(null); // true: null -> 0

// 인수가 무한수 또는 NaN으로 평가되는 값이라면 false 를 반환한다.
isFinite(Infinity); // false
isFinite(-Infinity); // false

// 인수가 NaN으로 평가되는 값이라면 false 를 반환한다.
isFinite(NaN); // false
isFinite("Hello"); // false
isFinite("2005/12/12"); // false

// 21-20
console.log(+null); // 0

// isNaN
// 21-22
// 숫자
isNaN(NaN); // true
isNaN(10); // false

// 문자열
isNaN("blabla"); // true: 'blabla' => NaN
isNaN("10"); // false: 10
isNaN(""); // false: '' => 0

// 불리언
isNaN(true); // false: true -> 1
isNaN(false); // false: false -> 0

// undefined
isNaN(undefined); // true: undefined => NaN

// 객체
isNaN({}); // true: {} => NaN

// date
isNaN(new Date()); // false: new Date() => number
isNaN(new Date().toString); // true: String => NaN

// parseFloat
// 전달받은 문자열 인수를 부동 소숫점 숫자, 즉 실수로 해석하여 반환한다.
// 21-23
parseFloat("3.14"); // 3.14
parseFloat("10.00"); // 10

parseFloat("34 45 66"); // 34
parseFloat("40 years"); // 40

// 첫 번째 문자열을 숫자로 변환할 수 없다면 NaN 을 반환한다.
parseFloat("He was 40"); // NaN

parseFloat(" 60 "); // 60

// parseInt
// 전달받은 문자열 인수를 정수로 해석하여 반환한다.
// 21-24
parseInt("10"); // 10
parseInt("10.123"); // 10

// 21-25
// 전달받은 인수가 문자열이 아니면 문자열 변환 후, 정수로 해석하여 반환한다.
parseInt(10); // 10
parseInt(10.123); // 10

// 21-26
parseInt("10", 2); // 2
parseInt("10", 8); // 8
parseInt("10", 16); // 16

// 21-27
const x = 15;

// 10진수 15를 2진수로 변환하여 그 결과를 문자열로 반환한다.
x.toString(2); // 1111
// 문자열 '1111'을 2진수로 해석하고 그 결과를 10진수 정수로 반환한다.
parseInt(x.toString(2), 2); // 15

// 10진수 15를 8진수로 변환하여 그 결과를 문자열로 반환한다.
x.toString(8); // -> '17'
// 문자열 '17'을 8진수로 해석하고 그 결과를 10진수 정수로 반환한다
parseInt(x.toString(8), 8); // -> 15

// 10진수 15를 16진수로 변환하여 그 결과를 문자열로 반환한다.
x.toString(16); // -> 'f'
// 문자열 'f'를 16진수로 해석하고 그 결과를 10진수 정수로 반환한다
parseInt(x.toString(8), 8); // -> 15

// 숫자값을 문자열로 변환한다.
x.toString(); // 15
parseInt(x.toString()); // 15

// 21-28
// 16진수 리터럴 '0*f'를 16진수로 해석하고 10진수 정수로 그 결과를 반환한다.
parseInt("0*f"); // 15
// 같은 코드
parseInt("f", 16); // 15

// 21-29
// 2진수 리터럴과 8진수 리터럴은 제대로 해석하지 못한다.
parseInt("0b10"); // 0

parseInt("0o10"); // 0

// 21-30
parseInt("10", 2); // 2

parseInt("10", 8); // 8

// 21-31
parseInt("A0"); // NaN
// '2'는 2진수로 해석할 수 없다.
parseInt("20", 2); // NaN

// 21-32
// 10진수로 해석할 수 없는 'A' 이후의 문자는 모두 무시된다.
parseInt("1A0"); // -> 1
// 2진수로 해석할 수 없는 '2' 이후의 문자는 모두 무시된다.
parseInt("102", 2); // -> 2
// 8진수로 해석할 수 없는 '8' 이후의 문자는 모두 무시된다.
parseInt("58", 8); // -> 5
// 16진수로 해석할 수 없는 'G' 이후의 문자는 모두 무시된다.
parseInt("FG", 16); // -> 15

// 21-33
// 공백으로 구분된 문자열은 첫 번째 문자열만 변환한다.
parseInt("34 45 66"); // -> 34
parseInt("40 years"); // -> 40
// 첫 번째 문자열을 숫자로 변환할 수 없다면 NaN을 반환한다.
parseInt("He was 40"); // -> NaN
// 앞뒤 공백은 무시된다.
parseInt(" 60 "); // -> 60

// encodeURI / decodeURI
// 21-34
const uri = "http://example.com?name=dmdah&job=programmer&teacher";
// encodeURI 함수는 완전한 URI 를 전달받아 이스케이프 처리를 위해 인코딩한다.
const enc = encodeURI(uri);
console.log(enc);
// http://example.com?name=%EEF%%%SESAA%AE%&job=programmer&teacher

// 21-35
const dec = decodeURI(enc);
console.log(dec);
// http://example.com?name=dmdah&job=programmer&teacher

// encodeURIComponent / decodeURIComponent
// 21-36
const uriComp = "name=dmdah&job=programmer&teacher";

let enc = encodeURIComponent(uriComp);
console.log(enc);
// name%EFS%%%EWFSAA%DSFE%AEFjob%3DProgrammerr%6teacher

let dec = decodeURIComponent(enc);
console.log(dec);
// name=dmdah&job=programmer&teacher

enc = encodeURI(uriComp);
console.log(enc);
// name%EFS%%%EWFSAA%DSFE%AEFjob%3DProgrammerr%6teacher

dec = decodeURI(enc);
console.log(dec);
// name=dmdah&job=programmer&teacher

// ____21.4.3 암묵적 전역
// 21-37
var x = 10;

function foo() {
  y = 20; // window.y = 20
}
foo();

// 선언하지 않은 식별자 y를 전역에서 참조할 수 있다.
console.log(x + y); // 30

// 21-38
// 전역 변수 x는 호이스팅이 발생한다.
console.log(x); // undefined
// 전역 변수가 아니라 단지 전역 객체의 프로퍼티인 y는 호이스팅이 발생하지 않는다.
console.log(y); // ReferenceError:

var x = 10; // 전역 변수

function foo() {
  // 선언하지 않은 식별자에 값을 할당
  y = 20;
}
foo();

// 선언하지 않은 식별자 y를 전역에서 참조할 수 있다.
console.log(x + y); // 30

// 21-39
var x = 10; // 전역 변수

function foo() {
  // 선언하지 않은 식별자에 값을 할당
  y = 20; // window.y = 20;
  console.log(x + y);
}

foo(); // 30

console.log(window.x); // 10
console.log(window.y); // 20

delete x; // 전역 변수는 삭제되지 않는다.
delete y; // 프로퍼티는 삭제된다.

console.log(window.x); // 10
console.log(window.y); // undefined
