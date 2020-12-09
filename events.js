//javascript 100 of events to listen, we can view them
//e is use as a parameter which capture the even and provide us all details about the events

document.getElementById('h1').addEventListener('click',function(e){
    console.log('you have clicked me!!!');
    console.log(e);
}); 

