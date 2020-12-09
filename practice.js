//simple object:

var shahroz = {
    name: 'shahroz',
    dob: 1995
}



//object prototyping:

Person.prototype.calAge = function (day) {
    return `${day} ${2020 - this.dob}`
}

//object constructor:

function Person(name, dob) {
    this.name = name;
    this.dob = dob;
}


//create instances using constructor function:

var shahrozAhmed = new Person('shahroz ahmed', '1996');
console.log(shahrozAhmed.calAge('monday'));
console.log(shahrozAhmed.hasOwnProperty('calAge')); //false

/*
 shahroz.calAge = shahrozAhmed.calAge;//method borrowing
 console.log(shahroz.calAge('friday'));
 console.log(shahroz.hasOwnProperty('calAge'));//true
*/

// var value  = shahrozAhmed.calAge.call(shahroz,'tuesday');
// console.log(shahroz.hasOwnProperty('calAge')); //false 
// console.log(shahroz); //not showing that method just use it not store it.
// console.log(value);


// var value  = shahrozAhmed.calAge.apply(shahroz,['tuesday']);
// console.log(shahroz.hasOwnProperty('calAge')); //false 
// console.log(shahroz); //not showing that method just use it not store it.
// console.log(value);


//BIND METHOD:

// shahrozAhmed.calAge.bind(shahroz,'sunday');
// console.log(shahroz);


let obj = { 
    add: function(a,b,c) {
      return a + b + c;
    }
  }
  
  function sumItUp(numbers) {
    return this.add(...numbers);
  }
  
  let numbers = [1,2,3];
  let bound = sumItUp.bind(obj); // Returns a bound function
  console.log(bound(numbers)); // 6
  console.log(obj)

  let arr = [1,2,3,4,5];
  let myNew = Math.max.bind();


























