//[예제풀이 36 -01]
// ES5
var arr = [1, 2, 3];
var one = arr[0];
var two= arr[1];
var three = arr[2];
console.log(one, two, three); //1 2 3

//[예제풀이 36-02]
const arr = [1, 2, 3];
// ES6 배열 디스트럭처링 할당
// 변수 one, two, three를 선언하고 배열 arr을 디스트럭처링하여 할당한다.
// 이때 할당 기준은 배열의 인덱스다.
const [one, two, three] = arr;
console.log(one, two, three); //1 2 3

//[예제풀이 36-03]
const [x, y] = [1, 2];

//[예제풀이 36-04]
const [x, y]; //SyntaxError: Missing initializer in destructuring declaration
const [a, b] = {}; //TypeError: {} is not iterable

//[예제풀이 36-05]
let x, y;
[x, y] = [1, 2];

//[예제풀이 36-06]
const [a, b] = [1, 2];
console.log(a, b); //1 2
const [c, d] = [1];
console.log(c, d); //1 undefined
const [e, f] = [1, 2, 3];
console.log(e, f); //1 2
const [g, , h] = [1, 2, 3];
console.log(g, h); //1 3

//[예제풀이 36-07]
//기본값
const [a, b, c = 3] = [1, 2];
console.log(a, b, c); //1 2 3
//기본값보다 할당된 값이 우선한다.
const [e, f = 10, g = 3] = [1, 2];
console.log(e, f, g); //1 2 3

//[예제풀이 36-08]
// url을 파싱하여 protocol, host, path 프로퍼티를 갖는 객체를 생성해 반환한다.
function parseURL(url = '') {
  // '://' 앞의 문자열(protocol)과 '/' 이전의 '/'으로 시작하지 않는 문자열(host)과 '/' 이후의 문자열(path)을 검색한다.
  const parsedURL = url.match(/^(\w+):\/\/([^/]+)\/(.*)$/);
  console.log(parsedURL);
  /*
  [
    'https://developer.mozilla.org/ko/docs/Web/JavaScript',
    'https',
    'developer.mozilla.org',
    'ko/docs/Web/JavaScript',
    index: 0,
    input: 'https://developer.mozilla.org/ko/docs/Web/JavaScript',
    groups: undefined
  ]
  */
  if (!parsedURL) return {};
  //배열 디스트럭처링 할당을 사용하여 이터러블에서 필요한 요소만 추출한다.
  const [, protocol, host, path] = parsedURL;
  return { protocol, host, path };
}
const parsedURL = parseURL('https://developer.mozilla.org/ko/docs/Web/JavaScript');
console.log(parsedURL);
{
  protocol: 'https',
  host: 'developer.mozilla.org',
  path: 'ko/docs/Web/JavaScript'
}
//[예제풀이 36-09]
//Rest 요소
const [x, ...y] = [1, 2, 3];
console.log(x, y); // 1 [ 2, 3 ]
//[예제풀이 36-10

//ES5
var user = { firstName: 'Ungmo', lastName: 'Lee' };
var firstName = user.firstName;
var lastName  = user.lastName;
console.log(firstName, lastName); //Ungmo Lee

//[예제풀이 36-11]
const user = { firstName: 'Ungmo', lastName: 'Lee' };
// ES6 객체 디스트럭처링 할당
// 변수 lastName, firstName을 선언하고 user 객체를 디스트럭처링하여 할당한다.
// 이때 프로퍼티 키를 기준으로 디스트럭처링 할당이 이루어진다. 순서는 의미가 없다.
const { lastName, firstName } = user;
console.log(firstName, lastName); //Ungmo Lee

//[예제풀이 36-12]
const { lastName, firstName } = { firstName: 'Ungmo', lastName: 'Lee' };

//[예제풀이 36-13]
const { lastName, firstName };
// SyntaxError: Missing initializer in destructuring declaration
const { lastName, firstName } = null;
// TypeError: Cannot destructure property 'lastName' of 'null' as it is null.

//[예제풀이 36-14]
const { lastName, firstName } = user;//위와 아래는 동치다.
const { lastName: lastName, firstName: firstName } = user;

//[예제풀이 36-15]
const user = { firstName: 'Ungmo', lastName: 'Lee' };
//프로퍼티 키를 기준으로 디스트럭처링 할당이 이루어진다.
//프로퍼티 키가 lastName인 프로퍼티 값을 ln에 할당하고,
//프로퍼티 키가 firstName인 프로퍼티 값을 fn에 할당한다.
const { lastName: ln, firstName: fn } = user;
console.log(fn, ln); //Ungmo Lee

//[예제풀이 36-16]
const { firstName = 'Ungmo', lastName } = { lastName: 'Lee' };
console.log(firstName, lastName); //Ungmo Lee
const { firstName: fn = 'Ungmo', lastName: ln } = { lastName: 'Lee' };
console.log(fn, ln); //Ungmo Lee

//[예제풀이 36-17]
const str = 'Hello';
//String 래퍼 객체로부터 length 프로퍼티만 추출한다.
const { length } = str;
console.log(length); //5
const todo = { id: 1, content: 'HTML', completed: true };
//todo 객체로부터 id 프로퍼티만 추출한다.
const { id } = todo;
console.log(id); //1

//[예제풀이 36-18]
function printTodo(todo) {
  console.log(`할일 ${todo.content}은 ${todo.completed ?'완료' : '비완료'} 상태입니다.`);
}
printTodo({ id: 1, content: 'HTML', completed: true });
//할일 HTML은 완료 상태입니다.
//[예제풀이 36-19]
function printTodo({ content, completed }) {
  console.log(`할일 ${content}은 ${completed ? '완료' : '비완료'} 상태입니다.`);
}
printTodo({ id: 1, content: 'HTML', completed: true });
// 할일 HTML은 완료 상태입니다.
//[예제풀이 36-20]
const todos = [
  { id: 1, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: false },
  { id: 3, content: 'JS', completed: false }
];
// todos 배열의 두 번째 요소인 객체로부터 id 프로퍼티만 추출한다.
const [, { id }] = todos;
console.log(id); //2

//[예제풀이 36-21]
const user = {
  name: 'Lee',
  address: {
    zipCode: '03068',
    city: 'Seoul'
  }
};
// address 프로퍼티 키로 객체를 추출하고 이 객체의 city 프로퍼티 키로 값을 추출한다.
const { address: { city } } = user;
console.log(city); // 'Seoul'
//[예제풀이 36-22]
// Rest 프로퍼티
const { x, ...rest } = { x: 1, y: 2, z: 3 };
console.log(x, rest); //1 { y: 2, z: 3 }