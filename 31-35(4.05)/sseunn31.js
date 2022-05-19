//[예제풀이 31 -01]
//사용자로부터 입력받은 휴대폰 전화번호
const tel = '010-1234-567팔';
//정규 표현식 리터럴로 휴대폰 전화번호 패턴을 정의한다.
const regExp = /^\d{3}-\d{4}-\d{4}$/;
//tel이 휴대폰 전화번호 패턴에 매칭하는지 테스트(확인)한다.
regExp.test(tel); // -> false

//[예제풀이 31-02]
const target = 'Is this all there is?';
//패턴: is
//플래그: i => 대소문자를 구별하지 않고 검색한다.
const regexp = /is/i;
//test 메서드는 target 문자열에 대해 정규표현식 regexp의 패턴을 검색하여 매칭 결과를 불리언 값으로 반환한다.
regexp.test(target); //true

//[예제풀이 31 - 03]
const target = 'Is this all there is?';
const regexp = new RegExp(/is/i); // ES6
//const regexp = new RegExp(/is/, 'i');
//const regexp = new RegExp('is', 'i');
regexp.test(target); // -> true

//[예제풀이 31 - 04]
const count = (str, char) => (str.match(new RegExp(char, 'gi')) ?? []).length;
count('Is this all there is?', 'is'); // -> 3
count('Is this all there is?', 'xx'); // -> 0

//[예제풀이 31 - 05]
const target = 'Is this all there is?';
const regExp = /is/;
regExp.exec(target); // -> ["is", index: 5, input: "Is this all there is?", groups: undefined]

//[예제풀이 31 -06]
const target = 'Is this all there is?';
const regExp = /is/;
regExp.test(target); //true

//[예제풀이 31 -07]
const target = 'Is this all there is?';
const regExp = /is/;
target.match(regExp); //["is", index: 5, input: "Is this all there is?", groups: undefined]

//[예제풀이 31 -08]
const target = 'Is this all there is?';
const regExp = /is/g;
target.match(regExp); //["is", "is"]

//[예제풀이 31 -09]
const target = 'Is this all there is?';
// target 문자열에서 is 문자열을 대소문자를 구별하여 한 번만 검색한다.
target.match(/is/);
//["is", index: 5, input: "Is this all there is?", groups: undefined]
// target 문자열에서 is 문자열을 대소문자를 구별하지 않고 한 번만 검색한다.
target.match(/is/i);
//["Is", index: 0, input: "Is this all there is?", groups: undefined]
// target 문자열에서 is 문자열을 대소문자를 구별하여 전역 검색한다.
target.match(/is/g);
//["is", "is"]
// target 문자열에서 is 문자열을 대소문자를 구별하지 않고 전역 검색한다.
target.match(/is/ig);
//["Is", "is", "is"]

//[예제풀이 31 -10]
const target = 'Is this all there is?';
//'is' 문자열과 매치하는 패턴. 플래그가 생략되었으므로 대소문자를 구별한다.
const regExp = /is/;
//target과 정규 표현식이 매치하는지 테스트한다.
regExp.test(target); // -> true
//target과 정규 표현식의 매칭 결과를 구한다.
target.match(regExp);
//["is", index: 5, input: "Is this all there is?", groups: undefined]

//[예제풀이 31 -11]
const target = 'Is this all there is?';
// 'is' 문자열과 매치하는 패턴. 플래그 i를 추가하면 대소문자를 구별하지 않는다.
const regExp = /is/i;
target.match(regExp);
//["Is", index: 0, input: "Is this all there is?", groups: undefined]

//[예제풀이 31 -12]
const target = 'Is this all there is?';
// 'is' 문자열과 매치하는 패턴.
//플래그 g를 추가하면 대상 문자열 내에서 패턴과 일치하는 모든 문자열을 전역 검색한다.
const regExp = /is/ig;
target.match(regExp); // ["Is", "is", "is"]

//[예제풀이 31 -13]
const target = 'Is this all there is?';
//임의의 3자리 문자열을 대소문자를 구별하여 전역 검색한다.
const regExp = /.../g;
target.match(regExp); //["Is ", "thi", "s a", "ll ", "the", "re ", "is?"]

//[예제풀이 31 -14]
const target = 'A AA B BB Aa Bb AAA';
//'A'가 최소 1번, 최대 2번 반복되는 문자열을 전역 검색한다.
const regExp = /A{1,2}/g;
target.match(regExp); //["A", "AA", "A", "AA", "A"]

//[예제풀이 31 -15]
const target = 'A AA B BB Aa Bb AAA';
//'A'가 2번 반복되는 문자열을 전역 검색한다.
const regExp = /A{2}/g;
target.match(regExp); // ["AA", "AA"]

//[예제풀이 31 -16]
const target = 'A AA B BB Aa Bb AAA';
//'A'가 최소 2번 이상 반복되는 문자열을 전역 검색한다.
const regExp = /A{2,}/g;
target.match(regExp); //["AA", "AAA"]

//[예제풀이 31 -17]
const target = 'A AA B BB Aa Bb AAA';
//'A'가 최소 한 번이상 반복되는 문자열('A, 'AA', 'AAA', ...)을 전역 검색한다.
const regExp = /A+/g;
target.match(regExp); //["A", "AA", "A", "AAA"]

//[예제풀이 31 -18]
const target = 'color colour';
//'colo' 다음 'u'가 최대 한 번(0번 포함) 이상 반복되고 'r'이 이어지는 문자열 'color', 'colour'를 전역 검색한다.
const regExp = /colou?r/g;
target.match(regExp); //["color", "colour"]

//[예제풀이 31 -19]
const target = 'A AA B BB Aa Bb';
//A' 또는 'B'를 전역 검색한다.
const regExp = /A|B/g;
target.match(regExp); //["A", "A", "A", "B", "B", "B", "A", "B"]

//[예제풀이 31 -20]
const target = 'A AA B BB Aa Bb';
//'A' 또는 'B'가 한 번 이상 반복되는 문자열을 전역 검색한다.
//'A', 'AA', 'AAA', ... 또는 'B', 'BB', 'BBB', ...
const regExp = /A+|B+/g;
target.match(regExp); //["A", "AA", "B", "BB", "A", "B"]

//[예제풀이 31 -21]
const target = 'A AA B BB Aa Bb';
//'A' 또는 'B'가 한 번 이상 반복되는 문자열을 전역 검색한다.
//'A', 'AA', 'AAA', ... 또는 'B', 'BB', 'BBB', ...
const regExp = /[AB]+/g;
target.match(regExp); //["A", "AA", "B", "BB", "A", "B"]

//[예제풀이 31 -22]
const target = 'A AA BB ZZ Aa Bb';
//'A'~'Z'가 한 번 이상 반복되는 문자열을 전역 검색한다.
// 'A', 'AA', 'AAA', ... 또는 'B', 'BB', 'BBB', ... ~ 또는 'Z', 'ZZ', 'ZZZ', ...
const regExp = /[A-Z]+/g;
target.match(regExp); //["A", "AA", "BB", "ZZ", "A", "B"]

//[예제풀이 31 -23]
const target = 'AA BB Aa Bb 12';
// 'A' ~ 'Z' 또는 'a' ~ 'z'가 한 번 이상 반복되는 문자열을 전역 검색한다.
const regExp = /[A-Za-z]+/g;
target.match(regExp); //["AA", "BB", "Aa", "Bb"]

//[예제풀이 31 -24]
const target = 'AA BB 12,345';
// '0' ~ '9'가 한 번 이상 반복되는 문자열을 전역 검색한다.
const regExp = /[0-9]+/g;
target.match(regExp); //["12", "345"]

//[예제풀이 31 -25]
const target = 'AA BB 12,345';
// '0' ~ '9' 또는 ','가 한 번 이상 반복되는 문자열을 전역 검색한다.
const regExp = /[0-9,]+/g;
target.match(regExp); //["12,345"]

//[예제풀이 31 -26]
const target = 'AA BB 12,345';
// '0' ~ '9' 또는 ','가 한 번 이상 반복되는 문자열을 전역 검색한다.
let regExp = /[\d,]+/g;
target.match(regExp); //["12,345"]
// '0' ~ '9'가 아닌 문자(숫자가 아닌 문자) 또는 ','가 한 번 이상 반복되는 문자열을 전역 검색한다.
regExp = /[\D,]+/g;
target.match(regExp); //["AA BB ", ","]

//[예제풀이 31 -27]

const target = 'Aa Bb 12,345 _$%&';
//알파벳, 숫자, 언더스코어, ','가 한 번 이상 반복되는 문자열을 전역 검색한다.
let regExp = /[\w,]+/g;

target.match(regExp); //["Aa", "Bb", "12,345", "_"]
//알파벳, 숫, 언더스코어가 아닌 문자 또는 ','가 한 번 이상 반복되는 문자열을 전역 검색한다.
regExp = /[\W,]+/g;
target.match(regExp); //[" ", " ", ",", " $%&"]

//[예제풀이 31 -28]
const target = 'AA BB 12 Aa Bb';
//숫자를 제외한 문자열을 전역 검색한다.
const regExp = /[^0-9]+/g;
target.match(regExp); //[ -> []"AA BB ", " Aa Bb"]

//[예제풀이 31 -29]
const target = 'https://poiemaweb.com';
//https'로 시작하는지 검사한다.
const regExp = /^https/;
regExp.test(target); //true

//[예제풀이 31 -30]
const target = 'https://poiemaweb.com';
//'com'으로 끝나는지 검사한다.
const regExp = /com$/;
regExp.test(target); //true

//[예제풀이 31 -31]
const url = 'https://example.com';
//'http://' 또는 'https://'로 시작하는지 검사한다.
/^https?:\/\//.test(url); //true

//[예제풀이 31 -32]
/^(http|https):\/\//.test(url); //true

//[예제풀이 31 -33]
const fileName = 'index.html';
//'html'로 끝나는지 검사한다.
/html$/.test(fileName); //true

//[예제풀이 31 -34]
const target = '12345';
//숫자로만 이루어진 문자열인지 검사한다.
/^\d+$/.test(target); //true

//[예제풀이 31 -35]
const target = ' Hi!';
//하나 이상의 공백으로 시작하는지 검사한다.
/^[\s]+/.test(target); //true

//[예제풀이 31 -36]
const id = 'abc123';
// 알파벳 대소문자 또는 숫자로 시작하고 끝나며 4 ~ 10자리인지 검사한다.
/^[A-Za-z0-9]{4,10}$/.test(id); //true

//[예제풀이 31 -37]
const email = 'ungmo2@gmail.com';
/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(email); //true

//[예제풀이 31 -38]
(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])

//[예제풀이 31 -39]
const cellphone = '010-1234-5678';
/^\d{3}-\d{3,4}-\d{4}$/.test(cellphone); //true

//[예제풀이 31 -40]
const target = 'abc#123';
// A-Za-z0-9 이외의 문자가 있는지 검사한다.
(/[^A-Za-z0-9]/gi).test(target); // true

//[예제풀이 31 -41]
(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi).test(target); //true

//[예제풀이 31 -42]
target.replace(/[^A-Za-z0-9]/gi, ''); //abc123