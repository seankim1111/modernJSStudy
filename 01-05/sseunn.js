// [예제 03-01]
<!DOCTYPE html>
    <html> 
        <head>
            <meta charset = "UTF-8"/>
                <title>Counter</title>
        </head>
        <body>
            <div id= "counter">0</div>
            <button id="increase">+</button>
            <button id="decrease">-</button>
            <script>
                {/*  에러를 발생시키는 코드: 선택자는 'counter-x'가 아니라 'counter'를 지정해야 한다. */}
            const $counter = document.getElementById('counter-x');
            const $increase = document.getElementById('increase');
            const $decrease = document.getElementById('decrease');

            let num = 0;
            const render = function () { $counter.innerHTML = num; };

            $increase.onclick = function() {
                num++;
                console.log('increase 버튼 클릭', num);
                render();
            }

            $decrease.onclick = function() {
                num++;
                console.log('decrease 버튼 클릭', num);
                render();
            }
            </script>
    </body>
    </html>
// [예제 03-02]
const arr = [1,2,3]

0 [1,2,3]
1 [1,2,3]
2 [1,2,3]

// [예제 03-03]
const arr = [1,2,3]

arr.forEacg(alert);

// [예제 03-04]
<!DOCTYPE html>
<html>
    <body>
        <script src="index.js"></script>
    </body>
</html>

//[예제 04-01]
10 + 20 

// [예제04-02]
//변수는 하나의 값을 저장하기 위한 수단이다. 
var userId = 1;
var userName = 'Lee';
// 객체나 배열같은 자료구조를 사용하면 여러개의 값을 하나로 그룹화해서 하나의 값처럼 사용할 수 있다. 
var user = { id: 1, name: 'Lee'};

var users = [
    { id: 1, name: 'Lee' },
    { id: 2, name: 'Kim' }
];

//[예제 04-03]
var result = 10 + 20;

//[예제 04-04]
var score; //변수 선언(변수선언문)

//[예제 04-05, 06, 07]
console.log(score); // undefined

var score; //변수 선언문
score = 80; //값의 할당

var score = 80; // 변수선언과 값의 할당.

//[예제 04-08]
console.log(score); // undefined

var score; //1. 변수선언
score = 80; // 2.값의 할당

console.log (score); //80

// [예제 04-11]
var score = 80; // 변수선언과 값의 할당
score = 90; //값의 재할당 

// [예제 04-12]
var person, $elem, _name, first_name, val1;

// [예제 04-16]
var x = 3; //NG.x변수가 의미하는 바를 알 수 없다. 
var score = 100; //ok.score변수는 점수를 의미한다. 

// [예제 04-17]
//경과시간. 단위는 날짜다. 
var d; //NG 

var elapsedTimeInDays; // ok

//[예제 04-18]
var firstName; //카멜케이스(camelCase)
var first_name; // 스네이크케이스 (snake_case)
var FirstName; // 파스칼케이스(PascalCase)
var strFirstName; // 헝가리언케이스 (type+indentifier)
var $elem = document.getElementById('myId') // DOM노드
var observable$ = fromEvent(document, 'click'); //RxJS옵저버블

//[예제05-01 , 02, 03]
10 + 20; //30
//10 + 20은 평가되어 숫자 값 30을 생성한다. 

var sum = 10 + 20;
//변수에는 10+20이 평가되어 생성된 숫자 값 30이 할당된다. 

3 
//숫자 리터럴 3 

var score= 100; 

//[예제 05-07]
10
'Hello'
//리터럴 표현식

sum
person.name
arr[1]
//식별자 표현식(선언이 이미 존재한다고 가정)

10+20 
sum = 20
sum !== 20
//연산자 표현식

square()
person.getName()
//함수,메서드 호출 표현식(선언이 이미 존재한다고 가정 )

//[예제 05-08 ]
var x = 1 + 2;

//식별자 표현식 x는 3으로 평가된다. 
x+3; // 6

//[예제 05-09]
var x; //변수선언문

x = 5; //할당문

function foo() {} //함수 선언문

if (x>1) {console.log(x);} //조건문

for(var i= 0; i < 2; i++) { console.log(i); }

//[예제 05-10 ]

function foo() {
    return
     {}
  //ASI(세미콜론 자동삽입기능)의 동작결과 =>return; {}; 
  //개발자의 예측 => return{};
}

console.log(foo()); //undefined

var bar = function ( ) { }
(function() {}) ();
//ASI의 동작결과 : var bar = function(){}(function(){})();
//개발자의 예측 :  var bar = function(){}; (function(){})();
//TypeError : (intermediate value)(...) is not a function 

// [예제 05-11]
var x; 
//변수선언문은 값으로 평가될 수 없으므로 표현식이 아니다. 
x = 1 + 2;
//1,2,1+2,x=1+2 는 모두 표현식이다. 
//x= 1+2는 표현식이면서 완전한 문이기도 하다. 

// 변수선언문은 표현식이 아닌 문이다. 
var x; 
//할당문은 그 자체가 표현식이지만 완전한 문이기도 하다. 즉, 할당문은 표현식인 문이다. 

var foo = var x; 
//표현식이 아닌 문은 값처럼 사용할수없다. 
// syntaxError: unexpected token var 

var foo = x = 100; 
console.log(foo); //100 
//표현식인 문은 값처럼 사용할 수 있다. 