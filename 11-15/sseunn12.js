//[예제풀이 12 -01]함수 f(x,y)= x + y
function add(x,y){
    return x + y; 
}
//f(2,5) = 7
add(2,5); //7

//[예제풀이 12 -02]
//함수 정의
function add(x,y) {
    return x+y;
}

//[예제풀이 12 -03]
var result = add(2,5);
//함수 add에 인수 2,5를 전달하면서 호출하면 반환값 7을 반환한다. 
console.log(result);//7

//[예제풀이 12 -04]
//변수에 함수 리터럴을 할당
var f = function add(x,y) {
    return x + y ;
}

//[예제풀이 12 -05]
//함수 선언문
function add(x,y) {
    return x + y; 
}
//함수 참조
//console.dir 은 console.log와는 달리 함수 객체의 프로퍼티까지 출력한다. 단, Node.js환경에서는 console.log와 같은 결과가 출력된다. 
console.dir(add) //f add(x,y)
//함수 호출
console.log(add(2,5));  //7 
//[예제풀이 12 -06]함수 선언문은 함수 이름을 생략할수없다.
function (x, y){
    return x +y;
}
//SyntaxError : Function statements require a function name 

//[예제풀이 12 -07]
//함수 선언문은 표현식이 아닌 문이므로 변수에 할당할 수없다. 
//하지만 함수 선언문이 변수에 할당되는 것처럼 보인다. 
var add = function add (x,y) {
    return x + y ;
} ;
//함수호출
console.log(add(2,5));
//[예제풀이 12 -08]
//기명함수 리터럴을 단독으로 사용하면 함수 선언문으로 해석된다. 
//함수 선언문에서는 함수 이름으 생략할 수 없다. 
function foo () { console.log('foo');}
foo (); //foo
//함수 리터럴을 피연산자로 사용하면 함수 선언문이 아니라 함수 리터럴 표현식으로 해석된다.
//함수 리터럴에서는 함수 이름을 생략할 수 있다.
(function bar () {console.log('bar');});
bar(); //ReferenceError: bar is not defined 

//[예제풀이 12 -09]
var add = function add (x, y) {
    return x + y ;
};
console.log(add(2,5)); //7
//[예제풀이 12 -10]
//함수표현식
var add = function (x, y) {
    return x + y ;
};
console.log(add(2,5)); //7
//[예제풀이 12 -11]
//기명함수 표현식
var add = function foo (x, y) {
    return x + y ;
}; 
//함수 객체를 가리키는 식별자로 호출
console.log(add(2,5)); //7
//함수 이름으로 호출하면 ReferenceError 가 발생한다. 
//함수 이름은 함수 몸체 내부에서만 유효한 식별자이다. 
console.log(foo(2,5)); // ReferenceError :foo is not defined
//[예제풀이 12 -12]
//함수 참조
console.dir(add); //add(x,y)
console.dir(sub); //undeined
//함수 호출
console.log(add(2,5)); //7
console.log(sub(2,5)); // TypeError: sub is not a function
//함수 선언문
function add(x,y) {
    return x + y; 
}
//함수 표현식
var sub = function  (x, y) {
    return x - y ;
}; 
//[예제풀이 12 -13]
var add = new Function ('x', 'y', 'return x + y');
console.log(add(2, 5)); //7
//[예제풀이 12 -14]
var add1 = (function (){
    var a = 10;
    return function (x, y){
        return x + y + a;
    };
}());
console.log(add1(1,2)); //13
var add2 = (function (){
    var a = 10;
    return new Function ('x','y', 'return x + y + a');
}());
console.log(add2(1,2)); //ReferenceError :a is not defined 
//[예제풀이 12 -15]
//화살표 함수
const add = (x,y) => x + y ;
console.log(add(2,5)); // 7
//[예제풀이 12 -16]
//함수 선언문
function add(x,y) {
    return x + y;
}
//함수 호출
//인수 1과 2가 매개변수 x와 y에 순서대로 할당되고 함수 몸체의 문들이 실행된다. 
var result = add(1,2); 
//[예제풀이 12 -17]
function add(x,y) {
    console.log(x,y); //2 5 
    return x + y;
}
add (2, 5);

//add함수의 매개변수 x,y는 함수 몸체 내부에서만 참조할 수 있다.
console.log(x, y); //ReferenceError: x is not defined

//[예제풀이 12 -18]
function add(x , y) {
    return x + y;
}
console.log(add(2)); //NaN

//[예제풀이 12 -19]
function add(x , y) {
    return x + y;
}
console.log(add(2,5,10)); //7

//[예제풀이 12 -20]
function add(x , y) {
    console.log(arguments);
    //Arguments(3)[2,5,10, callee:f, Symbol(Symbol.iterator):f]

    return x + y ;
}
add(2,5,10); 

//[예제풀이 12 -21]
function add(x , y) {
    return x + y;
}

//[예제풀이 12 -22]
function add(x , y) {
    return x + y;
}
console.log(add(2)); //NaN
console.log(add('a','b')); //'ab' 
//[예제풀이 12 -23]
function add(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        //매개변수를 통해 전달된 인수의 타입이 부적절한 경우 에러를 발생시킨다. 
        throw new TypeError ('인수는 모두 숫자 값이어야 합니다.'); 
    }
    return x + y; 
}
console.log(add(2)); //TypeError :인수는 모두 숫자 값이어야 합니다. 
console.log(add('a','b')); //TypeError : 인수는 모두 숫자 값이어야 합니다. 

//[예제풀이 12 -24]
function add(a, b, c) {
    a = a || 0;
    b = b || 0;
    c = c || 0;
    return a + b + c;
}
console.log(add(1,2,3)); //6
console.log(add(1,2)); //3
console.log(add(1)); //1
console.log(add()); //0
//[예제풀이 12 -25]
function add(a=0 , b=0 , c=0) {
    return a + b + c;
}
console.log(add(1,2,3)); //6
console.log(add(1,2)); //3
console.log(add(1)); //1
console.log(add()); //0
//[예제풀이 12 -26]
$.ajax({
    method: 'POST',
    url: '/user',
    data: {id: 1, name: 'Lee'},
    cache: false
});

//[예제풀이 12 -27]
function multiply (x , y){
    return x * y //반환문
}
//함수 호출은 반환값으로 평가된다.
var result = multiply(3, 5);
console.log(result); //15

//[예제풀이 12 -28]
function multiply (x , y){
    return x * y //반환문
    //반환문 이후에 다른 문이 존재하면 그 문은 실행되지 않고 무시된다. 
    console.log('실행되지 않는다. ');
}
//함수 호출은 반환값으로 평가된다.
console.log(multiply(3,5)); //15

//[예제풀이 12 -29]
function foo() {
    return; 
}
console.log(foo()); //undefined 

//[예제풀이 12 -30]
function foo() {
  //반환문을 생략하면 암묵적으로 undefined가 반환된다.
}
console.log(foo()); //undefined 

//[예제풀이 12 -31]
function multiply (x, y){
    //return 키워드와 반환값 사이에 줄바꿈이 있으면 
    return; //세미콜론 자동삽입기능에 의해 세미콜론이 추가된다. 
    x * y; //무시된다.
}
console.log(multiply(3,5)); //undefined 
//[예제풀이 12 -32]
<!DOCTYPE>
<html>
    <body>
        <script>
            return; //SyntaxError: Illegal return statement 
        </script>
    </body>
</html>
//[예제풀이 12 -33]
//매개변수 primitive는 원시값을 전달받고, 매개변수 obj는 객체를 전달받는다.
function changeVal(primitive, obj) {
    primitive += 100;
    obj.name = 'Kim';
  }
  
  //외부 상태
  var num = 100;
  var person = { name: 'Lee' };
  
  console.log(num); //100
  console.log(person); //{name: "Lee"}
  
  //원시값은 값 자체가 복사되어 전달되고 객체는 참조값이 복사되어 전달된다.
  changeVal(num, person);
  
  //원시값은 원본이 훼손되지 않는다.
  console.log(num); // 100
  
  //객체는 원본이 훼손된다.
  console.log(person); // {name: "Kim"}
//[예제풀이 12 -34]
//익명 즉시 실행 함수
(function () {
    var a = 3;
    var b = 5;
    return a * b;
  }());
//[예제풀이 12 -35]
//기명 즉시 실행 함수
(function foo() {
    var a = 3;
    var b = 5;
    return a * b;
  }());
  
  foo(); //ReferenceError: foo is not defined
//[예제풀이 12 -36]
function () { //SyntaxError: Function statements require a function name
    //...
  }();
//[예제풀이 12 -37]
function foo() {
    //...
  }(); //SyntaxError: Unexpected token 
//[예제풀이 12 -38]
function foo() {}(); //=> function foo() {};();
//[예제풀이 12 -39]
(); //SyntaxError: Unexpected token )
//[예제풀이 12 -40]
console.log(typeof (function f(){})); // function
console.log(typeof (function (){}));  // function
//[예제풀이 12 -41]
(function () {
    //...
  }());
  
  (function () {
    //...
  })();
  
  !function () {
    //...
  }();
  
  +function () {
    //...
  }();
//[예제풀이 12 -42]
//즉시 실행 함수도 일반 함수처럼 값을 반환할 수 있다.
var res = (function () {
    var a = 3;
    var b = 5;
    return a * b;
  }());
  
  console.log(res); //15
  
  //즉시 실행 함수에도 일반 함수처럼 인수를 전달할 수 있다.
  res = (function (a, b) {
    return a * b;
  }(3, 5));
  
  console.log(res); //15
//[예제풀이 12 -43]
function countdown(n) {
    for (var i = n; i >= 0; i--) console.log(i);
  }
  countdown(10);
//[예제풀이 12 -44]
function countdown(n) {
    if (n < 0) return;
    console.log(n);
    countdown(n - 1); //재귀 호출
  }
  
  countdown(10);
//[예제풀이 12 -45]
//팩토리얼(계승)은 1부터 자신까지의 모든 양의 정수의 곱이다.
//n! = 1 * 2 * ... * (n-1) * n
function factorial(n) {
    //탈출 조건: n이 1 이하일 때 재귀 호출을 멈춘다.
    if (n <= 1) return 1;
    //재귀 호출
    return n * factorial(n - 1);
  }
  
  console.log(factorial(0)); //0! = 1
  console.log(factorial(1)); //1! = 1
  console.log(factorial(2)); //2! = 2 * 1 = 2
  console.log(factorial(3)); //3! = 3 * 2 * 1 = 6
  console.log(factorial(4)); //4! = 4 * 3 * 1 * 1 = 24
  console.log(factorial(5)); //5! = 5 * 4 * 3 * 2 * 1 = 120
//[예제풀이 12 -46]
//함수 표현식
var factorial = function foo(n) {
    //탈출 조건: n이 1 이하일 때 재귀 호출을 멈춘다.
    if (n <= 1) return 1;
    //함수를 가리키는 식별자로 자기 자신을 재귀 호출
    return n * factorial(n - 1);
  
    //함수 이름으로 자기 자신을 재귀 호출할 수도 있다.
    //console.log(factorial === foo); // true
    //return n * foo(n - 1);
  };
  
  console.log(factorial(5)); //5! = 5 * 4 * 3 * 2 * 1 = 120
//[예제풀이 12 -47]
function factorial(n) {
    if (n <= 1) return 1;
    var res = n;
    while (--n) res *= n;
    return res;
  }
  console.log(factorial(0)); //0! = 1
  console.log(factorial(1)); //1! = 1
  console.log(factorial(2)); //2! = 2 * 1 = 2
  console.log(factorial(3)); //3! = 3 * 2 * 1 = 6
  console.log(factorial(4)); //4! = 4 * 3 * 1 * 1 = 24
  console.log(factorial(5)); //5! = 5 * 4 * 3 * 2 * 1 = 120
//[예제풀이 12 -48]
function outer() {
    var x = 1;
  
    //중첩 함수
    function inner() {
      var y = 2;
      //외부 함수의 변수를 참조할 수 있다.
      console.log(x + y); //3
    }
  
    inner();
  }
  
  outer();
//[예제풀이 12 -49]
//n만큼 어떤 일을 반복한다
function repeat(n) {
    //i를 출력한다.
    for (var i = 0; i < n; i++) console.log(i);
  }
  repeat(5); // 01234
//[예제풀이 12 -50]
//n만큼 어떤 일을 반복한다
function repeat1(n) {
    // i를 출력한다.
    for (var i = 0; i < n; i++) console.log(i);
  }
  
  repeat1(5); //0 1 2 3 4
  
  //n만큼 어떤 일을 반복한다
  function repeat2(n) {
    for (var i = 0; i < n; i++) {
      //i가 홀수일 때만 출력한다.
      if (i % 2) console.log(i);
    }
  }
  
  repeat2(5); //13
//[예제풀이 12 -51]
//외부에서 전달받은 f를 n만큼 반복 호출한다
function repeat(n, f) {
    for (var i = 0; i < n; i++) {
      f(i); //i를 전달하면서 f를 호출
    }
  }
  
  var logAll = function (i) {
    console.log(i);
  };
  
  //반복 호출할 함수를 인수로 전달한다.
  repeat(5, logAll); //01234
  
  var logOdds = function (i) {
    if (i % 2) console.log(i);
  };
  
  //반복 호출할 함수를 인수로 전달한다.
  repeat(5, logOdds); //1,3

//[예제풀이 12 -52]
//익명 함수 리터럴을 콜백 함수로 고차 함수에 전달한다.
//익명 함수 리터럴은 repeat 함수를 호출할 때마다 평가되어 함수 객체를 생성한다.
repeat(5, function (i) {
    if (i % 2) console.log(i);
  }); // 1 3
//[예제풀이 12 -53]
//logOdds 함수는 단 한 번만 생성된다.
var logOdds = function (i) {
    if (i % 2) console.log(i);
  };
  
  //고차 함수에 함수 참조를 전달한다.
  repeat(5, logOdds); //1,3

//[예제풀이 12 -54]
//콜백 함수를 사용한 이벤트 처리
//myButton 버튼을 클릭하면 콜백 함수를 실행한다.
document.getElementById('myButton').addEventListener('click', function () {
    console.log('button clicked!');
  });
  //콜백 함수를 사용한 비동기 처리
  //1초 후에 메시지를 출력한다.
  setTimeout(function () {
    console.log('1초 경과');
  }, 1000);
//[예제풀이 12 -55]
//콜백 함수를 사용하는 고차 함수 map
var res = [1, 2, 3].map(function (item) {
    return item * 2;
  });
  
  console.log(res); //[2, 4, 6]
  
  //콜백 함수를 사용하는 고차 함수 filter
  res = [1, 2, 3].filter(function (item) {
    return item % 2;
  });
  
  console.log(res); //[1, 3]
  
  //콜백 함수를 사용하는 고차 함수 reduce
  res = [1, 2, 3].reduce(function (acc, cur) {
    return acc + cur;
  }, 0);
  
  console.log(res); // 6
//[예제풀이 12 -56]
var count = 0; // 현재 카운트를 나타내는 상태

//순수 함수 increase는 동일한 인수가 전달되면 언제나 동일한 값을 반환한다.
function increase(n) {
  return ++n;
}

//순수 함수가 반환한 결과값을 변수에 재할당해서 상태를 변경
count = increase(count);
console.log(count); //1

count = increase(count);
console.log(count); //2

//[예제풀이 12 -57]
var count = 0; // 현재 카운트를 나타내는 상태: increase 함수에 의해 변화한다.

// 비순수 함수
function increase() {
  return ++count; //외부 상태에 의존하며 외부 상태를 변경한다.
}

//비순수 함수는 외부 상태(count)를 변경하므로 상태 변화를 추적하기 어려워진다.
increase();
console.log(count); //1

increase();
console.log(count); //2