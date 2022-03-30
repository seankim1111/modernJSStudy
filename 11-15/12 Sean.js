// 12장 함수
// 12.1 함수란?
// 12-01
// f(x, y) = x + y
function add(x, y) {
  return x + y;
}
// f(2, 5) = 7
add(2, 5); // 7

// add : 함수이름
// (x, y) : 매개변수
// x + y : 반환값
// (2, 5) : 인수

// 12-02
// 함수 정의
function add(x, y) {
  return x + y;
}

// 12-03
var result = add(2, 5);
console.log(result); // 7

// 12.2 함수를 사용하는 이유

// 12.3 함수 리터럴
// 12-04
var f = function add(x, y) {
  return x + y;
};

// 12.4 함수 정의

// 함수선언문
// function add(x, y) {
//   return x + y;
// };

// 함수표현식
// var add = function (x, y) {
//   return x + y;
// };

// Function 생성자 함수
// var add = new Function(`x`, `y`, `return x+y`);

// 화살표 함수(ES6)
// var add = (x, y) => x + y;

// 12.4.1 함수 선언문
// 12 - 05
// 함수 선언문
function add(x, y) {
  return x + y;
}
// 함수 참조
// console.dir 은 console.log 와 달리 함수 객체의 프로퍼티 까지 출력한다.
// 단, Node.js 환경에서는 console.log 와 같은 결과가 출력된다.
console.dir(add); // function add(x, y)
// 함수 호출
console.log(add(2, 5)); // 7

// 12-06
// function (x, y) {
//   return x + y;
// }
// SyntaxError:
// 함수 이름 생략 불가

// 12-07
// 함수 선언문은 표현식이 아닌 문이므로 변수에 할당할 수 없다.
var add = function add(x, y) {
  return x + y;
};

console.log(add(2, 5)); // 7

// 12-08
// 기명 함수 리터럴을 단독으로 사용하면 함수 선언문으로 해석된다.
// 함수 선언문에서는 함수 이름을 생략할 수 없다.
function foo() {
  console.log("foo");
}
foo(); // foo

(function bar() {
  console.log("bar");
});
bar(); // ReferenceError:

// 12-09
var add = function add(x, y) {
  return x + y;
};

console.log(add(2, 5));
// 12.4.2 함수 표현식
// 12.4.3 함수 생성 시점과 함수 호이스팅
// 12.4.4 Function 생성자 함수
// 12.4.5 화살표 함수
// 12.5 함수 호출
// 12.5.1 매개변수와 인수
// 12.5.2 인수 확인
// 12.5.3 매개변수의 최대 개수
// 12.5.4 반환문
// 12.6 참조에 의한 전달과 외부 상태의 변경
// 12.7 다양한 함수의 형태
// 12.7.1 즉시 실행 함수
// 12.7.2 재귀 함수
// 12.7.3 중첩 함수
// 12.7.4 콜백 함수

// 12.7.5 순수 함수와 비순수 함수
// 12-56
// 12-57
