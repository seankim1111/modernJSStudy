// 35장 스프레드 문법
// 35-01
// ..[1, 2, 3]은 [1, 2, 3]을 개별 요소로 분리한다. (>1, 2, 3)
console.log(...[1, 2, 3]); // 1 2 3

// 문자열은 이터러블이다.
console.log(..."Hello"); // H e l l o

// Map과 Set은 이터러블이다.
console.log(...new Map(["a", "1"], ["b", "2"])); // ["a", "1"] ["b", "2"]
console.log(...new Set([1, 2, 3])); // 1 2 3

// 이터러블이 아닌 일반 객체는 스프레드 문법의 대상이 될 수 없다.
console.log(...{ a: 1, b: 2 }); // TypeError

// 35-02
// 스프레드 문법의 결과는 값이 아니다.
// const list = ...[1, 2, 3]; // SyntaxError:

// 35.1 함수 호출문의 인수 목록에서 사용하는 경우
// 35-03
const arr = [1, 2, 3];

// 배열 arr의 요소 중에서 최대값을 구하기 위해 Math.max를 사용한다.
const max = Math.max(arr); // NaN

// 35-04
Math.max(1); // 1
Math.max(1, 2); // 2
Math.max(1, 2, 3); // 3
Math.max(); // -Infinity

// 35-05
Math.max([1, 2, 3]); // NaN

// 35-06
var arr = [1, 2, 3];

// apply 함수의 2번째 인수(배열)는 apply 함수가 호출하는 함수의 인수 목록이다.
// 따라서 배열이 펼쳐져서 인수로 전달되는 효과가 있다.
var max = Math.max.apply(null, arr); // 3

// 35-07
const arr = [1, 2, 3];

// 스프레드 문법을 사용하여 배열 arr을 1, 2, 3 으로 펼쳐서 Math.max에 전달한다.
// Math.max(...[1, 2, 3])은 Math.max(1, 2, 3)과 같다.
const max = Math.max(...arr); // 3

// 35-08
// Rest 파라미터는 인수들의 목록을 배열로 전달받는다.
function foo(...rest) {
  console.log(rest); // 1, 2, 3 > [1, 2, 3]
}

// 스프레드 문법은 배열과 같은 이터러블을 펼쳐서 개별적인 값들의 목록을 만든다.
// [1, 2, 3] > 1, 2, 3
foo(...[1, 2, 3]);

// 35.2 배열 리터럴 내부에서 사용하는 경우
// ____35.2.1 concat
// ES5에서 2개의 배열을 1개의 배열로 결합하고 싶은 경우 배열 리터럴만으로 해결할 수 없고 concat 메서드를 사용해야 한다.
// 35-09
// ES5
var arr = [1, 2].concat([3, 4]);
console.log(arr); // [1, 2, 3, 4]

// 35-10
// ES6
const arr = [...[1, 2], ...[3, 4]];
console.log(arr); // [1, 2, 3, 4]

// ____35.2.2 splice
// ES5에서 어떤 배열의 중간에 다른 배열의 요소들을 추가하거나 제거하려면 splice 메서드를 사용한다.
// 35-11
// ES5
var arr1 = [1, 4];
var arr2 = [2, 3];

// 세 번째 인수 arr2를 해체하여 전달해야 한다.
// 그렇지 않으면 arr1에 arr2 배열 자체가 추가된다.
arr1.splice(1, 0, arr2);
// [1, 2, 3, 4]가 아니다.
console.log(arr1); // [ 1, [ 2, 3 ], 4 ]

// 35-12
// ES5
var arr1 = [1, 4];
var arr2 = [2, 3];

// apply 메서드의 2번째 인수는 apply 메서드가 호출한 splice 메서드의 인수 목록이다.
// apply 메서드의 2번째 인수 [1, 0].concat(arr2)는 [1, 0, 2, 3]으로 평가된다.
// 따라서 splice 메서드에 apply 메서드의 2번째 인수 [1, 0, 2, 3]이 해체되어 전달된다.
// 즉, arr1[1]부터 0개의 요소를 제거하고 그 자리(arr1[1])에 새로운 요소(2, 3)을 삽입한다.

Array.prototype.splice.apply(arr1, [1, 0].concat(arr2));
console.log(arr1); // [1, 2, 3, 4]

// 35-13
// ES6
var arr1 = [1, 4];
var arr2 = [2, 3];

arr1.splice(1, 0, ...arr2);
console.log(arr1); // [1, 2, 3, 4]

// ____35.2.3 배열 복사
// 35-14
// ES5
var arr1 = [1, 2];
var copy = origin.slice();

console.log(copy); // [1, 2]
console.log(copy === origin); // false

// 35-15
var arr1 = [1, 2];
var copy = [...origin];

console.log(copy); // [1, 2]
console.log(copy === origin); // false

// ____35.2.4 이터러블을 배열로 변환
// 35-16
// ES5
function sum() {
  // 이터러블이면서 유사 배열 객체인 arguments를 배열로 반환
  var args = Array.prototype.slice.call(arguments);

  return args.reduce(function (pre, cur) {
    return pre + cur;
  }, 0);
}

console.log(sum(1, 2, 3)); // 6

// 35-17
// 이터러블이 아닌 유사 배열 객체
const arrayLike = {
  0: 1,
  1: 2,
  2: 3,
  length: 3,
};

const arr = Array.prototype.slice.call(arrayLike); // [1, 2, 3]
console.log(Array.isArray(arr)); // true

// 35-18
function sum() {
  // 이터러블이면서 유사 배열 객체인 arguments 를 배열로 변환
  return [...arguments].reduce((pre, cur) => pre + cur, 0);
}

console.log(sum(1, 2, 3)); // 6

// 35-19
// Rest 파라미터 args는 함수에 전달된 인수들의 목록을 배열로 전달받는다.
const sum = (...args) => args.reduce((pre, cur) => pre + cur, 0);

console.log(sum(1, 2, 3)); // 6

// 35-20
// 이터러블이 아닌 유사 배열 객체
const arrayLike = {
  0: 1,
  1: 2,
  2: 3,
  length: 3,
};

const arr = [...arrayLike]; // TypeError:

// 35-21
// Array.from은 유사 배열 객체 또는 이터러블을 배열로 변환한다.
Array.from(arrayLike); // [1, 2, 3]

// 35.3 객체 리터럴 내부에서 사용하는 경우
// 35-22
// 스프레드 프로퍼티
// 객체 복사(얇은 복사)
const obj = { x: 1, y: 2 };
const copy = { ...obj };
console.log(copy); // { x: 1, y: 2 }
console.log(obj === copy); // false

// 객체 병합
const merged = { x: 1, y: 2, ...{ a: 3, b: 4 } };
console.log(merged); // { x: 1, y: 2, a: 3, b: 4 };

// 35-23
// 객체 병합. 프로퍼티가 중복되는 경우 뒤에 위치한 프로퍼티가 우선권을 갖는다.
const merged = Object.assign({}, { x: 1, y: 2 }, { y: 10, z: 3 });
console.log(merged); // { x: 1, y: 10, z: 3 }

// 특정 프로퍼티 변경
const changed = Object.assign({}, { x: 1, y: 2 }, { y: 100 });
console.log(changed); // { x: 1, y: 100 }

// 프로퍼티 추가
const added = Object.assign({}, { x: 1, y: 2 }, { z: 0 });
console.log(added); // { x: 1, y: 2, z: 0 }

// 35-24
// 객체 병합. 프로퍼티가 중복되는 경우 뒤에 위치한 프로퍼티가 우선권을 갖는다.
const merged = { ...{ x: 1, y: 2 }, ...{ y: 10, z: 3 } };
console.log(merged); // { x: 1, y: 10, z: 3 }

// 특정 프로퍼티 변경
const changed = { ...{ x: 1, y: 2 }, y: 100 };
// changed = { ...{ x:1, y: 2 }, ...{ y: 100 } }
console.log(changed); // { x: 1, y: 100 }

// 프로퍼티 추가
const added = { ...{ x: 1, y: 2 }, z: 0 };
// added = { ...{ x: 1, y: 2 }, ...{ z: 0 } }
console.log(added); // { x: 1, y: 2, z: 0 }
