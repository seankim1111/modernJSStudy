// 45장 프로미스
// 자바스크립트는 비동기 처리를 위한 하나의 패턴으로 콜백 함수를 사용한다. 하지만 전통적인 콜백 패턴은 콜백 헬로 인해 가독성이 나쁘고 비동기 처리 중 발생한 에러의 처리가 곤란하며 여러 개의 비동기 처리를 한번에 처리하는 데도 한계가 있다.
// ES6에서는 비동기 처리를 위한 또 다른 패턴으로 프로피스를 도입했다. 프로미스는 전통적인 콜백 패턴이 가진 단점을 보완하며 비동기 처리 시점을 명확하게 표현할 수 있다는 장점이 있다.
// 45.1 비동기 처리를 위한 콜백 패턴의 단점
// ____45.1.1 콜백 헬
// 45-01
// GET 요청을 위한 비동기 함수
const get = (url) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      // 서버의 응답을 콘솔에 출력한다.
      console.log(JSON.parse(xhr.response));
    } else {
      console.error(`${xhr.status} ${xhr.statusText}`);
    }
  };
};

// id가 1인 post를 취득
get("https://jsonplaceholder.typicode.com/posts/1");
// {
//   userId: 1,
//   id: 1,
//   title: 'sunt aut ...
//   body: 'quia et ...
// }

// 45-02
let g = 0;

// 비동기 함수인 setTimeout 함수는 콜백 함수의 처리 결과를 외부로 반환하거나 상위 스코프의 변수에 할당하지 못한다.
setTimeout(() => {
  g = 100;
}, 0);
console.log(g); // 0

// 45-03
// GET 요청을 위한 비동기 함수
const get = (url) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      // 1. 서버의 응답을 반환한다.
      return JSON.parse(xhr.response);
    }
    console.error(`${xhr.status} ${xhr.statusText}`);
  };
};

// 2. id가 1인 post를 취득
get("https://jsonplaceholder.typicode.com/posts/1");
console.log(response); // undefined

// 45-04
document.querySelector("input").oninput = function () {
  console.log(this.value);
  // 이벤트 핸들러에서의 반환은 의미가 없다.
  return this.value;
};

// 45-05
let todos;

// GET 요청을 위한 비동기 함수
const get = (url) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      // 1. 서버의 응답을 상위 스코프의 변수에 할당한다.
      todos = JSON.parse(xhr.response);
    } else {
      console.error(`${xhr.status} ${xhr.statusText}`);
    }
  };
};

get("https://jsonplaceholder.typicode.com/posts/1");
console.log(todos); // undefined

// 45-06
// GET 요청을 위한 비동기 함수
const get = (url, successCallback, failureCallback) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      // 서버의 응답을 콜백 함수에 인수로 전달하면서 호출하여 응답에 대한 후속 처리를 한다.
      successCallback(JSON.parse(xhr.response));
    } else {
      // 에러 정보를 콜백 함수에 인수로 전달하면서 호출하여 에러 처리를 한다.
      failureCallback(xhr.status);
    }
  };
};

// id가 1인 post를 취득
// 서버의 응답에 대한 후속 처리를 위한 콜백 함수를 비동기 함수인 get에 전달해야 한다.
get("https://jsonplaceholder.typicode.com/posts/1", console.log, console.error);
// {
//   userId: 1,
//   id: 1,
//   title: 'sunt aut ...
//   body: 'quia et ...
// }

// 45-07
// GET 요청을 위한 비동기 함수
const get = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      // 서버의 응답을 콜백 함수에 전달하면서 호출하여 응답에 대한 후속 처리를 한다.
      callback(JSON.parse(xhr.response));
    } else {
      console.error(`${xhr.status} ${xhr.statusText}`);
    }
  };
};

const url = "https://jsonplaceholder.typicode.com";

// id가 1인 post의 userID를 취득
get(`${url}/posts/1`, ({ userId }) => {
  console.log(userId); // 1
  // post의 userId를 사용하여 user 정보를 취득
  get(`${url}/users/${userId}`, (userInfo) => {
    console.log(userInfo);
  });
});
// {
//   id: 1,
//   name: 'Leanne Graham',
//   username: 'Bret',
//   email: ...
// }

// 45-08
// get('/setp1', a => {
//   get(`/step2/${a}`, b => {
//     get(`/step3/${b}`, c => {
//       get(`/step4/${c}`, d => {
//         console.log(d);
//     });
//   });
// });

// ____45.1.2 에러 처리의 한계
// 45-09
try {
  setTimeout(() => {
    throw new Error("Error!");
  }, 1000);
} catch (e) {
  // 에러를 캐치하지 못한다.
  console.error("캐치한 에러", e);
}

// 45.2 프로미스의 생성
// 45-10
// 프로미스 생성
const promise = new Promise ((resolve, reject) => {
  // Promise 함수의 콜백 함수 내부에서 비동기 처리를 수행한다.
  if(/* 비동기 처리 성공 */) {
    resolve('result');
  } else{ /* 비동기 처리 실패 */  
reject('failure reason');
  }
});

// 45-11

// 45-12

// 45-13

// 45.3 프로미스의 후속 처리 메서드
// ____45.3.1 Promise.prototype.then
// 45-14

// ____45.3.2 Promise.prototype.catch
// 45-15

// 45-16

// ____45.3.3 Promise.prototype.finally
// 45-17

// 45-18

// 45.4 프로미스의 에러 처리
// 45-19

// 45-20

// 45-21

// 45-22

// 45-23

// 45.5 프로미스 체이닝
// 45-24

// 45-25

// 45.6 프로미스의 정적 메서드
// ____45.6.1 Promise.resolve / Promise.reject
// 45-26

// 45-27

// 45-28

// 45-29

// ____45.6.2 Promise.all
// 45-30

// 45-31

// 45-32

// 45-33

// 45-34

// ____45.6.3 Promise.race
// 45-35

// 45-36

// ____45.6.4 Promise.allSettled
// 45-37

// 45-38

// 45.7 마이크로태스크 큐
// 45-39

// 45.8 fetch
// 45-40

// 45-41

// 45-42

// 45-43

// 45-44

// 45-45

// 45-46

// 45-47

// 45-48
