// 49장 Babel과 Webpack을 이용한 ES6+/ES.NEXT 개발 환경 구축
// 49.1 Babel
// 49-01
[1, 2, 3].map((n) => n ** n);

// Babel을 사용하면 위 코드를 다음과 같이 ES5 사양으로 변환할 수 있다.

// 49-02
"use strict"[(1, 2, 3)].map(function (n) {
  return Math.pow(n, n);
});

// 이처럼 Babel은 최신 사양의 소스코드를 IE 같은 구형 브라우저에서도 동작하는 ES5 사양의 소스코드로 변환(트랜스파일링)할 수 있다.

// ____49.1.1 Babel 설치
// 프로젝트 폴더 생성
// $ mkdir esnext-project && cd esnext-project
// package.json 생성
// $ npm init -y
// babel-core, babe-cli 설치
// $ npm install --save-dev @babel/core @babel/cli

//설치가 완료된 package.json 파일.
// 49-03
{
 "name": "esnext-project",
 "version": "1.0.0",
 "devDependencies": {
   "@babel/cli": "^7.10.3"
   "@babel/core": "^7.10.3"
 }
}

// ____49.1.2 Babel 프리셋 설치와 babel.config.json 설정 파일 작성
// 49-04
// 49-05

// ____49.1.3 트랜스파일링
// 49-06
// 49-07
// src/js/lib.js
export const pi = Math.PI; // ES6 모듈

export function power(x, y) {
  return x ** y; // ES7: 지수 연산자
}

// ES6 클래스
export class Foo {
  #private = 10; // stage 3: 클래스 필드 정의 제안

  foo() {
    // stage 4: 객체 Rest/Spread 프로퍼티 제안
    const { a, b, ...x } = { ...{ a: 1, b: 2 }, c: 3, d: 4 };
    return { a, b, x };
  }

  bar() {
    return this.#private;
  }
}

// 49-08
// src/js/main.js
import { pi, power, Foo } from "./lib";

console.log(pi);
console.log(power(pi, pi));

const f = new Foo();
console.log(f.foo());
console.log(f.bar());

// ____49.1.4 Babel 플러그인 설치
// 49-09
// 49-10

// ____49.1.5 브라우저에서 모듈 로딩 테스트
// 49-11
// dist/js/main.js
("use strict");

var _lib = require("./lib");

// src/js/main.js
console.log(_lib.pi);
console.log((0, _lib.power)(_lib.pi, _lib.pi));
var f = new _lib.Foo();
console.log(f.foo());
console.log(f.bar());

// 49-12

// 49.2 Webpack
// Webpack은 의존 관계에 있는 자바스크립트, CSS, 이미지 등의 리소스들을 하나(또는 여러 개)의 파일로 번들링하는 모듈 번들러다.

// ____49.2.1 Webpack 설치
// 49-13

// ____49.2.2 babel-loader 설치
// 49-14

// ____49.2.3 webpack.config.js 설정 파일 작성
// 49-15
// 49-16

// ____49.2.4 babel-polyfill 설치
// 49-17
// 49-18
// 49-19
// 49-20
// 49-21
