// 15장 let, const 키워드와 블록 레벨 스코프
// 15.1 var 키워드로 선언한 변수의 문제점
// ES5까지 변수를 선언할 수 있는 유일한 방법은 var 키워드를 사용하는 것이었다.

// 15.1.1 변수 중복 선언 허용
// 15-01
var x = 1;
var y = 1;

var x = 100;
var y;

console.log(x); // 100
console.log(y); // 1

// 15.1.2 함수 레벨 스코프
// 15-02
var x = 1;
if (true) {
  var x = 10;
}

console.log(x); // 10

// 15-03
var i = 10;
for (var i = 0; i < 5; i++) {
  console.log(i); // 0 1 2 3 4
}

console.log(i); // 5

// 15.1.3 변수 호이스팅
// 15-04
console.log(foo); // undefined

foo = 123;

console.log(foo); // 123

var foo;

// 15.2 let 키워드
// 15.2.1 변수 중복 선언 금지
// 15-05
var foo = 123;
var foo = 456;

let bar = 123;
// let bar = 456; // SyntaxError:

// 15.2.2 블록 레벨 스코프
// 15-06
let foo = 1;

{
  let foo = 2;
  let bar = 3;
}

console.log(foo); // 1
console.log(bar); // ReferenceError:

// 15.2.3 변수 호이스팅
// 15-07
console.log(foo); // ReferenceError:
let foo;

// 15-08
console.log(foo); // undefined

var foo;
console.log(foo); // undefined

foo = 1;
console.log(foo); // 1

// 15-09
console.log(foo); // ReferenceError:

let foo;
console.log(foo); // undefined

foo = 1;
console.log(foo); // 1

// 15-10
let foo = 1;
{
  console.log(foo); // ReferenceError:
  let foo = 2;
}

// 15.2.4 전역 객체와 let
// 15-11
var x = 1;
y = 2;
function foo() {}

console.log(window.x); // 1
console.log(x); // 1

console.log(window.y); // 2
console.log(y); // 2

console.log(window.foo); // function foo() {}
console.log(foo); // function foo() {}

// 15-12
let x = 1;

console.log(window.x); // undefined
console.log(x); // 1

// 15.3 const 키워드
// 15.3.1 선언과 초기화
// const 키워드로 선언한 변수는 반드시 선언과 동시에 초기화해야 한다
// 15-13
const foo = 1;

// 15-14
// const foo; // SyntaxError:

// 15-15
{
  console.log(foo); // ReferenceError:
  const foo = 1;
  console.log(foo); // 1
}

console.log(foo); // ReferenceError:

// 15.3.2 재할당 금지
// 15-16
const foo = 1;
foo = 2; // TypeError:

// 15.3.3 상수
// 상수는 재할당이 금지된 변수
// 15-17
let preTaxPrice = 100;

let afterTaxPrice = preTaxPrice + preTaxPrice * 0.1;

console.log(afterTaxPrice); // 110

// 15-18
const TAX_RATE = 0.1;

let preTaxPrice = 100;

let afterTaxPrice = preTaxPrice + preTaxPrice * TAX_RATE;

console.log(afterTaxPrice); // 110

// 15.3.4 const 키워드와 객체
// 15-19
const person = {
  name: "Lee",
};

// 객체는 변경 가능한 값이다.
person.name = "Kim";

console.log(person); // {name: 'Kim'}
// const 키워드는 재할당을 금지할 뿐 '불변'을 의미하지는 않는다.

// 15.4 var vs. let vs. const
// ES6를 사용한다면 var 키워드는 사용하지 않는다.
// 재할당이 필요한 경우에 한정해 let 키워드를 사용한다.
// 변경이 발생하지 않고 읽기 전용으로 사용하는 원시 값과 객체에는 const 키워드를 사용한다.
