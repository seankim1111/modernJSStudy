// 13장 스코프(유효범위)
// 13.1 스코프란?
// 13-01
function add(x, y) {
  console.log(x, y); // 2 5
  return x + y;
}

add(2, 5);
console.log(x, y); // ReferenceError:

// 13-02
var var1 = 1;
if (true) {
  var var2 = 2;
  if (true) {
    var var3 = 3;
  }
}

function foo() {
  var var4 = 4;

  function bar() {
    var var5 = 5;
  }
}

console.log(var1); // 1
console.log(var2); // 2
console.log(var3); // 3
console.log(var4); // ReferenceError:
console.log(var5); // ReferenceError:

// 13-03
var x = "global";

function foo() {
  var x = "local";
  console.log(x); // local
}

foo();

console.log(x); // global

// 13-04
function foo() {
  var x = 1;
  var x = 2;
  console.log(x); // 2
}
foo();

// 13-05
// function bar() {
//   let x = 1;
//   // let 이나 const 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언 허용 x
//   let x = 2; // SyntaxError:
// }
// bar();

// 13.2 스코프의 종류
// 13.2.1 전역과 전역 스코프
// 13.2.2 지역과 지역 스코프

// 13.3 스코프 체인
// 13.3.1 스코프 체인에 의한 변수 검색
// 13.3.2 스코프 체인에 의한 함수 검색
// 13-06
function foo() {
  console.log("global function foo");
}

function bar() {
  function foo() {
    console.log("local function foo");
  }
  foo();
}

bar();

// 13.4 함수 레벨 스코프
// 13-07
var x = 1;
if (true) {
  // var 키워드로 선언된 변수는 함수의 코드블록만을 지역 스코프로 인정한다.
  // 함수 밖에서 var 키워드로 선언된 변수는 코드 블록 내에서 선언되었다 할지라도 모두 전역 변수다.
  // 따라서 x 는 전역 변수다. 이미 선언된 전역 변수 x 가 있으므로 x 변수는 중복 선언된다.
  // 이는 의도치 않게 변수 값이 변경되는 부작용을 발생시킨다.
  var x = 10;
}

console.log(x); // 10;

// 13-08
var i = 10;

for (var i = 0; i < 5; i++) {
  console.log(i); // 0 1 2 3 4
}

console.log(i); // 5

// 13.5 렉시컬 스코프
// 13-09
var x = 1;

function foo() {
  var x = 10;
  bar();
}

function bar() {
  console.log(x);
}

foo(); // 1
bar(); // undefined
