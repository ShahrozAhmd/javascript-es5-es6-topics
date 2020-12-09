//call: allow us to use the function from another object

var obj1 = {
    name: 'shahroz',
    class: 3,
    present: function () {
        console.log(`hello my name is ${this.name}
         and i read in class ${this.class}`);
    }
};

var obj2 = {
    name: 'ali',
    class: 4,
};

// obj1.present.call(obj2);

//apply: apply method is same a call but it takes the second argument an array,
//if your method's object dont accept argument in the form of array u dont
//need to use apply method

//bind: bind takes preset arguments and return a function
//if your methods dont have argument, bind is not beneficial.

//var get =  obj1.present.bind(obj2,universal argument here);
//get(//variable argunment here);