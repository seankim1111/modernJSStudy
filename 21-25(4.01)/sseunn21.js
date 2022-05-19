21. 빌트인 객체
21.1 자바스크립트 객체의 분류 
21.2 표준 빌트인 객체 
//[예제풀이 21 -01]
//String 생성자 함수에 의한 String객체 생성
const strObj = new String('Lee'); //String {"Lee"}
console.log(typeof strObj); //object

//Number 생성자 함수에 의한 Number 객체 생성 
const numObj = new Number(123); //Number {123}
console.log(typeof numObj); //object

//Boolean 생성자 함수에 의한 Boolean 객체 생성 
const boolObj = new Boolean(true); //Boolean {}
console.log(typeof boolObj); //object

//Function 생성자 함수에 의한 Function 객체(함수) 생성 
const func = new Function('x', 'return x * x'); // f anonymous(x)
console.log(typeof func); //function

//Array 생성자 함수에 의한 Array 객체 생성 
const arr = new Array(1,2,3); //(3){1,2,3}
console.log(typeof); //object

// RegExp 생성자 함수에 의한 RegExp 객체(정규표현식) 생성 
const regExp = new RegExp(/ab+c/i); // /ab+c/i
console.log(typeof regExp); //object

//Date 생성자 함수에 의한 Date 객체 생성 
const date = new Date('Lee'); //Fri May 08 2020 
console.log(typeof date); //object

//[예제풀이 21 -02]
//string생성자 함수에 의한 String객체 생성
const strObj = new String('Lee'); //String{"Lee"}
//String 생성자 함수를 통해 생성한 strObj객체의 프로토타입은 String.prototype이다. 
console.log(Object.getPrototypeOf(strObj)) ===String.prototype); //true 

//[예제풀이 21 -03]
//Number 생성자 함수에 의한 Number객체 생성
const numObj = new Number(1.5); //Number {1.5}
//toFixed 는 Number.prototype의 프로토타입 메서드이다.
//Number.prototype.tiFixed는 소수점 자리를 반올림하여 문자열로 반환한다.
console.log(numObj.toFixed()); //2 
//isInteger는 Number의 정적 메서드이다.
//Number.isInteger는 인수가 정수(integer)인지 검사하여 그결과를 Boolean으로 반환한다.
console.log(Number.isInteger(0.5)); //false 
//[예제풀이 21 -04]
const str = 'hello'; 
//원시타입인 문자열이 프로퍼티와 메서드를 갖고 있는 객체처럼 동작한다.
console.log(str.length); //5
console.log(str.toUpperCase());  //HELLO 
//[예제풀이 21 -05]
const str = 'hi '; 
//원시타입인 문자열이 래퍼 객체인 String인스턴스로 변환된다.
console.log(str.length); // 2
console.log(str.toUpperCase()); //HI
//래퍼 객체로 프로퍼티에 접근하거나 메서드를 호출한 후 , 다시 원시값으로 되돌린다 
console.log(typeof str); //string 
//[예제풀이 21 -06]
//1. 식별자 str은 문자열을 값으로 갖고있다.
const str = 'hello';
//2. 식별자 str은 암묵적으로 생성된 래퍼 객체를 가리킨다.
//식별자 str의 값 'hello'는 래퍼객체의 [[StringData]]내부 슬롯에 할당된다.
//래퍼 객체에 name프로퍼티가 동적 추가된다.
str.name = 'Lee'; 
//3. 식별자 str 은 다시 원래의 문자열, 즉 래퍼객체의 [[StringData]]내부 슬롯에 할당된 원시값을 갖는다.
//이때 2에서 생성된 래퍼 객체는 아무도 참조하지 않는 상태이므로 가비지 컬렉션의 대상이 된다.
//4. 식별자 str은 새롭게 암묵적으로 생성된(2에서 생성된 래퍼객체와는 다른)래퍼 객체를 가리킨다.
//새롭게 생성된 래퍼 객체엔 name 프로퍼티가 존재하지 않는다.
console.log(str.name); //undefined
//5. 식별자 str은 다시 원래의 문자열, 즉 래퍼 객체의 [[stringData]]내부슬롯에 할당된 원시값을 갖는다.
//이떄 4 에서 생성된 래퍼객체는 아무도 참조하지 않는 상태이므로 가비지 컬렉션의 대상이 된다.
console.log(typeof str, str); //string hello 
//[예제풀이 21 -07]
const num = 1.5; 
//원시타입인 숫자가 래퍼 객체인 Number객체로 변환된다. 
console.log(num.toFixed()); //2 
//래퍼객체로 프로퍼팅 접근하거나 메서드를 호출한후, 다시 원시값으로 되돌린다.
console.log(typeof num, num );// number1.5
//[예제풀이 21 -08]
//브라우저 환경 
globalThis === this //true
globalThis === window //true
globalThis === self //true
globalThis === frames //true

//Node.js환경 
globalThis === this //true
globalThis === global //true
//[예제풀이 21 -09]
//문자열 'F'를 16진수로 해석하여 10진수로 변환하여 반환한다.
window.parseInt ('F', 16); //15 
//window.parseInt는 ParseInt로 호출할수있다.
parseInt('F',16)//15
window.parseInt ===parseInt;// true  
//[예제풀이 21 -10]
//var 키워드로 선언한 전역변수
var foo = 1 ;
console.log(window.foo); //1
//선언하지 않은 변수에 값을 암묵적 전역. bar는 전역변수가 아니라 전역객체의 프로퍼티다.
bar=2; //window.bar=2
console.log(window.bar); //2 
//전역함수
function baz ( ) {return 3;}
console.log(window.baz());//3
//[예제풀이 21 -11]
let foo = 123;
console.log(window.foo); //undefiend 
//[예제풀이 21 -12]
//전역 프로퍼티는 window를 생략하고 참조할수있다.
console.log(window.Infinity ===Infinity); //true
//양의 무한대
console.log(3/0); //Infinity
//음의 무한대 
console.log(-3/0); //-Infinity
Infinity는 숫자값이다. 
console.log(typeof Infinity); //number
//[예제풀이 21 -13]
console.log(window.NaN); //NaN
console.log(Number('xyz')); //NaN
console.log(1 * 'string'); //NaN
console.log(typeof NaN); //number
//[예제풀이 21 -14]
console.log(window.undefined); // undefined
var foo; 
console.log(foo); // //undefined 
console.log(typeof undefined); // undefined

//[예제풀이 21 -15]
//표현식인 문
eval('1 + 2;')//3
//표현식이 아닌문
eval('var x = 5;');// undefined 
//eval 함수에 의해 런타임에 변수선언문이 실행되어 x변수가 선언되었다.
console.log(x); //5
//객체리터럴은 반드시 괄호로 둘러싼다. 
const o = eval ( '({ a : 1 })');
console.log(o); {a: 1}
//함수리터럴은 반드시 괄호로 둘러싼다.
const f = eval ('(function() {return 1;})');
console.log(f()); //1 
//[예제풀이 21 -16]
eval ('1+2; 3+4;'); //7
//[예제풀이 21 -17]
const x =1; 
function foo() {
    //eval 함수는 런타임에 foo함수의 스코프를 동적으로 수정한다.
    eval('var x = 2;');
    console.log(x);//2
}
foo();
console.log(x); //1
//[예제풀이 21 -18]
const x =1 ; 
function foo() {
    'use strict';
    //strict mode 에서 eval 함수는 기존의 스코프를 수정하지 않고 eval 함수 자신의 자체적인 스코프를 생성한다.
    eval ('var x=2; console.log(x);'); //2 
}
foo();
console.log(x);//1 
//[예제풀이 21 -19]
const x =1; 
function foo(){
    eval ('var x = 2; console.log(x);');//2
    //let,const 키워드를 사용한 변수 선언문은 strict mode가 적용된다.
    eval ('const x = 3; console.log(x);'); //3
    console.log(x); //2
}
foo();
console.log(x);//1

//[예제풀이 21 -20]
//전달받은 인수가 유한수인지 확인하고 그 결과를 반환한다. @param {number} testValue - 검사대상값  @returns {boolean}유한수 여부 확인 결과
isFinite(testValue) 

//인수가 유한수이면 true를 반환한다.
isFinite(0); //true 
isFinite(2e64); //true 
isFinite('10'); //true '10' -> 10 
isFinite(null); //true: null ->0 
//인수가 무한수 또는 NaN 으로 평가되는 값이라면 false를 반환한다.
isFinite(Infinity)); //false 
isFinite(-Infinity)); //false 
//인수가 NaN으로 평가되는 값이라면 false를 반환한다.
isFinite(NaN); //false
isFinite('Hello'); //false 
isFinite('2005/12/12'); //false 

//[예제풀이 21 -21]
console.log(+null); //0 
//[예제풀이 21 -22]
isNaN(NaN); //true
isNaN(10); //false
//문자열
isNaN('blabla'); //true: 'blabla' =>NaN
isNaN(10); //false : '10' => 10 
isNaN('10.12'); //false : '10.12' => 10.12 
isNaN(''); // false : '' =>0 
isNaN(' '); //false : ' '=>0 
//불리언 
isNaN(true); //false: true ->1 
isNaN(null); //false: null ->0 
//undefined 
isNaN(undefined); //true: undefined =>NaN 
//객체
isNaN({}); // true: {} =>NaN

//date
isNaN(new Date()); // false: new Date() =>Number
isNaN(new Date().toString()); //true : String =>NaN 

//[예제풀이 21 -23] 
//전달받은 문자열 인수를 실수로 해석하여 반환한다. @param {string} string -변환대상값 @returns {number} 변환결과  
parseFloat 
//문자열을 실수로 해석하여 반환한다. 
parseFloat('3.14');  // 3.14
parseFloat ('10.00'); //10 
//공백으로 구분된 문자열은 첫번째 문자열로 변환한다.
parseFloat ('34 45 66'); // 34 
parseFloat ('40years'); // 40
//첫번째 문자열을 숫자로 변환할 수 없다면 NaN을 반환한다 .
parseFloat ('He was 40 '); // NaN
//앞뒤 공백은 무시된다. 
parseFloat ('  60  '); // 60

//[예제풀이 21 -24]
parseInt('10') //10
parseInt('10.123') //10

//[예제풀이 21 -25]
//전달받은 인수가 문자열이 아니면 문자열로 변환한다음 정수로 해석하여 반환한다.
parseInt(10) //10
parseInt(10.123) //10
//[예제풀이 21 -26]
//'10'을 10진수로 해석하고 그결과를 10진수 정수로 반환한다. 
parseInt('10') //10
//'10'을 2진수로 해석하고 그결과를 10진수 정수로 반환한다. 
parseInt('10',2) //2
//'10'을 8진수로 해석하고 그결과를 10진수 정수로 반환한다. 
parseInt('10',8) //8
//'10'을 16진수로 해석하고 그결과를 10진수 정수로 반환한다. 
parseInt('10',16) //16
//[예제풀이 21 -27]
const x = 15; 
//10진수 15를 2진수로 변환하여 그결과를 문자열로 바놘한다 .
x.toString(2); // 1111 
//문자열 '1111'을 2진수로 해석하고 그결과를 10진수 정수로 반환한다. 
parseInt(x.toString(2),2); //15
//10진수 15를 8진수로 변환하여 그결과를 문자열로 반환한다 
x.toString(8); //17
//문자열 '17'을 8진수로 해석하고 그결과를 10진수 정수로 반환한다ㅏ. 
parseInt(x.toString(8),8); // 15
//10진수 15를 16진수로 변환하여 그 결과를 문자열로 반환한다.
x.toString(16) //'f'
//문자열 'f'를 16진수로 해석하고 그 결과를 10진수 정수로 반환한다. 
parseInt(x.toString(16),16); //15
//숫자값을 문자열로 변환한다. 
x.toString() //'15'
//문자열 '15'를 10진수로 해석하고 그 결과를 10진수 정수로 반환한다. 
parseInt(x.toString()); //15
//[예제풀이 21 -28]
//16진수 리터럴 '0xf'를 16진수로 해석하고 10진수 정수로 그결과를 반환한다. 
parseInt('0xf'); //15
//위코드와 같다.
parseInt('f',16); //15

//[예제풀이 21 -29]
//2진수 리터럴 (0b로 시작)은 제대로 해석하지 못한다. 0이후가 무시된다. 
parseInt('0b10'); //0
//8진수 리터럴(ES6에서 도입. 0o로 시작)은 제대로 해석하지 못한다. 0이후가 무시된다.
parseInt('0o10'); //0 
//[예제풀이 21 -30]
//문자열 '10'을 2진수로 해석한다. 
parseInt('10',2); //2
//문자열 '10'을 8진수로 해석한다.
parseInt('10',8); //8
//[예제풀이 21 -31]
//A는 10진수로 해석할 수 없다.
parseInt('A0'); // NaN 
//'2'는 2진수로 해석할 수 없다 .
parseInt('20', 2); //NaN
//[예제풀이 21 -32]
//10진수로 해석할 수 없는 A이후의 문자는 모두 무시된다. 
parseInt('1A0'); //1 
//2진수로 해석할 수 없는 '2'이후의 문자는 모두 무시된다. 
parseInt('102',2); //2
//8진수로 해석할수 없는 '8'이후의 문자는 모두 무시된다. 
parseInt('58',8); //5
//16진수로 해석할 수 없는 'G'이후의 문자는 모두 무시된다. 
parseInt('FG',16); //15
//[예제풀이 21 -33]
//공백으로 구분된 문자열은 첫번째 문자열만 변환한다.
parseInt('34 45 66');//34
parseInt('40years');//40
//첫번째 문자열을 숫자로 변환할 수 없다면 NaN을 반환한다. 
parseInt('He was 40');//NaN
//앞뒤공백은 무시된다.
parseInt('60');//60

//[예제풀이 21 -34]
//완전한 URI 
const uri = 'http://example.com?name=이웅모&job=programmer&teacher'
//encodeURI함수는 완전한 URI를 전달받아 이스케이프 처리를 위해 인코딩한다.
const enc = encodeURI(uri); 
console.log(enc);
//http://example~~~
//[예제풀이 21 -35]
const uri = 'http://example.com?name=이웅모&job=programmer&teacher';
//encodeURI함수는 완전한 URI를 전달받아 이스케이프 처리를 위해 인코딩한다. 
const enc =encodeURI(uri); 
console.log(enc);
//http://example.com?name=%EC%9D%B4%EC%9B%85%EB%AA%A8&job=programmer&teacher
//decodeURI 함수는 인코딩된 완전한 URI를 전달받아 이스케이프 처리 이전으로 디코딩한다.
const dec =decodeURI(enc);
console.log(dec);
//http://example.com?name=이웅모&job=programmer&teacher'
//[예제풀이 21 -36]
//URI의 쿼리 스트링
const uriComp ='name=이웅모&job=programmer&teacher';
//emcodeURIComponent 함수는 인수로 전달받은 문자열을 URI의 구성요소인 쿼리스트링의 일부로 간주한다. 
//따라서 쿼리스트링 구분자로 사용되는  =, ?, &까지 인코딩한다. 
let enc = encodeURIComponent(uriComp);
console.log(enc); 
//name%3D%EC%9D%B4%EC%9B%85%EB%AA%A8%26job%3Dprogrammer%26teacher

let Dec = decodeURIComponent(enc);
console.log(dec);
//이웅모&job=programmer&teacher
//encodeURI함수는 인수로 전달받은 문자열을 완전한 URI로 간주한다.
//따라서 쿼리스트링 구분자로 사용되는 =, ?, &를 인코딩하지 않는다. 
let enc = encodeURI(uriComp);
console.log(enc); 
//name=%EC%9D%B4%EC%9B%85%EB%AA%A8&job=programmer&teacher
let enc = decodeURI(enc);
console.log(dec); 
//name=이웅모&job=programmer&teacher 
//[예제풀이 21 -37]
var x =10 ; //전역변수
function foo() {
    //선언하지 않은 식별자에 값을 할당 
    y= 20; //window.y =20; 
}
foo(); 
//선언하지 않은 식별자 y를 전역에서 참조할수있다.
console.log(x + y);//30 
//[예제풀이 21 -38]
//전역변수 x는 호이스팅이 발생한다.
console.log(x); // undefined
//전역변수가 아니라 단지 전역 객체의 프로퍼티인 y는 호이스팅이 발생하지 않는다. 
console.log(y); //ReferenceError : y is not defined 

var x =10; //전역변수
function foo() {
    //선언하지 않은 식별자에ㅔ 값을 할당 
    y=20; //window.y=20; 
}
foo();
//선언하지 않은 식별자y를 전역에서 참조할수있다.
console.log(x +y ); //30 
//[예제풀이 21 -39]
var x =10 ; //전역변수
function foo() { 
//선언하지 않은 식별자에 값을 할당 
y=20; //window.y= 20; 
console.log(x +y); 
}
foo (); //30
console.log(window.x); //10
console.log(window.y); //20 

delete x; //전역변수는 삭제되지 않는다. 
delete y; //프로퍼티는 삭제된다.
console.log(window.x); //10 
console.log(window.y); //undefined