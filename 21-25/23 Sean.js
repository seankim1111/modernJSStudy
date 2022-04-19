// 23장 실행 컨텍스트
// 23.1 소스코드의 타입
// 23.2 소스코드의 평가와 실행
// 23.3 실행 컨텍스트의 역할
// 23-2
const x = 1;
const y = 2;

function foo(a) {
  const x = 10;
  const y = 20;

  console.log(a + x + y); // 130
}

foo(100);

console.log(x + y); // 3

// 23.4 실행 컨텍스트 스택
// 23-03
const x = 1;

function foo() {
  const y = 2;

  function bar() {
    const z = 3;
    console.log(x + y + z);
  }
  bar();
}

foo(); // 6

// 23.5 렉시컬 환경
// 23.6 실행 컨텍스트의 생성과 식별자 검색 과정
// 23-04
var x = 1;
const y = 2;

function foo(a) {
  var x = 3;
  const y = 4;

  function bar(b) {
    const z = 5;
    console.log(a + b + x + y + z);
  }
  bar(10);
}

foo(20); // 42

// ____23.6.1 전역 객체 생성
// 23-05
// Object.prototype.toString
window.toString(); // "[object Window]"

window.__proto__.__proto__.__proto__.__proto__ === Object.prototype; // true

// ____23.6.2 전역 코드 평가
// 1. 전역 실행 컨텍스트 생성
// 2. 전역 렉시컬 환경 생성
// 2.1 전역 환경 레코드 생성
// 2.1.1 객체 환경 레코드 생성
// 23-06
var x = 1;
const y = 2;

function foo(a) {
  // ...
}

// 2.1.2 선언적 환경 레코드 생성
// 23-07
let foo = 1; // 전역 변수
{
  // let, const 키워드로 선언한 변수가 호이스팅되지 않는다면 전역 변수를 참조해야 한다.
  // 하지만 let 키워드로 선언한 변수도 여전히 호이스팅이 발생하기 때문에
  // 참조 에러(ReferenceError)가 발생한다.
  console.log(foo); // ReferenceError:
  let foo = 2; // 지역 변수
}

// 2.2 this 바인딩
// 2.3 외부 렉시컬 환경에 대한 참조 결정

// ____24.6.3 전역 코드 실행

// ____24.6.4 foo 함수 코드 평가
// 23-08
var x = 1;
const y = 2;

function foo(a) {
  var x = 3;
  const y = 4;

  function bar(b) {
    const z = 5;
    console.log(a + b + x + y + z);
  }
  bar(10);
}

foo(20); // <-호출 직전   /42

// 1. 함수 실행 컨텍스트 생성
// 2. 함수 렉시컬 환경 생성
// 2.1 함수 환경 레코드 생성
// 2.2 this 바인딩
// 2.3 외부 렉시컬 환경에 대한 참조 결정

// ____23.6.5 foo 함수 코드 실행

// ____23.6.6 bar 함수 코드 평가

// ____23.6.7 bar 함수 코드 실행
// 1. console 식별자 검색
// 2. log 메서드 검색
// 23-10
console.hasOwnProperty("log"); // true

// 3. 표현식 평가
// 4. console.log 메서드 호출

// ____23.6.8 bar 함수 코드 실행 종료

// ____23.6.9 foo 함수 코드 실행 종료

// ____23.6.10 전역 코드 실행 종료

// 23.7 실행 컨텍스트와 블록 레벨 스코프
// 23-11
let x = 1;

if (true) {
  let x = 10;
  console.log(x); // 10
}

console.log(x); // 1
