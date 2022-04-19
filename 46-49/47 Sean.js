// 47장: 에러 처리
// 47.1 에러 처리의 필요성
// 에러가 발생하지 않는 코드를 작성하는 것은 불가능하다. 발생한 에러에 대해 대처하지 않고 방치하면 프로그램은 강제 종료된다.
// 47-01
console.log("[Start]");

foo(); // ReferenceError:
// 발생한 에러를 방치하면 프로그램은 강제 종료된다.

// 에러에 의해 프로그램이 강제 종료되어 아래 코드는 실행되지 않는다.
console.log("[End]");

// try...catch 문을 사용해 발생한 에러에 적절하게 대응하면 프로그램이 강제 종료되지 않고 계속해서 코드를 실행시킬 수 있다.
// 47-02
console.log("[Start]");

try {
  foo();
} catch (error) {
  console.error("[에러 발생]", error);
  // [에러 발생] ReferenceError:
}

// 발생한 에러에 적절한 대응을 하면 프로그램이 강제 종료되지 않는다.
console.log("[End]");

// 47-03
// DOM에 button 요소가 존재하지 않으면 querySelector 메서드는 에러를 발생시키지 않고 null을 반환한다.
const $button = document.querySelector("button"); // null

$button.classList.add("disabled");
// TypeError:

// 47-04
const $elem = document.querySelector("#1");
// DOMException:

// 47-05
// // DOM에 button 요소가 존재하는 경우 querySelector 메서드는 에러를 발생시키지 않고 null을 반환한다.
const $button = document.querySelector("button"); // null
$button?.classList.add("disabled");

// 47.2 try...catch...finally 문
try {
  // 실행할 코드(에러가 발생할 가능성이 있는 코드)
} catch (err) {
  // try 코드 블록에서 에러가 발생하면 이 코드 블록의 코드가 실행된다.
  // err에는 try 코드 블록에서 발생한 Error 객체가 전달된다.
} finally {
  // 에러 발생과 상관없이 반드시 한 번 실행된다.
}

// 47-06
console.log("[Start]");

try {
  // 실행할 코드(에러가 발생할 가능성이 있는 코드)
  foo();
} catch (err) {
  // try 코드 블록에서 에러가 발생하면 이 코드 블록의 코드가 실행된다.
  // err에는 try 코드 블록에서 발생한 Error 객체가 전달된다.
  console.error(err); // ReferenceError:
} finally {
  // 에러 발생과 상관없이 반드시 한 번 실행된다.
  console.log("finally");
}

// try...catch...finally 문으로 에러를 처리하면 프로그램이 강제 종료되지 않는다.
console.log("[End]");

// 47.3 Error 객체
// 47-07
const error = new Error("invalid");

// 47-08
1 @ 1; // SyntaxError:
foo(); // ReferenceError:
null.foo; // TypeError:
new Array(-1); // RangeError:
decodeURIComponent("%"); // URIError:

// 47.4 throw 문
// 47-09
try {
  // 에러 객체를 생산한다고 에러가 발생하는 것은 아니다.
  new Error("something wrong");
} catch (error) {
  console.log(error);
}

// 47-10
try {
  // 에러 객체를 던지면 catch 코드 블록이 실행되기 시작한다.
  throw new Error("something wrong");
} catch (error) {
  console.log(error);
}

// 47-11
// 외부에서 전달받은 콜백 함수를 n번만큼 반복 호출한다.
const repeat = (n, f) => {
  // 매개변수 f에 전달된 인수가 함수가 아니면 TypeError를 발생시킨다.
  if (typeof f !== "function") throw new TypeError("f must be a function");

  for (var i = 0; i < n; i++) {
    f(i); // i를 전달하면서 f를 호출
  }
};

try {
  repeat(2, 1); // 두 번째 인수가 함수가 아니므로 TypeError가 발생(throw)한다.
} catch (err) {
  console.error(err); // TypeError:
}

// 47.5 에러의 전파
// 47-12
const foo = () => {
  throw Error("foo에서 발생한 에러"); // 4.
};

const bar = () => {
  foo(); // 3.
};

const bax = () => {
  bar(); // 2.
};

try {
  baz(); // 1.
} catch (err) {
  console.error(err);
}

// 1에서 baz 함수를 호출하면 2에서 bar 함수가 호출되고 3에서 foo 함수가 호출되고 foo 함수는 4에서 에러를 throw한다. 이때 foo 함수가 throw한 에러는 다음과 같이 호출자에게 전파되어 전역에서 캐치된다.
