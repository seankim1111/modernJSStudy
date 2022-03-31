//[예제풀이 16 -01] 
const o = {};
//내부슬롯은 자바스크립트 엔진의 내부로직이므로 직접 접근할 수 없다. 
o.[[prototype]]  //Uncaught SyntaxError : Unexpected token '['
//단 일부 내부 슬롯과 내부 메서드에 한하여 간접적으로 접근할 수 있는 수단을 제공하기는 한다.
o.__proto__ //Object.prototype

//[예제풀이 16 -02]
const person = {
  name: 'Lee'
};
//프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 반환한다. 
console.log(Object.getOwnPropertyDescriptor(person, 'name'));
//{value: "Lee", writeable:true, enumerable:true , configurable:true}
//[예제풀이 16 -03]
const person = {
    name: "Lee"
}; 
//프로퍼티 동적생성
person.age: 20;
//모든 프로퍼티의 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체들을 반환한다. 
console.log(Object.getOwnPropertyDescriptors(person)); 
//name: { value: "Lee", writable: true, enumerable: true, configurable: true}, 
//age : {value: 20, writable:true, enumerable: true, configurable: true}
//[예제풀이 16 -04]
//[예제풀이 16 -05]
//[예제풀이 16 -06]
//[예제풀이 16 -07]
//[예제풀이 16 -08]
//[예제풀이 16 -09]
//[예제풀이 16 -10]
//[예제풀이 16 -11]
//[예제풀이 16 -12]
//[예제풀이 16 -13]
//[예제풀이 16 -14]