
//SPREAD OPERATOR:
// function cal(a,b,c,d){
//     console.log("a= "+ a);
//     console.log("b= "+ b);
//     console.log("c= "+ c);
//     console.log("d= "+ d);

//     return a + b + c + d;
// }

// let arr = [1,2,3,4];

// console.log(cal(...arr));


//spread operator with objects

// let obj1 = {
//     name:"shahroz",
//     age: 23
// };

// let obj2 = {
//     ...obj1, //take all properties of object one.
//     class: 12
// };
// console.log(obj2);



//SPREAD OPERATOR FROM COURSE:

//Ex1

function add (a,b,c){
    return a + b + c ;
}

const numbers = [1,2,3,4];
console.log(add(...numbers));

// we can also use it on nodelists