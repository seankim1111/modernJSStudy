//06장 데이터 타입

//6.1 숫자 타입
//06-01
var integer = 10; // 정수
var double = 10.12; // 실수
var negative = -20; // 음의 정수

//06-02
var binary = 0b01000001; // 2진수
var octal = 0o101; // 8진수
var hex = 0x41; // 16진수

console.log(binary); // 65
console.log(octal); // 65
console.log(hex); // 65
console.log(binary === octal); // 65
console.log(octal === hex); // 65

//06-03
console.log(1 === 1.0);

//06-04
console.log(10 / 0); // Infinity
console.log(10 / -0); // -Infinity
console.log(1 * "String"); // NaN

//6.2 문자열 타입

//6.3 템플릿 리터럴
//06-10
var template = '<ul>\n\t<li><a href="#">Home</a></li>\n</ul>';
console.log(template);

//06-11
var template = `<ul>
<li><a href="#">Home</a></li>
</ul>`;
console.log(template);

//6.3.2 표현식 삽입
//06-12
var first = "Ung-mo";
var last = "Lee";
console.log("My name is " + first + " " + last + ".");

//06-13
var first = "Ung-mo";
var last = "Lee";
console.log(`My name is ${first} ${last}.`);

//06-14
console.log(`1 + 2 = ${1 + 2}`);

//6.4 불리언 타입
//06-16
var foo = true;
console.log(foo); // true

//6.5 undefined 타입
//06-17
var foo;
console.log(foo); // undefined

//6.6 null 타입

//6.7 심벌 타입
var key = Symbol("key");
console.log(typeof key);

var obj = {};

obj[key] = "value";
console.log(obj[key]);

//6.8 객체 타입

//6.9 데이터 타입의 필요성

//6.10 동적 타이핑
//06-23
var foo;
console.log(typeof foo); // undefined

foo = 3;
console.log(typeof foo); // number

foo = "Hello";
console.log(typeof foo); // string

foo = true;
console.log(typeof foo); // boolean

foo = null;
console.log(typeof foo); // object

foo = Symbol();
console.log(typeof foo); // symbol

foo = {};
console.log(typeof foo); // object

foo = [];
console.log(typeof foo); // object

foo = function () {};
console.log(typeof foo); // function
