// 28장: Number
// 28.1 Number 생성자 함수
// 28-01
const numObj = new Number();
console.log(numObj); // Number {[[PrimitiveValue]]: 0}

// 28-02
const numObj = new Number(10);
console.log(numObj); // Number {[[PrimitiveValue]]: 10}

// 28-03
let numObj = new Number("10");
console.log(numObj); // Number {[[PrimitiveValue]]: 10}

numObj = new Number("Hello");
console.log(numObj); // Number {[[PrimitiveValue]]: NaN}

// 28-04
// 문자열 타입 => 숫자 타입
Number("0"); // 0
Number("-1"); // -1
Number("10.53"); // 10.53

// 불리언 타입 => 숫자 타입
Number(true); // 1
Number(false); // 0

// 28.2 Number 프로퍼티
// ____28.2.1 Number.EPSILON
// Number.EPSILON은 1과 1보다 큰 숫자 중에서 가장 작은 숫자와의 차이와 같다.
// 28-05
0.1 + 0.2; // 0.3000000000000004
0.1 + 0.2 === 0.3; // false

// 28-06
function isEqual(a, b) {
  // a와 b를 뺀 값의 절대값이 Number.EPSILON보다 작으면 같은 수로 인정한다.
  return Math.abs(a - b) < Number.EPSILON;
}

isEqual(0.1 + 0.2, 0.3); // true

// ____28.2.2 Number.MAX_VALUE
// Number.MAX_VALUE는 자바스크립트에서 표현할 수 있는 가장 큰 양수 값 이다.
// 28-07
Number.MAX_VALUE; // 1.797693134...e + 308
Infinity > Number.MAX_VALUE; // true

// ____28.2.3 Number.MIN_VALUE
// Number.MIN_VALUE는 자바스크립트에서 표현할 수 있는 가장 작은 양수 값 이다.
// 28-08
Number.MIN_VALUE; // 5e-324
Number.MIN_VALUE > 0; // true

// ____28.2.4 Number.MAX_SAFE_INTEGER
// Number.MAX_SAFE_INTEGER는 자바스크립트에서 안전하게 표현할 수 있는 가장 큰 정수값 이다.
// 28-09
Number.MAX_SAFE_INTEGER; // 9007199254...

// ____28.2.5 Number.MIN_SAFE_INTEGER
// Number.MIN_SAFE_INTEGER는 자바스크립트에서 안전하게 표현할 수 있는 가장 작은 정수값 이다.
// 28-10
Number.MIN_SAFE_INTEGER; // -9007199254...

// ____28.2.6 Number.POSITIVE_INFINITY
// Number.POSITIVE_INFINITY는 양의 무한대를 나타내는 숫자값 Infinity와 같다.
// 28-11
Number.POSITIVE_INFINITY; // Infinity

// ____28.2.7 Number.NEGATIVE_INFINITY
// Number.NEGATIVE_INFINITY는 음의 무한대를 나타내는 숫자값 -Infinity와 같다.
// 28-12
Number.NEGATIVE_INFINITY; // -Infinity

// ____28.2.8 Number.NaN
// Number.NaN은 숫자가 아님을 나타내는 숫자값이다.
// 28-13
Number.NaN; // NaN

// 28.3 Number 메서드
// ____28.3.1 Number.isFinite
// Number.isFinite 정적 메서드는 인수로 전달된 숫자값이 정상적인 유한수, 즉 Infinity 또는 -Infinity 가 아닌지 검사하여 그 결과를 불리언 값으로 반환한다.
// 28-14
// 인수가 정상적이 유한수이면 true를 반환한다.
Number.isFinite(0); // true
Number.isFinite(Number.MAX_VALUE); // true
Number.isFinite(Number.MIN_VALUE); // true

// 인수가 무한수이면 false를 반환한다.
Number.isFinite(Infinity); // false
Number.isFinite(-Infinity); // false

// 28-15
Number.isFinite(NaN); // false

// 28-16
// Number.isFinite는 인수를 숫자로 암묵적 타입 변환하지 않는다.
Number.isFinite(null); // false

// isFinite는 인수를 숫자로 암묵적 타입 변환한다. null은 0으로 암묵적 타입 변환된다.
isFinite(null); // true

// ____28.3.2 Number.isInteger
// Number.isInteger 정적 메서드는 인수로 전달된 숫자값이 정수인지 검사하여 그 결과를 불리언 값으로 반환한다.
// 28-17
// 인수가 정수이면 true를 반환한다.
Number.isInteger(0); // true
Number.isInteger(123); // true
Number.isInteger(-123); // true

// 0.5는 정수가 아니다.
Number.isInteger(0.5); // false
// '123'을 숫자로 암묵적 타입 변환하지 않는다.
Number.isInteger("123"); // false
// false를 숫자로 암묵적 타입 변환하지 않는다.
Number.isInteger(false); // false
// Infinity/-Infinity는 정수가 아니다.
Number.isInteger(Infinity); // false
Number.isInteger(-Infinity); // false

// ____28.3.3 Number.isNaN
// Number.isNaN 정적 메서드는 인수로 전달된 숫자값이 NaN인지 검사하여 그 결과를 불리언 값으로 반환한다.
// 28-18
// 인수가 NaN 이면 true를 반환한다.
Number.isNaN(NaN); // true

// 28-19
// Number.isNaN은 인수를 숫자로 암묵적 타입 변환하지 않는다.
Number.isNaN(undefined); // false

// isFinite는 인수를 숫자로 암묵적 타입 변환한다. undefined는 NaN으로 암묵적 타입 변환된다.
isNaN(undefined); // true

// ____28.3.4 Number.isSafeInteger
// Number.isSafeInteger 정적 메서드는 인수로 전달된 숫자값이 안전한 정수인지 검사하여 그 결과를 불리언 값으로 반환한다.
// 28-20
// 0은 안전한 정수다.
Number.isSafeInteger(0); // true
// 1000000000은 안전한 정수다.
Number.isSafeInteger(1000000000); // true

// 10000000001은 안전하지 않다.
Number.isSafeInteger(10000000001); // false
// 0.5는 정수가 아니다.
Number.isSafeInteger(0.5); // false
// "123"을 숫자로 암묵적 타입 변환하지 않는다.
Number.isSafeInteger("123"); // false
// false를 숫자로 암묵적 타입 변환하지 않는다.
Number.isSafeInteger(false); // false
// Infinity/-Infinity는 정수가 아니다.
Number.isSafeInteger(Infinity); // false

// ____28.3.5 Number.prototype.toExponential
// toExponential 메서드는 숫자를 지수 표기법으로 변환하여 문자열로 반환한다.
// 28-21
(77.1234).toExponential(); // "7.71234e+1"
(77.1234).toExponential(4); // "7.7123e+1"
(77.1234).toExponential(2); // "7.71e+1"

// 28-22
77.toExponential(); // SyntaxError:

// 28-23
77.1234.toExponential(); // "7.71234e+1"

// 28-24
(77).toExponential() // "7.71e+1"

// 28-25
77 .toExponential() // "7.71e+1"

// ____28.3.6 Number.prototype.toFixed
// toFixed 메서드는 숫자를 반올림하여 문자열로 반환한다.
// 28-26
// 소수점 이하 반올림. 인수를 생략하면 기본값 0이 지정된다.
(12345.6789).toFixed(); // "12346"

(12345.6789).toFixed(1); // "12345.7"

(12345.6789).toFixed(2); // "12345.68"

(12345.6789).toFixed(3); // "12345.679"


// ____28.3.7 Number.prototype.toPrecision
// toPrecision 메서드는 인수로 전달받은 전체 자릿수까지 유효하도록 나머지 자릿수를 반올림하여 문자열로 반환한다.
// 28-27
(12345.6789).toPrecision(); // "12345.6789"

(12345.6789).toPrecision(1); // "1e+4"

(12345.6789).toPrecision(2); // "1.2e+4"

(12345.6789).toPrecision(6); // "12345.7"

// ____28.3.8 Number.prototype.toString
// toString 메서드는 숫자를 문자열로 변환하여 반환한다.
// 28-28
(10).toString(); // "10"

(16).toString(2); // "10000"

(16).toString(8); // "20"

(16).toString(16); // "10"
