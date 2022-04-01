//[예제풀이 15 -01]
var x = 1;
var y = 1;
//var 키워드로 선언된 변수는 같은 스코프 내에서 중복선언을 허용한다. 
//초화문이 있는 변수 선언문은 자바스크립트 엔진에 의해 var 키워드가 없느 ㄴ것처럼 동작한다. 
var x = 100;
//초기화문이 없는 변수선언문은 무시된다. 
var y;
console.log(x); //100
console.log(y); // 1 
//[예제풀이 15 -02]
var x = 1; 
if(true){
    //x는 전역변수다. 이미 선언된 전역 변수 x가 있으므로 x변수는 중복선언된다. 
    //이는 의도치 않게 변수값이 변경되는 부작용을 발생시킨다.
    var x = 10 ;
}
console.log(x); //10 
//[예제풀이 15 -03]
var i = 10;
//for문에서 선언한 i는 전역변수이다. 이미 선언된 전역변수i가 있으므로 중복선언된다. 
for (var i = 0; i<5; i++){
    console.log(i); // 01234
}    
//의도치 않게 i변수의 갑싱 변경되었다. 
console.log(i); //5
//[예제풀이 15 -04]
//이 시점에는 변수 호이스팅에 의해 이미 foo변수가 선언되었다. (1. 선언단계)
//변수foo는 undefined에 의해 초기화된다. (2. 초기화단계 )
console.log(foo); // undefined
//변수에 값을 할당 (3. 할당단계 )
foo = 123;
console.log(foo); //123
//변수선언은 런타임 이전에 자바스크립트 엔진에 의해 암묵적으로 실행된다. 
var foo ; 
//[예제풀이 15 -05]
var foo = 123; 
//var 키워드로 선언된 변수는 같은 스코프 내에서 중복선언을 허용한다. 
//아래 변수 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 동작한다. 
var foo = 456;
let bar = 123;
//let이나 const 키워드로 선언된 변수는 같은 스코프 내에서 중복선언을 허용하지 않는다. 
let bar = 456;
//SyntaxError: Identifier 'bar' has already been declared 
//[예제풀이 15 -06]
let foo = 1 ; //전역변수

{
    let foo = 2; //지역변수 
    let bar = 3; //지역변수
}
console.log(foo); //1 
console.log(bar); //ReferenceError: bar is not defined 
//[예제풀이 15 -07]
console.log(foo); //ReferenceError: foo is not defined 
let foo ;
//[예제풀이 15 -08]
//var 키워드로 선언한 변수는 런타임 이전에 선언단계와 초기화 단계가 실행된다. 
//따라서 변수 선언문 이전에 변수를 참조할수있다. 
console.log(foo); //undefined 

var foo;
console.log(foo); //undefined

foo = 1; //할당문에서 할당 단계가 실행된다. 
console.log(foo); //1
//[예제풀이 15 -09]
//런타임 이전에 선언단계가 실행된다. 아직 변수가 초기화 되지 않았다. 
//초기화 이전의 일시적 사각지대 에서는 변수를 참조할수없다. 
console.log(foo); //ReferenceError: foo is not defined 

let foo ; //변수선언ㅇ문에서 초기화 단계가 실행된다 .
console.log(foo); //undefined
foo=1; //할당문에서 할당단계가 실행된다. 
console.log(foo); //1 
//[예제풀이 15 -10]
let foo = 1; //전역변수
{
    console.log(foo); //ReferenceError: Cannot access 'foo' before intialization
    let foo = 2; //지역변수 
}

//[예제풀이 15 -11]
//이 예제는 브라우저 환경에서 실행되야 한다. 
//전역변수
var x = 1;
//암묵적 전역
y = 2;
//전역함수
function foo(){}
//var키워드로 선언한 전역변수는 전역객체 window의 프로퍼티이다.
console.log(window.x); //1
//전역객체 window의 프로퍼티는 전역변수처럼 사용할수있다. 
console.log(x) ;// 1
//암묵적 전역은 전역객체 window의 프로퍼티다. 
console.log(window.y); //2
console.log(y); //2
//함수선언문으로 정의한 전역함수는 전역객체 window의 프로퍼티다.
console.log(window.foo); //f foo() {}
//전역객체 window의 프로퍼티는 전역변수처럼 사용할수있다. 
console.log(foo); //f foo(){}
//[예제풀이 15 -12]
//이 예제는 브라우저 환경에서 실행해야 한다 .
let x = 1 ; 
//let,const 키워드로 선언한 전역변수ㅡㄴ 전역객체 window의 프로퍼티가 아니다. 
console.log(window.x); //undefined 
console.log(x); //1 

//[예제풀이 15 -13]
const foo = 1;

//[예제풀이 15 -14]
const foo; //SyntaxError: Missing initializer in const declaration
//[예제풀이 15 -15]
{
    //변수 호이스팅이 발생하지 않는것처럼 동작한다. 
    console.log(foo); //ReferenceError: Cannot access 'foo' before initialization
    const foo = 1; 
    console.log(foo); //1
}
//블록레벨 스코프를 갖느ㅡㄴ다. 
console.log(foo); //ReferenceError: foo is not defined 
//[예제풀이 15 -16]
const foo = 1; 
foo = 2; //TypeError: Assignment to constant variable 

//[예제풀이 15 -17]
//세전가격
let preTaxPrice = 100;
//세후가격
//0.1의 의미를 명확히 알기 어렵기 때문에 가독성이 좋지 않다.
let afterTaxPrice = preTaxPrice + (PreTaxPrice * 0.1); 
console.log(afterTaxPrice); //110 
//[예제풀이 15 -18]
//세율을 의미하는 0.1은 변경할수없는 상수로서 사용될 값이다.
//변수이름을 대문자로 선언해 상수임을 명확히 나타낸다.
const TAX_RATE = 0.1;
//세전가격 
let preTaxPrice = 100;
//세후가격
let afterTaxPrice = preTaxPrice + (preTaxPrice * TAX_RATE);
console.log(afterTaxPrice); //110

//[예제풀이 15 -19]
const person = {
    name : 'Lee'
}; 
//객체는 변경 가능한 값이다. 따라서 재할당 없이 변경이 가능하다. 
person.name = 'Kim'; 

console.log(person); //{name: "Kim"}