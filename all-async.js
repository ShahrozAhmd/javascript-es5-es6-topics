// //  CALL BACK:

function add (a,b,callback){
    var c = a+b;
    callback(c)

}
// passing callback function in function declaration
add(2,3, (result)=>{
    console.log(result);
});

//passing pre defined function in callback

function result(addResult){
    console.log(addResult);
}

add(1,2,result);

// =======================================================

//PROMISE:

function add(a, b) {
  return a + b;
}
function calculation(){
return new Promise((res, rej) => {
  var addResult = add(1, 2);
  setTimeout(() => {
    if (addResult) {
      res(addResult);
    } else {
      rej(err);
    }
  }, 5000);
})

  .then(resData => {
    console.log(resData);
  })
  .catch(err => {
    console.log(err);
  });
}
  console.log(myPromise);


  // ASYNC-AWAIT:

  async function asaw(){
    var insideAsync = await calculation();
    console.log(insideAsync);
  }
  asaw();