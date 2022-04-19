// 11장 원시 값과 객체의 비교

// 11.1 원시 값
// 11.1.1 변경 불가능한 값
// 11-01
// const 키워드를 사용해 선언한 변수는 재할당이 금지된다. 상수는 재할당이 금지된 변수일 뿐이다.
const o = {};

// const 키워드를 사용해 선언한 변수에 할당한 원시 값(상수)은 변경할 수 없다.
// 하지만 const 키워드를 사용해 선언한 변수에 할당한 객체는 변경할 수 있다.
o.a = 1;
console.log(o); // {a: 1}

// 11.1.2 문자열과 불변성
// 11-02
// 문자열은 0개 이상의 문자로 이루어진 집합이다.
var str1 = ""; // 0개의 문자로 이뤄진 문자열 (빈 문자열)
var str2 = "Hello"; // 5개의 문자로 이뤄진 문자열

// 11-03
var str = "Hello";
str = "world";

// 11-04
var str = "string";

console.log(str[0]); // s

console.log(str.length); // 6
console.log(str.toUpperCase); // STRING

// 11-05
var str = "string";
str[0] = "S";

console.log(str); // string

// 11.1.3 값에 의한 전달
// 11-06
var score = 80;
var copy = score;

console.log(score); // 80
console.log(copy); // 80

score = 100;

console.log(score); // 100
console.log(copy); // ?

// 11-07
var score = 80;
var copy = score;

console.log(score, copy); // 80, 80
console.log(score === copy); // true

// 11-08
score = 100;

console.log(score, copy); // 100, 80
console.log(score === copy); // false

// 11.2 객체
// 11.2.1 변경 가능한 값
// 11-11
var person = {
  name: "Lee",
};

// 11-12
console.log(person); // {name: "Lee"}

// 11-13
var person = {
  name: "Lee",
};

person.name = "Kim";

person.address = "Seoul";

console.log(person); // {name: 'Kim', address: 'Seoul'}

// 11-14
const o = { x: { y: 1 } };

const c1 = { ...o };
console.log(c1 === o); // false
console.log(c1.x === o.x); // true

const _ = require("lodash");

const c2 = _.cloneDeep(o);
console.log(c2 === o); // false
console.log(c2.x === o.x); // false

// 11-15
const v = 1;

const c1 = v;
console.log(c1 === v); // true

const o = { x: 1 };

const c2 = o;
console.log(c2 === o); // true

// 11.2.2 참조에 의한 전달

// 11-16
var person = {
  name: "Lee",
};

var copy = person;

// 11-17
var person = {
  name: "Lee",
};

var copy = person;

console.log(copy === person); // true
// copy를 통해 객체 변경
copy.name = "Kim";
// person을 통해 객체 변경
person.address = "Seoul";

// 따라서

console.log(person); // {name: 'Kim', address: 'Seoul'}
console.log(copy); // {name: 'Kim', address: 'Seoul'}

// 11-18
var person1 = {
  name: "Lee",
};

var person2 = {
  name: "Lee",
};

console.log(person1 === person2); // false
console.log(person1.name === person2.name); // true
