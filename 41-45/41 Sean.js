// 41장: 타이머
// 41.1 호출 스케줄링
// 41.2 타이머 함수
// ____41.2.1 setTimeout / clearTimeout
// setTimeout 함수는 두 번째 인수로 전달받은 시간(ms, 1/1000초)으로 단 한 번 동작하는 타이머를 생성한다. 이후 타이머가 만료되면 첫 번째 인수로 전달받은 콜백 함수가 호출된다. 즉 setTimeout 함수의 콜백 함수는 두 번째 인수로 전달받은 시간 이후 단 한 번 실행되도록 호출 스케줄링 된다.
// 41-01
// 1초(1000ms) 후 타이머가 만료되면 콜백 함수가 호출된다.
setTimeout(() => console.log("Hi!"), 1000);

// 1초(1000ms) 후 타이머가 만료되면 콜백 함수가 호출된다.
// 이때 콜백 함수에 "Lee"가 인수로 전달된다.
setTimeout((name) => console.log(`Hi! ${name}.`), 1000, "Lee");

// 두 번째 인수(delay)를 생략하면 기본값 0이 지정된다.
setTimeout(() => console.log("Hello!"));

// 41-02
// 1초(1000ms) 후 타이머가 만료되면 콜백 함수가 호출된다.
// setTimeout 함수는 생성된 타이머를 식별할 수 있는 고유한 타이머 id를 반환한다.
const timerId = setTimeout(() => console.log("Hi!"), 1000);

// setTimeout 함수가 반환한 타이머 id를 clearTimeout 함수의 인수로 전달하여 타이머를 취소한다.
// 타이머가 취소되면 setTimeout 함수의 콜백 함수가 실행되지 않는다.
clearTimeout(timerId);

// ____41.2.2 setInterval / clearInterval
// 41-03
let count = 1;

// 1초(1000ms) 후 타이머가 만료되면 콜백 함수가 호출된다.
// setInterval 함수는 생성된 타이머를 식별할 수 있는 고유한 타이머 id를 반환한다.
const timeoutId = setInterval(() => {
  console.log(count); // 1 2 3 4 5
  // count가 5이면 setInterval 함수가 반환한 타이머 id를 clearInterval 함수의 인수로 전달하여 타이머를 취소한다. 타이머가 취소되면 setInterval 함수의 콜백 함수가 실행되지 않는다.
  if (count++ === 5) clearInterval(timeoutId);
}, 1000);

// 41.3 디바운스와 스로틀
// 41-04

// ____41.3.1 디바운스
// 41-05

// ____41.3.2 스로틀
// 41-06
