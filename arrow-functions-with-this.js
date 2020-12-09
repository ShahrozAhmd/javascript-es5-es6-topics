//ways of writing the arrow functions:

//when you have a single line inside function body 
//and single arg.
const birthYear = [1992, 1993, 1994, 1995];

// const ages = birthYear.map(item => 2020 - item);
// console.log(ages);

ages = birthYear.map(item => {
    var date = new Date();
    return date.getFullYear() - item;
});
// console.log(ages);

//this keyword using ES5

var obj = {
    name: 'shahroz',
    dob: 1996,
    calcAge: function () {
        var self = this;

        function cal() {
            console.log(2020 - self.dob);
        }
        cal();
    }
}

// obj.calcAge();

//above example with arrow function:


const container = {
    color:'yellow',
    getColor: function(){
        document.querySelector('.container')
        .addEventListener('click',()=>{
            console.log(this.color);
        }
        );
    }
}

container.getColor();

//lexical this using object constructor:



const childs = ['sharoz','remsha','hammad','ayesha'];

function Father(name){
    this.name = name;
}

Father.prototype.childrens = function(childs){
    var arr   = childs.map((item) => {
        return `${item + this.name}`
    });
    console.log(arr);
}




var newFather  = new Father('Abrar Ahmed');
console.log(newFather);
newFather.childrens(childs);


