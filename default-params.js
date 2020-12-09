// normal function:

function cal(a, b) {
  return a + b;
}
console.log(cal(1, 2));

// with default params:

function cal2(a, b = 2) {
  console.log("a = " + a);
  console.log("b = " + b);

  return a + b;
}
console.log(cal2(1,3));

function cal2(a, b = 2, c = 3) {
  console.log("a = " + a);
  console.log("b = " + b);
  console.log("c = " + c);

  return a + b + c;
}
console.log(cal2(1));

// passing array

function withArr(a=[1,2,3],b){
   
    console.log(a);
    console.log(b);
}

withArr(2);
