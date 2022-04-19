// 48장 모듈
// 48.1 모듈의 일반적 의미
// 모듈이란 에플리케이션을 구성하는 개별적 요소로서 재사용 가능한 코드 조각을 말한다.
// 모듈은 공개가 필요한 자산에 한정하여 명시적으로 선택적 공개가 가능하다. 이를 export라 한다.
// 모듈 사용자는 모듈이 공개한 자산 중 일부 또는 전체를 선택해 자신의 스코프 내로 불러들여 재사용할 수 있다. 이를 import라 한다.

// 48.2 자바스크립트와 모듈

// 48.3 ES6 모듈(ESM)
// 48-01
<script type="module" src="app.mjs"></script>;
// 기본적으로 strict mode가 적용된다.

// ____48.3.1 모듈 스코프
// 48-02
// foo.js
// x 변수는 전역 변수다.
var x = "foo";
console.log(window.x); // foo

// 48-03
// bar.js
// x 변수는 전역 변수다. foo.js에서 선언한 전역 변수 x와 중복된 선언이다.
var x = "bar";

// foo.js에서 선언한 전역 변수 x의 값이 재할당되었다.
console.log(window.x); // bar

// 48-04
// {/* <body>
//   <script src="foo.js"></script>
//   <script src="bar.js"></script>
// </body>; */}

// 48-05
// foo.mjs
// x 변수는 전역 변수가 아니며 window 객체의 프로퍼티도 아니다.
var x = "foo";
console.log(x); // foo
console.log(window.x); // undefined

// 48-06
// bar.mjs
// x 변수는 전역 변수가 아니며 window 객체의 프로퍼티도 아니다.
// foo.mjs에서 선언한 x 변수와 스코프가 다른 변수다.
var x = "bar";
console.log(x); // bar
console.log(window.x); // undefined

// 48-07
{
  /* <body>
  <script type="module" src="foo.mjs"></script>
  <script type="module" src="bar.mjs"></script>
</body> */
}

// 48-08
// foo.mjs
const x = "foo";
console.log(x); // foo

// 48-09
// bar.mjs
console.log(x); // ReferenceError:

// 48-10
{
  /* <body>
  <script type="module" src="foo.mjs"></script>
  <script type="module" src="bar.mjs"></script>
</body> */
}

// ____48.3.2 export 키워드
// 48-11
// lib.mjs
// 변수의 공개
export const pi = Math.PI;

// 함수의 공개
export function square(x) {
  return x * x;
}

// 클래스의 공개
export class Person {
  constructor(name) {
    this.name = name;
  }
}

// 48-12
// lib.mjs
export const pi = Math.PI;

export function square(x) {
  return x * x;
}

class Person {
  constructor(name) {
    this.name = name;
  }
}

// 변수, 함수 클래스를 하나의 객체로 구성하여 공개
export { pi, square, Person };

// ____48.3.3 import 키워드
// 48-13
// app.mjs
// 같은 폴터 내의 lib.mjs 모듈이 export한 식별자 이름으로 import한다.
// ESM의 경우 파일 확장자를 생략할 수 없다.
import { pi, square, Person } from "./lib.mjs";

console.log(pi); // 3.14159265358...
console.log(square(10)); // 100
console.log(new Person("Lee")); // Person { name: "Lee" }

// 48-14
// 48-15
// app.mjs
// lib.mjs 모듈이 export한 모든 실별자를 lib 객체의 프로퍼티로 모아 import한다.
import * as lib from "./lib.mjs";

console.log(lib.pi); // 3.14159265358...
console.log(lib.square(10)); // 100
console.log(new lib.Person("Lee")); // Person { name: "Lee" }

// 48-16
// app.mjs
// lib.mjs 모듈이 export한 식별자 이름을 변경하여 import한다.
import { pi as PI, square as sq, Person as P } from "./lib.mjs";

console.log(PI); // 3.14159265358...
console.log(sq(2)); // 4
console.log(new P("Kim")); // Person { name: "Kim" }

// 48-17
// lib.mjs
export default (x) => x * x;

// 48-18
// lib.mjs
export default const foo = () => {};
// => SyntaxError:
// export default () => {};

// 48-19
// app.mjs
import square from "./lib.mjs";

console.log(square(3)); // 9
