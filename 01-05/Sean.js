// 03
const arr = [1, 2, 3];
arr.forEach(console.log);

// 04장 변수
// 4.1 변수란 무엇인가? 왜 필요한가?
// 04-02
var userId = 1;
var userName = "Lee";
var user = { id: 1, name: "Lee" };
var users = [
  { id: 1, name: "Lee" },
  { id: 2, name: "Kim" },
];

// 04-03
var result = 10 + 20;

// 4.2 식별자
// 4.3 변수 선언
// 04-04
var score; // 변수 선언

// 4.4 변수 선언의 실행 시점과 변수 호이스팅
// 04-05
console.log(score); // undefined
var score; // 변수 선언문

// 4.5 값의 할당
// 04-06
var score; // 변수 선언
score = 80; // 값의 할당

// 04-07
var score = 80; // 변수 선언과 값의 할당

// 04-08
console.log(score); // undefined
var score; // 1.변수 선언
score = 80; // 2. 값의 할당
console.log(score); // 80

// 04-09
console.log(score); // undefined
var score = 80; // 변수 선언과 값의 할당
console.log(score); // 80

// 04-10
console.log(score); // undefined
score = 80; // 값의 할당
var score; // 변수 선언
console.log(score); // ???

// 4.6 값의 재할당
// 04-11
var score = 80; // 변수 선언과 값의 할당
score = 90; // 값의 재할당

// 4.7 네이밍 규칙

// 05장 표현식과 문
// 5.1 값
// 5.2 리터럴
// 5.3 표현식
// 05-05
var score = 50 + 50;
score; // -> 100

// 5.4 문
// 변수선언문
var x;
// 할당문
x = 5;
// 함수 선언문
function foo() {}
// 조건문
if (x > 1) {
  console.log(x);
}
// 반복문
for (var i = 0; i < 2; i++) {
  console.log(i);
}

// 5.5 세미콜론과 세미콜론 자동 삽입 기능
// 5.6 표현식인 문과 표현식이 아닌 문
