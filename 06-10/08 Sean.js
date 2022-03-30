// 08장 제어문

// 8.1 블록문
// 08-01
// 블록문
{
  var foo = 10;
}
// 제어문
var x = 1;
if (x < 10) {
  x++;
}
// 함수 선언문
function sum(a, b) {
  return a + b;
}

// 8.2 조건문
// 8.2.1 if ... else 문
// 08-02
var num = 2;
var kind;

// if 문
if (num > 0) {
  kind = "양수";
}
console.log(kind); // 양수
// if ... else 문
if (num > 0) {
  kind = "양수";
} else {
  kind = "음수";
}
console.log(kind); // 양수

// if ... else if 문
if (num > 0) {
  kind = "양수";
} else if (num < 0) {
  kind = "음수";
} else {
  kind = "영";
}
console.log(kind); // 양수

// 08-03
var num = 2;
var kind;

if (num > 0) kind = "양수";
else if (num < 0) kind = "음수";
else kind = "영";

console.log(kind); // 양수

// 08-04
var x = 2;
var result;

if (x % 2) {
  result = "홀수";
} else {
  result = "짝수";
}

console.log(result); // 짝수

// 08-05
// 삼항 조건 연산자
var x = 2;

var result = x % 2 ? "홀수" : "짝수";
console.log(result); // 짝수

// 08-06
var num = 2;
var kind = num ? (num > 0 ? "양수" : "음수") : "영";
console.log(kind); // 양수

// 8.2.2 switch문
// 08-07
var month = 11;
var monthName;

switch (month) {
  case 1:
    monthName = "January";
  case 2:
    monthName = "February";
  case 3:
    monthName = " March";
  case 4:
    monthName = " April";
  case 5:
    monthName = "May";
  case 6:
    monthName = " June";
  case 7:
    monthName = "July";
  case 8:
    monthName = "August";
  case 9:
    monthName = "September";
  case 10:
    monthName = " October";
  case 11:
    monthName = "November";
  case 12:
    monthName = "December";
  default:
    monthName = "Invalid month";
}
console.log(monthName); // Invalid month

// 08-09
var month = 11;
var monthName;

switch (month) {
  case 1:
    monthName = "January";
    break;
  case 2:
    monthName = "February";
    break;
  case 3:
    monthName = " March";
    break;
  case 4:
    monthName = " April";
    break;
  case 5:
    monthName = "May";
    break;
  case 6:
    monthName = " June";
    break;
  case 7:
    monthName = "July";
    break;
  case 8:
    monthName = "August";
    break;
  case 9:
    monthName = "September";
    break;
  case 10:
    monthName = " October";
    break;
  case 11:
    monthName = "November";
    break;
  case 12:
    monthName = "December";
    break;
  default:
    monthName = "Invalid month";
}
console.log(monthName); // November

//08-09
var year = 2000;
var month = 2;
var days = 0;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    days = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    days = 30;
    break;
  case 2:
    // 윤년 계산 알고리즘
    // 1. 연도가 4로 나누어 떨어지는 해 (2000, 2004, 2008, 2012...)는 윤년
    // 2. 연도가 4로 나누어 떨어지더라도 연도가 100으로 나누어 떨어지는 해 (2000, 2100, 2200...)는 평년
    // 3. 연도가 400으로 나누어떨어지는 해 (2000, 2400, 2800..)는 윤년
    days = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;
    break;
  default:
    console.log("Invalid month");
}
console.log(days); // 29

// 8.3 반복문
// 8.3.1 for 문
// 08-10
for (var i = 0; i < 2; i++) {
  console.log(i);
}
// 0
// 1

// 08-11
// 역으로 반복하는 for문
for (var i = 1; i >= 0; i--) {
  console.log(i);
}

// 08-12
// 무한루프
// for (;;) { ... }

// 08-13
for (var i = 1; i <= 6; i++) {
  for (var j = 1; j <= 6; j++) {
    if (i + j === 6) console.log(`[${i}, ${j}]`);
  }
}
// [1, 5]
// [2, 4]
// [3, 3]
// [4, 2]
// [5, 1]

// 8.3.2 while 문
// 08-14
var count = 0;
while (count < 3) {
  console.log(count); // 0 1 2
  count++;
}

// 08-15
// 무한루프
// while(true) { ... }

// 08-16
var count = 0;
while (true) {
  console.log(count);
  count++;
  if (count === 3) break;
} // 0 1 2

// 8.3.3 do...while 문
// 08-17
var count = 0;
do {
  console.log(count); // 0 1 2
  count++;
} while (count < 3);

// 8.4 break 문
// 08-18
// if (true) {
//   break; // Uncaught SyntaxError
// }

// 08-19
foo: console.log("foo");

// 08-20
foo: {
  console.log(1);
  break foo; // foo 레이블 블록문을 탈출
  console.log(2);
}
console.log("Done!");

// 08-21
outer: for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    // i + j === 3이면 outer라는 식별자가 붙은 레이블 for 문을 탈출
    if (i + j === 3) break outer;
    console.log(`inner [${i}, ${j}]`);
  }
}
console.log("Done!");

// 08-22
var string = "Hello World.";
var search = "l";
var index;

// 문자열은 유사 배열이므로 for 문으로 순화할 수 있다.
for (var i = 0; i < string.length; i++) {
  // 문자열의 개별 문자가 'l'이면
  if (string[i] === search) {
    index = i;
    break;
  }
}
console.log(index); // 2
// 참고로 String.prototype.indexOf 매서드를 사용해도 같은 동작을 함
console.log(string.indexOf(search)); // 2

// 8.5 continue 문
// 08-23
var string = "Hello World.";
var search = "l";
var index;

// 문자열은 유사 배열이므로 for 문으로 순화할 수 있다.
for (var i = 0; i < string.length; i++) {
  // 'l'이 아니면 현 지점에서 실행을 중단하고 반복문을 증감식으로 이동
  if (string[i] !== search) continue;
  count++;
}
console.log(count); // 3

// 참고로 String.prototype.match 매서드를 사용해도 같은 동작을 함
const regexp = new RegExp(search, "g");
console.log(string.match(regexp).length); // 3

// 08-24
for (var i = 0; i < string.length; i++) {
  // 'l'이면 카운트를 증가시킨다.
  if (string[i] === search) count++;
}

// 08-25
// continue 문을 사용하지 않으면 if 문 내에 코드를 작성해야 한다.
for (var i = 0; i < string.length; i++) {
  // 'l'이면 카운트를 증가시킨다.
  if (string[i] === search) {
    count++;
    // code
    // code
    // code
  }
}

// continue 문을 사용하면 if 문 밖에 코드를 작성할 수 있다.
for (var i = 0; i < string.length; i++) {
  // 'l'이 아니면 카운트를 증가시키지 않는다.
  if (string[i] !== search) continue;

  count++;
  // code
  // code
  // code
}
