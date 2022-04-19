// 14장 전역 변수의 문제점
// 전역 변수의 무분별한 사용은 위험
// 전역 변수를 반드시 사용해야 할 이유를 찾지 못한다면 지역 변수를 사용해야 함

// 14.1 변수의 생명 주기
// 14.1.1 지역 변수의 생명 주기
// 14-01
function foo() {
  var x = "local";
  console.log(x); // local
  return x;
}
foo();
console.log(x); // ReferenceError:

// 14-02
var x = "global";

function foo() {
  console.log(x); // undefined
  var x = "local";
}
foo();
console.log(x); // global

// 14.1.2 전역 변수의 생명 주기
// 함수와 달리 전역 코드는 명시적인 호출 없이 실행된다.

// 14.2 전역 변수의 문제점
// 암묵적 결합
// 전역 변수를 선언한 의도는 전역, 즉 코드 어디서든 참조하고 할당할 수 있는 변수를 사용하겠다는 것
// 이는 모든 코드가 전역 변수를 참조하고 변경할 수 있는 암묵적 결합(implicit coupling)을 허용하는 것
// 변수의 유효 범위가 크면 클수록 코드의 가독성은 나빠지고 의도치 않게 상태가 변경될 수 있는 위험성도 낮아짐

// 긴 생명 주기
// 전역 변수는 생명 주기가 길다
// 14-03
var x = 1;
// ...
// 변수의 중복 선언. 기존 변수에 값을 재할당한다.
var x = 100;
console.log(x); // 100

// 스코프 체인 상에서 종점에 존재
// 전역 변수의 검색 속도가 가장 느리다
// 네임스페이스 오염

// 14.3 전역 변수의 사용을 억제하는 방법
// 전역 변수를 반드시 사용해야 할 이유를 찾지 못한다면 지역 변수를 사용해야 한다.

// 14.3.1 즉시 실행 함수
// 14-04
(function () {
  var foo = 10; // 즉시 실행 함수의 지역 변수
  // ..
})();

console.log(foo); // ReferenceError:

// 14.3.2 네임스페이스 객체
// 14-05
var MYAPP = {}; // 전역 네임스페이스 객체

MYAPP.name = "Lee";

console.log(MYAPP.name); // Lee

// 14-06
var MYAPP = {}; // 전역 네임스페이스 객체

MYAPP.person = {
  name: "Lee",
  address: "Seoul",
};

console.log(MYAPP.person.name); // Lee

// 14.3.3 모듈 패턴
// 14-07
var Counter = (function () {
  // private 변수
  var num = 0;

  return {
    increase() {
      return ++num;
    },
    decrease() {
      return --num;
    },
  };
})();

console.log(Counter.num); // undefined

console.log(Counter.increase()); // 1
console.log(Counter.increase()); // 2
console.log(Counter.decrease()); // 1
console.log(Counter.decrease()); // 0

// 14.3.4 ES6 모듈
// 14-08
{
  /* <script type="module" src="lib.mjs"></script>
<script type="module" src="app.mjs"></script> */
}
