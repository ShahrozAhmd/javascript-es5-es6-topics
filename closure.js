//CLOSURE:
//it is a concept in which we say that the inner function
//has access to the the variables, arguments of its
//parent function even the parent function has done execution
//the execution context object does it work and save the variables.



function outer(a){
    var b = 3;
    return function inner(){
        console.log(a+b);
    }
}

var cal = outer(2);
cal(3);

 




