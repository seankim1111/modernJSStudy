// 31장 RegExp
// 31.1 정규 표현식이란?
// 정규표현식(regular expression)은 일정한 패턴을 가진 문자열의 집합을 표현하기 위해 사용하는 형식 언어다.
// 정규 표현식은 문자열 대상으로 패턴 매칭 기능을 제공한다. 특정 패턴과 일치하는 문자열을 검색하거나 추출 또는 치환할 수 있는 기능을 말한다.
// 31-01
// 사용자로부터 입력받은 휴대폰 전화번호
const tel = "010-1234-567팔";

// 정규 표현식 리터럴로 휴대폰 전화번호 패턴을 정의한다.
const regExp = /^\d{3}-\d{4}-d{4}$/;

// tel이 휴대폰 전화번호 패턴에 매칭하는지 테스트 한다.
regExp.test(tel); // false

// 31.2 정규 표현식의 생성
// 31-02
const target = "Is this all there is?";

// 패턴: is
// 플래그: i => 대소문자를 구별하지 않고 검색한다.
const regexp = /is/i;

// test 메서드는 target 문자열에 대해 정규 표현식 regexp의 패턴을 검색하여 매칭 결과를 불리언 값으로 반환한다.
regexp.test(target); // true

// 31-03
const target = "Is this all there is?";

const regexp = new RegExp(/is/i); // ES6
// const regexp = new RegExp(/is/, "i");
// const regexp = new RegExp("is", "i");

regexp.test(target); //

// 31-04
const count = (str, char) => (str.match(new RegExp(char, "gi")) ?? []).length;

count("Is this all there is?", "is"); // 3
count("Is this all there is?", "xx"); // 0

// 31.3 RegExp 메서드
// ____31.3.1 RegExp.prototype.exec
// 31-05
const target = "Is this all there is?";
const regExp = /is/;

regExp.exec(target); // [ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]

// ____31.3.2 RegExp.prototype.test
// 31-06
const target = "Is this all there is?";
const regExp = /is/;

regExp.test(target); // true

// ____31.3.3 String.prototype.match
// 31-07
const target = "Is this all there is?";
const regExp = /is/;

target.match(regExp); // [ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]

// 31.4 플래그
// 31-09
const target = "Is this all there is?";

// target 문자열에서 is 문자열을 대소문자를 구별하여 한 번만 검색한다.
target.match(/is/); // [ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]

// target 문자열에서 is 문자열을 대소문자를 구별하지 않고 한 번만 검색한다.
target.match(/is/i); // [ 'Is', index: 0, input: 'Is this all there is?', groups: undefined ]

// target 문자열에서 is 문자열을 대소문자를 구별하여 전역 검색한다.
target.match(/is/g); // [ 'is', 'is' ]

// target 문자열에서 is 문자열을 대소문자를 구별하지 않고 전역 검색한다.
target.match(/is/gi); // [ 'Is', 'is', 'is' ]

// 31.5 패턴
// ____31.5.1 문자열 검색
// 31-10
const target = "Is this all there is?";

// "is" 문자열과 매치하는 패턴. 플래그가 생략되었으므로 대소문자를 구별한다.
const regExp = /is/;

// target과 정규 표현식이 매치하는지 테스트한다.
regExp.test(target); // true

// target과 정규 표현식의 매칭 결과를 구한다.
target.match(regExp); // [ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]

// 31-11
const target = "Is this all there is?";

// "is" 문자열과 매치하는 패턴. 플래그 i를 추가하면 대소문자를 구별하지 않는다.
const regExp = /is/i;

target.match(regExp); // [ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]

// 31-12
const target = "Is this all there is?";

// "is" 문자열과 매치하는 패턴.
// 플래그 g를 추가하면 대상 문자열 내에서 패턴과 일치하는 모든 문자열을 전역 검색한다.
const regExp = /is/gi;

target.match(/is/gi); // [ 'Is', 'is', 'is' ]

// ____31.5.2 임의의 문자열 검색
// 31-13
const target = "Is this all there is?";

// 임의의 3자리 문자열을 대소문자를 구별하여 전역 검색한다.
const regExp = /.../g;

target.match(regExp); // [ 'Is ', 'thi', 's a', 'll ', 'the', 're ', 'is?' ]

// ____31.5.3 반복 검색
// 31-14
const target = "A AA B BB Aa Bb AAA";

// "A"가 최소 1번, 최대 2번 반복되는 문자열을 전역 검색한다.
const regExp = /A{1,2}/g;

target.match(regExp); // [ 'A', 'AA', 'A', 'AA', 'A' ]

// 31-15
const target = "A AA B BB Aa Bb AAA";

// "A"가 2번 반복되는 문자열을 전역 검색한다.
const regExp = /A{2}/g;

target.match(regExp); // [ 'AA', 'AA' ]

// 31-16
const target = "A AA B BB Aa Bb AAA";

// "A"가 최소 2번 이상 반복되는 문자열을 전역 검색한다.
const regExp = /A{2,}/g;

target.match(regExp); // [ 'AA', 'AAA' ]

// 31-17
const target = "A AA B BB Aa Bb AAA";

// "A"가 최소 한 번 이상 반복되는 문자열을 전역 검색한다.
const regExp = /A+/g;

target.match(regExp); // [ 'A', 'AA', 'A', 'AAA' ]

// 31-18
const target = "color colour";

// 문자열 "color", "colour"를 전역 검색한다.
const regExp = /colou?r/g;

target.match(regExp); // [ 'color', 'colour' ]

// ____31.5.4 OR 검색
// 31-19
const target = "A AA B BB Aa Bb AAA";

// "A" 또는 "B"를 전역 검색한다.
const regExp = /A|B/g;

target.match(regExp); // [ 'A', 'A', 'A', 'B', 'B', 'B', 'A', 'B', 'A', 'A', 'A' ]

// 31-20
const target = "A AA B BB Aa Bb AAA";

// "A" 또는 "B"가 한 번 이상 반복되는 문자열을 전역 검색한다.
const regExp = /A+|B+/g;

target.match(regExp); // [ 'A', 'AA', 'B', 'BB', 'A', 'B', 'AAA' ]

// 31-21
// "A" 또는 "B"가 한 번 이상 반복되는 문자열을 전역 검색한다.
const regExp = /[AB]+/g;

target.match(regExp); // [ 'A', 'AA', 'B', 'BB', 'A', 'B', 'AAA' ]

// 31-22
const target = "A AA B BB ZZ Aa Bb";

// "A" - "Z"가 한 번 이상 반복되는 문자열을 전역 검색한다.
const regExp = /[A-Z]+/g;

target.match(regExp); // [ 'A', 'AA', 'B', 'BB', 'ZZ', 'A', 'B' ]

// 31-23
const target = "AA BB Aa Bb 12";

// "A" - "Z" 또는 "a" - "z"가 한 번 이상 반복되는 문자열을 전역 검색한다.
const regExp = /[A-Za-z]+/g;

target.match(regExp); // [ 'AA', 'BB', 'Aa', 'Bb' ]

// 31-24
const target = "AA BB 12,345";

// "0" - "9"가 한 번 이상 반복되는 문자열을 전역 검색한다.
const regExp = /[0-9]+/g;

target.match(regExp); // [ '12', '345' ]

// 31-25
const target = "AA BB 12,345";

// "0" - "9" 또는 ","가 한 번 이상 반복되는 문자열을 전역 검색한다.
const regExp = /[0-9,]+/g;

target.match(regExp); // [ '12,345' ]

// 31-26
const target = "AA BB 12,345";

// "0" - "9" 또는 ","가 한 번 이상 반복되는 문자열을 전역 검색한다.
let regExp = /[\d,]+/g;

target.match(regExp); // [ '12,345' ]

// "0" - "9"가 아닌 문자 또는 ","가 한 번 이상 반복되는 문자열을 전역 검색한다.
regExp = /[\D,]+/g;

target.match(regExp); // [ 'AA BB ', ',' ]

// 31-27
const target = "Aa Bb 12,345 _$%&";

// 알파벳, 숫자, 언더스코어, ","가 한 번 이상 반복되는 문자열을 전역 검색한다.
let regExp = /[\w,]+/g;

target.match(regExp); // [ 'Aa', 'Bb', '12,345', '_' ]

//
regExp = /[\W,]+/g;

target.match(regExp); // [ ' ', ' ', ',', ' ', '$%&' ]

// ____31.5.5 NOT 검색
// 31-28
const target = "AA BB 12 Aa Bb";

// 숫자를 제외한 문자열을 전역 검색한다.
const regExp = /[^0-9]+/g;

target.match(regExp); // [ 'AA BB ', ' Aa Bb' ]

// ____31.5.6 시작 위치로 검색
// 31-29
const target = "https://poiemaweb.com";

// "https"로 시작하는지 검사한다.
const regExp = /^https/;

regExp.test(target); // true

// ____31.5.7 마지막 위치로 검색
// 31-30
const target = "https://poiemaweb.com";

// "com" 으로 끝나는지 검사한다.
const regExp = /com$/;

regExp.test(target); // true

// 31.6 자주 사용하는 정규표현식
// ____31.6.1 특정 단어로 시작하는지 검사
// 31-31
const url = "https://example.com";

//
/^https?:\/\//.test(url); // true

// 31-32
/^(http|https):\/\//.test(url); // true

// ____31.6.2 특정 단어로 끝나는지 검사
// 31-33
const fileName = "index.html";

// "html"로 끝나는지 검사한다.
/html$/.test(fileName); // true

// ____31.6.3 숫자로만 이루어진 문자열인지 검사
// 31-34
const target = "12345";

// 숫자로만 이루어진 문자열인지 검사한다
/^\d+$/.test(target); // true

// ____31.6.4 하나 이상의 공백으로 시작하는지 검사
// 31-35
const target = "Hi!";

//
/^[\s]+/.test(target); // true

// ____31.6.5 아이디로 사용 가능한지 검사
// 31-36
const id = "abc123";

//
/^[A-Za-z0-9]{4,10}$/.test(id); // true

// ____31.6.6 메일 주소 형식에 맞는지 검사
// 31-37
const email = "ungmo2@gmail.com";

/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/.test(
  email
); // true

// ____31.6.7 핸드폰 번호 형식에 맞는지 검사
// 31-39
const cellphone = "010-1234-5678";

// ____31.6.8 특수 문자 포함 여부 검사
// 31-40
const target = "abc#1234";
