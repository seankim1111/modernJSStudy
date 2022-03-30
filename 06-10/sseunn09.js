//[예제 09-01]
var x = 10;
//명시적 타입 변환
//숫자를 문자열로 타입 캐스팅한다.
var str = x.toString();
console.log(typeof str, str); //string 10 

//x변수의 값이 변경된 것은 아니다.
console.log(typeof x, x); // number 10

//[예제 09-02]
var x = 10 ;
//암묵적 타입 변환
//문자열 연결 연산자는 숫자 타입 x의 값을 바탕으로 새로운 문자열을 생성한다. 
var str = x + '';
console.log(typeof str, str); // string 10
//x변수의 값이 변경된 것은 아니다.
console.log(typeof x, x); //number 10 

//[예제 09-03]
//[예제 09-04]
//[예제 09-05]
//[예제 09-06]
//숫자타입
0 + '' //"0"
-0 + '' //"0"
1 + '' //"1"
-1 + '' //"-1"
NaN + '' // NaN 
Infinity + '' //"Infinity"
-Infinity + '' //"-Infinity"

//불리언타입
true + '' //"true"
false + '' //"false"

//null 타입
null + '' //"null"

//undefined 타입
undefined + '' //"undefined"

//심벌타입 
(Symbol()) + '' // TypeError : Cannot convert a Symbol value to a string

//객체타입
({}) + '' //"[object Object]"
Math + '' //"[object Math]"
[] + '' //" "
[10, 20] + '' //"10,20"
(function(){}) + '' //"function(){}"
Array + '' //"function Array () { [native code]}""

//[예제 09-07]
//[예제 09-08]
//[예제 09-09]
//문자열타입
+'' //0
+'0' //0
+'1' //1
+'string'//NaN

//불리언타입
+true  //1
+false  //0

//null 타입
+null //0

//undefined 타입
+undefined  //NaN

//심벌타입 
+Symbol() // TypeError : Cannot convert a Symbol value to a number
//객체타입
+{} //NaN 
+[] //0
+[10, 20] //NaN 
+(function(){})  //NaN

//[예제 09-10]
if ('')console.log(x);
//[예제 09-11]
if ('')console.log('1')
if (true)console.log('2')
if (0)console.log('3')
if ('str')console.log('4')
if (null)console.log('5')
//2,4

//[예제 09-12]
//아래의 조건문은 모두 코드 블록을 실행한다. 
// 아래의 조건문은 모두 코드 블록을 실행한다.
if (!false)     console.log(false + ' is falsy value');
if (!undefined) console.log(undefined + ' is falsy value');
if (!null)      console.log(null + ' is falsy value');
if (!0)         console.log(0 + ' is falsy value');
if (!NaN)       console.log(NaN + ' is falsy value');
if (!'')        console.log('' + ' is falsy value');

//[예제 09-13]
// 전달받은 인수가 Falsy 값이면 true, Truthy 값이면 false를 반환한다.
function isFalsy(v) {
    return !v;
  }
  
  // 전달받은 인수가 Truthy 값이면 true, Falsy 값이면 false를 반환한다.
  function isTruthy(v) {
    return !!v;
  }
  // 모두 true를 반환한다.
  isFalsy(false);
  isFalsy(undefined);
  isFalsy(null);
  isFalsy(0);
  isFalsy(NaN);
  isFalsy('');
  // 모두 true를 반환한다.
  isTruthy(true);
  isTruthy('0'); // 빈 문자열이 아닌 문자열은 Truthy 값이다.
  isTruthy({});
  isTruthy([]);

//[예제 09-14]
// 1. String 생성자 함수를 new 연산자 없이 호출하는 방법
// 숫자 타입 => 문자열 타입
String(1);        //"1"
String(NaN);      //"NaN"
String(Infinity); //"Infinity"
// 불리언 타입 => 문자열 타입
String(true);     //"true"
String(false);    //"false"

// 2. Object.prototype.toString 메서드를 사용하는 방법
// 숫자 타입 => 문자열 타입
(1).toString();        //"1"
(NaN).toString();      //"NaN"
(Infinity).toString(); //"Infinity"
// 불리언 타입 => 문자열 타입
(true).toString();     //"true"
(false).toString();    //"false"

// 3. 문자열 연결 연산자를 이용하는 방법
// 숫자 타입 => 문자열 타입
1 + '';        //"1"
NaN + '';      //"NaN"
Infinity + ''; //"Infinity"
// 불리언 타입 => 문자열 타입
true + '';     //"true"
false + '';    //"false"

//[예제 09-15]
// 1. Number 생성자 함수를 new 연산자 없이 호출하는 방법
// 문자열 타입 => 숫자 타입
Number('0');     //0
Number('-1');    //-1
Number('10.53'); //10.53
// 불리언 타입 => 숫자 타입
Number(true);    //1
Number(false);   //0

// 2. parseInt, parseFloat 함수를 사용하는 방법(문자열만 변환 가능)
// 문자열 타입 => 숫자 타입
parseInt('0');       //0
parseInt('-1');      //-1
parseFloat('10.53'); //10.53

// 3. + 단항 산술 연산자를 이용하는 방법
// 문자열 타입 => 숫자 타입
+'0';     //0
+'-1';    //-1
+'10.53'; //10.53
// 불리언 타입 => 숫자 타입
+true;    //1
+false;   //0

// 4. * 산술 연산자를 이용하는 방법
// 문자열 타입 => 숫자 타입
'0' * 1;     //0
'-1' * 1;    //-1
'10.53' * 1; //10.53
// 불리언 타입 => 숫자 타입
true * 1;    //1
false * 1;   //0

//[예제 09-16]
// 1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
// 문자열 타입 => 불리언 타입
Boolean('x');       //true
Boolean('');        //false
Boolean('false');   //true
// 숫자 타입 => 불리언 타입
Boolean(0);         //false
Boolean(1);         //true
Boolean(NaN);       //false
Boolean(Infinity);  //true
// null 타입 => 불리언 타입
Boolean(null);      //false
// undefined 타입 => 불리언 타입
Boolean(undefined); //false
// 객체 타입 => 불리언 타입
Boolean({});        //true
Boolean([]);        //true

// 2. ! 부정 논리 연산자를 두번 사용하는 방법
// 문자열 타입 => 불리언 타입
!!'x';       //true
!!'';        //false
!!'false';   //true
// 숫자 타입 => 불리언 타입
!!0;         //false
!!1;         //true
!!NaN;       //false
!!Infinity;  //true
// null 타입 => 불리언 타입
!!null;      //false
// undefined 타입 => 불리언 타입
!!undefined; //false
// 객체 타입 => 불리언 타입
!!{};        //true
!![];        //true

//[예제 09-17]
//[예제 09-18]
//[예제 09-19]
// 논리합(||) 연산자
'Cat' || 'Dog'  //"Cat"
false || 'Dog'  //"Dog"
'Cat' || false  //"Cat"

// 논리곱(&&) 연산자
'Cat' && 'Dog'  //"Dog"
false && 'Dog'  //false
'Cat' && false  //false

//[예제 09-20]
var done = true;
var message = '';

// 주어진 조건이 true일 때
if (done) message = '완료';

// if 문은 단축 평가로 대체 가능하다.
// done이 true라면 message에 '완료'를 할당
message = done && '완료';
console.log(message); // 완료

//[예제 09-21]
var done = false;
var message = '';

// 주어진 조건이 false일 때
if (!done) message = '미완료';

// if 문은 단축 평가로 대체 가능하다.
// done이 false라면 message에 '미완료'를 할당
message = done || '미완료';
console.log(message); // 미완료

//[예제 09-22]
var done = true;
var message = '';

// if...else 문
if (done) message = '완료';
else      message = '미완료';
console.log(message); // 완료

// if...else 문은 삼항 조건 연산자로 대체 가능하다.
message = done ? '완료' : '미완료';
console.log(message); // 완료

//[예제 09-23]
var elem = null;
var value = elem.value; // TypeError: Cannot read property 'value' of null

//[예제 09-24]
var elem = null;
// elem이 null이나 undefined와 같은 Falsy 값이면 elem으로 평가되고
// elem이 Truthy 값이면 elem.value로 평가된다
var value = elem && elem.value; // -> null

//[예제 09-25]
// 단축 평가를 사용한 매개변수의 기본값 설정
function getStringLength(str) {
    str = str || '';
    return str.length;
  }
  getStringLength();     //0
  getStringLength('hi'); //2
  
  // ES6의 매개변수의 기본값 설정
  function getStringLength(str = '') {
    return str.length;
  }
  getStringLength();     //0
  getStringLength('hi'); //2

//[예제 09-26]
var elem = null;

// elem이 null 또는 undefined이면 undefined를 반환하고, 그렇지 않으면 우항의 프로퍼티 참조를 이어감
var value = elem?.value;
console.log(value); // undefined

//[예제 09-27]
var elem = null;

// elem이 Falsy 값이면 elem으로 평가되고 elem이 Truthy 값이면 elem.value로 평가된다
var value = elem && elem.value;
console.log(value); // null

//[예제 09-28]
var str = '';

// 문자열의 길이(length)를 참조한다.
var length = str && str.length;

// 문자열의 길이(length)를 참조하지 못한다.
console.log(length); // ''

//[예제 09-29]
var str = '';
// 문자열의 길이(length)를 참조한다. 이때 좌항 피연산자가 false로 평가되는 Falsy 값이라도
// null 또는 undefined가 아니면 우항의 프로퍼티 참조를 이어간다
var length = str?.length;
console.log(length); // 0

//[예제 09-30]
// 좌항의 피연산자가 null 또는 undefined이면 우항의 피연산자를 반환하고, 그렇지 않으면 좌항의 피연산자를 반환한다
var foo = null ?? 'default string';
console.log(foo); // "default string"

//[예제 09-31]
// Falsy 값인 0이나 ''도 기본값으로서 유효하다면 예기치 않은 동작이 발생할 수 있다
var foo = '' || 'default string';
console.log(foo); //"default string"

//[예제 09-32]
// 좌항의 피연산자가 Falsy 값이라도 null 또는 undefined이 아니면 좌항의 피연산자를 반환
var foo = '' ?? 'default string';
console.log(foo); // ""