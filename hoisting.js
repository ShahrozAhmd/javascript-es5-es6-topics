//HOISTING:

//initialize the function first, but declare later it can work

// foo2() //true

function foo2(){
    console.log('i am foo2');
}


//if we declare function expression then it can't
// work.

// foo1();//flase

let foo1 = function (){
    console.log('i am foo1');
}
// foo1(); //true

function demo(){
    //here for "a" execution context works the same.
    //this function has its own execution context object.
    console.log(a);
    var a = 'apple';
    console.log(a);
}
demo();


//for variable hosting worked like that if the variable is defined and initiaize later 
//but call first then it will show your undefined -> data type

console.log(a); //undefined
var a=12; 
console.log(a); //12