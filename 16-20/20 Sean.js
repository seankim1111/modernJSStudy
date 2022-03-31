// 20장 strict mode
// 20.1 strict mode란?
// 20-01
function foo() {
  x = 10;
}

foo();

console.log(x); // undefined

// ESLint 사용하기

// 20.2 strict mode의 적용
// 20-02
("use strict");

function foo() {
  x = 10; // ReferenceError:
}

foo();

// 20-03
function foo() {
  ("use strict");

  x = 10; // ReferenceError:
}

foo();

// 20-04
function foo() {
  x = 10; // 에러 없음
  ("use strict");
}

foo();

// 20.3 전역에 strict mode를 적용하는 것은 피하자
// 20-05
// <!DOCTYPE html>
// <html>
// <body>
//   <script>
//     'use strict';
//   </script>
//   <script>
//     x = 1; // 에러 없음
//     console.log(x); // 1
//   </script>
//   <script>
//     'use strict';

//     y = 1; // ReferenceError: y is not defined
//     console.log(y);
//   </script>
// </body>
// </html>

// 20-06
// 즉시 실행 함수의 선두에 strict mode 적용
(function () {
  "use strict";

  // Do something..
})();

// 20.4 함수 단위로 strict mode를 적용하는 것도 피하자
// 20-07
(function () {
  // non-strict mode
  var let = 10;
  function foo() {
    "use strict";

    let = 20; // SyntaxError:
  }
  foo();
})();

// 따라서 strict mode 는 즉시 실행 함수로 감싼 스크립트 단위로 적용하는 것이 바람직하다.

// 20.5 strict mode가 발생시키는 에러
// ____20.5.1 암묵적 전역
// 20-08
(function () {
  "use strict";

  x = 1;
  console.log(x); // ReferenceError:
})();

// ____20.5.2 변수, 함수, 매개변수의 삭제
// 20-09
(function () {
  "use strict";

  var x = 1;
  delete x; // SyntaxError:

  function foo(a) {
    delete a; // SyntaxError:
  }
  delete foo; // SyntaxError:
})();

// ____20.5.3 매개변수 이름의 중복
// 20-10
(function () {
  "use strict";

  // SyntaxError:
  function foo(x, x) {
    return x + x;
  }
  console.log(foo(1, 2));
})();

// ____20.5.4 with 문의 사용
// 20-11
(function () {
  "use strict ";

  // SyntaxError:
  with ({ x: 1 }) {
    console.log(x);
  }
})();

// 20.6 strict mode 적용에 의한 변화
// ____20.6.1 일반 함수의 this
// 20-12
(function () {
  "use strict";

  function foo() {
    console.log(this); // undefined
  }
  foo();

  function Foo() {
    console.log(this); // Foo
  }
  new Foo();
})();

// ____20.6.2 arguments 객체
// 20-13
(function (a) {
  "use strict";
  // 매개변수에 전달된 인수를 재할당하여 변경
  a = 2;

  // 변경된 인수가 arguments 객체에 반영되지 않는다.
  console.log(arguments); // {0: 1, length: 1}
})(1);
