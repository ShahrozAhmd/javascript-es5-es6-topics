//FOROF LOOP:
//for-of loop iterate through the array or object
//we dont need to specify the limit or number of iterations.

//pure and simple for-of loop:
let fruitArr = ['apple','mango','banana'];
for (const item of fruitArr) {
    console.log(item);
}


//set the no of iteration explicitly:
var count = 0;
for (const item of fruitArr) {
    if(count == 1 ){
       break;
    }else{
        console.log(item);
    }
    count ++;
}

