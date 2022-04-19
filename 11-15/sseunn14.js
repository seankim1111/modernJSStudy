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
//[예제풀이 14 -04]
//[예제풀이 14 -05]
//[예제풀이 14 -06]
//[예제풀이 14 -07]
//[예제풀이 14 -08]