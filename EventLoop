//1.)The Event Loop
//This section will explain how JavaScript handles asynchronous code with the event loop.

// Define three example functions, but one of them contains asynchronous code
function first() {
  console.log(1)
}

function second() {
  setTimeout(() => {
    console.log(2)
  }, 0)
}

function third() {
  console.log(3)
}

//setTimeout takes two arguments: the function it will run asynchronously, and the amount of time it will wait before calling that function.
first()
second()
third()


//2.)Callback
 The task is to get the third function to always delay execution until after the asynchronous action in the second function has completed.
// Define three functions
function first() {
  console.log(1)
}

function second(callback) {
  setTimeout(() => {
    console.log(2)

    // Execute the callback function
    callback()
  }, 0)
}

function third() {
  console.log(3)
}


first()
second(third)


/*Promises*/
Summary
A promise is an object that encapsulates the result of an asynchronous operation.
A promise starts in the pending state and ends in either fulfilled state or rejected state.
Use then() method to schedule a callback to be executed when the promise is fulfilled, and catch() method to schedule a callback to be invoked when the promise is rejected.
Place the code that you want to execute in the finally() method whether the promise is fulfilled or rejected.

var userDate = 1
function getUserDate() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(userDate);
    }, 1000);
    
  });
}
const promise = getUserDate();
promise.then((date) => {
  console.log(date);
});

userDate++

=> screen shows 2

/**/
A promise represents the completion of an asynchronous function. It is an object that might return a value in the future
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Resolving an asynchronous request!'), 2000)
})

// Log the result
promise.then((response) => {
  console.log(response)
})

Using the then syntax ensures that the response will be logged only when the setTimeout operation is completed after 2000 milliseconds. All this is done without nesting callbacks.
Promises have a method called then that will run after a promise reaches resolve in the code. then will return the promise’s value as a parameter.
