// 30장 Date
// 30.1 Date 생성자 함수
// ____30.1.1 new Date()
// 30-01
new Date(); // 2022-04-06T12:54:17.465Z

// 30-02
date(); // 2022-04-06T12:55:23.645Z

// ____30.1.2 new Date(milliseconds)
// 30-03
// 한국 표준시 KST 협정 세계시 UTC에 9시간을 더한 시간이다.
new Date(0); // 1970-01-01T00:00:00.000Z (대한민국 표준시)

// 86400000는 1day를 의미한다.
// 1s = 1,000ms
// 1m = 60s * 1,000ms = 60,000ms
// 1h = 60m * 60,000ms = 3,600,000ms
// 1d = 24h * 3,600,000ms = 86,400,000ms

new Date(86400000); // 1970-01-02T00:00:00.000Z (대한민국 표준시)

// ____30.1.3 new Date(dateString)
// 30-04
new Date("May 26, 2020 10:00:00"); // 2020-05-26T01:00:00.000Z

new Date("2020/03/26/10:00:00"); // 2020-03-26T01:00:00.000Z

// ____30.1.4 new Date(year, month, day, hour, minute, second, millisecond])
// 30-05
// 월을 나타내는 2는 3월을 의미한다. 2020/3/1/00:00:00:00
new Date(2020, 2); // 2020-02-29T15:00:00.000Z

// 월을 나타내는 2는 3월을 의미한다. 2020/3/26/10:00:00:00
new Date(2020, 2, 26, 10, 00, 00, 0); // 2020-03-26T01:00:00.000Z

// 다음처럼 표현하면 가독성이 훨씬 좋다.
new Date("2020/3/26/10:00:00:00"); // 2020-03-26T01:00:00.000Z

// 30.2 Date 메서드
// ____30.2.1 Date.now
// 1970년 1월 1일 00:00:00(UTC)을 기점으로 현재 시간까지 경과한 밀리초를 숫자로 바환한다.
// 30-06
const now = Date.now(); // 1649250283747

new Date(now); // 2022-04-06T13:05:09.898Z

// ____30.2.2 Date.parse
// 1970년 1월 1일 00:00:00(UTC)을 기점으로 인수로 전달된 지정 시간까지의 밀리초를 숫자로 반환한다.
// 30-07
// UTC
Date.parse("Jan 2, 1970 00:00:00 UTC"); // 86400000

// KST
Date.parse("Jan 2, 1970 09:00:00"); // 86400000

// KST
Date.parse("1970/01/02/09:00:00"); // 86400000

// ____30.2.3 Date.UTC
// 30-08
Date.UTC(1970, 0, 2); // 86400000
Date.UTC("1970/1/2"); // NaN

// ____30.2.4 Date.prototype.getFullYear
// Date 객체의 연도를 나타내는 정수를 반환한다.
// 30-09
new Date("2020/07/24").getFullYear(); // 2020

// ____30.2.5 Date.prototype.setFullYear
// Date 객체에 연도를 나타내는 정수를 설정한다. 연도 이외에 옵션으로 월, 일도 설정할 수 있다.
// 30-10
const today = new Date();

// 년도 지정
today.setFullYear(2000);
today.getFullYear(); // 2000

// 년도/월/일 지정
today.setFullYear(1900, 0, 1);
today.getFullYear(); // 1900

// ____30.2.6 Date.prototype.getMonth
// Date 객체의 월을 나타내는 0 - 11 의 정수를 반환한다. 1월은 0, 12월은 11이다.
// 30-11
new Date("2020/07/24").getMonth(); // 6

// ____30.2.7 Date.prototype.setMonth
// Date 객체에 월을 나타내는 0 - 11 의 정수를 설정한다. 월 이외에 옵션으로 일도 설정할 수 있다.
// 30-12
const today = new Date();

// 월 지정
today.setMonth(0); // 1월
today.getMonth(); // 0

// 월/일 지정
today.setMonth(11, 1); // 12월 1일
today.getMonth(); // 11

// ____30.2.8 Date.prototype.getDate
// Date 객체의 날짜(1-31)를 나타내는 정수를 반환한다.
// 30-13
new Date("2020/07/24").getDate(); // 24

// ____30.2.9 Date.prototype.setDate
// Date 객체의 날짜(1-31)를 나타내는 정수를 설정한다.
// 30-14
const today = new Date();

// 날짜 지정
today.setDate(1);
today.getDate(); // 1

// ____30.2.10 Date.prototype.getDay
// Date 객체의 요일을 나타내는 정수를 반환한다.
// 30-15
new Date("2020/07/24").getDay(); // 5

// ____30.2.11 Date.prototype.getHours
// Date 객체의 시간(0 - 23)을 나타내는 정수를 반환한다.
// 30-16
new Date("2020/07/24/12:00").getHours(); // 12

// ____30.2.12 Date.prototype.setHours
// Date 객체에 시간을 나타내는 정수를 설정한다.
// 30-17
const today = new Date();

// 시간 지정
today.setHours(7);
today.getHours(); // 7

// 시간/분/초/밀리초 지정
today.setHours(0, 0, 0, 0); // 00:00:00:00
today.getHours(); // 0

// ____30.2.13 Date.prototype.getMinutes
// Date 객체의 분(0 - 59)을 나타내는 정수를 반환한다.
// 30-18
new Date("2020/07/24/12:30").getMinutes(); // 30

// ____30.2.14 Date.prototype.setMinutes
// Date 객체에 분을 나타내는 정수를 설정한다.
// 30-19
const today = new Date();

// 분 지정
today.setMinutes(50);
today.getMinutes(); // 50

// 분/초/밀리초 지정
today.setMinutes(5, 10, 999); // HH: 05:10:999
today.getMinutes(); // 5

// ____30.2.15 Date.prototype.getSeconds
// Date 객체의 초를 나타내는 정수를 반환한다.
// 30-20
new Date("2020/07/24/12:30:10").getSeconds(); // 10

// ____30.2.16 Date.prototype.setSeconds
// Date 객체에 초를 나타내는 정수를 설정한다.
// 30-21
const today = new Date();

// 초 지정
today.setSeconds(30);
today.getSeconds(); // 30

// 초/밀리초 지정
today.setSeconds(10, 0); // HH:MM: 10:000
today.getSeconds(); // 10

// ____30.2.17 Date.prototype.getMilliseconds
// Date 객체의 밀리초(0 - 999)를 나타내는 정수를 반환한다.
// 30-22
new Date("2020/07/24/12:30:10:150").getMilliseconds(); // 150

// ____30.2.18 Date.prototype.setMilliseconds
// Date 객체에 밀리초를 나타내는 정수를 설정한다.
// 30-23
const today = new Date();

//
today.setMilliseconds(123);
today.getMilliseconds(); // 123

// ____30.2.19 Date.prototype.getTime
// 1970년 1월 1일 00:00:00(UTC)를 기점으로 Date 객체의 시간까지 경과된 밀리초를 반환한다.
// 30-24
new Date("20202/07/24/12:30").getTime(); // 575363964600000

// ____30.2.20 Date.prototype.setTime
// Date 객체에 1970년 1월 1일 00:00:00(UTC)를 기점으로 경과된 밀리초를 설정한다.
// 30-25
const today = new Date();

today.setTime(86400000); // 86400000은 1day를 나타낸다.
console.log(today); // 1970-01-02T00:00:00.000Z

// ____30.2.21 Date.prototype.getTimezoneOffset
// UTC와 Date 객체에 지정된 로캘 시간과의 차이를 분 단위로 반환한다. UTC = KST - 9h다.
// 30-26
const today = new Date();

today.getTimezoneOffset() / 60; // -9

// ____30.2.22 Date.prototype.toDateString
// 사람이 읽을 수 있는 형식의 문자열로 Date객체의 날짜를 반환한다.
// 30-27
const today = new Date("2020/7/24/12:30");

today.toString(); // 'Fri Jul 24 2020 12:30:00 GMT+0900 (한국 표준시)'
today.toDateString(); // 'Fri Jul 24 2020'

// ____30.2.23 Date.prototype.toTimeString
// 사람이 읽을 수 있는 형식으로 Date 객체의 시간을 표현한 문자열을 반환한다.
// 30-28
const today = new Date("2020/7/24/12:30");

today.toString(); // 'Fri Jul 24 2020 12:30:00 GMT+0900 (한국 표준시)'
today.toTimeString(); // '12:30:00 GMT+0900 (한국 표준시)'

// ____30.2.24 Date.prototype.toISOString
// ISO 8601 형식으로 Date 객체의 날짜와 시간을 표현한 문자열을 반환한다.
// 30-29
const today = new Date("2020/7/24/12:30");

today.toString(); // 'Fri Jul 24 2020 12:30:00 GMT+0900 (한국 표준시)'
today.toISOString(); // '2020-07-24T03:30:00.000Z'

today.toISOString().slice(0, 10); // 2020-07-24
today.toISOString().slice(0, 10).replace(/-/g, ""); // '20200724'

// ____30.2.25 Date.prototype.toLocaleString
// 인수로 전달한 로캘을 기준으로 Date 객체의 날짜와 시간을 표현한 문자열을 반환한다.
// 30-30
const today = new Date("2020/7/24/12:30");

today.toString(); // 'Fri Jul 24 2020 12:30:00 GMT+0900 (한국 표준시)'
today.toLocaleString(); // '2020. 7. 24. 오후 12:30:00'
today.toLocaleString("ko-KR"); // '2020. 7. 24. 오후 12:30:00'
today.toLocaleString("en-US"); // '7/24/2020, 12:30:00 PM'
today.toLocaleString("ja-JP"); // '2020/7/24 12:30:00'

// ____30.2.26 Date.prototype.toLocaleTimeString
// 인수로 전달한 로캘을 기준으로 Date 객체의 시간을 표현한 문자열을 반환한다.
// 30-31
const today = new Date("2020/7/24/12:30");

today.toString(); // 'Fri Jul 24 2020 12:30:00 GMT+0900 (한국 표준시)'
today.toLocaleTimeString(); // '오후 12:30:00'
today.toLocaleTimeString("ko-KR"); // '오후 12:30:00'
today.toLocaleTimeString("en-US"); // '12:30:00 PM'
today.toLocaleTimeString("ja-JP"); // '12:30:00'

// 30.3 Date를 활용한 시계 예제
// 현재 날짜와 시간을 초 단위로 반복 출력한다.
// 30-32
(function printNow() {
  const today = new Date();

  const dayNames = [
    "(일요일)",
    "(월요일)",
    "(화요일)",
    "(수요일)",
    "(목요일)",
    "(금요일)",
    "(토요일)",
  ];

  // getDay 메서드는 해당 요일(0 - 6)을 나타내는 정수를 반환한다.
  const day = dayNames[today.getDay()];

  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  const ampm = hour >= 12 ? "PM" : "AM";

  // 12시간제로 변경
  hour %= 12;
  hour = hour || 12; // hour가 0이면 12를 재할당

  // 10 미만인 분과 초를 2자리로 변경
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  const now = `${year}년 ${month}월 ${date}일 ${day} ${hour}:${minute}:${second}${ampm}`;

  console.log(now);

  // 1초마다 printNow 함수를 재귀 호출한다.
  setTimeout(printNow, 1000);
})();

// '2022년 4월 6일 (수요일) 11:11:40PM'
// '2022년 4월 6일 (수요일) 11:11:41PM'
// '2022년 4월 6일 (수요일) 11:11:42PM'
// '2022년 4월 6일 (수요일) 11:11:43PM'
// '2022년 4월 6일 (수요일) 11:11:44PM'
// '2022년 4월 6일 (수요일) 11:11:45PM'
// '2022년 4월 6일 (수요일) 11:11:46PM'
// '2022년 4월 6일 (수요일) 11:11:47PM'
// '2022년 4월 6일 (수요일) 11:11:48PM'
// '2022년 4월 6일 (수요일) 11:11:49PM'
// '2022년 4월 6일 (수요일) 11:11:50PM'
// '2022년 4월 6일 (수요일) 11:11:51PM' ...
