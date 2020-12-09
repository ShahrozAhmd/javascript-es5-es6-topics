//WITH CONSTRUCTOR
class Demo1 {
  constructor(name){
  this.name = name
  }
  show(){
    return this.name;
  }

  //static function:

  static aStaticFunc(){
    console.log('i am static');
  }

}


const demo1 = new Demo1('shahroz');
// console.log(demo1.show());
// Demo1.aStaticFunc(); //only calls with Class name 




//WITHOUT CONSTRUCTOR
class Demo2 {

    name = "Good Name";
    show(){
      return this.name;
    }

}

let obj = new Demo2(); //can't set here any properties because of no constructor function
obj.name = 'bad name';
// console.log(obj.show());


//SUPER CLASS AND SUB CLASS:

class Person{
  constructor(name,dob){
    this.name = name;
    this.dob = dob;
  }
  calcAge(){
    console.log(2020 - this.dob);
  }

}

class Programmer extends Person{
  constructor(name,dob,degree,yearOfAdm){
    super(name,dob)
    this.degree = degree;
    this.yearOfAdm = yearOfAdm;
  }

  graduateYear(){
    console.log(this.yearOfAdm + 4);
  }

}

var shahrozProgrammer = new Programmer('shahroz',1996,'BSCS',2017);
shahrozProgrammer.calcAge();
shahrozProgrammer.graduateYear();




