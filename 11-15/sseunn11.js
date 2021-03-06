//[예제 11-01]
//const 키워드를 사용해 선언한 변수는 재할당이 금지된다. 상수는 재할당이 금지된 변수일뿐이다. 
const o = {};
//const키워드를 사용해 선언한 변수에 할당한 원시 값(상수)은 변경할수없다
//하지만 const키워드를 사용해 선언한 변수에 할당한 객체는 변경할수있다. 
o.a=1;
console.log(o); //{a:1} 
//[예제 11-02]
//문자열은 0개이상의 문자로 이뤄진 집합이다. 
var str1 =''; //0개의 문자로 이뤄진 문자열(빈문자열)
var str2 = 'Hello';  //5개의 문자로 이뤄진 문자열 
//[예제 11-03]
var str = 'Hello';
str = 'world';  
//[예제 11-04]
var str = 'string'; 
//문자열은 유사 배열이므로 배열과 유사하게 인덱스를 사용해 각 문자에 접근할 수 있다. 
console.log(str[0]); //s
//원시값인 문자열이 객체처럼 동작한다. 
console.log(str.length); //6
console.log(str.toUpperCase()); //"STRING"
//[예제 11-05]
var str = 'string';
//문자열은 유사배열이므로 배열과 유사하게 인덱스를 사용해 각 문자에 접근할수있다 .
//하지만 문자열은 원시값이므로 변경할 수 없다. 이떄 에러가 발생하지 않는다 .
str[0] = 'S';
console.log(str); 

//[예제 11-06]
var score = 80;
var copy = score; 

console.log(score); //80
console.log(copy); //80

score = 100; 

console.log(score); //100
console.log(copy); //80 

//[예제 11-07]
var score = 80;
//copy변수에는 score변수의 값 80이 복사되어 할당된다. 
var copy = score; 
console.log(score,copy);
console.log(score === copy); 

//[예제 11-08]
var score = 80;
//copy변수에는 score변수의 값 80이 복사되어 할당된다. 
var copy = score; 
console.log(score,copy);
console.log(score === copy);//true 
//score변수와 copy 변수의 값은 다른 메모리 공간에 저장된 별개의 값이다. 
//따라서 score변수의 값을 변경해도 copy 변수의 값에는 어떠한 영향도 주지 않는다.
score = 100; 
console.log(score,copy);// 100,80
console.log(score === copy);


//[예제 11-09]
var x = 10;

//[예제 11-10]
var copy = score; 

//[예제 11-11]
var person = {
    name: 'Lee'
}; 
//[예제 11-12]
//할당이 이뤄지는 시점에 객체리터럴이 해석되고, 그결과 객체가 생성된다. 
var person = {
    name: 'Lee'
};

//person 변수에 저장되어있는 참조값으로 실제 객체에 접근한다.
console.log(person); //{name:'Lee'}

//[예제 11-13]
var person = {
    name : 'Lee'
};
//프로퍼티 값 갱신 
person.name = 'Kim';
//프로퍼티 동적 생성
person.address = 'Seoul';
console.log(person); // {name: "Kim", adress: "Seoul"}
//[예제 11-14]
const o = { x : {y: 1}};
//얕은 복사
const c1 = { ...o } // 35장 스프레드 문법 참고
console.log(c1 === o );//false
console.log(c1.x === o.x); //true
//lodash 의 cloneDeep을 사용한 깊은 복사
//"npm install lodash"로 lodash를 설치한 후, Node.js환경에서 실행
const c2 = _.cloneDeep(o);
console.log(x2 === o ); //false
console.log(x2.x === o.x); //false

//[예제 11-15]
const v = 1;
//깊은 복사라고 부르기도 한다. 
const c1 = v;
console.log(c1 ===v ); //true 
const o = { x:1 };

//얕은 복사라고 부르기도 한다. 
const c2 = o;
console.log(c2 ===o ); //true

//[예제 11-16]
var person = {
    name : 'Lee'
}; 
//참조값을 복사(얕은 복사)
var copy = person ;

//[예제 11-17]
var person = {
    name : 'Lee'
}; 
//참조값을 복사(얕은 복사) copy와 person은 동일한 참조 값을 갖는다. 
var copy = person ;
//copy와 person 은 동일한 객체를 참조한다.
console.log(copy === person ); //true 
//copy를 통해 객체를 변경한다. 
copy.name = 'Kim';
//person 을 통해 객체를 변경한다. 
person.address = 'Seoul';
//copy와 person은 동일한 객체를 가리킨다
//따라서 어느 한쪽에서 객체를 변경하면 서로 영향을 주고받는다. 
console.log(person); //{name:"Kim", address: 'Seoul'}
console.log(copy);// name:"Kim", address: 'Seoul'}

//[예제 11-18]
var person1 = {
    name: 'Lee'
};

var person2 = {
    name: 'Lee'
};

console.log(person1 === person2 ); //false
console.log (person1.name ===person2.name); //true
