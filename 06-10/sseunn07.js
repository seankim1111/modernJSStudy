//[예제 07-01 ]
5 * 4  // -> 20 (산술연산자)
'My name is ' + 'Lee' //-> 'My name is Lee' (문자열 연결 연산자)
color = 'red' // -> 'red' (할당연산자)
3 > 5 // ->false (비교 연산자)
true && false // -> false (논리연산자)
typeof 'Hi' // ->string (타입연산자)

//[예제 07-02]
5 + 2; // ->7 
5 - 2; // 3
5 * 2; // 10
5 / 2; // 2.5
5 % 2; // 1

//[예제 07- 03]
var x =1;

//++연산자는 피연산자의 값을 변경하는 암묵적 할당이 이뤄진다. 
x++; // x= x+1; 
console.log(x); //2

//--연산자는 피연산자의 값을 변경하는 암묵적 할당이 이뤄진다. 
x--; //x= x-1;
console.log(x); //1 

//[예제 07-04]
var x = 5, result;

//선할당 후 증가(postfix increment operator)
result = x++; 
console.log(result, x); //5,6

//선증가 후 할당 (prefix increment operator)
result = ++x; 
console.log(result, x); // 7,7

//선할당 후감소(postfix decrement operator)
result = x--; 
console.log(result, x); //7,6

//선감소 후할당 (prefix decrement operator)
result = --x;
console.log(result, x); //5 5

//[예제 07-05] 단항 연산자는 피연산자에 어떠한 효과도 없다.
+10;  //10
+(-10); //-10

//[예제 07-06]
var x = '1';

console.log(+x); //1 문자열을 숫자로 타입 변환한다. 
console.log(x); //"1"부수효과는 없다.

//불리언값을 숫자로 타입변환한다.
x = true; 
console.log(+x); //1
//부수효과는 없다.
console.log(x); //true

//불리언 값을 숫자로 타입변환한다. 
x = false;
console.log(+x);//0
//부수효과는 없다. 
console.log(x);//false

//문자열을 숫자로 타입 변환할 수 없으므로 NaN을 반환한다. 
x = 'Hello';
console.log(+x); //NaN
//부수효과는 없다.
console.log(x);//"Hello"

//[예제 07-07]
-(-10); // 10 (부호를 반전한다.)
-'10'; //-10 (문자열을 숫자로 타입변환한다.)
-true; //-1 (불리언 값을 숫자로 타입변환한다.)
-"Hello"; //NaN(문자열은 숫자로 타입변환할 수 없으므로 NaN을 반환한다. )

//[예제 07-08] (+연산자는 피연산자중 하나이상이 문자열인 경우 문자열 연결 연산자로 동작한다.)
//문자열 연결 연산자 
'1' + 2 // '12'
1  + '2'// '12'

//산술연산자
1 + 2; //3

//true는 1로 타입변환된다.
1 + true; //2
//false는 0으로 타입변환된다.
1 + false; //1 
//null은 -으로 타입변환된다.
1 + null; //1
//undefined는 숫자로 타입변환되지 않는다.
+undefined; // NaN
1 + undefined; //NaN

//[예제07-09 ]
var x;

x=10;
console.log(x);//10

x += 5; // x=x+5
console.log(x); //15

x -= 5; // x=x-5
console.log(x); //10

x *= 5; //x = x*5
console.log(x); //50

x /= 5; //x = x/5
console.log(x); //10

x %= 5; //x =x%5
console.log(x); // 0

var str = "My name is";

//문자열 연결 연산자 
str += 'Lee'; //str = str + 'Lee';
console.log(str); //'My name is Lee'

//[예제 07-10]
var x;
//할당문은 표현식인 문이다.
console.log(x= 10); //10

//[예제 07-11]
var a,b,c;

//연쇄할당, 오른쪽에서 왼쪽으로 진행.
//1. c=0 :0으로 평가된다.
//2. b=0 :0으로 평가된다.
//3. a=0 :0으로 평가된다. 
a=b=c=0;

console.log(a, b, c); // 0,0,0

//[예제 07-12]
5==5; //true  동등비교 
5=='5'; //true  타입은 다르지만 암묵적 타입 변환을 통해 타입을 일치시키면 동등하다.

//[예제 07-13]
//동등비교(==)연산자는 예측하기 어려운 결과를 만들어낸다. 
'0' == ''; //false
0 == ''; //true
0 == '0'; //true
false == 'false'; //false
false == '0'; //true
false == null; //false
false == undefined; //false

//[예제 07-14]
//일치비교
5===5; //true 

//암묵적 타입 변환을 하지 않고 값을 비교한다. 즉, 값과 타입이 모두 같은 경우만 true를 반환한다.
5==='5'; //false

//[예제07-15]
NaN===NaN; //false (NaN은 자신과 일치하지 않는 유일한 값이다.)

//[예제 07-16]
//Number.isNaN 함수는 지정한 값이 NaN인지 확인하고 그 결과를 불리언 값으로 반환한다.
Number.isNaN(NaN); //true
Number.isNaN(10); //false
Number.isNaN(1+ undefined); //true

//[예제 07-17,18,19,20]
//양의 0과 음의 0의 비교, 일치 비교/동등 비교 모두 결과는 true 이다. 
0 === -0; //true
0 == -0; //true 

-0 === +0 //true
Object.is(-0,+0); //false
NaN === NaN; //false
Object.is(NaN, NaN); //true

//부동등 비교
5 != 8; //true
5 != 5; //false
5 !='5'; //false
//불일치 비교
5 !== 8; //true
5 !== 5; //false
5 !== '5'// true

//대소관계 비교 
5 > 0;  //true
5 > 5;  //false
5 >= 5; //true
5 <= 5; //true

//[예제 07-21]
var x = 2; 
//2 % 2는 0이고 0은 false로 암묵적 타입 변환된다. 
var result = x% 2? '홀수' : '짝수';

console.log(result);//짝수

//[예제 07-22]
var x = 2, result;

//2%2는 0이고 0은 false로 암묵적 타입 변환된다.
if(x%2)result = '홀수';
else  result = '짝수';

console.log(result); //짝수

//[예제 07-23]
var x =10; 
//if...else 문은 표현식이 아닌 문이다.따라서 값처럼 사용할 수 없다. 
var result = if(x%2) {result='홀수';} else {result = '짝수'};
//SyntaxError: Unexpected token if

//[예제 07-24]
var x = 10; 
//삼항 조건 연산자 표현식은 표현식인 문이다. 따라서 값처럼 사용할 수 있다. 
var result = x % 2 ? '홀수' : '짝수';
console.log(result); //짝수

//[예제 07-25]
//논리합 (||)연산자 
true || true; //true
true || false; //true
false|| true; //true
false|| false; //false

//논리곱(&&)연산자
true  && true; //true
true  && false; //false
false && true; //false
false && false; //false

//논리부정(!)연산자
!true; //false
!false; //true

//[예제 07-26,27,28]
//암묵적 타입 변환
!0; //true
!'Hello'; //false

//단축평가
'Cat' && 'Dog'; // 'Dog'

!(x || y) === !x && !y
!(x && y) === !x || !y

//[예제 07-29]
var x, y, z;
x = 1, y = 2, z = 3; //3 쉼표연산자는 왼쪽 피연산자부터 차례대로 피연산자를 평가하고 마지막 피연산자의 평가가 끝나면 마지막 피연산자의 평가결과를 반환

//[예제 07-30]
10 * 2 + 3; //23
10 * (2 + 3) //그룹연산자를 사용해 우선순위 조절 50 

//[예제 07-31]
typeof ''  //'string'
typeof 1   //'number'
typeof NaN //'number
typeof true//'boolean'
typeof undefined //'undefined'
typeof Symbol() //'symbol'
typeof null //'object'
typeof [] //'object'
typeof {} //'object'
typeof new Date() //'object'
typeof /test/gi  //'object'
typeof function(){}  //'function'

//[예제 07-32,33]
var foo = null;

typeof foo === null; //false
foo ===null ; //true 

typeof undeclared; //undefined (undeclared식별자를 선언한적이 없다.)

//[예제 07-34,35,36,37,38,39]
2 ** 2 ; //4
2 ** 2.5; // 5.65685424949238
2 ** 0 ; //1
2 ** -2; // 0.25

Math.pow(2, 2); //4
Math.pow(2, 2.5)// 5.65685424949238
Math.pow(2, 0); //1
Math.pow(2, -2); //0.25

2 ** (3 ** 2); //512지수연산자의 결합순서는 우항에서 좌항이다. 즉, 우결합성을 가진다. 
Math.pow(2, Math.pow(3, 2)); //512

-5 ** 2; 
//SyntaxError: Unary operator used immediately before exponentiation expression.
//Parenthesis must be used to disambiguate operator precedence 
(-5) ** 2; //25

var num = 5;
num ** = 2; //25

2 * 5 ** 2; //50

//[예제 07-40]
var x;
//할당연산자는 변수 값이 변하는 부수효과가 있다. 이는 x 변수를 사용하는 다른 코드에 영향을 준다. 
x = 1; 
console.log(x); //1
//증가,감소 연산자 (++/--)는 피연산자의 값을 변경하는 부수효과가 있다. 
//피연산자 x의 값이 재할당되어 변경된다. 이는 x변수를 사용하는 다른 코드에 영향을 준다. 
x ++;
console.log(x); //2
var o = { a: 1 };
//delete 연산자는 객체의 프로퍼티를 삭제하는 부수효과가 있다. 이는 o객체를 사용하는 다른 코드에 영향을 준다. 
delete o.a;
console.log(o); //{}

//[예제 07-41]
10 * (2 + 3);// 50 그룹연산자를 사용하여 우선순위를 명시적으로 조절
