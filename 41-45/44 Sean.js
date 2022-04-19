// 44장 REST API
// 발표 당시 웹이 HTTP를 제대로 사용하지 못하고 있는 상황을 보고 HTTP의 장점을 최대한 활용할 수 있는 아키텍처로서 REST를 소개했고 이는 HTTP 프로토콜을 의도에 맞게 디자인하도록 유도하고 있다.
// REST의 기본 원칙을 성실히 지킨 서비스 디자인을 "RESTful"이라고 표현한다.

// 44.1 REST API의 구성
// 자원
// 행위
// 표현

// 44.2 REST API 설계 원칙
// URI는 리소스를 표현하는 데 집중하고 행위에 대한 정의는 HTTP 요청 메서드를 통해 하는것이 RESTful API를 설계하는 중심 규칙이다.

// 44.3 JSON Server를 이용한 REST API 실습
// ____44.3.1 JSON Server 설치
// ____44.3.2 db.json 파일 생성
// 44-01
{
  "todos": [
    {
      "id": 1,
      "content": "HTML",
      "completed": true
    },
    {
      "id": 2,
      "content": "CSS",
      "completed": true
    },
    {
      "id": 3,
      "content": "JavaScript",
      "completed": true
    }
  ]
}

// ____44.3.3 JSON Server 실행
// 44-02
{
  "name": "json-server-exam",
  "version": "1.0.0",
  "scripts": {
    "start": "json-server --watch db.json"
  },
  "devDependencies": {
    "json-server": "^0.16.1"
  }
}

// ____44.3.4 GET 요청
// 44-03
// 44-04

// ____44.3.5 POST 요청
// 44-05

// ____44.3.6 PUT 요청
// 44-06

// ____44.3.7 PATCH 요청
// 44-07

// ____44.3.8 DELETE 요청
// 44-08