//debouncing limit the execution of function call an wait for certain amount of time before running it again 
// let counter = 0;
// function getData()  {
//   // calls an API and gets Data
//   console.log("Fetching Data .."+counter++);
// }

// function debounce (call, d) {
//   let timer;
//   return function (...args) {

//     if(timer) clearTimeout(timer)
//    timer=setTimeout(() => {
//        call();
//     }, d);
//   }
// }

// const betterFunction = debounce(getData, 6000);



let counter=0;
function getData(){
    console.log("fetching Data"+counter++)
}

function myDebounce(call,d){
    let timer;
    return function(...args){
        if(timer) clearTimeout(timer);
        timer=setTimeout(() => {
            call();
        }, d);
    }
}


const BetterFunction=myDebounce(getData,3000);