//[ 예제 06-01]
//모두 숫자타입이다. 
var integer = 10; //    정수
var double = 10.12; //  살수
var negative = -20;  // 음의 정수

//[예제06-02 ]
var binary = 0b01000001; //2진수
var octal = 0o101; //8진수
var hex = 0x41; // 16진수

//표기법만 다를 뿐 모두 같은 값이다. 
console.log(binary); //65
console.log(octal); //65
console.log(hex);   //65
console.log(binary === octal); //true
console.log(octal === hex ); //true

//[예제 06-03]
console.log( 1 === 1.0 ); //true
console.log( 4 / 2 ); //2
console.log( 3 / 2 ); //1.5

//[예제 06-04]
console.log(10 / 0); //infinity (양의 무한대)
console.log(10 / -0); // -infinity(음의 무한대)
console.log(1 * 'string'); // NaN(산술연산불가)

//[예제 06-05]
//자바스크립트는 대소문자를 구별한다. 
var x = nan; //ReferenceError: nan is not defined

//[예제 06-06]
//문자열타입
var string; 
string = '문자열';  //작은따옴표
string = "문자열";  //큰따옴표
string = `문자열`;  //백틱(ES6)
string = '작은 따옴표로 감싼 문자열 내의 "큰따옴표"는 문자열로 인식된다.';
string = "큰따옴표로 감싼 문자열 내의 '작은따옴표'는 문자열로 인식된다.";

//[예제 06-07]
var string = hello; //ReferenceError: hello is not defined 
//따옴표로 감싸지 않은 hello를 식별자로 인식한다.

//[예제 06-08]
var template = `Template literal`;
console.log(template); //Template literal

//[예제 06-09]
var str ='Hello
woeld.'; 
// syntaxError: Invalid or unexpected token

//[예제 06-10]
var template = '<ul>\n\t<li><a href="#">Home</a></li>\n</ul>';
console.log(template);
//출력결과
<ul>
    <li><a href="#">Home</a></li>
</ul>

//[예제 06-11]
var template = `<ul>  
  <li><a href="#">Home</a></li>
  </ul>`;

  console.log(template);
//출력결과
<ul>
    <li><a href="#"></a></li>
</ul>

//[예제 06-12]
var first = 'Ung-mo';
var last = 'Lee';

//ES5: 문자열 연결 
console.log('My name is' + first + ' ' + last + '.'); // My name is Ung-mo Lee .

//[예제 06-13]
var first = 'Ung-mo';
var last = 'Lee';

//ES6: 표현식 삽입
console.log(`My name is ${first} ${last}.`); //My name is Ung-mo Lee.

//[예제 06-14,15]
console.log(` 1 + 2 = ${ 1 + 2 }`); //1+2=3
console.log(' 1 + 2 = ${ 1 + 2 }'); //1+2=${1+2}

//[예제 06-16,17]
var foo = true;
console.log(foo); //true

foo= false;
console.lof(foo); //false 

var foo;
console.log(foo); //undefined
//[예제 06-18]
var foo= 'Lee';

//이전 참조를 제거. foo변수는 더이상 'Lee'를 참조하지 않는다.
//유용해 보이지는 않는다. 변수의 스코프를 좁게 만들어 변수 자체를 재빨리 소멸시키는 편이 낫다. 
foo= null;

//[예제 06-19]
<!DOCTYPE html>
<html>
    <body>
        <script>
            var element = document.querySelector('.myClass');
            {/* HTML문서에 myClass클래스를 갖는 요소가 없다면 null을 반환한다.  */}
            console.log(element); 
            {/* //null */}
        </script>
    </body>
</html>

//[예제 06-20]
//심벌 값 생성
var key = symbol('key');
console.log(typeof key); //symbol

//객체생성
var obj = {};

//이름이 충돌할 위험이 없는 유일무이한 값인 심벌을 프로퍼티 키로 사용한다. 
obj[key]= 'value';
console.log(obj[key]); //value

//[예제 06-21]
var score = 100; 
//컴퓨터는 숫자 값 100을 저장하기 위해 메모리 공간을 확보한 다음, 확보된 메모리에 숫자값 100을 2진수로 저장한다. 

//[예제 06-22]
//c에서 정수타입의 변수를 선언하는 예
char c;
//c변수에는 1바이트 정수 타입의 값(-128~ 127) 만 할당할 수 있다. 

int Number; 
//num 변수에는 4바이트 정수타입의 값 (-2,124,483,648 ~ 2,124,483,647)만 할당할 수 있다. 

//[예제 06-23]
var foo;
console.log(typeof foo); //undefined

foo = 3; 
console.log(typeof foo); //number

foo = 'Hello';
console.log(typeof foo); //string

foo = 'true';
console.log(typeof foo); //boolean

foo = null; 
console.log(typeof foo); // object

foo = symbol(); //심벌
console.log(typeof foo); //symbol

foo = {}; //객체
console.log(typeof foo); //object

foo = []; //배열
console.log(typeof foo); //object

foo = function(){}; //함수
console.log(typeof foo); //function

