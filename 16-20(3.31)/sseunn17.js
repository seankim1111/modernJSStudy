//[예제풀이 17 -01]
//빈 객체의 생성
const person = new Object ();

//프로퍼티 추가 
person.name = 'Lee';
person.sayHello = function(){
    console.log('Hi! My name is ' + this.name);
};
console.log(person); //{name:"Lee", sayHello:f}
person.sayHello(); //Hi! My name is Lee

//[예제풀이 17 -02]
//String생성자 함수에 의한 String객체 생성
const StrObj= new String();
console.log(typeof StrObj); //object
console.log(StrObj); //String {"Lee"}

//Number생성자 함수에 의한 Number객체 생성
const numObj = new Number();
console.log(typeof numObj); //object
console.log(numObj); // Number {123}

//Boolean 생성자 함수에 의한 Boolean 객체 생성
const boolObj = new Boolean (true);
console.log(typeof boolObj); //object
console.log(boolObj); //Boolean{true}

//Function 생성자 함수에 의한 Function 객체(함수) 생성
const func = new Function (1,2,3);
console.log(typeof func); //function
console.log(func); //f anonymous(x)

//Array 생성자 함수에 의한 Array 객체(배열)생성
const arr = new Array (1,2,3);
console.log(typeof arr); //object
console.log(arr); //[1,2,3]


//RegExp생성자 함수에 의한 RegExp객체(정규표현식)생성
const regExp = new RegExp (/ab+c/i);
console.log(typeof regExp ); //object
console.log(); // /ab+c/i

//Date 생성자 함수에 의한 Date객체 생성 
const date = new Date ();
console.log(typeof date ); //object
console.log(date); // Mon May 04 2020 08:36:33 GMT+0900 (대한민국 표준시 )
//[예제풀이 17 -03]
const corcle1 ={
    radius : 5, 
    detDiameter(){
        return 2 * this.radius;
    }
};
console.log(circle1.getDiameter()); //10

const circle2 = {
  radius : 10, 
  getDiameter(){
      return 2 * this.radius; 
  }
};
console.log(circle2.getDiameter()); //20 
//[예제풀이 17 -04]
//생성자 함수
function Circle(radius) {
    //생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다. 
    this.radius = radius;
    this.getDiameter = function() {
        return 2 * this.radius;
    };
}
//인스턴스의 생성
const circle1 = new Circle(5) //반지름이 5인 circle객체를 생성 
const circle2 = new Circle(10) //반지름이 10인 circle객체를 생성 

console.log(circle1.getDiameter()); // 10
console.log(circle2.getDiameter()); // 20
//[예제풀이 17 -05]
//함수는 다양한 방식으로 호출될 수 있다. 
function foo(){
    console.log(this);
}
//일반적인 함수로서 호출 
//전역 객체는 브라우저 환경에서는 window, Node.js 환경에서는 global을 가리킨다. 
foo(); //window
const obj = {foo};//ES6프로퍼티 축약표현
//메서드로서 호출
obj.foo(); //obj
//생성자 함수로서 호출
const inst = new foo(); //inst 

//[예제풀이 17 -06]
//new연산자와 함께 호출하지 않으면 생성자 함수로 동작하지 않는다.
//즉, 일반함수로서 호출된다. 
const circle3= Circle(15);
//일반함수로서 호출된 Circle은 반환문이 없으므로 암묵적으로 undefined를 반환한다.
//일반 함수로서 호출된 Circle 내의 this는 전역객체를 가리킨다. 
console.log(radius); //15
//[예제풀이 17 -07]
//생성자 함수
function Circle(radius){
    //인스턴스 초기화
    this.radius = radius; 
    this.getDiameter = function (){
        return 2 *this.radius; 
    }; 
}
//인스턴스 생성
const circle1 = new Circle(5); //반지름이 5인 Circle객체를 생성
//[예제풀이 17 -08]
function Circle(radius){
    //1.암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
    console.log(this); //Circle{}
    
    this.radius = radius ; 
    this.getDiameter = function (){
        return 2 * this.radius;
    }; 
}
//[예제풀이 17 -09]
function Circle(radius){
    //1.암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
    //2. this에 바인딩되어 있는 인스턴스를 초기화한다. 
    
    this.radius = radius ; 
    this.getDiameter = function (){
        return 2 * this.radius;
    }; 
}
//[예제풀이 17 -10]
function Circle(radius){
    //1.암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
    //2. this에 바인딩되어 있는 인스턴스를 초기화한다. 
    this.radius = radius ; 
    this.getDiameter = function (){
        return 2 * this.radius;
    }; 
    //3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다. 
//인스턴스 생성. Circle생성자 함수는 암묵적으로 this를 반환한다.  
const circle = new Circle(1);
console.log(circle); //Circle {Radius:1 ,getDiameter: f}

//[예제풀이 17 -11]
function Circle(radius){
   //1.암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
    //2. this에 바인딩되어 있는 인스턴스를 초기화한다. 
    this.radius = radius ; 
    this.getDiameter = function (){
        return 2 * this.radius;
    }; 
//3. 암묵적으로 this 를 반환한다.
//명사적으로 객체를 반환하면 암묵적인 this반환이 무시된다. 
return {};
}
//인스턴스 생성. Circle 생성자 함수는 명시적으로 반환한 객체를 반환한다. 
const circle = new Circle(1);
console.log(circle); //{}
//[예제풀이 17 -12]
function Circle(radius){
    //1.암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
     //2. this에 바인딩되어 있는 인스턴스를 초기화한다. 
     this.radius = radius ; 
     this.getDiameter = function (){
         return 2 * this.radius;
     }; 
 //3. 암묵적으로 this 를 반환한다.
 //명사적으로 객체를 반환하면 암묵적인 this반환이 무시된다. 
 return 100;
 }
 //인스턴스 생성. Circle 생성자 함수는 명시적으로 반환한 객체를 반환한다. 
 const circle = new Circle(1);
 console.log(circle); //{}

 17.2.4 내부메서드 [[call]]과 [[construct]]
//[예제풀이 17 -13]
//함수는 객체다
function foo(){}
//함수는 객체이므로 프로퍼티를 소유할수있다.
foo.prop = 10;
//함수는 객체이므로 메서드를 소유할수있다.
foo.method = function(){
    console.log(this.prop);
};
foo.method(); //10

//[예제풀이 17 -14]
function() {}
//일반적인 함수로서 호출: [[call]] 이 호출된다.
foo(); 
//생성자 함수로서 호출: [[construct]]가 호출된다.
new foo();

17.2.5 constructor 와 non-constructor의 구분
//[예제풀이 17 -15]
//일반 함수 정의: 함수선언문, 함수표현식
function foo(){}
const bar = function(){};
//프로퍼티 x의 값으로 할당된 것은 일반함수로 정의된 함수이다. 이는 메서드로 인정하지 않는다. 
const baz = {
    x: function (){}
};
//일반함수로 정의된 함수만이 construnctor이다.
new foo (); //foo {}
new bar (); //bar {}
new baz.x(); //x{}

//화살표 함수 정의
const arrow = () => {};
new arrow = () => {};
new arrow(); //TypeError: arrow is not a constructor
//메서드정의 : ES6의 메서드 축약 표현만 메서드로 인정한다.
const obj = {
    x () {}
}; 
new obj.x(); //TypeError: obj.x is not a constructor

//[예제풀이 17 -16]
function foo() {} 
//일반함수로서 호출 
//[[call]]이 호출된다. 모든 함수 객체는 [[call]]이 구현되어있다.
foo();
//생성자 함수로서 호출 
//[[construct]]가 호출된다. 이때 [[construct]]를 갖지 않는다면 에러가 발생한다. 
new foo();

17.2.6 new연산자
//[예제풀이 17 -17]
//생성자 함수로서 정의하지 않은 일반함수
function add (x, y) {
    return x + y ;
}
//생성자 함수로서 정의하지 않은 일반 함수를 new 연산자와 함께 호출 
let inst = new add ();
//함수가 객체를 반환하지 않았으므로 반환문이 무시된다. 따라서 빈 객체가 생성되어 반환된다. 
console.log(inst); //{}
//객체를 반환하는 일반함수
function createUser(name, role){
    return {name, role};
}
//일반함수를 new연산자와 함께 호출 
inst = new createUser ('Lee', 'admin');
//함수가 생성한 객체를 반환한다.
console.log(inst); //{name: "Lee", role: "admin"}
//[예제풀이 17 -18]
//생성자 함수 
function Circle (radius){
    this.radius = radius;
    this.getDiameter= function()
}
17.2.7 new.target
//[예제풀이 17 -19]
//생성자 함수 
function Circle(radius) {
  //    이 함수가 new 연산자와 함께 호출되지 않았다면 new.target은 undefined다
  if (!new.target) {
      //new 연산자와 함께 생성자 함수를 재귀 호출하여 생성된 인스턴스를 반환한다. 
      return new Circle(radius);
  }
  this.radius = radius;
  this.getDiameter = function() {
      return 2 * this.radius; 
  }; 
} 
//new 연산자 없이 생성자 함수를 호출하여도 new.target 을 통해 생성자 함수로서 호출된다. 
const circle = Circle(5);
console.log(circle.getDiameter()); 
//[예제풀이 17 -20]
function Circle(radius) {
    //    생성자 함수가 new 연산자와 함께 호출되면 함수의 선두에서 빈 객체를 생성하고 this에 바인딩한다. 이때 this와 Circle은 프로토타입에 의해 연결된다. 
    // 이 함수가 new 연산자와 함께 호출되지 않았다면 이시점의 this 는 전역객체 window를 가리킨다. 
    //즉, this와 circle은 프로토타입에 의해 연결되지 않는다. 
    if (!(this instanceof Circle)) {
        //new 연산자와 함께 호출하여 생성된 인스턴스를 반환한다. 
        return new Circle(radius);
    }
    this.radius = radius;
    this.getDiameter = function() {
        return 2 * this.radius; 
    }; 
  } 
  //new 연산자 없이 생성자 함수를 호출하여도 생성자 함수로서 호출된다. 
  const circle = Circle(5);
  console.log(circle.getDiameter()); //10
//[예제풀이 17 -21]
let obj = new Object();
console.log(obj); //{}

obj =Object();
console.log(obj); //{}

let f = new Function ('x', 'return x ** x ');
console.log(f); //f anonymous(x) {return x ** x}

f = new Function ('x', 'return x ** x ');
console.log(f); //f anonymous(x) {return x ** x}

//[예제풀이 17 -22]
const str = String(123);
console.log(str, typeof str); //123 string

const num = Number('123');
console.log(num, typeof num); //123 number

const bool = Boolean('true');
console.log(bool, typeof bool); //true boolean