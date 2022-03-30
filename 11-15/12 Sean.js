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

console.log(add(2, 5)); // 7

// 12.4.2 함수 표현식
// 12-10
var add = function (x, y) {
  return x + y;
};

console.log(add(2, 5)); // 7

// 12-11
// 기명 함수 표현식
var add = function foo(x, y) {
  return x + y;
};

console.log(add(2, 5)); // 7

console.log(foo(2, 5)); // ReferenceError:

// 12.4.3 함수 생성 시점과 함수 호이스팅
// 12-12
// 함수 참조
console.dir(add); // function add(x, y)
console.dir(sub); // undefined
// 함수 호출
console.log(add(2, 5)); // 7
console.log(sub(2, 5)); // TypeError:
// 함수 선언문
function add(x, y) {
  return x + y;
}
// 함수 표현식
var sub = function (x, y) {
  return x - y;
};

// 12.4.4 Function 생성자 함수
// 12-13
var add = new Function("x", "y", "return x+y");

console.log(add(2, 5)); // 7

// 12-14
var add1 = (function () {
  var a = 10;
  return function (x, y) {
    return x + y + a;
  };
})();

console.log(add2(1, 2)); // ReferenceError:

// 12.4.5 화살표 함수
// 12-15
const add = (x, y) => x + y;

console.log(add(2, 5)); // 7

// 12.5 함수 호출
// 12.5.1 매개변수와 인수
// 12-16
function add(x, y) {
  return x + y;
}
var result = add(1, 2);

// 12-17
function add(x, y) {
  console.log(x, y); // 2 5
  return x + y;
}
add(2, 5);

console.log(x, y); // ReferenceError:

// 12-18
function add(x, y) {
  return x + y;
}

console.log(add(2)); // NaN

// 12-19
function add(x, y) {
  return x + y;
}

console.log(add(2, 5, 10)); // 7

// 12-20

function add(x, y) {
  console.log(arguments);
  // Arguments(3) [2, 5, 10 callee: function, Symbol(Symbol.iterator: function)]
  return x + y;
}
add(2, 5, 10);

// 12.5.2 인수 확인
// 12-21
function add(x, y) {
  return x + y;
}

// 12-22
console.log(add(2)); // NaN
console.log(add("a", "b")); // 'ab'

// 12-23
function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new TypeError("인수는 모두 숫자 값이어야 합니다.");
  }
  return x + y;
}

console.log(add(2)); // TypeError: 인수는 모두 숫자 값이어야 합니다.
console.log(add("a", "b")); // TypeError: 인수는 모두 숫자 값이어야 합니다.

// 12-24
function add(a, b, c) {
  a = a || 0;
  b = b || 0;
  c = c || 0;
  return a + b + c;
}

console.log(add(1, 2, 3)); // 6
console.log(add(1, 2)); // 3
console.log(add(1)); // 1
console.log(add()); // 0

// 12-25
function add(a = 0, b = 0, c = 0) {
  return a + b + c;
}

console.log(add(1, 2, 3)); // 6
console.log(add(1, 2)); // 3
console.log(add(1)); // 1
console.log(add()); // 0

// 12.5.3 매개변수의 최대 개수
// 12-26
// 가급적 작게, 최대 3개 이상 넘지 않는 것 권장
$.ajax({
  method: "POST",
  url: "/user",
  data: { id: 1, name: "Lee" },
  cache: false,
});

// 12.5.4 반환문
// 12-17
function multiply(x, y) {
  return x * y; // 반환문
}
// 함수 호출은 반환값으로 평가됨
var result = multiply(3, 5);
console.log(result); // 15

// 12-18
function multiply(x, y) {
  return x * y; // 반환문
  // 반환문 이후에 다른 문이 존재하면 그 문은 실행되지 않고 무시된다.
  console.log("실행되지 않는다.");
}
console.log(multiply(3, 5)); // 15

// 12-29
function foo() {
  return;
}
console.log(foo()); // undefined

// 12-30
function foo() {
  // 반환문을 생략하면 암묵적으로 undefined 가 반환된다.
}
console.log(foo()); // undefined

// 12-31
function multiply(x, y) {
  // return 키워드와 반환값 사이에 줄바꿈이 있으면
  return; // 세미콜론 자동 삽입 기능(ASI)에 의해 세미콜론이 추가된다.
  x * y; // 무시된다
}
console.log(multiply(3, 5)); // undefined

// 12-32
// <!DOCTYPE html>
<html>
  <body>
    <script>
      return;
      {/* SyntaxError */}
    </script>
  </body>
</html>;

// 12.6 참조에 의한 전달과 외부 상태의 변경
// 12-33
// 매개변수 primitive 는 원시 값을 전달받고, 매개변수 obj 는 객체를 전달받는다.
function changeVal(primitive, obj) {
  primitive += 100;
  obj.name = "Kim";
}
// 외부상태
var num = 100;
var person = { name: "Lee" };

console.log(num); // 100
console.log(person); // {name : 'Lee'}

changeVal(num, person);

console.log(num); // 100
console.log(person); // {name : 'Kim'}

// 12.7 다양한 함수의 형태
// 12.7.1 즉시 실행 함수
// 12-34
// 익명 즉시 실행 함수
(function () {
  var a = 3;
  var b = 5;
  return a * b;
})();

// 12-35
// 기명 즉시 실행 함수
(function foo() {
  var a = 3;
  var b = 5;
  return a * b;
})();

foo(); // ReferenceError:

// 12-36
// function () { // SyntaxError:
// ...
// }();

// 12-37
// function foo() {
// ...
// }(); // SyntaxError:

// 12-38
// function foo() {}(); // => function foo() {};();

// 12-39
// (); // SyntaxError:

// 12-40
console.log(typeof function f() {}); // function
console.log(typeof function () {}); // function

// 12-41
(function () {
  // ...
})();

(function () {
  // ...
})();

!(function () {
  // ...
})();

+(function () {
  // ...
})();

// 12-42
var res = (function () {
  var a = 3;
  var b = 5;
  return a * b;
})();

console.log(res); // 15

res = (function (a, b) {
  return a * b;
})(3, 5);

console.log(res); // 15

// 12.7.2 재귀 함수
// 12-43
function countdown(n) {
  for (var i = n; i >= 0; i--) console.log(i);
}

countdown(10);

// 12-44
function countdown(n) {
  if (n < 0) return;
  console.log(n);
  countdown(n - 1); // 재귀 호출
}

countdown(10);

// 12-45
// 팩토리얼(계승)은 1부터 자신까지의 모든 양의 정수의 곱이다.
// n! = 1 * 2 * 3 .. * (n-1) * n
function factorial(n) {
  // 탈출 조건: n이 1 이하일 때 재귀 호출을 멈춘다.
  if (n <= 1) return 1;
  // 재귀 호출
  return n * factorial(n - 1);
}

console.log(factorial(0)); // 0! = 1
console.log(factorial(1)); // 1! = 1
console.log(factorial(2)); // 2! = 2 * 1 = 2
console.log(factorial(3)); // 3! = 6
console.log(factorial(4)); // 4! = 24
console.log(factorial(0)); // 5! = 120

// 12-46
var factorial = function foo(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};

console.log(factorial(5)); // 120

// 12-47
function factorial(n) {
  if (n <= 1) return 1;

  var res = n;
  while (--n) res *= n;
  return res;
}

console.log(factorial(0)); // 0! = 1
console.log(factorial(1)); // 1! = 1
console.log(factorial(2)); // 2! = 2 * 1 = 2
console.log(factorial(3)); // 3! = 3 * 2 * 1 = 6
console.log(factorial(4)); // 4! = 4 * 3 * 2 * 1 =24
console.log(factorial(0)); // 5! = 120

// 12.7.3 중첩 함수
// 12-48
function outer() {
  var x = 1;

  // 중첩 함수
  function inner() {
    var y = 2;
    console.log(x + y);
  }
  inner();
}
outer();

// 12.7.4 콜백 함수
// 12-49
function repeat(n) {
  for (var i = 0; i < n; i++) console.log(i);
}

repeat(5); // 0 1 2 3 4

// 12-50
function repeat1(n) {
  for (var i = 0; i < n; i++) console.log(i);
}

repeat(5); // 0 1 2 3 4

function repeat2(n) {
  for (var i = 0; i < n; i++) {
    if (i % 2) console.log(i);
  }
}

repeat(5); // 1 3

// 12-51
function repeat1(n, f) {
  for (var i = 0; i < n; i++) {
    f(i);
  }
}

var logAll = function (i) {
  console.log(i);
};

repeat(5, logAll); // 0 1 2 3 4

var logOdds = function (i) {
  if (i % 2) console.log(i);
};

repeat(5, logOdds); // 1 3

// 12-52
repeat(5, function (i) {
  if (i % 2) console.log(i);
}); // 1 3

// 12-53
var logOdds = function (i) {
  if (i % 2) console.log(i);
};
repeat(5, logOdds); // 1 3

// 12-54
document.getElementById("myButton").addEventListener("click", function () {
  console.log("button clicked!");
});

// 콜백 함수를 사용한 비동기 처리
// 1초 후에 메시지를 출력
setTimeout(function () {
  console.log("1초 경과");
}, 1000);

// 12-55
var res = [1, 2, 3].map(function (item) {
  return item * 2;
});

console.log(res); // [2, 4, 6]

var res = [1, 2, 3].filter(function (item) {
  return item % 2;
});

console.log(res); // [1, 3]

var res = [1, 2, 3].reduce(function (acc, cur) {
  return acc + cur;
}, 0);

console.log(res); // 6

// 12.7.5 순수 함수와 비순수 함수
// 12-56
var count = 0;

function increase(n) {
  return ++n;
}

count = increase(count);
console.log(count); // 1

count = increase(count);
console.log(count); // 2

// 12-57
var count = 0;

function increase() {
  return ++count;
}

increase();
console.log(count); // 1

increase();
console.log(count); // 2
