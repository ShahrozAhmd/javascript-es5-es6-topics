// var myfunc = (a, b) => {
//     return a + b
// };
// console.log(myfunc(2, 3));


// var func2 = () => {
//     return Math.random();
// };

// console.log(func2());

 //IIFE:
//parenthesis cna be use here to feel parser that is not a function expression

// (function (name) {
//     var name = name;
//     console.log(`Hello ${name}`);

// })('shahroz');
// console.log(name);

//FIRST CLASS FUNCTION:

//pass function as an argument:const fullName = [];


//complete the name function 

const firstName = ['Shahroz', 'Ahmed', 'Dawood'];
const lastName = [' Ahmed', ' Ali', ' Shahid'];

function processor(fname, lname, combine) {

    var ret = [];

    for (var i = 0; i < fname.length; i++) {

        ret.push(combine(fname[i], lname[i]));
    }
    return ret;
}

function fullName(a, b) {
    var finalName;
    finalName = a + b;
    return finalName;
}

// console.log(processor(firstName, lastName, fullName));

//FUNCTION RETURN A FUNCTION:

function idValidation(age){
if(age >= 18){
    return function (name,fname){
        console.log(`name: ${name}\n Father Name: ${fname}
        \n CNIC No: ${Math.random()*6}`);

    }
}else if(age<18){
    console.log('Your are not eligable');
}
 };

//  idValidation(22)('shahroz','abrar ahmed');
