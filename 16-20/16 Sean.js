// 16장 프로퍼티 어트리뷰트
// 16.1 내부 슬롯과 내부 메서드
// 16-01
const o = {};
// 내부 슬롯은 자바스크립트 엔진의 내부 로직이므로 직접 접근할 수 없다.
// o.[[Prototype]] // Uncaught SyntaxError:

// o.__proto__ // Object.prototype

// 16.2 프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체
// 16-02
const person = {
  name: "Lee",
};

console.log(Object.getOwnPropertyDescriptor(person, "name"));
// {value: 'Lee', writable: true, enumerable: true, configurable: true}

// 16-03
const person = {
  name: "Lee",
};

// 프로퍼티 동적 생성

person.age = 20;

console.log(Object.getOwnPropertyDescriptor(person));
// {
//   name: {value: 'Lee', writable: true, enumerable: true, configurable: true},
//   age: {value: 20, writable: true, enumerable: true, configurable: true}}
// }

// 16.3 데이터 프로퍼티와 접근자 프로퍼티
// ____16.3.1 데이터 프로퍼티
// 16-04
const person = {
  name: "Lee",
};

// 16-05
person.age = 20;

console.log(Object.getOwnPropertyDescriptor(person, "name"));
// {
//   name: {value: 'Lee', writable: true, enumerable: true, configurable: true},
//   age: {value: 20, writable: true, enumerable: true, configurable: true}}
// }

// ____16.3.2 접근자 프로퍼티
// 16-06
const person = {
  // 데이터프로퍼티
  firstName: "Ungmo",
  lastName: "Lee",

  // fullName 은 접근자 함수로 구성된 접근자 프로퍼티
  // getter 함수
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  // setter 함수
  set fullName(name) {
    // 배열 디스트럭처링 할당
    [this.firstName, this.lastName] = name.split(" ");
  },
};
// 데이터 프로퍼티를 통한 프로퍼티 값의 참조
console.log(person.firstName + " " + person.lastName); // Ungmo Lee

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출된다.

person.fullName = "Heegun Lee";
console.log(person); // {firstName: "Heegun", lastName: "Lee"}

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로퍼티 fullName 에 접근하면 getter 함수가 호출된다.

console.log(person.fullName); // Heegun Lee

// firstName 은 데이터 프로퍼티다.
// 데이터 프로퍼티는 [[Value]], [[Writable]], [[Enumerable]], [[Configurable]]
// 프로퍼티 어트리뷰트를 갖는다.

let descriptor = Object.getOwnPropertyDescriptor(person, "firstName");
console.log(descriptor);
// {value: "Heegun", writable: true, enumerable: true, configurable: true}

// fullName 은 접근자 프로퍼티다
// 접근자 프로퍼티는 [[Get]], [[Set]], [[Enumerable]], [[Configurable]]
// 프로퍼티 어트리뷰트를 갖는다.

descriptor = Object.getOwnPropertyDescriptor(person, "fullName");
console.log(descriptor);
// {get: function, set: function, enumerable: true, configurable: true}

// 16-07

// 16.4 프로퍼티 정의
// 16-08

// 16-09

// 16.5 객체 변경 방지
// ____16.5.1 객체 확장 금지
// 16-10

// ____16.5.2 객체 밀봉
// 16-11

// ____16.5.3 객체 동결
// 16-12

// ____16.5.4 불변 객체
// 16-13

// 16-14
