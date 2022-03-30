//[예제 10-01]
var person = {
    name: 'Lee',
    sayHello: function () {
      console.log(`Hello! My name is ${this.name}.`);
    }
  };
  
  console.log(typeof person); // object
  console.log(person); // {name: "Lee", sayHello: }
// [예제 10-02]
var empty = {}; // 빈 객체
console.log(typeof empty); // object

// [예제 10-03]
var person = {
    // 프로퍼티 키는 name, 프로퍼티 값은 'Lee'
    name: 'Lee',
    // 프로퍼티 키는 age, 프로퍼티 값은 20
    age: 20
  };

// [예제 10-04]
var person = {
    firstName: 'Ung-mo', // 식별자 네이밍 규칙을 준수하는 프로퍼티 키
    'last-name': 'Lee'   // 식별자 네이밍 규칙을 준수하지 않는 프로퍼티 키
  };
  console.log(person); // {firstName: "Ung-mo", last-name: "Lee"}

// [예제 10-05]
var person = {
    firstName: 'Ung-mo',
    last-name: 'Lee' // SyntaxError: Unexpected token -
  };

// [예제 10-06]
var obj = {};
var key = 'hello';

// ES5: 프로퍼티 키 동적 생성
obj[key] = 'world';
// ES6: 계산된 프로퍼티 이름
// var obj = { [key]: 'world' };
console.log(obj); // {hello: "world"}

// [예제 10-07]
var foo = {
    '': ''  // 빈 문자열도 프로퍼티 키로 사용할 수 있다.
  };
  console.log(foo); // {"": ""}

// [예제 10-08]
var foo = {
    0: 1,
    1: 2,
    2: 3
  };
  console.log(foo); // {0: 1, 1: 2, 2: 3}

// [예제 10-09]
var foo = {
    var: '',
    function: ''
  };
  console.log(foo); // {var: "", function: ""}

// [예제 10-10]
var foo = {
    name: 'Lee',
    name: 'Kim'
  };
  
  console.log(foo); // {name: "Kim"}

// [예제 10-11]
var circle = {
  radius: 5, // ← 프로퍼티

  // 원의 지름
  getDiameter: function () { // ← 메서드
    return 2 * this.radius; // this는 circle을 가리킨다.
  }
};

console.log(circle.getDiameter()); // 10

// [예제 10-12]
var person = {
    name: 'Lee'
  };
  
  // 마침표 표기법에 의한 프로퍼티 접근
  console.log(person.name); // Lee
  
  // 대괄호 표기법에 의한 프로퍼티 접근
  console.log(person['name']); // Lee

// [예제 10-13]
var person = {
    name: 'Lee'
  };
  
  console.log(person[name]); // ReferenceError: name is not defined

// [예제 10-14]
var person = {
  name: 'Lee'
};

console.log(person.age); // undefined

// [예제 10-15]
var person = {
    'last-name': 'Lee',
    1: 10
  };
  
  person.'last-name';  // SyntaxError: Unexpected string
  person.last-name;    // 브라우저 환경: NaN
                       // Node.js 환경: ReferenceError: name is not defined
  person[last-name];   // ReferenceError: last is not defined
  person['last-name']; // Lee
  
  // 프로퍼티 키가 숫자로 이뤄진 문자열인 경우 따옴표를 생략할 수 있다.
  person.1;     //  SyntaxError: Unexpected number
  person.'1';   //  SyntaxError: Unexpected string
  person[1];    //  10 : person[1] -> person['1']
  person['1'];  //  10

// [예제 10-16]
var person = {
    name: 'Lee'
  };
  
  // person 객체에 name 프로퍼티가 존재하므로 name 프로퍼티의 값이 갱신된다.
  person.name = 'Kim';
  
  console.log(person);  // {name: "Kim"}

// [예제 10-17]
var person = {
  name: 'Lee'
};

// person 객체에는 age 프로퍼티가 존재하지 않는다.
// 따라서 person 객체에 age 프로퍼티가 동적으로 생성되고 값이 할당된다.
person.age = 20;

console.log(person); // {name: "Lee", age: 20}

// [예제 10-18]
var person = {
    name: 'Lee'
  };
  
  // 프로퍼티 동적 생성
  person.age = 20;
  // person 객체에 age 프로퍼티가 존재한다.
  // 따라서 delete 연산자로 age 프로퍼티를 삭제할 수 있다.
  delete person.age;
  // person 객체에 address 프로퍼티가 존재하지 않는다.
  // 따라서 delete 연산자로 address 프로퍼티를 삭제할 수 없다. 이때 에러가 발생하지 않는다.
  delete person.address;
  
  console.log(person); // {name: "Lee"}

// [예제 10-19]
// ES5
var x = 1, y = 2;

var obj = {
  x: x,
  y: y
};

console.log(obj); // {x: 1, y: 2}

// [예제 10-20]
// ES6
let x = 1, y = 2;

// 프로퍼티 축약 표현
const obj = { x, y };

console.log(obj); // {x: 1, y: 2}

// [예제 10-21]
// ES5
var prefix = 'prop';
var i = 0;
var obj = {};

// 계산된 프로퍼티 이름으로 프로퍼티 키 동적 생성
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;
console.log(obj); // {prop-1: 1, prop-2: 2, prop-3: 3}

// [예제 10-22]
// ES6
const prefix = 'prop';
let i = 0;

// 객체 리터럴 내부에서 계산된 프로퍼티 이름으로 프로퍼티 키 동적 생성
const obj = {
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i
};

console.log(obj); // {prop-1: 1, prop-2: 2, prop-3: 3}
// [예제 10-23]
// ES5
var obj = {
    name: 'Lee',
    sayHi: function() {
      console.log('Hi! ' + this.name);
    }
  };
  
  obj.sayHi(); // Hi! Lee

// [예제 10-24]
// ES6
const obj = {
    name: 'Lee',
    // 메서드 축약 표현
    sayHi() {
      console.log('Hi! ' + this.name);
    }
  };
  
  obj.sayHi(); // Hi! Lee