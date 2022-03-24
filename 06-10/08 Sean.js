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
// 8.4 break 문
// 8.5 continue 문
