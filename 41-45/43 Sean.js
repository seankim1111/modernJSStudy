// 43장 Ajax
// 43.1 Ajax란?
// Ajax란 자바스크립트를 사용하여 브라우저가 서버에게 비동기 방식으로 데이터를 요청하고, 서버가 응답한 데이터를 수신하여 웹페이지를 동적으로 갱신하는 프로그래밍 방식을 말한다.

// 43.2 JSON
// JSON은 클라이언트와 서버 간의 HTTP 통신을 위한 텍스트 데이터 포맷이다.
// ____43.2.1 JSON 표기 방식
// JSON은 자바스크립트의 객체 리터럴과 유사하게 키와 값으로 구성된 순수한 텍스트다.
// 43-01
// {
//   "name": "Lee",
//   "age": 20,
//   "alive": true,
//   "hobby": ["traveling", "tennis"]
// }

// ____43.2.2 JSON.stringify
// 43-02
const obj = {
  name: "Lee",
  age: 20,
  alive: true,
  hobby: ["traveling", "tennis"],
};

// 객체를 JSON 포맷의 문자열로 변환한다.
const json = JSON.stringify(obj);
console.log(typeof json, json);
// 'string' '{"name":"Lee","age":20,"alive":true,"hobby":["traveling","tennis"]}'

// 객체를 JSON 포맷의 문자열로 변환하면서 들여쓰기 한다.
const prettyJson = JSON.stringify(obj, null, 2);
console.log(typeof prettyJson, prettyJson);
// 'string' '{
//   "name": "Lee",
//   "age": 20,
//   "alive": true,
//   "hobby": [
//     "traveling",
//     "tennis"
//   ]
// }'

// replacer 함수. 값의 타입이 Number이면 필터링되어 반환되지 않는다.
function filter(key, value) {
  // undefined: 반환하지 않음
  return typeof value === "number" ? undefined : value;
}

// JSON.stringify 메서드에 두 번째 인수로 replacer 함수를 전달한다.
const strFilteredObject = JSON.stringify(obj, filter, 2);
console.log(typeof strFilteredObject, strFilteredObject);
// 'string' '{
//   "name": "Lee",
//   "alive": true,
//   "hobby": [
//     "traveling",
//     "tennis"
//   ]
// }'

// JSON.stringify 메서드는 객체뿐만 아니라 배열도 JSON 포맷의 문자열로 변환한다.
// 43-03
const todos = [
  { id: 1, content: "HTML", completed: false },
  { id: 2, content: "CSS", completed: true },
  { id: 3, content: "JavaScript", completed: false },
];

// 배열을 JSON 포맷의 문자열로 변환한다.
const json = JSON.stringify(todos, null, 2);
console.log(typeof json, json);
// 'string' '[
//   {
//     "id": 1,
//     "content": "HTML",
//     "completed": false
//   },
//   {
//     "id": 2,
//     "content": "CSS",
//     "completed": true
//   },
//   {
//     "id": 3,
//     "content": "JavaScript",
//     "completed": false
//   }
// ]'

// ____43.2.3 JSON.parse
// 43-04
const obj = {
  name: "Lee",
  age: 20,
  alive: true,
  hobby: ["traveling", "tennis"],
};

// 객체를 JSON 포맷의 문자열로 변환한다.
const json = JSON.stringify(obj);

// JSON 포맷의 문자열을 객체로 변환한다.
const parsed = JSON.parse(json);
console.log(typeof parsed, parsed);
// 'object' {
//   name: 'Lee',
//   age: 20,
//   alive: true,
//   hobby: [ 'traveling', 'tennis' ]
// }

// 43-05
const todos = [
  { id: 1, content: "HTML", completed: false },
  { id: 2, content: "CSS", completed: true },
  { id: 3, content: "JavaScript", completed: false },
];

// 객체를 JSON 포맷의 문자열로 변환한다.
const json = JSON.stringify(todos);

// JSON 포맷의 문자열을 배열로 변환한다. 배열의 요소까지 객체로 변환된다.
const parsed = JSON.parse(json);
console.log(typeof parsed, parsed);
// "object"[
//   ({ id: 1, content: "HTML", completed: false },
//   { id: 2, content: "CSS", completed: true },
//   {
//     id: 3,
//     content: "JavaScript",
//     completed: false,
//   })
// ];

// 43.3 XMLHttpRequest
// ____43.3.1 XMLHttpRequest 객체 생성
// 43-06
// XMLHttpRequest 객체 생성
const xhr = new XMLHttpRequest();

// ____43.3.2 XMLHttpRequest 객체의 프로퍼티와 메서드
// ____43.3.3 HTTP 요청 전송
// 43-07
// XMLHttpRequest 객체 생성
const xhr = new XMLHttpRequest();

// HTTP 요청 초기화
xhr.open("GET", "/users");

// HTTP 요청 헤더 설정
// 클라이언트가 서버로 전송할 데이터의 MIME 타입 지정: json
xhr.setRequestHeader("content-type", "application/json");

// HTTP 요청 전송
xhr.send();

// 43-08
xhr.send(JSON.stringify({ id: 1, content: "HTML", completed: false }));

// 43-09
// XMLHttpRequest 객체 생성
const xhr = new XMLHttpRequest();

// HTTP 요청 초기화
xhr.open("POST", "/users");

// HTTP 요청 헤더 설정
// 클라이언트가 서버로 전송할 데이터의 MIME 타입 지정: json
xhr.setRequestHeader("content-type", "application/json");

// HTTP 요청 전송
xhr.send(JSON.stringify({ id: 1, content: "HTML", completed: false }));

// 43-10
// 서버가 응답할 데이터의 MIME 타입 지정: json
xhr.setRequestHeader("accept", "application/json");

// ____43.3.4 HTTP 응답 처리
// 43-11
// XMLHttpRequest 객체 생성
const xhr = new XMLHttpRequest();

// HTTP 요청 초기화
// https://jsonplaceholder.typicode.com/todos/1는 Fake REST API를 제공하는 서비스.
xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");

// HTTP 요청 전송
xhr.send();

// readystatechange 이벤트는 HTTP 요청의 현재 상태를 나타내는 readyState 프로퍼티가
// 변경될 때마다 발생한다.
xhr.onreadystatechange = () => {
  // readyState 프로퍼티는 HTTP 요청의 현재 상태를 나타낸다.
  // readyState 프로퍼티 값이 4(XMLHttpRequest.DONE)가 아니면 서버 응답이 완료되지 않은 상태다.
  // 만약 서버 응답이 아직 완료되지 않았다면 아무런 처리를 하지 않는다.
  if (xhr.readyState !== XMLHttpRequest.DONE) return;

  // status 프로퍼티는 응답 상태 코드를 나타낸다.
  // status 프로퍼티 값이 200이면 정상적으로 응답된 상태이고
  // status 프로퍼티 값이 200이 아니면 에러가 발생한 상태다.
  // 정상적으로 응답된 상태라면 response 프로퍼티에 서버의 응답 결과가 담겨 있다.
  if (xhr.status === 200) {
    console.log(JSON.parse(xhr.response));
    // {
    //   userId: 1,
    //   id: 1,
    //   title: 'delectus aut autem',
    //   completed: false
    // }
  } else {
    console.log("Error", xhr.status, xhr.statusText);
  }
};

// 43-12
// XMLHttpRequest 객체 생성
const xhr = new XMLHttpRequest();

// HTTP 요청 초기화
// https://jsonplaceholder.typicode.com/todos/1는 Fake REST API를 제공하는 서비스.
xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");

// HTTP 요청 전송
xhr.send();

// load 이벤트는 HTTP 요청이 성공적으로 완료된 경우 발생한다.
xhr.onload = () => {
  // status 프로퍼티는 응답 상태 코드를 나타낸다.
  // status 프로퍼티 값이 200이면 정상적으로 응답된 상태이고
  // status 프로퍼티 값이 200이 아니면 에러가 발생한 상태다.
  // 정상적으로 응답된 상태라면 response 프로퍼티에 서버의 응답 결과가 담겨 있다.
  if (xhr.status === 200) {
    console.log(JSON.parse(xhr.response));
    // {
    //   userId: 1,
    //   id: 1,
    //   title: 'delectus aut autem',
    //   completed: false
    // }
  } else {
    console.log("Error", xhr.status, xhr.statusText);
  }
};
