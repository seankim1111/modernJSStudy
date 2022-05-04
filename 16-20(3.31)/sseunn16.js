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
const person = {
    name: 'Lee'
};
//프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 취득한다.
console.log(Object.getOwnPropertyDescriptor(person, 'name'));
//{value : "Lee", writable : true, enumerable: true, configurable: true}
//[예제풀이 16 -05]
const person ={
    name : "Lee"
};
//프로퍼티 동적 생성 
person.age = 20;
console.log(Object.getOwnPropertyDescriptors(person));
// {
//     name: {value: "Lee", writable: true, enumerable: true, configurable: true},
//     age: {value: 20, writable: true, enumerable: true, configurable: true}

// }
//[예제풀이 16 -06]
const person ={
    //데이터 프로퍼티
    firstName: 'Ungmo',
    lastName: 'Lee',

    //fullName은 접근자 함수로 구성된 접근자 프로퍼티다. 
    //getter 함수
    get fullName (){
        return `${this.firstName} ${this.lastName}`;
    },
    //setter함수
    set fullName (){
    //배열 디스트럭처링 할당 : "31.1 배열 디스트럭처링 할당"참고 
    [this.firstName, this.lastName] = name.split(''); 
    }
};
//데이터 프로퍼티를 통한 프로퍼티 값의 참조
console.log(person.firstName + ' ' +person.lastName); //Ungmo Lee

//접근자 프로퍼티를 통한 프로퍼티 값의 저장
//접근자 프로퍼티 fullName에 값을 저장하면 setter함수가 호출된다.
person.fullName = 'Heegun Lee';
console.log(person); //{firstName: "Heegun", lastName: "Lee"}

//접근자 프로퍼티를 통한 프로퍼티 값의 참조
//접근자 프로퍼티 fullName 에 접근하면 getter 함수가 호출된다. 
console.log(person.fullName); //Heegun Lee 
//firstName은 데이터 프로퍼티다.
//데이터 프로퍼티는 [[value]], [[writable]], [[configurable]]
//프로퍼티 어트리뷰트를 갖는다.
let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log(descriptor); 
//{value: "Heegun", writable: true, enumerable: true, configurable: true}
//fullName은 접근자 프로퍼티다.
//접근자 프로퍼티는 [[Get]], [[Set]], [[Enumerable]], [[Configurable]]
//프로퍼티 어트리뷰트를 갖는다.
descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log(descriptor);
//{get: f, set:f, enumerable: true, configurable:true}
//[예제풀이 16 -07]
//일반객체의 __proto__는 접근자 프로퍼티다.
Object.getOwnPropertyDescriptor(Object.prototype, '__proto__');
//{get:f, set:f, enumerable:false, configurable: true}
//함수 객체의 prototype은 데이터 프로퍼티다. 
Object.getOwnPropertyDescriptor(function(){}, 'prototype');
//{value: {...}, writable: true, enumerble: false, configurable: false}
//[예제풀이 16 -08]
const person = {};
//데이터 프로퍼티 정의
Object.defineProperty(person, 'firstName',{ 
    value: 'Ungmo',
    writable : true,
    enumerable: true, 
    configurable: true
});
Object.defineProperty (person, 'lastName', {
    value: 'Lee'
}); 
let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName'); 
console.log('firstName', descriptor);
//firstName : {value: 'Ungmo',  writable : true, enumerable: true, configurable: true}
//디스크립터 객체의 프로퍼티를 누락시키면 undefined, false가 기본값이다. 
descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
console.log('lastName', descriptor);
//lastName {value: 'Ungmo', writable : true, enumerable: true, configurable: true}
//[[Enumerable]]의 값이 false인 경우
//해당 프로퍼티는 for...in 문이나 Object.keys 등으로 열거할수없다.
//lastName 프로퍼티는 [[Enumerable]]의 값이 false이므로 열거되지 않는다.
console.log(Object.keys(person)); //["firstName"]
[[Writable]]의 값이 false인 경우 해당 프로퍼티의 [[value]]의 값을 변경할수없다.fullName
//lastName 프로퍼티는 [[Writable]]의 값이 false이므로 값을 변경할수없다.
//이때 값을 변경하면 에러는 발생하지 않고 무시된다. 
person.lastName = 'Kim';
//[[Configurable]] 의 값이 false인 경우 해당 프로퍼티를 삭제할수없다. 
//lastName프로퍼티는 [[Configurable]]의 값이 false이므로 삭제할수없다.
//이때 프로퍼티를 삭제하면 에러는 발생하지 않고 무시된다. 
delete person.lastName;

//[[Configurable]]의 값이 false인 경우 해당 프로퍼티를 재정의 할수없다.
//Object.defineProperty(person, 'lastName', {enumerable: true});
//Uncaught TypeError: Cannot redefined property: lastName


descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
console.log('lastName', descriptor); 
//lastName {value: "Lee", writable: false, enumerable: false, configurable: false}

//접귽 프로퍼티 정의
Object.defineProperty(person, 'fullName', {
    //getter함수 
    get(){
        return `${this.firstName} ${this.lastName}`;
    },
    //setter함수 
    set (name) {
        [this.firstName, this.lastName] = name.split ('');
    };
    enumerable : true,
    configurable: true
}); 
descriptor = Object.getOwnPropertyDescriptor(person, 'fullName'); 
console.log('fullName', descriptor);
//fullName {get:f, set: f, enumerable: true, configurable: true }
person.fullName = 'Heegun Lee';
console.log(person); //{firstName: "Heegun", lastName: "Lee"}
//[예제풀이 16 -09]
const person = {} ;
Object.defineProperties(person, {
    //데이터 프로퍼티 정의
    firstName{
        value: 'Ungmo',
    writable : true,
    enumerable: true, 
    configurable: true
    },
    lastname{
        value: 'Lee',
    writable : true,
    enumerable: true, 
    configurable: true
    },
    //접근자 프로퍼티 정의
    fullName {
        //getter함수 
        get() {
            return `${this.firstName} ${this.lastName}`; 
        }
        //setter함수
        set() {
            [this.firstName, this.lastName ]= name.split(''); 
        },
        enumerable: true,
        configurable :true 
    }
});
person.fullName = 'Heegun Lee'
console.log(person); //{firstName: "Heegun", lastName: "Lee"}

//[예제풀이 16 -10]
const person = { name:'Lee' };
//person 객체는 확장이 금지된 객체가 아니다. 
console.log(Object.isExtensible(person)); //true 
//person 객체의 확장을 금지하여 프로퍼티 추가를 금지한다.
Object.preventExtensions(person); 
//person 객체는 확장이 금지된 객체다.
console.log(Object.isExtensible(person)); //false 

//프로퍼티 추가가 금지된다. 
person.age = 20 ; //무시. strict mode에서는 에러
console.log(person); //{name: "Lee"}
//프로퍼티 추가는 금지되지만 삭제는 가능하다.
delete person.name ;
console.log(person); //{}
//프로퍼티 정의에 의한 프로퍼티 추가도 금지된다. 
Object.defineProperty(person, 'age', {value: 20});
//TypeError: Cannot define property age, object is not extensible 

//[예제풀이 16 -11]
const person = { name: 'Lee' };
//person 객체는 밀봉(seal)이 금지된 객체가 아니다. 
console.log(Object.isSealed(person)); //false 
//person 객체의 밀봉하여 프로퍼티 추가를 추가,삭제,재정의를 금지한다.
Object.seal(person); 
//person 객체는 밀봉(seal)된 객체다.
console.log(Object.isSealed(person)); //true 

//밀봉된 객체는 configurable이 false다. 
console.log(Object.getOwnPropertyDescriptor(person));
// {name: {value: "Lee", writable: true, enumerable:true, configurable:false},}

//프로퍼티 추가가 금지된다. 
person.age = 20 ; //무시. strict mode에서는 에러
console.log(person); //{name: "Lee"}
//프로퍼티 삭제가 금지된다.
delete person.name ;//무시. strict mode에서는 에러 
console.log(person); //{name: "Lee"}
//프로퍼티 값 갱신은 가능하다.
person.name = 'Kim'; 
console.log(person); {name: "Kim"}
//프로퍼티 어트리뷰트 재정의가 금지된다. 
Object.defineProperty(person, 'name', {configurable: true});
//TypeError: Cannot redefine property:name

//[예제풀이 16 -12]
const person = { name: 'Lee' };
//person 객체는 동결(freeze)된 객체가 아니다. 
console.log(Object.isFrozen(person)); //false 
//person 객체를 동결하여 프로퍼티 추가,삭제,재정의, 쓰기를 금지한다.
Object.freeze(person); 
//person 객체는 동결(freeze)된 객체다.
console.log(Object.isFrozen(person)); //true 

//동결된 객체는 writable과 configurable이 false다. 
console.log(Object.getOwnPropertyDescriptor(person));
// {name: {value: "Lee", writable: false, enumerable:true, configurable:false},}

//프로퍼티 추가가 금지된다. 
person.age = 20 ; //무시. strict mode에서는 에러
console.log(person); //{name: "Lee"}
//프로퍼티 삭제가 금지된다.
delete person.name ;//무시. strict mode에서는 에러 
console.log(person); //{name: "Lee"}
//프로퍼티 값 갱신이 금지된다.
person.name = 'Kim'; //무시 . strict mode에서는 에러 
console.log(person); //{name: "Lee"}

//프로퍼티 어트리뷰트 재정의가 금지된다. 
Object.defineProperty(person, 'name', {configurable: true});
//TypeError: Cannot redefine property : name

//[예제풀이 16 -13]
const person = { 
    name: 'Lee',
    address: {city: 'Seoul'}
};
//얕은 객체 동결 
Object.freezeI(person);
//직속 프로퍼티만 동결한다. 
console.log(Object.isFrozen(person)); //true 
//중첩 객체까지 동결하지 못한다. 
console.log(Object.isFrozen(person.address)); //false 
person.address.city = 'Busan';
console.log(person); // 
Object.seal(person); //{name: "Lee", address: {city: "Busan"}}

//[예제풀이 16-14]
function deepFreeze(target) {
    //객체가 아니거나 동결된 객체는 무시하고 객체이고 동결되지 않은 객체만 동결한다. 
    if( target && typeof target === 'object ' && !Object.isFrozen(target)) {
        Object.freeze(target);
     //모든 프로퍼티를 순회하며 재귀적으로 동결한다. Object.keys 메서드는 객체 자신의 열거 가능한 프로퍼티 키를 배열로 반환한다. 19.14.2절 "Object.keys/values/entries 메서드" 참고)
     //forEach메서드는 배열을 순화하며 배열의 각요소에 대하여 콜백함수를 실행한다. (27.9.2절"Array.prototype.forEach"참고)
     Object.keys(target).forEach(key => deepFreeze(target[key]));
    }
    return target;
}
const person ={
    name: 'Lee',
    address: {city: 'Seoul'}
};
//깊은 객체 동결 
deepFreeze(person);
console.log(Object.isFrozen(person)); //true
//중첩객체까지 동결한다.
console.log(Object.isFrozen(person.address)); //true
person.address.city = 'Busan';
console.log(person); {name: "Lee", address: {city: "Seoul"}}