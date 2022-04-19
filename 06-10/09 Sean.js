// 09장 타입 변환과 단축 평가

// 9.1 타입 변환이란?
// 개발자가 의도적으로 값의 타입을 변환하는 것을
// 명시적 타입 변환 explicit coercion 또는 타입 캐스팅 type casting 이라 한다.
// 09-01
var x = 10;
// 명시적 타입 변환
// 숫자를 문자어로 타입 캐스팅한다.
var str = x.toString();
console.log(typeof str, str); // string 10

console.log(typeof x, x); // number 10

// 09-02
var x = 10;
// 암묵적 타입 변환
// 문자열 연결 연산자는 숫자 타입 x의 값을 바탕으로 새로운 문자열을 생성한다.
var str = x + "";
console.log(typeof str, str); // string 10

console.log(typeof x, x); // number 10

// 9.2 암묵적 타입 변환
// 09-03
// 피연산자가 모두 문자열 타입이어야 하는 문맥
"10" + 2; // '102'

// 피연산자가 모두 숫자 타입이어야 하는 문맥
5 * "10"; // '50'

// 피연산자 또는 표현식이 불리언 타입이어야 하는 문맥
!0; // true
if (1) {
}

// 9.2.1 문자열 타입으로 변환
// 09-04
1 + "2"; // "12"

// 09-05
`1 + 1 = ${1 + 1}`; // "1 + 1 = 2"

// 09-06
// 숫자 타입
// 0 + '' // 0
// -0 + '' // 0
// 1 + '' // 1
// -1 + '' // -1
// NaN + '' // NaN
// Infinity + '' // Infinity
// -Infinity + '' // -Infinity

// // 불리언 타입
// true + '' // true
// false + '' // false

// // null 타입
// null + '' // null

// // undefined 타입
// undefined + '' // undefined

// // 심벌 타입
// (Symbol()) + '' // TypeError

// // 객체 타입
// ({}) + '' // [object Object]
// Math + '' // [object Math]
// [] + '' // ""
// [10, 20] + '' // 10, 20
// (function(){}) + '' // function(){}
// Array + '' // function Array() { [native code] }

// 9.2.2 숫자 타입으로 변환
// 09-07
// 1 - '1' // 0
// 1 * '10' // 10
// 1 / 'one' // NaN

// // 09-08
// '1' > 0 // true

// 09-09
// 문자열 타입
// + '' // 0
// + '0' // 0
// + '1' // 1
// + 'string' // NaN

// 불리언 타입
// +true // 1
// +false // 0

// null 타입
// +null // 0

// undefined 타입
// +undefined // NaN

// 심벌 타입
// +Symbol() // TypeError

// 객체 타입
// +{} // NaN
// +[] // 0
// +[10, 20] // NaN
// +(function(){}) // NaN

// 9.2.3 불리언 타입으로 변환
// 09-10
if ("") console.log(x);

// 09-11
if ("") console.log("1");
if (true) console.log("2");
if (0) console.log("3");
if ("str") console.log("4");
if (null) console.log("5");
// 2 4

// 9.3 명시적 타입 변환

// 9.3.1 문자열 타입으로 변환
// 9.3.2 숫자 타입으로 변환
// 9.3.3 불리언 타입으로 변환

// 9.4 단축 평가
