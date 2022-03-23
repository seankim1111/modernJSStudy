//07장 연산자
//07-01
// 산술 연산자
5 * 4;
// 문자열 연결 연산자
"My name is " + "Lee";
// 할당 연산자
color = "red"; // 'red'
// 비교 연산자
3 > 5; // false
// 논리 연산자
true && false; // false
// 타입 연산자
typeof "Hi"; // string

//7.1 산술 연산자
//7.1.1 이항 산술 연산자

//7.1.2 단항 산술 연산자
//07-03
var x = 1;
x++; // x = x + 1;

console.log(x);
x--; // x = x - 1;

console.log(x);

//07-04
var x = 5,
  result;
// 선할당 후증가(postfix increment operator)
result = x++;
console.log(result, x); // 5 6
// 선증가 후할당(prefix increment operator)
result = ++x;
console.log(result, x); // 7 7
// 선할당 후감소(postfix decrement operator)
result = x--;
console.log(result, x); // 7 6
// 선감소 후할당(prefix decrement operator)
result = --x;
console.log(result, x); // 5 5

//07-05
+10; // 10
-10; // -10

//07-06
var x = "1";
console.log(+x); // 1
console.log(x); // "1"

x = true;
console.log(+x); // 1
console.log(x); // true

x = false;
console.log(+x); // 0
console.log(x); // false

x = "Hello";
console.log(+x); // NaN
console.log(x); // "Hello"

// 07-07
-(-10); // 10
-"10"; // 10
-true; // -1
-"Hello"; // NaN

//7.1.3 문자열 연결 연산자
// 07-08
"1" + 2; // '12'
1 + "2"; // '12'

1 + 2; // 3

1 + true; // 2
1 + false; // 0

1 + null; // 1

+undefined; // NaN
1 + undefined; // NaN

//7.2 할당 연산자
//07-09
var x;

x = 10;
console.log(x); // 10

x += 5; // x = x + 5;
console.log(x); // 15

x -= 5;
console.log(x); // 10

x *= 5;
console.log(x); // 50

x %= 5;
console.log(x); // 0

var str = "My name is";
str += "Lee"; // str = str + 'Lee';
console.log(str); // 'My name is Lee'

//07-11
var a, b, c;
a = b = c = 0;
console.log(a, b, c); // 0 0 0

//7.3 비교 연산자
//7.3.1 동등/일치 비교 연산자
//07-12
5 === 5; // true
5 == "5"; // true

//07-13
// 동등비교
"0" == ""; // false
0 == ""; // false
0 == "0"; // true
false == "false"; // false
false == "0"; // true
false == null; // false
false == undefined; // false

//07-14
// 일치 비교
5 === 5; // true
5 === "5"; // false

//07-15
NaN === NaN; // false

//07-16
Number.isNaN(NaN); // true
Number.isNaN(10); // false
Number.isNaN(1 + undefined); // true

//07-17
0 === 0; // true
0 == -0; // true

//07-18
-0 === +0; // true
Object.is(-0, +0); // false
NaN === NaN; // false
Object(NaN, NaN); // true

//07-19
// 부동등 비교
5 != 8; // true
5 != 5; // false
5 != "5"; // false
// 불일치 비교
5 !== 8; // true
5 !== 5; // false
5 !== "5"; // true

//7.3.2 대소 관계 비교 연산자
5 > 0; // true
5 = 0; // false
5 >= 5; // true
5 <= 5; // true

//7.4 삼항 조건 연산자
//07-21
var x = 2;
var result = x % 2 ? '홀수' : '짝수';
console.log(result); // 짝수

//07-22
var x = 2, result;
if(x % 2) result = '홀수';
else      result = '짝수';
console.log(result); // 짝수

//07-23
// var x = 10;
// var result = if(x % 2)  { result = '홀수'; } else { result = '짝수'; }
// SyntaxError: Unexpected token if

// 07-24
var x = 10;
var result = x % 2 ? '홀수' : '짝수';
console.log(result); // 짝수

//7.5 논리 연산자
// 07-25
// 논리합(||/OR) 연산자
true || true ; // true
true || false; // true
false || false; // false
// 논리곱(&&/AND) 연산자
true && true; // true
true && false; // false
false && false; // false
// 논리 부정(!/NOT) 연산자
!true; // false
!false; // true

// 07-26
// 암묵적 타입 변환
!0; // true
!'Hello' // false

//07-27
// 단축 평가
'Cat' && 'Dog'; // 'Dog'

// 07-28
// 드 모르간의 법칙
!(x || y) === (!x && !y)
!(x && y) === (!x || !y)

//7.6 쉼표 연산자
// 07-29
var x, y, z;
(x = 1), (y = 2), (z = 3); // 3

//7.7 그룹 연산자
// 07-30
10 * 2 + 3; // 23
// 그룹 연산자를 사용하여 우선순위를 조절
10 * (2 + 3); // 50

// 7.8 typeof 연산자
// 07-31
typeof '' // string
typeof 1 // number
typeof NaN // number
typeof true // boolean
typeof undefined // undefined
typeof Symbol() // symbol
typeof null // object
typeof [] // object
typeof {} // object
typeof new Date() // object
typeof /test/gi // object
typeof function () {} // function

//07-32
var foo = null

typeof foo === null; // false
foo === null; // true

//07-33
typeof undeclared; // undefined

// 7.9 지수 연산자
//07-34
// ES7
2 ** 2; // 4
2 ** 2.5; // 5.6568..
2 ** 0; // 1
2 ** -2; // 0.25

//07-35
// 지수 연산자 도입 전
Math.pow(2, 2); // 4
Math.pow(2, 2.5); // 5.6568..
Math.pow(2, 0); // 1
Math.pow(2, -2); // 0.25

//07-36
// 우결합성
2 ** (3 ** 2); //512

//07-37
-5 ** 2; // SyntaxError
(-5) ** 2; // 25

// 07-38
var num = 5;
num **= 2; // 25

//07-39
// 가장 높은 우선순위의 지수 연산자
2 * 5 ** 2; // 50

// 7.10 그 외의 연산자
?. // 옵셔널 체이닝 연산자
?? // null 병합 연산자
delete // 프로퍼티 삭제
new // 생성자 함수를 호출할 때 사용하여 인스턴스를 생성
instanceof // 좌변의 객체가 우변의 생성자 함수와 연결된 인스턴스인지 판별
in // 프로퍼티 존재 확인

// 7.11 연산자의 부수 효과
// 07-40
var x;
x = 1;
console.log(x); // 1
x++;
console.log(x); // 2
var 0 = { a:1 };
delete o.a;
console.log(o); // {}

//7.12 연산자 우선 순위
//07-41
10 * (2 + 3); // 50

//7.13 연산자 결합 순서
