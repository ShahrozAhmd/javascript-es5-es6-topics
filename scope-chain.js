//Example of scope chain and execution stack:
//Execution stack is order in which function are written.
//Scope Chain is order in which function can execute.

var a = 'i am a';
first();

function first(){
    var b = 'i am b';
    second();

    function second(){
        var c = 'i am c';
        third(); //third function can be execute bcz of scope chain.
    }
}

function third(){
    var d = 'i m d';
    console.log(d); //"c"can not be accessable because of execution stack.
}






/*
function foo() {
    //this is an execution stack and an execution context object is attach
    //with it.
    //'variable object' -> scaned for function arguments and declaration
    //and create a property in VO to point that function.
    //-> scaned for variable declarations and create a property in VO
    //and assigned it to undefined 
    //'scope chain' -> 
    //'this variable'
    var a = 'apple';
    console.log(a);
}
*/



