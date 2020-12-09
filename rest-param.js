//use in function declaration:

function foo(){
    console.log(typeof arguments);
    var args =  Array.from(arguments);
    
}
foo(1,2,3);


function foo2(){
    return [-0,-1, ...args];
}

const args = [1,2,3];

console.log(foo2(...args));


