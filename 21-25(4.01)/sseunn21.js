21. 빌트인 객체
21.1 자바스크립트 객체의 분류 
21.2 표준 빌트인 객체 
//[예제풀이 21 -01]
//String 생성자 함수에 의한 String객체 생성
const strObj = new String('Lee'); //String {"Lee"}
console.log(typeof strObj); //object

//Number 생성자 함수에 의한 Number 객체 생성 
const numObj = new Number(123); //Number {123}
console.log(typeof numObj); //object

//Boolean 생성자 함수에 의한 Boolean 객체 생성 
const boolObj = new Boolean(true); //Boolean {}
console.log(typeof boolObj); //object

//Function 생성자 함수에 의한 Function 객체(함수) 생성 
const func = new Function('x', 'return x * x'); // f anonymous(x)
console.log(typeof func); //function

//Array 생성자 함수에 의한 Array 객체 생성 
const arr = new Array(1,2,3); //(3){1,2,3}
console.log(typeof); //object

// RegExp 생성자 함수에 의한 RegExp 객체(정규표현식) 생성 
const regExp = new RegExp(/ab+c/i); // /ab+c/i
console.log(typeof regExp); //object

//Date 생성자 함수에 의한 Date 객체 생성 
const date = new Date('Lee'); //Fri May 08 2020 
console.log(typeof date); //object

//[예제풀이 21 -02]
//string생성자 함수에 의한 String객체 생성
const strObj = new String('Lee'); //String{"Lee"}
//String 생성자 함수를 통해 생성한 strObj객체의 프로토타입은 String.prototype이다. 
console.log(Object.getPrototypeOf(strObj)) ===String.prototype); //true 

//[예제풀이 21 -03]
//[예제풀이 21 -04]
//[예제풀이 21 -05]
//[예제풀이 21 -06]
//[예제풀이 21 -07]
//[예제풀이 21 -08]
//[예제풀이 21 -09]
//[예제풀이 21 -10]
//[예제풀이 21 -11]
//[예제풀이 21 -12]
//[예제풀이 21 -13]
//[예제풀이 21 -14]
//[예제풀이 21 -15]
//[예제풀이 21 -16]
//[예제풀이 21 -17]
//[예제풀이 21 -18]
//[예제풀이 21 -19]
//[예제풀이 21 -20]
//[예제풀이 21 -21]
//[예제풀이 21 -22]
//[예제풀이 21 -23]
//[예제풀이 21 -24]
//[예제풀이 21 -25]
//[예제풀이 21 -26]
//[예제풀이 21 -27]
//[예제풀이 21 -28]
//[예제풀이 21 -29]
//[예제풀이 21 -30]
//[예제풀이 21 -31]
//[예제풀이 21 -32]
//[예제풀이 21 -33]
//[예제풀이 21 -34]
//[예제풀이 21 -35]
//[예제풀이 21 -36]
//[예제풀이 21 -37]
//[예제풀이 21 -38]
//[예제풀이 21 -39]