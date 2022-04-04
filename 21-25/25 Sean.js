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
// 클래스 선언문
class Person {}

console.log(typeof Person); // function

const Person = "";

{
  // 호이스팅이 발생하지 않는다면 ''이 출력되어야 한다.
  console.log(Person);
  // ReferenceError:

  // 클래스 선언문
  class Person {}
}

// 25.4 인스턴스 생성
// 25.5 메서드
// ____25.5.1 constructor
// ____25.5.2 프로토타입 메서드
// ____25.5.3 정적 메서드
// ____25.5.4 정적 메서드와 프로토타입 메서드의 차이
// ____25.5.5 클래스에서 정의한 메서드의 특징
// 25.6 클래스의 인스턴스 생성 과정
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
