// 29장 Math
// 29.1 Math 프로퍼티
// ____29.1.1 Math.PI
// 원주율 값을 반환한다.
// 29-01
Math.PI; // 3.141592653...

// 29.2 Math 메서드
// ____29.2.1 Math.abs
// Math.abs 메서드는 인수로 전달된 숫자의 절대값을 반환한다.
// 29-02
Math.abs(-1); // 1
Math.abs("-1"); // 1
Math.abs(""); // 0
Math.abs([]); // 0
Math.abs(null); // 0
Math.abs(undefined); // NaN
Math.abs({}); // NaN
Math.abs("string"); // NaN
Math.abs(); // NaN

// ____29.2.2 Math.round
// Math.round 메서드는 인수로 전달된 숫자의 소수점 이하를 반올림한 정수를 반환한다.
// 29-03
Math.round(1.4); // 1
Math.round(1.6); // 2
Math.round(-1.4); // -1
Math.round(-1.6); // -2
Math.round(1); // 1
Math.round(); // NaN

// ____29.2.3 Math.ceil
// Math.ceil 메서드는 인수로 전달된 숫자의 소수점 이하를 올림한 정수를 반환한다.
// 29-04
Math.ceil(1.4); // 1
Math.ceil(1.6); // 2
Math.ceil(-1.4); // -1
Math.ceil(-1.6); // -2
Math.ceil(1); // 1
Math.ceil(); // NaN

// ____29.2.4 Math.floor
// Math.floor 메서드는 인수로 전달된 숫자의 소수점 이하를 내림한 정수를 반환한다.
// 29-05
Math.floor(1.9); // 1
Math.floor(9.1); // 9
Math.floor(-1.9); // -2
Math.floor(-9.1); // -10
Math.floor(1); // 1
Math.floor(); // 0

// ____29.2.5 Math.sqrt
// Math.sqrt 메서드는 인수로 전달된 숫자의 제곱근을 반환한다.
// 29-06
Math.sqrt(9); // 3
Math.sqrt(-9); // -3
Math.sqrt(2); // 1.414221356...
Math.sqrt(1); // 1
Math.sqrt(0); // 0
Math.sqrt(); // NaN

// ____29.2.6 Math.random
// Math.random 메서드는 임의의 난수를 반환한다.
// 29-07
Math.random(); // 0에서 1 미만의 랜덤 실수 (0.82817237721)

// 1에서 10 범위의 정수 구하는 법
const random = Math.floor(Math.random() * 10 + 1);
console.log(random); // 1에서 10 범위의 정수

// ____29.2.7 Math.pow
// Math.pow 메서드는 첫 번째 인수를 밑으로, 두 번째 인수를 지수로 거듭제곱한 결과를 반환한다.
// 29-08
Math.pow(2, 8); // 256
Math.pow(2, -1); // 0.5
Math.pow(2); // NaN

// 29-09
// ES7 지수 연산자
2 ** (2 ** 2); // 16
Math.pow(Math.pow(2, 2), 2); // 16

// ____29.2.8 Math.max
// Math.max 메서드는 전달받은 인수 중에서 가장 큰 수를 반환한다. 인수가 전달되지 않으면 -Infinity를 반환한다.
// 29-10
Math.max(1); // 1
Math.max(1, 2); // 2
Math.max(1, 2, 3); // 3
Math.max(); // -Infinity

// 29-11
// 배열 요소 중에서 최대값 취득
Math.max.apply(null, [1, 2, 3]); // 3

// ES6 스프레드 문법
Math.max(...[1, 2, 3]); // 3

// ____29.2.9 Math.min
// Math.min 메서드는 전달받은 인수 중에서 가장 작은 수를 반환한다. 인수가 전달되지 않으면 Infinity를 반환한다.
// 29-12
Math.min(1); // 1
Math.min(1, 2); // 1
Math.min(1, 2, 3); // 1
Math.min(); // Infinity

// 29-13
// 배열 요소 중에서 최소값 취득
Math.min.apply(null, [1, 2, 3]); // 1

// ES6 스프레드 문법
Math.min.apply(...[1, 2, 3]); // 1
