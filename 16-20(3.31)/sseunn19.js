19.프로토타입 
19.1 객체지향 프로그래밍 
//[예제풀이 19 -01]
//이름과 주소 속성을 갖는 객체
const person = {
    name: 'Lee',
    address: 'Seoul'
};
console.log(person); //{name: "Lee", address: "Seoul"}

//[예제풀이 19 -02]
const circle = {
    radius: 5, //반지름
    //원의 지름: 2r
    getDiameter (){
        return 2 * this.radius;
    },
    //원의 둘레 :2ㅠr 
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    },
    //원의 넓이: ㅠrr 
    getArea(){
        return Math.PI * this.radius ** 2 ; 
    }
    };
    console.log(circle); 
    //{radius: 5, getDiameter: f, getPerimeter:f, getArea:f }
    console.log(circle.getDiameter);  //10 
    console.log(circle.getPerimeter);   //31.41592653589793
    console.log(circle.getArea);  //78.53981633974483
    19.2 상속과 프로토타입 
//[예제풀이 19 -03]
function Circle (radius){
    this.radius = radius; 
    this.getArea = function(){
        //Math.PI는 원주율을 나타내는 상수다. 
        return Math.PI * this.radius ** 2;
    };
}

//반지름이 1인 인스턴스 생성
const circle1 = new Circle(1); 
//반지름이 2인 인스턴스 생성 
const circle2 = new Circle(2);

//Circle생성자 함수는 인스턴스를 생성할 때마다 동일한 동작을 하는 getArea 메서드를 중복생성하고 모든 인스턴스가 중복소유한다. 
//GetArea메서드는 하나만 생성하여 모든 인스턴스가 공유해서 사용하는 것이 바람 직하다. 
console.log(circle1.getArea === circle2.getArea);// false

console.log(circle1.getArea()); //3.141592653589793
console.log(circle2.getArea()); //12.566370614359172

//[예제풀이 19 -04]
function Circle (radius){
    this.radius = radius; 
}
//circle은 생성자 함수가 생성한 모든 인스턴스가 getArea 메서드를 공유해서 사용할수 있도록 프로토타입에 추가한다. 
//프로토타입은 Circle생성자 함수의 prototype 프로퍼티에 바인딩되어있다. 
Circle.prototype.getArea = function(){
    return Math.PI * this.radius ** 2;
};

//인스턴스 생성 
const circle1 = new Circle(1); 
const circle2 = new Circle(2);

//Circle생성자 함수가 생성한 모든 인스턴스는 부모 객체의 역할을 하는 프로토타입 Circle.prototype으로부터 getArea 메서드를 상속받는다. 
//즉,Circle생성자 함수가 생성하는 모든 인스턴스는 하나의 getarea메서드를 공유한다. 
console.log(circle1.getArea === circle2.getArea);// true

console.log(circle1.getArea()); //3.141592653589793
console.log(circle2.getArea()); //12.566370614359172
//[예제풀이 19 -05]
const person = {name: 'Lee'}; 
//[예제풀이 19 -06]
const obj = {};
const parent = { x:1 };
//getter 함수인 get __proto__가 호출되어 obj객체의 프로토타입을 취득 
obj.__proto__; 
//setter함수인 set __proto__가 호출되어 obj객체의 프로토타입을 교체 
obj.__proto__ = parent;
console.log(obj.x); //1

//[예제풀이 19 -07]
const person = { name: 'Lee'};
//person객체는 __proto__프로퍼티를 소유하지 않는다.
console.log(person.hasOwnProperty('__proto__'));// false 
//__proto__프로퍼티는 모든 객체의 프로토타입 객체인 Object.prototype의 접근자 프로퍼티다. 
console.log(Object.getOwnPropertyDescriptor(Object.prototype,'__proto__'));
//{get: f, set: f, enumerable: false, configurable: true}
//모든 객체는 Object.prototype의 접근자 프로퍼티 __proto__를 상속받아 사용할 수 있다. 
console.log({}.__proto === Object.prototype); //true

//[예제풀이 19 -08]
const parent = {};
const child = {}; 
//child의 프로토타입을 parent로 설정
child.__proto__ = parent;
//parent의 프로토타입을 child로 설정
parent.__proto__ =chile; //TypeError :Cyclic__proto__value
//[예제풀이 19 -09]
//obj는 프로토타입 체인의 종점이다. 따라서 Object.__proto__를 상속받을 수 없다. 
const obj = Object.create(null);
//obj는 Object.__proto__를 상속받을 수 없다. 
console.log(obj.__proto__); //undefined 
//따라서 __proto__보다 Object.getPrototypeOf메서드를 사용하는 편이 좋다. 
console.log(Object.getPrototypeOf(obj)); //null
//[예제풀이 19 -10]
const obj = {};
const parent = { x:1 };
//obj객체의 프로토타입을 취득
Object.getPrototypeOf(obj);// obj.__proto__;
//obj객체의 프로토타입을 교체 
Object.getPrototypeOf(obj) //obj.__proto__=parent;
console.log(obj.x); //1 
//[예제풀이 19 -11]
//함수 객체는 prototype프로퍼티를 소유한다.
(function (){}).hasOwnProperty('prototype'); //true 
//일반 객체는 prototype프로퍼티를 소유하지 않는다. 
({}).hasOwnProperty('prototype'); //false 
//[예제풀이 19 -12]
//화살표 함수는 non-constructor이다.
const Person =name =>{
    this.name =name;
 };
 //non-constructor는 prototype프로퍼티를 소유하지 않는다. 
 console.log(Person.hasOwnProperty('prototype')); //false
 //non-constructor는 프로토타입을 생성하지 않는다. 
 console.log(Person.prototype); //undefined 
 //ES6의 메서드 축약 표현으로 정의한 메서드는 non-constructor다.
 const obj = {
     foo(){}
 };
 //non-constructor는 prototype프로퍼티를 소유하지 않는다. 
 console.log(obj.foo.hasOwnProperty('prototype')); //false
 //non-constructor는 프로토타입을 생성하지 않는다. 
 console.log(obj.foo.prototype); //undefined 

//[예제풀이 19 -13]
//생성자 함수
function Person(name){
    this.name = name;
}
const me = new Person('Lee');

//결국 Person.prototype과 me.__proto__는 결국 동일한 프로토타입을 가리킨다.
console.log(Person.prototype === me.__proto__); //true
//[예제풀이 19 -14]
//생성자 함수
function Person(name){
    this.name = name;
}
const me = new Person('Lee');

//me객체의 생성자 함수는 Person이다. 
console.log(me.constructor === Person); //true
//[예제풀이 19 -15]
//obj객체를 생성한 생성자 함수는 Object이다.
const obj = new Object();
console.log(obj.constructor=== Object);//true
//add함수 객체를 생성한 생성자 함수는 Function이다.
const add = new Function('a','b','return a + b');
console.log(add.constructor===Function); //true
function Person(name){
    this.name = name;
}
//me객체를 생성한 생성자 함수는 Person이다. 
const me = new Person('Lee');
console.log(me.constructor === Person); //true
//[예제풀이 19 -16]
//객체리터럴
const obj = {};
//함수리터럴
const add = function (a,b){return a + b; };
//배열리터럴
const arr = [1,2,3];
//정규표현식 리터럴 
const regexp = /is/ig;
//[예제풀이 19 -17]
//obj 객체는 Object 생성자 함수로 생성한 객체가 아니라 객체리터럴로 생성했다. 
const obj= {};
//하지만 obj객체의 생성자 함수는 Object생성자 함수다.
console.log(obj.constructor===Object); //true
//[예제풀이 19 -18]
// 2. Object 생성자 함수에 의한 객체 생성
// Object 생성자 함수는 new 연산자와 함께 호출하지 않아도 new 연산자와 함께 호출한 것과 동일하게 동작한다.
// 인수가 전달되지 않았을 때 추상 연산 OrdinaryObjectCreate를 호출하여 빈 객체를 생성한다.
let obj = new Object();
console.log(obj); // {}

// 1. new.target이 undefined나 Object가 아닌 경우
// 인스턴스 -> Foo.prototype -> Object.prototype 순으로 프로토타입 체인이 생성된다.
class Foo extends Object {}
new Foo(); // Foo {}

// 3. 인수가 전달된 경우에는 인수를 객체로 변환한다.
// Number 객체 생성
obj = new Object(123);
console.log(obj); // Number {123}

// String  객체 생성
obj = new Object('123');
console.log(obj); // String {"123"}
//[예제풀이 19 -19]
// foo 함수는 Function 생성자 함수로 생성한 함수 객체가 아니라 함수 선언문으로 생성했다.
function foo() {}

// 하지만 constructor 프로퍼티를 통해 확인해보면 함수 foo의 생성자 함수는 Function 생성자 함수다.
console.log(foo.constructor === Function); // true
//[예제풀이 19 -20]
// 함수 정의(constructor)가 평가되어 함수 객체를 생성하는 시점에 프로토타입도 더불어 생성된다.
console.log(Person.prototype); // {constructor: ƒ}

// 생성자 함수
function Person(name) {
  this.name = name;
}
//[예제풀이 19 -21]
// 화살표 함수는 non-constructor다.
const Person = name => {
    this.name = name;
  };
  
  // non-constructor는 프로토타입이 생성되지 않는다.
  console.log(Person.prototype); // undefined
//[예제풀이 19 -22]
// 전역 객체 window는 브라우저에 종속적이므로 아래 코드는 브라우저 환경에서 실행해야 한다.
// 빌트인 객체인 Object는 전역 객체 window의 프로퍼티다.
window.Object === Object // true
//[예제풀이 19 -23]
const obj = { x: 1 };
//[예제풀이 19 -24]
const obj = { x: 1 };

// 객체 리터럴에 의해 생성된 obj 객체는 Object.prototype을 상속받는다.
console.log(obj.constructor === Object); // true
console.log(obj.hasOwnProperty('x'));    // true
//[예제풀이 19 -25]
const obj = new Object();
obj.x = 1;
//[예제풀이 19 -26]
const obj = new Object();
obj.x = 1;

// Object 생성자 함수에 의해 생성된 obj 객체는 Object.prototype을 상속받는다.
console.log(obj.constructor === Object); // true
console.log(obj.hasOwnProperty('x'));    // true
//[예제풀이 19 -27]
function Person(name) {
    this.name = name;
  }
  
  const me = new Person('Lee');
//[예제풀이 19 -28]
function Person(name) {
    this.name = name;
  }
  
  // 프로토타입 메서드
  Person.prototype.sayHello = function () {
    console.log(`Hi! My name is ${this.name}`);
  };
  
  const me = new Person('Lee');
  const you = new Person('Kim');
  
  me.sayHello();  // Hi! My name is Lee
  you.sayHello(); // Hi! My name is Kim
//[예제풀이 19 -29]
function Person(name) {
    this.name = name;
  }
  
  // 프로토타입 메서드
  Person.prototype.sayHello = function () {
    console.log(`Hi! My name is ${this.name}`);
  };
  
  const me = new Person('Lee');
  
  // hasOwnProperty는 Object.prototype의 메서드다.
  console.log(me.hasOwnProperty('name')); // true
//[예제풀이 19 -30]
Object.getPrototypeOf(me) === Person.prototype; // -> true
//[예제풀이 19 -31]
Object.getPrototypeOf(Person.prototype) === Object.prototype; // -> true
//[예제풀이 19 -32]
// hasOwnProperty는 Object.prototype의 메서드다.
// me 객체는 프로토타입 체인을 따라 hasOwnProperty 메서드를 검색하여 사용한다.
me.hasOwnProperty('name'); // -> true
//[예제풀이 19 -33]
Object.prototype.hasOwnProperty.call(me, 'name');
//[예제풀이 19 -34]
console.log(me.foo); // undefined
//[예제풀이 19 -35]
me.hasOwnProperty('name');
//[예제풀이 19 -36]
const Person = (function () {
    // 생성자 함수
    function Person(name) {
      this.name = name;
    }
  
    // 프로토타입 메서드
    Person.prototype.sayHello = function () {
      console.log(`Hi! My name is ${this.name}`);
    };
  
    // 생성자 함수를 반환
    return Person;
  }());
  
  const me = new Person('Lee');
  
  // 인스턴스 메서드
  me.sayHello = function () {
    console.log(`Hey! My name is ${this.name}`);
  };
  
  // 인스턴스 메서드가 호출된다. 프로토타입 메서드는 인스턴스 메서드에 의해 가려진다.
  me.sayHello(); // Hey! My name is Lee
//[예제풀이 19 -37]
// 인스턴스 메서드를 삭제한다.
delete me.sayHello;
// 인스턴스에는 sayHello 메서드가 없으므로 프로토타입 메서드가 호출된다.
me.sayHello(); // Hi! My name is Lee
//[예제풀이 19 -38]
// 프로토타입 체인을 통해 프로토타입 메서드가 삭제되지 않는다.
delete me.sayHello;
// 프로토타입 메서드가 호출된다.
me.sayHello(); // Hi! My name is Lee
//[예제풀이 19 -39]
// 프로토타입 메서드 변경
Person.prototype.sayHello = function () {
    console.log(`Hey! My name is ${this.name}`);
  };
  me.sayHello(); // Hey! My name is Lee
  
  // 프로토타입 메서드 삭제
  delete Person.prototype.sayHello;
  me.sayHello(); // TypeError: me.sayHello is not a function
//[예제풀이 19 -40]
const Person = (function () {
    function Person(name) {
      this.name = name;
    }
  
    // ① 생성자 함수의 prototype 프로퍼티를 통해 프로토타입을 교체
    Person.prototype = {
      sayHello() {
        console.log(`Hi! My name is ${this.name}`);
      }
    };
  
    return Person;
  }());
  
  const me = new Person('Lee');
//[예제풀이 19 -41]
// 프로토타입을 교체하면 constructor 프로퍼티와 생성자 함수 간의 연결이 파괴된다.
console.log(me.constructor === Person); // false
// 프로토타입 체인을 따라 Object.prototype의 constructor 프로퍼티가 검색된다.
console.log(me.constructor === Object); // true
//[예제풀이 19 -42]
const Person = (function () {
    function Person(name) {
      this.name = name;
    }
  
    // 생성자 함수의 prototype 프로퍼티를 통해 프로토타입을 교체
    Person.prototype = {
      // constructor 프로퍼티와 생성자 함수 간의 연결을 설정
      constructor: Person,
      sayHello() {
        console.log(`Hi! My name is ${this.name}`);
      }
    };
  
    return Person;
  }());
  
  const me = new Person('Lee');
  
  // constructor 프로퍼티가 생성자 함수를 가리킨다.
  console.log(me.constructor === Person); // true
  console.log(me.constructor === Object); // false
//[예제풀이 19 -43]
function Person(name) {
    this.name = name;
  }
  
  const me = new Person('Lee');
  
  // 프로토타입으로 교체할 객체
  const parent = {
    sayHello() {
      console.log(`Hi! My name is ${this.name}`);
    }
  };
  
  // ① me 객체의 프로토타입을 parent 객체로 교체한다.
  Object.setPrototypeOf(me, parent);
  // 위 코드는 아래의 코드와 동일하게 동작한다.
  // me.__proto__ = parent;
  
  me.sayHello(); // Hi! My name is Lee
//[예제풀이 19 -44]
// 프로토타입을 교체하면 constructor 프로퍼티와 생성자 함수 간의 연결이 파괴된다.
console.log(me.constructor === Person); // false
// 프로토타입 체인을 따라 Object.prototype의 constructor 프로퍼티가 검색된다.
console.log(me.constructor === Object); // true
//[예제풀이 19 -45]
function Person(name) {
    this.name = name;
  }
  
  const me = new Person('Lee');
  
  // 프로토타입으로 교체할 객체
  const parent = {
    // constructor 프로퍼티와 생성자 함수 간의 연결을 설정
    constructor: Person,
    sayHello() {
      console.log(`Hi! My name is ${this.name}`);
    }
  };
  
  // 생성자 함수의 prototype 프로퍼티와 프로토타입 간의 연결을 설정
  Person.prototype = parent;
  
  // me 객체의 프로토타입을 parent 객체로 교체한다.
  Object.setPrototypeOf(me, parent);
  // 위 코드는 아래의 코드와 동일하게 동작한다.
  // me.__proto__ = parent;
  
  me.sayHello(); // Hi! My name is Lee
  
  // constructor 프로퍼티가 생성자 함수를 가리킨다.
  console.log(me.constructor === Person); // true
  console.log(me.constructor === Object); // false
  
  // 생성자 함수의 prototype 프로퍼티가 교체된 프로토타입을 가리킨다.
  console.log(Person.prototype === Object.getPrototypeOf(me)); // true
//[예제풀이 19 -46]
// 생성자 함수
function Person(name) {
    this.name = name;
  }
  
  const me = new Person('Lee');
  
  // Person.prototype이 me 객체의 프로토타입 체인 상에 존재하므로 true로 평가된다.
  console.log(me instanceof Person); // true
  
  // Object.prototype이 me 객체의 프로토타입 체인 상에 존재하므로 true로 평가된다.
  console.log(me instanceof Object); // true
//[예제풀이 19 -47]
// 생성자 함수
function Person(name) {
    this.name = name;
  }
  
  const me = new Person('Lee');
  
  // 프로토타입으로 교체할 객체
  const parent = {};
  
  // 프로토타입의 교체
  Object.setPrototypeOf(me, parent);
  
  // Person 생성자 함수와 parent 객체는 연결되어 있지 않다.
  console.log(Person.prototype === parent); // false
  console.log(parent.constructor === Person); // false
  
  // Person.prototype이 me 객체의 프로토타입 체인 상에 존재하지 않기 때문에 false로 평가된다.
  console.log(me instanceof Person); // false
  
  // Object.prototype이 me 객체의 프로토타입 체인 상에 존재하므로 true로 평가된다.
  console.log(me instanceof Object); // true
//[예제풀이 19 -48]
// 생성자 함수
function Person(name) {
    this.name = name;
  }
  
  const me = new Person('Lee');
  
  // 프로토타입으로 교체할 객체
  const parent = {};
  
  // 프로토타입의 교체
  Object.setPrototypeOf(me, parent);
  
  // Person 생성자 함수와 parent 객체는 연결되어 있지 않다.
  console.log(Person.prototype === parent); // false
  console.log(parent.constructor === Person); // false
  
  // parent 객체를 Person 생성자 함수의 prototype 프로퍼티에 바인딩한다.
  Person.prototype = parent;
  
  // Person.prototype이 me 객체의 프로토타입 체인 상에 존재하므로 true로 평가된다.
  console.log(me instanceof Person); // true
  
  // Object.prototype이 me 객체의 프로토타입 체인 상에 존재하므로 true로 평가된다.
  console.log(me instanceof Object); // true
//[예제풀이 19 -49]
function isInstanceof(instance, constructor) {
    // 프로토타입 취득
    const prototype = Object.getPrototypeOf(instance);
  
    // 재귀 탈출 조건
    // prototype이 null이면 프로토타입 체인의 종점에 다다른 것이다.
    if (prototype === null) return false;
  
    // 프로토타입이 생성자 함수의 prototype 프로퍼티에 바인딩된 객체라면 true를 반환한다.
    // 그렇지 않다면 재귀 호출로 프로토타입 체인 상의 상위 프로토타입으로 이동하여 확인한다.
    return prototype === constructor.prototype || isInstanceof(prototype, constructor);
  }
  
  console.log(isInstanceof(me, Person)); // true
  console.log(isInstanceof(me, Object)); // true
  console.log(isInstanceof(me, Array));  // false
//[예제풀이 19 -50]
const Person = (function () {
    function Person(name) {
      this.name = name;
    }
  
    // 생성자 함수의 prototype 프로퍼티를 통해 프로토타입을 교체
    Person.prototype = {
      sayHello() {
        console.log(`Hi! My name is ${this.name}`);
      }
    };
  
    return Person;
  }());
  
  const me = new Person('Lee');
  
  //constructor 프로퍼티와 생성자 함수 간의 연결은 파괴되어도 instanceof는 아무런 영향을 받지 않는다.
  console.log(me.constructor === Person); //false
  
  //Person.prototype이 me 객체의 프로토타입 체인 상에 존재하므로 true로 평가된다.
  console.log(me instanceof Person); //true
  //Object.prototype이 me 객체의 프로토타입 체인 상에 존재하므로 true로 평가된다.
  console.log(me instanceof Object); //true
//[예제풀이 19 -51]
//프로토타입이 null인 객체를 생성한다. 생성된 객체는 프로토타입 체인의 종점에 위치한다.
//obj → null
let obj = Object.create(null);
console.log(Object.getPrototypeOf(obj) === null); //true
//Object.prototype을 상속받지 못한다.
console.log(obj.toString()); //TypeError: obj.toString is not a function

//obj → Object.prototype → null
//obj = {};와 동일하다.
obj = Object.create(Object.prototype);
console.log(Object.getPrototypeOf(obj) === Object.prototype); //true

//obj → Object.prototype → null
//obj = { x: 1 };와 동일하다.
obj = Object.create(Object.prototype, {
  x: { value: 1, writable: true, enumerable: true, configurable: true }
});
//위 코드는 다음과 동일하다.
//obj = Object.create(Object.prototype);
//obj.x = 1;
console.log(obj.x); // 1
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

const myProto = { x: 10 };
//임의의 객체를 직접 상속받는다.
//obj → myProto → Object.prototype → null
obj = Object.create(myProto);
console.log(obj.x); // 10
console.log(Object.getPrototypeOf(obj) === myProto); // true

//생성자 함수
function Person(name) {
  this.name = name;
}

//obj → Person.prototype → Object.prototype → null
//obj = new Person('Lee')와 동일하다.
obj = Object.create(Person.prototype);
obj.name = 'Lee';
console.log(obj.name); // Lee
console.log(Object.getPrototypeOf(obj) === Person.prototype); // true
//[예제풀이 19 -52]
const obj = { a: 1 };

obj.hasOwnProperty('a');       // -> true
obj.propertyIsEnumerable('a'); // -> true
//[예제풀이 19 -53]
//프로토타입이 null인 객체, 즉 프로토타입 체인의 종점에 위치하는 객체를 생성한다.
const obj = Object.create(null);
obj.a = 1;

console.log(Object.getPrototypeOf(obj) === null); // true

//obj는 Object.prototype의 빌트인 메서드를 사용할 수 없다.
console.log(obj.hasOwnProperty('a')); // TypeError: obj.hasOwnProperty is not a function
//[예제풀이 19 -54]
//프로토타입이 null인 객체를 생성한다.
const obj = Object.create(null);
obj.a = 1;

//console.log(obj.hasOwnProperty('a')); TypeError: obj.hasOwnProperty is not a function

//Object.prototype의 빌트인 메서드는 객체로 직접 호출하지 않는다.
console.log(Object.prototype.hasOwnProperty.call(obj, 'a')); // true
//[예제풀이 19 -55]
const myProto = { x: 10 };

//객체 리터럴에 의해 객체를 생성하면서 프로토타입을 지정하여 직접 상속받을 수 있다.
const obj = {
  y: 20,
  //객체를 직접 상속받는다.
  //obj → myProto → Object.prototype → null
  __proto__: myProto
};
//위 코드는 아래와 동일하다.
//const obj = Object.create(myProto, {
//y: { value: 20, writable: true, enumerable: true, configurable: true }
//});
console.log(obj.x, obj.y); // 10 20
console.log(Object.getPrototypeOf(obj) === myProto); // true
//[예제풀이 19 -56]
//생성자 함수
function Person(name) {
    this.name = name;
  }
  
  //프로토타입 메서드
  Person.prototype.sayHello = function () {
    console.log(`Hi! My name is ${this.name}`);
  };
  
  //정적 프로퍼티
  Person.staticProp = 'static prop';
  
  //정적 메서드
  Person.staticMethod = function () {
    console.log('staticMethod');
  };
  
  const me = new Person('Lee');
  
  //생성자 함수에 추가한 정적 프로퍼티/메서드는 생성자 함수로 참조/호출한다.
  Person.staticMethod(); // staticMethod
  
  //정적 프로퍼티/메서드는 생성자 함수가 생성한 인스턴스로 참조/호출할 수 없다.
  //인스턴스로 참조/호출할 수 있는 프로퍼티/메서드는 프로토타입 체인 상에 존재해야 한다.
  me.staticMethod(); // TypeError: me.staticMethod is not a function
//[예제풀이 19 -57]
//Object.create는 정적 메서드다.
const obj = Object.create({ name: 'Lee' });

//Object.prototype.hasOwnProperty는 프로토타입 메서드다.
obj.hasOwnProperty('name'); // -> false

//[예제풀이 19-58]
function Foo() {}

//프로토타입 메서드
//this를 참조하지 않는 프로토타입 메소드는 정적 메서드로 변경해도 동일한 효과를 얻을 수 있다.
Foo.prototype.x = function () {
  console.log('x');
};

const foo = new Foo();
//프로토타입 메서드를 호출하려면 인스턴스를 생성해야 한다.
foo.x(); //x

//정적 메서드
Foo.x = function () {
  console.log('x');
};

//정적 메서드는 인스턴스를 생성하지 않아도 호출할 수 있다.
Foo.x(); //x

//[예제풀이 19-59]
const person = {
    name: 'Lee',
    address: 'Seoul'
  };
  
  //person 객체에 name 프로퍼티가 존재한다.
  console.log('name' in person);    / true
  //person 객체에 address 프로퍼티가 존재한다.
  console.log('address' in person); //true
  //person 객체에 age 프로퍼티가 존재하지 않는다.
  console.log('age' in person);     //false
//[예제풀이 19-60]
console.log('toString' in person); //true
//[예제풀이 19-61]
const person = { name: 'Lee' };

console.log(Reflect.has(person, 'name'));     //true
console.log(Reflect.has(person, 'toString')); //true
//[예제풀이 19-62]
console.log(person.hasOwnProperty('name')); //true
console.log(person.hasOwnProperty('age'));  //false
//[예제풀이 19-63]
console.log(person.hasOwnProperty('toString')); //false
//[예제풀이 19-64]
const person = {
    name: 'Lee',
    address: 'Seoul'
  };
  
  //for...in 문의 변수 prop에 person 객체의 프로퍼티 키가 할당된다.
  for (const key in person) {
    console.log(key + ': ' + person[key]);
  }
  //name: Lee
  //address: Seoul
//[예제풀이 19-65]
const person = {
    name: 'Lee',
    address: 'Seoul'
  };
  
  //in 연산자는 객체가 상속받은 모든 프로토타입의 프로퍼티를 확인한다.
  console.log('toString' in person); // true
  
  //for...in 문도 객체가 상속받은 모든 프로토타입의 프로퍼티를 열거한다.
  //하지만 toString과 같은 Object.prototype의 프로퍼티가 열거되지 않는다.
  for (const key in person) {
    console.log(key + ': ' + person[key]);
  }
  
  //ame: Lee
  //address: Seoul
//[예제풀이 19-66]
//Object.getOwnPropertyDescriptor 메서드는 프로퍼티 디스크립터 객체를 반환한다.
//프로퍼티 디스크립터 객체는 프로퍼티 어트리뷰트 정보를 담고 있는 객체다.
console.log(Object.getOwnPropertyDescriptor(Object.prototype, 'toString'));
//{value: ƒ, writable: true, enumerable: false, configurable: true}
//[예제풀이 19-67]
const person = {
    name: 'Lee',
    address: 'Seoul',
    __proto__: { age: 20 }
  };
  
  for (const key in person) {
    console.log(key + ': ' + person[key]);
  }
  //name: Lee
  //address: Seoul
  //age: 20
//[예제풀이 19-68]
const sym = Symbol();
const obj = {
  a: 1,
  [sym]: 10
};

for (const key in obj) {
  console.log(key + ': ' + obj[key]);
}
//a: 1
//[예제풀이 19-69]
const person = {
    name: 'Lee',
    address: 'Seoul',
    __proto__: { age: 20 }
  };
  
  for (const key in person) {
    //객체 자신의 프로퍼티인지 확인한다.
    if (!person.hasOwnProperty(key)) continue;
    console.log(key + ': ' + person[key]);
  }
  //name: Lee
  //address: Seoul
//[예제풀이 19-70]
const obj = {
    2: 2,
    3: 3,
    1: 1,
    b: 'b',
    a: 'a'
  };
  
  for (const key in obj) {
    if (!obj.hasOwnProperty(key)) continue;
    console.log(key + ': ' + obj[key]);
  }
  
//   
//   1: 1
//   2: 2
//   3: 3
//   b: b
//   a: a
//   
//[예제풀이 19-71]
const arr = [1, 2, 3];
arr.x = 10; //배열도 객체이므로 프로퍼티를 가질 수 있다.

for (const i in arr) {
  //프로퍼티 x도 출력된다.
  console.log(arr[i]); //1 2 3 10
};

//arr.length는 3이다.
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); //1 2 3
}

//forEach 메서드는 요소가 아닌 프로퍼티는 제외한다.
arr.forEach(v => console.log(v)); //1 2 3

//for...of는 변수 선언문에서 선언한 변수에 키가 아닌 값을 할당한다.
for (const value of arr) {
  console.log(value); //1 2 3
};
//[예제풀이 19-72]
const person = {
    name: 'Lee',
    address: 'Seoul',
    __proto__: { age: 20 }
  };
  
  console.log(Object.keys(person)); //["name", "address"]
//[예제풀이 19-73]
console.log(Object.values(person)); //["Lee", "Seoul"]
//[예제풀이 19 -74]
console.log(Object.entries(person)); //[["name", "Lee"], ["address", "Seoul"]]
 Object.entries(person).forEach(([key, value]) => console.log(key, value));

//name Lee
//address Seoul

