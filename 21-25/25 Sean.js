// 25장 클래스
// 25.1 클래스는 프로토타입의 문법적 설탕인가?
// 자바스크립트는 프로토타입 기반 객체지향 언어다.
25 - 01;
// ES5 생성자 함수
var Person = (function () {
  // 생성자 함수
  function Person(name) {
    this.name = name;
  }

  // 프로토타입 메서드
  Person.prototype.sayHi = function () {
    console.log("Hi! My name is " + this.name);
  };

  // 생성자 함수 변환
  return Person;
})();

// 인스턴스 생성
var me = new Person("Lee");
me.sayHi(); // Hi! My name is Lee

// 25.2 클래스 정의
// 25-02
// 클래스 선언문
class Person {}

// 익명 클래스 표현식
const Person = class {};

// 기명 클래스 표현식
const Person = class MyClass {};

// 25-04
// 클래스 선언문
class Person {
  // 생성자
  constructor(name) {
    // 인스턴스 생성 및 초기화
    this.name = name; // name 프로퍼티는 public 하다.
  }

  // 프로토타입 메서드
  sayHi() {
    console.log(`Hi! My name is ${this.name}`);
  }

  // 정적 메서드
  static sayHello() {
    console.log("Hello!");
  }
}

// 인스턴스 생성
const me = new Person("Lee");

// 인스턴스의 프로퍼티 참조
console.log(me.name); // Lee
// 프로토타입 메서드 호출
me.sayHi(); // Hi! My name is Lee
// 정적 메서드 호출
Person.sayHello(); // Hello!

// 25.3 클래스 호이스팅
// 25-05
// 클래스 선언문
class Person {}

// 25-06
console.log(typeof Person); // function

// 25-07
const Person = "";

{
  // 호이스팅이 발생하지 않는다면 ''이 출력되어야 한다.
  console.log(Person);
  // ReferenceError:

  // 클래스 선언문
  class Person {}
}

// 25.4 인스턴스 생성
// 25-08
class Person {}

// 인스턴스 생성
const me = new Person();
console.log(me); // Person{}

// 25-09
// 클래스를 new 연산자 없이 호출하면 타입 에러가 발생한다.
const me = Person(); // TypeError:

// 25-10
const Person = class MyClass {};

// 함수 표현식과 마찬가지로 클래스를 가리키는 식별자로 인스턴스를 생성해야 한다.
const me = new Person();

// 클래스 이름 MyClass 는 함수와 동일하게 클래스 몸체 내부에서만 유효한 식별자다.
console.log(MyClass); // ReferenceError:

const you = new MyClass(); // ReferenceError:

// 25.5 메서드
// ____25.5.1 constructor
// constructor는 이름을 변경할 수 없다.
// 25-11
class Person {
  // 생성자
  constructor(name) {
    // 인스턴스 생성 및 초기화
    this.name = name;
  }
}

// 25-12
//
console.log(typeof Person); // function
console.dir(Person);

// 25-13
// 인스턴스 생성
const me = new Person("Lee");
console.log(me);

// 25-14
class Person {
  // 생성자
  constructor(name) {
    // 인스턴스 생성 및 초기화
    this.name = name;
  }
}

// 생성자 함수
function Person(name) {
  // 인스턴스 생성 및 초기화
  this.name = name;
}

// 25-15
class Person {
  constructor() {}
  constructor() {}
}
// SyntaxError:


// 25-16
class Person {}

// 25-17
class Person {
  // constructor 는 생략하면 아래와 같이 빈 constructor 가 암묵적으로 정의된다.
  constructor() {}
}

// 빈 객체가 생성된다
const me = new Person();
console.log(me); // Person {}

// 25-18
class Person {
  constructor() {
    // 고정값으로 인스턴스 초기화
    this.name = "Lee"
    this.name = "Seoul";
  }
}

// 
const me = new Person();
console.log(me) // Person {name: "Lee", address: "Seoul"}

// 25-19
// 25-20
// 25-21

// ____25.5.2 프로토타입 메서드
// 25-22
// 25-23
// 25-24
// 25-25
// 25-26
// 25-27
// 25-28
// 25-29
// 25-30
// 25-31

// ____25.5.3 정적 메서드
// ____25.5.4 정적 메서드와 프로토타입 메서드의 차이
// ____25.5.5 클래스에서 정의한 메서드의 특징
// 25.6 클래스의 인스턴스 생성 과정
// 25-32
// 25-33
// 25-34
// 25-35
// 25-36
// 25-37
// 25-38
// 25-39
// 25-40
// 25-41
// 25-42
// 25-43
// 25-44
// 25-45
// 25-46
// 25-47
// 25-48
// 25-49
// 25-50
// 25-51
// 25-52
// 25-53
// 25-54
// 25-55
// 25-56
// 25-57
// 25-58
// 25-59
// 25-60
// 25-61
// 25-62
// 25-63
// 25-64
// 25-65
// 25-66
// 25-67
// 25-68
// 25-69
// 25-70
// 25-71
// 25-72
// 25-73
// 25-74
// 25-75
// 25-76
// 25-77
// 25-78
// 25-79
// 25-80
// 25-81
// 25-82
// 25-83

// 25.7 프로퍼티
// ____25.7.1 인스턴스 프로퍼티
// ____25.7.2 접근자 프로퍼티
// ____25.7.3 클래스 필드 정의 제안
// ____25.7.4 private 필드 정의 제안
// ____25.7.5 static 필드 정의 제안
// 25.8 상속에 의한 클래스 확장
// ____25.8.1 클래스 상속과 생성자 함수 상속
// ____25.8.2 extends 키워드
// ____25.8.3 동적 상속
// ____25.8.4 서브클래스의 constructor
// ____25.8.5 super 키워드
// ____25.8.6 상속 클래스의 인스턴스 생성 과정
// ____25.8.7 표준 빌트인 생성자 함수 확장
