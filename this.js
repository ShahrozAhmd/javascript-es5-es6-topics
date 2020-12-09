// execute "this" variable in global scope -> refers window object
console.log(this);

// execute "this" variable in local scope -> refers window object
function whatsThis() {
    console.log(this);
}
whatsThis();


let std = {
    name: 'shahroz',
    dob: 1996,
    calAge: function (year) {
        console.log(year - this.dob); //refer the object where its call

        // function foo() {
        //     console.log(this); //refer window object
        // }
        // foo(); //becasue of rule that if this call in simple function it referto window object
    },
    uni: 'SMIU'
}

std.calAge(2020);

let std2 = {
    name: 'ali',
    dob: 1997
}

//how  the concept of  borrowing properties works:
//borrow the method of object std, name can be change for borrower.
std2.calAge = std.calAge; 
std2.uni = std.uni;
std2.calAge(2020);
console.log(std2.uni);




 