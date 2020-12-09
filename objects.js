//simple object

// var std1 = {
//     name:'shahroz',
//     dob:1996,
//     semster:6
// };

// var std1 = {
//     name:'ali',
//     dob:1993,
//     semster:4
// };

//create a constructor function to make as much obj we want

function Student(name,dob,semester){
    this.name = name; //here this.name is can be anything than name.
    this.dob = dob;
    this.semester = semester;
};

//make a prototype property for constructor (it should declare before call):
Student.prototype.calDOB = function (){
    console.log(2020 - this.dob);
};

const std1 = new Student('shahroz',1996,5);
console.log(std1);

// std1.calDOB();

// console.log(std1.hasOwnProperty('name'));
 
//make object using object.create():

var manProto = {
    calAge: function(){
        console.log(23);
    }
};

let shahroz = Object.create(manProto,{
    name: {value:'shahroz'},
    age: {value: 23}
});

console.log(shahroz );

//another way of creation an empty object.
//how we implement inheritance in it ?
Object.prototype.year = 12;
//this object is itself constructor so we can creat a prototype for it.
let newObj = new Object();
console.log(newObj);
newObj.name  = 'ali';
console.log(newObj); 

//PREMITIVES vs OBJECT:

var a = 2;
var b = 3;
a=b;
console.log(a);
console.log(b);

var obj1 = {
    name: 'shahroz',
    age:12
}

var obj2 = {};

console.log(obj2);
console.log(obj1);
obj2 = obj1;

console.log(obj2);
console.log(obj1);

obj1.name = 'william';
console.log(obj2);












