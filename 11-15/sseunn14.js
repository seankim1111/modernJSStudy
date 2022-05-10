//[예제풀이 14 -01]
function foo(){
    var x = 'local';
    console.log(x); //local
    return x; 
}
foo();
console.log(x); //ReferenceError: x is not defined 
//[예제풀이 14 -02]
var x = 'global'; 
function foo(){
  console.log(x); 
  var x = 'local';
}

foo();
console.log(x); // global
//[예제풀이 14 -03]
var x =1 ;

//...
//변수의 중복선언, 기존변수에 값을 재할당한다.
var x = 100 ;
console.log(x); //100
//[예제풀이 14 -04]
(function (){
    var foo = 10; //즉시 실행 함수의 지역 변수 
    //...
}());
console.log(foo);//ReferenceError: foo is not defined 
//[예제풀이 14 -05]
var MYAPP = {}; // 전역 네임스페이스 객체
MYAPP.name ='Lee';
console.log(MYAPP.name); // Lee 
//[예제풀이 14 -06]
var MYAPP = {}; // 전역 네임스페이스 객체
MYAPP.person ={
    name : 'Lee',
    address : 'Seoul'
} ; 
console.log(MYAPP.person.name); // Lee
console.log(MYAPP.name); // Lee 
//[예제풀이 14 -07]
var Counter = ( function (){
    //private 변수
    var num= 0;

    //외부로 공개할 데이터나 메서드를 프로퍼ㅣ로 추가한 객체를 반환한다. 
    return {
        increase (){
            return ++num;
        },
        decrease () {
            return --num;
        }
    };
}());
private 변수는 외부로 노출되지 않는다. 
console.log(Counter.num); //undefined

console.log(Counter.increase()); //1
console.log(Counter.increase()); //2
console.log(Counter.decrease()); //1
console.log(Counter.decrease()); //0
//[예제풀이 14 -08]

<script type = "module" src="lib.mjs"></script>
<script type = "module" src="app.mjs"></script>