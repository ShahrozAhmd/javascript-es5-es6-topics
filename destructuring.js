// //🚀 provide us a way to extract data from an object or an array

// //ARRAY DESTRUCTURING:

// // let arr1 = [1,2,3,4,5];
// // let arr2 = ['a','b','c','d','e'];

// // let [a,,b,...rest] = arr1;
// // console.log(a);
// // console.log(b);
// // console.log(rest);

// // function cal(a,b){
// //     return [a+b,a-b,a*b,a/b];
// // }

// // let [add,sub,mul,div] = cal(1,2);
// // console.log(add);
// // console.log(sub);
// // console.log(mul);
// // console.log(div);

// // let newArr = [...arr1,...arr2];
// // console.log(newArr);

// //OBJECT DESTRUCTURING:

// let stdOne = {
//     name:'shahroz',
//     age:23,
//     id:'csc-17s-007',
//     courses:{
//         courseOne: 'OOP',
//         courseTwo: 'CCN',
//         courseThree: 'CA',
//     }
// };

// let stdTwo = {
//     name:'ahmed',
//     age:22,
//     address:{
//         streetNo: 21,
//         zipCode: 74600,
//         colonyName: 'PIB',
//     }
// };

// // let {name,age} = stdOne;
// // console.log(name);

// // let {name:firstName , age} = stdOne;
// // console.log(firstName);


// let {name,age, id = 'none'} = stdOne;
// console.log(id);


// let aNewObj = {...stdOne,...stdTwo};
// console.log(aNewObj);

// function demo({name,age, food = 'biryani'}){
//     console.log(`name is ${name} and age is ${age} and food is ${food}`);
// }
// console.log(demo(stdOne));

// const arrOfName = ['shahroz','remsha','hammad','ayesha'];
// const [name1,name2, ...rest] = arrOfName;
// console.log(name1);
// console.log(name2);
// console.log(...rest);

// const obj ={
//   name:'shahroz',
//   age: 23,
//   semester: 6,
//   semLeft: function(){
   
//     }
// };


//Array destructuring by course:

const firstName = ['shahroz','remsha','hammad','ayesha'];
const lastName = ' Ahmed';

function fullName(fname, lname){

  var arr = fname.map((item)=>{
    return item + lname 
  });

  return [n1,n2,n3,n4] = arr;
}
const [nameOne, , , nameFour] = fullName(firstName,lastName);
console.log(nameOne);
console.log(nameFour);














