this
22.1 this키워드 
//[예제풀이 22 -01]
const circle = {
    //프로퍼티 : 객체 고유의 상태 데이터
    radius : 5, 
    //메서드 : 상태데이터를 참조하고 조작하는 동작
    getDiameter () {
        //이 메서드가 자신이 속한 객체의 프로퍼티나 다른 메서드를 참조하려면 
        //자신이 속한 객체인 circle을 참조할수있어야한다. 
        return 2 * circle.radius;
    }
};
console.log(circle.getDiameter()); //10 
//[예제풀이 22 -02]
function Circle (radius) { 
    //이시점에는 생성자 함수 자신이 생성할 인스턴스를 가리키는 식별자를 알수없다. 
    ????.radius = radius; 
}
Circle.prototype.getDiameter = function () {
    //이 시점에는 생성자 함수자신이 생성할 인승턴스를 가리키는 식별자를 알수없다 .
    return 2 * ????.radius;
};
//생성자 함수로 인스턴스를 생성하려면 먼저 생성자 함수를 정의해야한다. 
const circle = new Circle(5); 
//[예제풀이 22 -03]
//객체 리터럴
const circle = {
    radius: 5, 
    getDiameter(){
        //this 는 메서드를 호출한 객체를 가리킨다. 
        return 2 * this.radius;
    }
};
console.log(circle.getDiameter()) //10; 
//[예제풀이 22 -04]
//생성자 함수
function Circle(radius) {
    //this는 생성자 함수가 생성할 인스턴스를 가리킨다. 
    this.radius=radius;
}

Circle.prototype.getDiameter  = function (){
    //this 는 생성자 함수가 생성할 인스턴스를 가리킨다. 
        return 2 * this.radius;
    };
//인스턴스 생성
const circle = new Circle (5);
console.log(circle.getDiameter()) //10; 
//[예제풀이 22 -05]
//this는 어디서든지 참조가능하다. 
//전역에서 this는 전역객체 window를 가리킨다.
console.log(this); //window 
function square (number) {
    //일반 함수 내부에서 this는 전역 객체 window를 가리킨다.
    console.log(this); //window
    return number *number;
}
square(2);

const person = {
    name: 'Lee',
    getName(){ 
        //메서드 내부에서 this는 메서드를 호출한 객체를 가리킨다.
        console.log(this); //{name: "Lee", getName: f}
        return this.name; 
    }
}; 
console.log(person.getName()); //Lee
function Person(name) {
    this.name = name;
    //생성자 함수 내부에서 this 는 생성자 함수가 생성할 인스턴스를 가리킨다.
    console.log(this); //Person {name:"Lee"}
}
const me = new Person('Lee');  

22.2 함수 호출 방식과 this 바인딩 
//[예제풀이 22 -06]
//this 바인딩은 함수 호출 방식에 따라 동적으로 결정된다. 
const foo = function() {
    console.dir(this); 
};
//동일한 함수도 다양한 방식으로 호출할수있다.

//1. 일반함수 호출
//foo 함수를 일반적인 방식으로 호출
//foo함수의 내부의 this 는 전역객체 window를 가린킨다.
foo(); //window
// 2. 메서드 호출
//foo함수를 프로퍼티 값으로 할당하여 호출
//foo함수 내부의 this 는 메서드를 호출한 객체 obj를 가리킨다.
const obj = {foo};
obj.foo(); //obj
//3.생성자 함수 호출
//foo함수를 new연산자와 함께 생성자 함수로 호출
//foo함수 내부의 this는 생성자 함수가 생성한 인스턴스를 가리킨다. 
//4. Function.prototype.apply/call/bind메서드에 의한 간접 호출
//foo함수의 내부의 this 는 인수에 의해 결정된다.
const bar = { name: 'bar'};
foo.call(bar); //bar
foo.apply(bar); //bar
foo.bind(bar)(); //bar

22.2.1 일반함수 호출 
//[예제풀이 22 -07]
function foo(){
    console.log("foo's this:", this) //window 
    function bar() {
        console.log("bar's this:", this) //window
    }
    bar(); 
 }
 foo(); 
//[예제풀이 22 -08]
function foo(){
    'use strict'; 

    console.log("foo's this:", this); //undefined 
    function bar(){
        console.log("bar's this:" ,this); //undefined 
    }
    bar(); 
}
foo(); 
//[예제풀이 22 -09]
//var 키워드로 선언한 전역변수 value는 전역객체의 프로퍼티다.
var value = 1; 
//const 키워드로 선언한 전역 변수 value는 전역 객체의 프로퍼티가 아니다.
//const value = 1;
const obj ={
    value: 100,
    foo(){
        console.log("foo's this:", this); //{value: 100, foo: f}
        console.log("foo's this.value:", this.value); //100
        //메서드 내에서 정의한 중첩 함수
        function bar(){
        console.log("bar's this:", this);  //window 
        console.log("bar's this.value:", this.value); //1  
        }
        //메서드 내에서 정의한 중첩함수도 일반함수로 호출되면 중첩함수내부의 this에는 전역 객체가 바인딩된다.
        bar();
    }
};
obj.foo(); 
//[예제풀이 22 -10]
var value = 1;
const obj= {
    value: 100, 
    foo() {
        console.log("foo's this:", this) //{value:100, foo:f}
        //콜백함수의 내부의 this에는 전역객체가 바인딩된다. 
        setTimeout(function(){
            console.log("callback's this:", this); //window
            console.log("callback's this.value:",this.value); //1
        },100);   
    }
};
obj.foo();
//[예제풀이 22 -11]
var value = 1; 
const obj = {
    value: 100,
    foo(){
        //this바인딩(obj)을 변수 that 에 할당한다.
        const that = this; 
        //콜백함수 내부에서 this 대신 that 을 참조한다. 
        setTimeout(function (){
            console.log(that.value); //100
        },100 );
    }
}; 
obj.foo();
//[예제풀이 22 -12]
var value = 1;
 
const obj = {
    value: 100,
    foo(){
          //콜백함수에 명시적으로 this를 바인딩한다. 
        setTimeout(function (){
            console.log(this.value); //100
        }.bind(this),100 );
    }
}; 
obj.foo();
//[예제풀이 22 -13]
var value = 1; 
const obj = {
    value: 100,
    foo(){
      //화살표 함수 내부의 this는 상위 스코프의 this를 가리킨다
        setTimeout(() => console.log((this.value),100); //100
        } 
    };
obj.foo();
//[예제풀이 22 -14] 
const person = {
    name: 'Lee', 
    getName (){
        //메서드 내부의 this는 메서드를 호출한 객체에 바인딩된다. 
        return this.name; 
    }
};
//메서드 getName 을 호출한 객체는 person이다 
console.log(person.getName()); //Lee
22.2.2 메서드 호출 
//[예제풀이 22 -15] 
const person = {
    name : 'Lee', 
     
}
//[예제풀이 22 -16]
//[예제풀이 22 -17]
//[예제풀이 22 -18]
//[예제풀이 22 -19]
//[예제풀이 22 -20]
//[예제풀이 22 -21]
//[예제풀이 22 -22]
//[예제풀이 22 -23]
//[예제풀이 22 -24]