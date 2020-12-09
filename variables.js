//VAR:
//accessable any where in the window object
var name  = 'shahroz';
console.log(name);

//LET:
//have block level scope
{
let name2 = 'shahroz';
console.log(name2);
}

//CONST:
//if declare then can not be change but can by modify, 
//like we can add or remove values in arrays or objects
const name3 = 'shahroz';
console.log(name3);

//const  array

const arr = ['apple','mango'];
console.log(arr); // ["apple", "mango"]
arr.push('banana');
console.log(arr); //["apple", "mango", "banana"]

