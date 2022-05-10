18. 함수와 일급객체
18.1 일급객체
//[예제풀이 18 -01]
//1. 함수는 무명의 리터럴로 생성할 수 있다.
//2. 함수는 변수에 저장할수있다. 
//런타임 (할당단계 )에 함수 리터럴이 평가되어 함수 객체가 생성되고 변수에 할당된다. 
const increase = function(num){
    return ++num;
};
const decrease = function (num){
    return --num;
};
//2.함수는 객체에 저장할 수 있다.
const auxs = { increase, decrease};
//3. 함수 매개변수에 전달할 수 있다. 
//4. 함수의 반환값으로 사용할 수있다.
function makeCounter(aux){
    let num = 0;

    return function(){
        num = aux (num);
        return num;
    };
}
//3. 함수는 매개변수에게 함수를 전달 할 수 있다.
const increaser = makeCounter(auxs.increase);
console.log(increaser()); //1
console.log(increaser()); //2

//4. 함수는 매개변수에게 함수를 전달할 수 있다.
const decreaser = makeCounter(auxs.decrease);
console.log(decreaser()); //-1
console.log(decreaser()); //-2

18.2 함수 객체의 프로퍼티 
//[예제풀이 18 -02]
function square (number){
    return number * number; 
}
console.dir (square);
//[예제풀이 18 -03]
function square (number){
    return number * number; 
}
console.log(Object.getOwnPropertyDescriptors(square));
// {
//     length: {value: 1, writable: false, enumerable: false, configurable: true},
//     name: {value: "square", writable: false, enumerable: false, configurable: true}
//     arguments: {value: null , writable: false, enumerable: false, configurable: false}
//     caller: {value: null, writable: false, enumerable: false, configurable: false}
//     prototype: {value: {...}, writable: true, enumerable: false, configurable: false}
// }
//__proto__는 square함수의 프로퍼티가 아니다. 
console.log(Object.getOwnPropertyDescriptors(square, '__proto__'));//undefined
//__proto__는 Object.prototype객체의 접근자 프로퍼티이다.
//square함수는 Object.prototype객체로부터 __proto__접근자 프로퍼티를 상속받는다. 
console.log(Object.getOwnPropertyDescriptors(Object.prototype, '__proto__'));
//{get: f, set: f, enumerable: false, configurable:true}
18.2.1 arguments 프로퍼티 
//[예제풀이 18 -04]자바스크립트는 함수의 매개변수와 인수의 개수가 일치하는지 확인하지 않는다. 따라서 함수 호출시 매개변수 개수만큼 인수를 전달하지 않아도 에러가 발생하지 않는다.
function multiply (x, y){
    console.log(arguments); 
    return x * y;
}
console.log(multiply()); //NaN
console.log(multiply(1)); //NaN
console.log(multiply(1,2)); //2
console.log(multiply(1,2,3)); //2
//[예제풀이 18 -05] Symbol프로퍼티는 argument객체를 순회가능한 자료구조인 이터러블로 만들기위한 프로퍼티 
function multuply (x,y){
    //이터레이터 
    const iterator = arguments [Symbol.iterator]();

    //이터레이터의 next메서드를 호출하여 이터러블 객체 argument를 순회
    console.log(iterator.next()); //{value: 1, done: false}
    console.log(iterator.next()); //{value: 2, done: false}
    console.log(iterator.next()); //{value: 3, done: false}
    console.log(iterator.next()); //{value: undefined, done: true}

    return x * y;
}
multiply (1,2,3);
//[예제풀이 18 -06]
function sum (){
    let res = 0;

    //arguments의 객체는 length프로퍼티가 있는 유사배열 객체이므로 for문으로 순회할수있다. 
    for(let i =0; i< arguments.length; i++){
        res += arguments[i];
    }
    return res;
}
console.log(sum()); // 0 
console.log(sum(1,2)); // 3
console.log(sum(1,2,3)); // 6
//[예제풀이 18 -07]
function sum () {
    //arguments 객체를 배열로 변환
    const array = Array.prototype.slice.call(arguments);
    return array.reduce(function (pre, cur){
        return pre +cur ; 
    }, 0);
}
console.log(sum(1,2)); //3
console.log(sum(1,2,3,4,5));// 15 
//[예제풀이 18 -08]
//ES6 Rest parameter
function sum(...args) {
    return args.reduce((pre,cur) => pre + cur, 0);
}
console.log(sum(1,2)); //3
console.log(sum(1,2,3,4,5));// 15 

18.2.2 caller 프로퍼티 
//[예제풀이 18 -09] 
function foo(func) {
     return func();
}
function bar() {
    return 'caller : ' +bar.caller ;
}
console.log(foo(bar)); //caller : function foo(func){...}
console.log(bar( ));// caller:null

18.2.3 length 프로퍼티 
//[예제풀이 18 -10]
function foo(){}
console.log(foo.length); //0 

function bar(x) {
    return x;
}
console.log(bar.length); //1 

function baz (x,y) {
    return x * y ;
}
console.log(baz.length);  //2

18.2.4 name: 프로퍼티
//[예제풀이 18 -11]
//기명함수 표현식
var namedFunc = function foo (){};
console.log(namedFunc.name); //foo
//익명함수 표현식
var anonymousFunc = function(){};
//ES5: name프로퍼티는 빈문자열을 값으로 갖는다 
//ES6: name 프로퍼티는 함수 객체를 가리키는 변수이름을 값으로 갖는다. 
console.log(anonymousFunc.name); //anonymousFunc
//함수선언문 (Function declaration)
function bar (){}
console.log(nar.name); //bar 

18.2.5 __proto__접근자 프로퍼티 
//[예제풀이 18 -12]
const obj = {a :1 };
//객체 리터럴 방식으로 생성한 객체의 프로토타입 객체는 Object.prototype이다.
console.log(obj.__proto__ === Object.prototype); //true

//객체 리터럴 방식으로 생성한 객체는 프로토타입 객체인 Object.prototype의 프로퍼티를 상속받는다. 
//hasOwnProperty메서드는 Object.prototype의 메서드이다.
console.log(obj.hasOwnProperty('a')); // true
console.log(obj.hasOwnProperty('__proto__')); // false 

18.2.6 prototype 프로퍼티 
//[예제풀이 18 -13]
//함수 객체는 prototype프로퍼티를 소유한다. 
(function (){}).hasOwnProperty('prototype'); //true
//일반객체는 prototype 프로퍼티를 소유하지 않는다.
({}).hasOwnProperty('prototype'); //false 