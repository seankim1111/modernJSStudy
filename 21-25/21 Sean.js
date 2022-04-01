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

// NaN
// 21-13

// undefined
// 21-14

// ____21.4.2 빌트인 전역 함수
// eval
// 21-15

// 21-16

// 21-17

// 21-18

// 21-19

// isFinite
// 21-20

// 21-20

// isNaN
// 21-22

// parseFloat
// 21-23

// parseInt
// 21-24

// 21-25

// 21-26

// 21-27

// 21-28

// 21-29

// 21-30

// 21-31

// 21-32

// 21-33

// encodeURI / decodeURI
// 21-34

// 21-35

// encodeURIComponent / decodeURIComponent
// 21-36

// ____21.4.3 암묵적 전역
// 21-37

// 21-38

// 21-39
