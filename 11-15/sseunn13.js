//[예제풀이 13 -01]
function add(x,y) {
    //매개변수는 함수 몸체 내부에서만 참조할 수 있다. 
    //즉, 매개변수의 스코프 (유효범위)는 함수 몸체 내부다 
    console.log(x,y); //2, 5
    return x + y; 
}
add (2,5);
//매개변수는 함수 몸체 내부에서만 참조할수있다. 
console.log(x, y ); //ReferenceError: x is not defined
//[예제풀이 13 -02]
var var1 = 1; //코드의 가장 바깥영역에서 선언한 변수
if (true) {
    var var2 = 2; //코드 블럭내에서 선언한 변수
    if(true){
        var var3 = 3; //중첩된 코드 블록내에서 선언한 변수
    }
}
function foo() {
    var var4 = 4; //함수내에서 선언한 변수

    function bar (){
        var var5 = 5; //중첩된 함수 내에서 선언한 변수
    }
}
console.log(var1); //1
console.log(var2); //2
console.log(var3); //3
console.log(var4); //ReferenceError: var4 is not defined 
console.log(var5); //ReferenceError: var5 is not defined 

//[예제풀이 13 -03]
var x = 'global';

function foo() {
    var x = 'local';
    console.log(x); // 1
}

foo(); 
console.log(x); //2 

//[예제풀이 13 -04]
function foo(){
    var x = 1; 
    //var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용한다. 
    //아래 변수 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 동작한다. 
    var x = 2; 
    console.log(x); //2
}
foo(); 
//[예제풀이 13 -05]
function bar(){
    let x = 1; 
    //let이나 const 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용하지 않는다. 
    let x = 2;//SyntaxError: Identifier 'x' has already been declared  
}
bar(); 
//[예제풀이 13 -06]
// 전역 함수
function foo() {
    console.log('global function foo');
  }
  
  function bar() {
    // 중첩 함수
    function foo() {
      console.log('local function foo');
    }
  
    foo(); //1
  }
  
  bar();
//[예제풀이 13 -07]
var x = 1;

if (true) {
  //var 키워드로 선언된 변수는 함수의 코드 블록(함수 몸체)만을 지역 스코프로 인정한다.
  //함수 밖에서 var 키워드로 선언된 변수는 코드 블록 내에서 선언되었다 할지라도 모두 전역 변수다.
  //따라서 x는 전역 변수다. 이미 선언된 전역 변수 x가 있으므로 x 변수는 중복 선언된다.
  //이는 의도치 않게 변수 값이 변경되는 부작용을 발생시킨다.
  var x = 10;
}
console.log(x); // 10
//[예제풀이 13 -08]
var i = 10;

//for 문에서 선언한 i는 전역 변수다. 이미 선언된 전역 변수 i가 있으므로 중복 선언된다.
for (var i = 0; i < 5; i++) {
  console.log(i); // 0 1 2 3 4
}

//의도치 않게 변수의 값이 변경되었다.
console.log(i); //5
//[예제풀이 13 -09]
var x = 1;

function foo() {
  var x = 10;
  bar();
}

function bar() {
  console.log(x);
}

foo(); // 
bar(); // 