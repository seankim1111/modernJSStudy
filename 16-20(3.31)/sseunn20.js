//[예제풀이 20 -01]
function foo(){
    x= 10;
}
foo();
console.log(x); //?
//[예제풀이 20 -02]
'use strict';

function foo(){
    x = 10; //ReferenceError: x is not defined 
}
foo();

//[예제풀이 20 -03]
function foo(){
    'use strict'
    x = 10; //ReferenceError: x is not defined 
}
foo();

//[예제풀이 20 -04]
function foo(){
    
    x = 10; //에러를 발생시키지 않는다.
    'use strict'
}
foo();

//[예제풀이 20 -05]
<!DOCTYPE html>
<html>
    <body>
        <script>
            'use strict'; 
        </script>
        <script>
        x = 1; //에러가 발생하지 않는다. 
        console.log(x); //1
        </script>
        <script>
            'use strict'; 

            y= 1 //ReferenceError: y is not defined
            console.log(y)
        </script>
    </body>
</html>
//[예제풀이 20 -06]
//즉시 실행 함수의 선두에 strict mode 
(function ( ){
  'use strict'; 
  
  //Do something...
}());
//[예제풀이 20 -07]
(function ( ){
    //non strict mode
    var let = 10;//에러가 발생하지 않는다. 
    
    function foo(){
        'use strict'; 
        let = 20; //SyntaxError: Unexpected strict mode reserved word
    }
    foo();
  }());
//[예제풀이 20 -08]
(function foo(){
    'use strict'; 
     x =1;
    console.log //ReferenceError: x is not defined 
}());
//[예제풀이 20 -09]
(function (){
    'use strict'; 
     
    var x =1;
     delete x; //SyntaxError: Delete of an unqualified identifier in strict mode

     function foo(a) {
        delete a; //SyntaxError: Delete of an unqualified identifier in strict mode
     }
     delete foo; 
    console.log //SyntaxError: Delete of an unqualified identifier in strict mode
}());
//[예제풀이 20 -10]
(function (){
    'use strict'; 
     
    //SyntaxError: Duplicate parameter name not allowed  in this context
     function foo(x,x) {
       return x + x;
    console.log(foo(1,2));
     }()); 
//[예제풀이 20 -11]\
(function (){
    'use strict'; 
     
    //SyntaxError: Strict mode code may not include a with statement 
     with({ x: 1 }){
         console.log(x);
     }
     }()); 
//[예제풀이 20 -12]
(function (){
    'use strict'; 
     
    function foo(){
        console.log(this); //undefined 
    } 
    foo();

    function Foo () {
        console.log(this); //Foo
    }
    new Foo ();
}()); 
//[예제풀이 20 -13]
(function (a){
    'use strict';
    //매개변수에 전달된 인수를 재할당하여 변경 
    a = 2; 
    //변경된 인수가 arguments 객체에 반영되지 않는다. 
    console.log(arguments); //{0: 1, length:1 } 
} (1));
