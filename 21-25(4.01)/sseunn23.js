//[예제풀이 23 -01]
var x ;
x = 1; 
//[예제풀이 23 -02]
//전역변수선언
const x = 1; 
const y = 2;
//함수정의
function foo(a) {
    //지역변수선언
    const x = 10; 
    const y = 20;

    //메서드 호출 
    console.log(a + x + y); //130 
}
//함수호출
foo(100); 
//메서드 호출 
console.log(x + y); //3 
//[예제풀이 23 -03]
const x =1; 
function foo ( ) {
    const y = 2; 
    function bar () {
        const z = 3; 
        console.log(x + y + z); 
    }
    bar();
}
foo(); //6 
//[예제풀이 23 -04]
var x = 1; 
const y = 2; 
function foo(a){
    var x =3; 
    const y =4;
    function bar (b)
    const z =5 ;
    console.log(a + b + x + y + z );
}
bar(10);
}
foo(20); //42
//[예제풀이 23 -05]
//Object.prototype.toString 
window.toString(); //"[object window]"
window.__proto__.__proto__.__proto__.__proto__ ===Object.prototype; //true 
//[예제풀이 23 -06]
var x =1;
const y =2;
function foo(a) {
    
}
//[예제풀이 23 -07]
let foo = 1; //전역변수
{
    //let ,const 키워드로 선언한 변수가 호이스팅 ㅚ지 않는다면 전역변수를 참조해야한다.
    //하지만 let 키워드로 선언한 변수도 여전히 호이스팅이 발생하기 때문에 참조에러(ReferenceError)가  발생한다.
    console.log(foo);//ReferenceError: Cannot access 'foo' before initializtion
    let foo = 2; //지역변수 
}
2. 3 외부 렉시컬 환경에 대한 참조결정 
23.6.3 전역코드실행 
//[예제풀이 23 -08]
var x =1;
const y =2 ;
function foo(a) {
    var x =3; 
    const y = 4;

    function bar (b){
        const z =5; 
        console.log(a+b+x+y+z);
    }
    bar(10);
}
foo(20); //호출 직전
//[예제풀이 23 -09]
var x =1;
const y =2;

function foo(a){
    var x = 3; 
    const y =4; 

    function bar (b) {
        const z =5; 
        console.log(a+b+x+y+z);
    }
    btoa(10); //호출직전
}
foo(20);

//[예제풀이 23 -10]
console.hasOwnProperty('log'); //true
//[예제풀이 23 -11]
let x = 1;
if(true) {
    let x=10;
    console.log(x);//10
}
console.log(x); //1 