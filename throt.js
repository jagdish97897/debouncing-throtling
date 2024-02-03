//Throttling is a technique used to limit the frequency of function calls. It is often used to improve the performance of web applications by limiting the number of times a function is called in response to a series of events, such as mouse clicks or scroll events.

// let counter=0;
// function getData(){
//     document.getElementById("myid").disabled=false;
//     console.log("fetching Data"+counter++)
// }

// function myThrot(call,d){
  
//     return function(...args){
//         document.getElementById("myid").disabled=true;
//         setTimeout(() => {
//             call();
//         }, d);
//     }
// }


// const newFun=myThrot(getData,2000);




let counter = 0;

function getData() {

    console.log("fetching Data " + counter++);
}

function myThrottler(call, delay) {
    let timer = true;

    return function (...args) {
        if (timer) {
            timer = false;

            setTimeout(() => {
                timer = true;
                call(...args); // Call the function after the delay
            }, delay);
        }
    }
}

const newFun = myThrottler(getData, 2000);

