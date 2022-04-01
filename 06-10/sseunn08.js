//[예제 08-01]
//블록문 
{
    var foo = 10; 
}

//제어문 
var x = 1; 
if (x<10){
    x++; 
}
//함수 선언문
function sum (a,b){
    return a + b; 
}

//[예제 08-02]
var num = 2; 
var kind; 
//if문
if( num> 0) {
    kind = '양수'; //음수를 구별할 수 없다.
} 
console.log(kind); //양수

//if...else 문 
if (num > 0){
    kind = '양수';
} else {
    kind = '음수'; //0은 음수가 아니다. 
}
console.log(kind); //양수

//if...else if문 
if (num > 0 ){
    kind = '양수';
} else if (num<0){
    kind = '음수'; 
} else {
    kind = '영'; 
}
console.log(kind); //양수

//[예제 08-03]
var num = 2;
var kind; 

if (num>0) kind='양수';
else if(num <0) kind ='음수';
else kind='영';
console.log(kind); //양수

//[예제 08-04]
//x가 짝수이면 result 변수에 문자열 '짝수'를 할당하고, 홀수이면 문자열 '홀수'를 할당한다.
var x = 2; 
var result; 

if(x%2) { // 2%2는 0이다. 이때 0은 false로 암묵적 강제 변환된다. 
    result = '홀수';
} else{
    result = '짝수';
}
console.log(result); //짝수
    
//[예제 08-05]
var x = 2;
//0은 false로 취급된다. 
var result = x % 2? '홀수':'짝수';
console.log(result); //짝수

//[예제 08-06]
var num = 2;
//0은 false로 취급된다. 
var kind = num? (num > 0 ? '양수': '음수') : '영';

console.log(kind); //양수

//[예제 08-07]
//월을 영어로 변환한다. 
var month = 11; 
var monthName;

switch (month){
    case 1: monthName = 'January'
    case 2: monthName = 'Febrary'
    case 3: monthName = 'March'
    case 4: monthName = 'April'
    case 5: monthName = 'May'
    case 6: monthName = 'June'
    case 7: monthName = 'July'
    case 8: monthName = 'August'
    case 9: monthName = 'September'
    case 10: monthName = 'October'
    case 11: monthName = 'November'
    case 12: monthName = 'December'
    default: monthName = 'Invalid month'
}
console.log(monthName); //Invalid month (November가 할당된 뒤 switch문을 탈출하지 않고 연이어 december가 재할당되고 마지막으로 invalid month가 재할당된것.)

//[예제 08-08]
//월을 영어로 변환한다. 
var month = 11; 
var monthName;

switch (month){
    case 1: monthName = 'January'
    break;
    case 2: monthName = 'Febrary'
    break;
    case 3: monthName = 'March'
    break;
    case 4: monthName = 'April'
    break;
    case 5: monthName = 'May'
    break;
    case 6: monthName = 'June'
    break;
    case 7: monthName = 'July'
    break;
    case 8: monthName = 'August'
    break;
    case 9: monthName = 'September'
    break;
    case 10: monthName = 'October'
    break;
    case 11: monthName = 'November'
    break;
    case 12: monthName = 'December'
    break;
    default: monthName = 'Invalid month'
}
console.log(monthName); //November

//[예제 08-09]
var year= 2000; //2000년은 윤년으로 2월이 29일이다. 
var month = 2;
var days = 0; 

switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        days = 31; 
        break;
    case 4: case 6: case 9: case 11: 
        days = 30;
        break;
    case 2: 
    //윤년계산 알고리즘 
    //1. 연도가 4로 나눠떨어지는 해 (2000,2004,2008,2012,2016,2020... )는 윤년이다.
    //2. 연도가 4로 나눠떨어지더라도 연도가 100으로 나눠떨어지는 해 (2000,2100, 2200... )는 평년이다. 
    //3. 연도가 400으로 나눠떨어지는 해(2000,2400, 2800...)은 윤년이다.
    days = ((year % 4 === 0 && year % 100 !==0 ) || (year % 400 === 0 ) ? 29 : 28;
    break;
    default:
        console.log('Invalid month');      
}
console.log(days); //29 

//[예제 08-10]
for (var i = 0; i <2 ; i++ ){
    console.log(i);
}

//[예제 08-11]
for (var i = 1; i>= 0; i--){
    console.log(i);
}

//[예제 08-12]
//무한루프 (for문의 선언문은 모두 옵션이라 반드시 사용안해도 되지만 어떤식도 선언하지 않으면 무한루프가 된다.)
for(;;) { ... }

//[예제 08-13]
for (var i =1; i<=6; i++ ){
 for (var j = 1; j<=6; j++ ){
     if (i+j ===6 )console.log (`[${i}, ${j}]`);
 }
} 
[1,5]
[2,4]
[3,3]
[4,2]
[5,1]

//[예제 08-14]
var count = 0;
//count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다. 
while (count<3){ 
    console.log(count); // 0 1 2
    count++; 
}

//[예제 08-15,16]
//무한루프 
while (true){...} 
//조건식의 평가 결과가 언제나 참이면 무한 루프가 된다. 
var count = 0;
//무한루프 
while (true){
    console.log(count);
    count ++;
    //count가 3이면 코드블록을 탈출한다 .
    if(count === 3 ) break; 
} //0 1 2 

//[예제 08-17]
var count = 0;
//count가 3보다 작을 때까지 코드 블록을 계속 반복실행한다. 
do {
    console.log(count); // 0 1 2
    count++;
} while (count<3);

//[예제 08-18]
if (true) {
    break; //Uncaught SyntaxError: Illegal break statement 
} 

//[예제 08-19]
foo: console.log('foo');
//foo라는 레이블 식별자가 붙은 레이블 문

//[예제 08-20]
//foo 라는 식별자가 붙은 레이블 블록문
foo: {
    console.log(1);
    break foo; //foo레이블 블록문을 탈출한다. 
    console.log(2);
}
console.log('Done!');

//[예제 08-21]
//outer라는 식별자가 붙은 레이블 for 문 
outer : for (var i=0; i <3; i++) {
    for (var j=0; j<3; j++ ){
        // i+j === 3이면 outer라면 식별자가 붙은 레이블 for 문을 탈출한다. 
        if(i +j === 3) break outer;
        console.log(`inner [${i}, ${j}]`);
    }
}

console.log('Done!');

//[예제 08-22] 문자열에서 특정 문자의 인덱스 (위치) 검색하는 예
var string = 'Hello World.';
var search = 'l';
var index; 
//문자열은 유사 배열이므로 for 문으로 순회할 수 있다. 
for (var i=0; i<string.lengthl i++){
    //문자열의 개별 문자가 'l'이면
    if(string[i] === search){
        index = i ;
        break; //반복문을 탈출한다.
    }
} 
console.log(index); //2
//참고로 String.prototype.indexOf 메서드를 사용해도 같은 동작을 한다.
console.log(string.indexOf(search)); //2 

//[예제 08-23]
var string ='Hello World.';
var search ='l';
var count= 0;
//문자열은 유사배열이므로 for문으로 순회할수있다. 
for(var i =0; i< string.length; i++) {
    //'l'이 아니면 현 지점에서 실행을 중단하고 반복문의 증감식으로 이동한다.
    if (string[i] !== search ) continue;
    count++; //countinue문이 실행되면 이 문은 실행되지 않느다.  
}
console.log(count); //3

//참고로 String.prototype.match 메서드를 사용해도 같은 동작을 한다. 
const refexp = new RegExp(search, 'g');
console.log(string.match(RegExp).length); //3

//[예제 08-24]
for (var i=0; i<string.length; i++){
    //'l'이면 카운트를 증가시킨다. 
    if( string[i] === search )count++ ;
}

//[예제 08-25]
//countinue문을 사용하지 않으면 if문 내에 코드를 작성해야한다. 
for (var i=0; i <string.length; i++){
    //'l'이면 카운트를 증가시킨다. 
    if(string[i]===search) {
        count++;
        //code
        //code
        //code
    }
}
//continue문을 사용하면 if문 밖에 코드를 작성할수있다. 
for(var i=0; i<string.lengthl i++){
    //'l'이 아니면 카운트를 증가시키지 않는다. 
    if(string[i] !== search )continue;

    count++;
}