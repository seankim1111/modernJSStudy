//[예제풀이 //[예제풀이 29 -01]
Math.PI; //  3.141592653589793
//[예제풀이 29-02]

Math.abs(-1);        //1
Math.abs('-1');      //1
Math.abs('');        //0
Math.abs([]);        //0
Math.abs(null);      //0
Math.abs(undefined); //NaN
Math.abs({});        //NaN
Math.abs('string');  //NaN
Math.abs();          //NaN
//[예제풀이 29-03]

Math.round(1.4);  // 1
Math.round(1.6);  // 2
Math.round(-1.4); //-1
Math.round(-1.6); //-2
Math.round(1);    //1
Math.round();     //NaN
//[예제풀이 29-04]

Math.ceil(1.4);  //2
Math.ceil(1.6);  //2
Math.ceil(-1.4); //-1
Math.ceil(-1.6); //-1
Math.ceil(1);    //1
Math.ceil();     //NaN
//[예제풀이 29-05]

Math.floor(1.9);  //1
Math.floor(9.1);  //9
Math.floor(-1.9); //-2
Math.floor(-9.1); //-10
Math.floor(1);    //1
Math.floor();     //NaN
//[예제풀이 29-06]

Math.sqrt(9);  //3
Math.sqrt(-9); //NaN
Math.sqrt(2);  //1.414213562373095
Math.sqrt(1);  //1
Math.sqrt(0);  //0
Math.sqrt();   //NaN
//[예제풀이 29-07]

Math.random(); // 0에서 1 미만의 랜덤 실수(0.8208720231391746)


1에서 10 범위의 랜덤 정수 취득
1) Math.random으로 0에서 1 미만의 랜덤 실수를 구한 다음, 10을 곱해 0에서 10 미만의
랜덤 실수를 구한다.
2) 0에서 10 미만의 랜덤 실수에 1을 더해 1에서 10 범위의 랜덤 실수를 구한다.
3) Math.floor로 1에서 10 범위의 랜덤 실수의 소수점 이하를 떼어 버린 다음 정수를 반환한다.

const random = Math.floor((Math.random() * 10) + 1);
console.log(random); //1에서 10 범위의 정수
//[예제풀이 29-08]

Math.pow(2, 8);  //256
Math.pow(2, -1); //0.5
Math.pow(2);     //NaN
//[예제풀이 29-09]

// ES7 지수 연산자
2 ** 2 ** 2; //16
Math.pow(Math.pow(2, 2), 2); //16
//[예제풀이 29-10]

Math.max(1); //1
Math.max(1, 2); //2
Math.max(1, 2, 3); //3
Math.max(); //-Infinity
//[예제풀이 29-11]

//배열 요소 중에서 최대값 취득
Math.max.apply(null, [1, 2, 3]); //3

// ES6 스프레드 문법
Math.max(...[1, 2, 3]); //3
//[예제풀이 29-12]

Math.min(1); //1
Math.min(1, 2); //1
Math.min(1, 2, 3); //1
Math.min(); //  Infinity
//[예제풀이 29-13]

//배열 요소 중에서 최소값 취득
Math.min.apply(null, [1, 2, 3]); //1

//ES6 스프레드 문법
Math.min(...[1, 2, 3]); //1
