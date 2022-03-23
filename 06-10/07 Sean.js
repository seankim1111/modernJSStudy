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

//7.3.2 대소 관계 비교 연산자
//7.4 삼항 조건 연산자
//7.5 논리 연산자
//7.6 쉼표 연산자
// 07-29
var x, y, z;
(x = 1), (y = 2), (z = 3); // 3

//7.7 그룹 연산자
// 7.8 typeof 연산자
// 7.9 지수 연산자
// 7.10 그 외의 연산자
// 7.11 연산자의 부수 효과
//7.12 연산자 우선 순위
//7.13 연산자 결합 순서
