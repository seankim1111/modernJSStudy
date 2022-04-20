// 40장: 이벤트
// 40.1 이벤트 드리븐 프로그래밍
// 브라우저는 처리해야 할 특정 사건이 발생하면 이를 감지하여 이벤트를 발생 시킨다.
// 이때 이벤트가 발생했을 때 호출될 함수를 이벤트 핸들러라 하고, 이벤트 발생했을 때 브라우저에게 이벤트 핸들러의 호출을 위임하는 것을 이벤트 핸들러 등록이라 한다.
// 40-01

// 40.2 이벤트 타입
// ____40.2.1 마우스 이벤트
// ____40.2.2 키보드 이벤트
// ____40.2.3 포커스 이벤트
// ____40.2.4 폼 이벤트
// ____40.2.5 값 변경 이벤트
// ____40.2.6 DOM 뮤테이션 이벤트
// ____40.2.7 뷰 이벤트
// ____40.2.8 리소스 이벤트
// 40.3 이벤트 핸들러 등록
// ____40.3.1 이벤트 핸들러 어트리뷰트 방식
// 40-02

// 40-03
function onclick(event) {
  sayHi("Lee");
}

// 40-04

// 40-05
<button onclick="console.log('Hi!'); console.log('Lee');">Click me!</button>;

// 40-06
// Angular
{
  /* <button (click)="handleClick($event)">Save</button> */
}

// React
{
  /* <button onclick={handleClick}>save</button> */
}

// Svelte
{
  /* <button on:click={handleClick}>save</button> */
}

// Vue.js
{
  /* <button v-on:click="handleClick($event)">save</button> */
}

// ____40.3.2 이벤트 핸들러 프로퍼티 방식
// 40-07
// 40-08

// ____40.3.3 addEventListener 메서드 방식
// 40-09
// 40-10
// 40-11
// 40-12

// 40.4 이벤트 핸들러 제거
// 40-13
// 40-14
// 이벤트 핸들러 등록
$button.addEventListener("click", () => console.log("button click"));
// 등록한 이벤트 핸들러를 참조할 수 없으므로 제거할 수 없다.

// 40-15
// 기명 함수를 이벤트 핸들러로 등록
$button.addEventListener("click", function foo() {
  console.log("button click");
  // 이벤트 핸들러를 제거한다. 따라서 이벤트 핸들러는 단 한 번만 호출된다.
  $button.removeEventListener("click", foo);
});

// 40-16
// 무명 함수를 이벤트 핸들러로 등록
$button.addEventListener("click", function () {
  console.log("button click");
  // 이벤트 핸들러를 제거한다. 따라서 이벤트 핸들러는 단 한 번만 호출된다.
  // arguments.callee는 호출된 함수, 즉 함수 자신을 가리킨다.
  $button.removeEventListener("click", arguments.callee);
});

// 40-17

// 40.5 이벤트 객체
// 생성된 이벤트 객체는 이벤트 핸들러의 첫 번째 인수로 전달된다.
// 40-18
// 40-19
// 40-20
function onclick(event) {
  showCoords(event);
}

// ____40.5.1 이벤트 객체의 상속 구조
// 40-21
// 40-22

// ____40.5.2 이벤트 객체의 공통 프로퍼티
// 40-23
// 40-24
$checkbox.onchange = (e) => {
  // e.target은 change 이벤트를 발생시킨 DOM 요소 $checkbox를 가리키고
  // e.currentTarget은 이벤트 핸들러가 바인딩된 DOM 요소 $checkbox를 가리킨다.
  console.log(e.target === e.currentTarget); // true

  $msg.textContent = e.target.checked ? "on" : "off";
};

// ____40.5.3 마우스 정보 취득
// 40-25

// ____40.5.4 키보드 정보 취득
// 40-26

// 40.6 이벤트 전파
// 40-27
// 40-28
// 40-29
// 40-30

// 40.7 이벤트 위임
// 40-31
// 40-32
// 40-33
// 40-34

// 40.8 DOM 요소의 기본 동작의 조작
// ____40.8.1 DOM 요소의 기본 동작 중단
// 40-35

// ____40.8.2 이벤트 전파 방지
// 40-36

// 40.9 이벤트 핸들러 내부의 this
// ____40.9.1 이벤트 핸들러 어트리뷰트 방식
// 40-37
// 40-38

// ____40.9.2 이벤트 핸들러 프로퍼티 방식과 addEventListener 메서드 방식
// 40-39
// 40-40
// 40-41
// 40-42
// 40-43

// 40.10 이벤트 핸들러에 인수 전달
// 40-44
// 40-45

// 40.11 커스텀 이벤트
// ____40.11.1 커스텀 이벤트 생성
// 40-46
// 40-47
// 40-48
// 40-49
// 40-50

// ____40.11.2 커스텀 이벤트 디스패치
// 40-51
// 40-52
// 40-53
