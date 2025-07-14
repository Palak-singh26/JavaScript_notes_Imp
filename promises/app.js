// // 🌟 What is a Promise in JavaScript?

// // When we try to fetch data from an API, we request the data from our frontend.
// // The API "promises" to return some data — either successfully or with an error.
// // If the promise is fulfilled (resolved), we can use the data and show it to the user.
// // If the promise is rejected (something goes wrong), we handle the error and show an error message.

// // ⭐ Synchronous vs Asynchronous Code

// // Synchronous Code
// console.log("start");
// console.log("subscribe to Palak's channel");
// console.log("finish");

// // Output (executes line by line):
// // start
// // subscribe to Palak's channel
// // finish

// // Asynchronous Code
// console.log("subscribe to Palak's channel");

// setTimeout(() => {
//     console.log("hellooooooo"); // runs after the delay (placed in callback queue)
// }, 0);

// console.log("finish");

// // Even though setTimeout has 0ms delay, JavaScript still completes sync code first, then async.

// // 🔁 Callback Hell Example (Nested Callbacks)
// console.log("Namaste");

// // Simulate rishtedar (relative) visit flow using async calls
// function hallchall(rishtedar, cb) {
//     setTimeout(() => {
//         cb(`Pasand karo ${rishtedar}`); // Step 1
//     }, 1000);
// }

// function aaoristedar(video, cb) {
//     setTimeout(() => {
//         cb(`AAIYE ghar pr ${video}`); // Step 2
//     }, 1000);
// }

// function jaoristedar(image, cb) {
//     setTimeout(() => {
//         cb(`Bhej denge sare ${image}, okay!`); // Step 3
//     }, 1000);
// }

// // Nested callbacks lead to callback hell 👇
// hallchall("bua", function (message) {
//     console.log(message);

//     aaoristedar("Birthday party hai", function (action) {
//         console.log(action);

//         jaoristedar("birthday photo", function (sent) {
//             console.log(sent);
//         });
//     });
// });

// console.log("chalo chalte hain"); // Executes before async callbacks

// When working in a company or on production-level code, we often deal with a large number of nested callbacks — one inside another.
// This creates a situation known as "callback hell", which makes the code difficult to read, maintain, and debug.
// To overcome this problem, we use Promises, which provide a cleaner and more manageable way to handle asynchronous operations.





// Q2 Q3 Q4 promises , promise.reject, promise.resolve,promise chaining and combinator

// console.log("start");

// const sub = new Promise((resolve,reject) =>{
//       setTimeout(() => {
//         const result = true;
//         if(result) resolve("Hello");
//         else reject (new Error ("why aren't  you saying hello to me?"))
//       }, 2000);
// });
// // sub
// // .then((res)=>{
// //     console.log(res);
// // })
// // .catch((err)=>{
// //     console.log(err);
// // })
// // console.log(sub); so that why we use above example for execution of promise code

// console.log("Stop");     


// console.log("hello");
// console.log(Promise.resolve("helloworld"))
// console.log("byee");


// console.log("start");

// const sub = Promise.reject("helloworld");
// console.log(sub);
// sub.then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err);
// })
// console.log("Stop"); 







// console.log("Namaste");

// // Simulate a rishtedar (relative) visiting flow using Promises

// // Each function returns a Promise that resolves after 1 second
// function important(username) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(` Subscribe to ${username}`);
//         }, 1000);
//     });
// }

// function like(video) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(` Like the ${video}`);
//         }, 5000);
//     });
// }

// function share(image) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(` Share the ${image}`);
//         }, 1000);
//     });
// }

//  First way: Nested Promises — leads to callback pyramid (still better than callback hell, but not ideal)
/*
important("Palak's channel")
  .then((res) => {
    console.log(res);
    like("video").then((res) => {
      console.log(res);
      share("channel link").then((res) => {
        console.log(res);
      });
    });
  })
  .catch((err) => {
    console.log( err);
  });
*/


//  Better way: Chained `.then()` — cleaner, readable, and maintainable
/* important("Palak's channel")
   .then((res) => {
    console.log(res);
    return like("video");
  })
  .then((res) => {
    console.log(res);
    return share("channel link")
  })
  .then((res) => {
    console.log(res);
  })

*/



// one more better way is promise combinator
// promise combinator help us to execute more than one promise at one time and return result them accordingly
// there are four type of promisecombinator

// 1.promise.all   =>  it's going to run all of the promises in parallel and in the end it return the array with all fullfilled promises
// let say if one promise fail it gona fail all promise

// Promise.all([
//     important("Palak's channel"),
//     like("video"),
//     share("channel link"),
// ]).then((res)=>{
//     console.log(res);
// })

// Promise.all([
//     important("Palak's channel"),
//     like("video"),
//     share("channel link"),
// ])
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log("error : promises failed", err)
// });



// 2.  we get that promise what is reject or resolve first

// Promise.race([
//     important("Palak's channel"),
//     like("video"),
//     share("channel link"),
// ])
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log("error : promises failed", err)
// });



// 3. promise.allsettel => // Promise.allSettled works similarly to Promise.all,
// but with one big difference:

// 👉 Even if some promises are rejected,
// it will NOT stop or throw an error.
// Instead, it returns an array of result objects,
// where each object tells you whether that promise was
// 'fulfilled' or 'rejected', along with its value or reason.

//  Promise.allSettled([
//     important("Palak's channel"),
//     like("video"),
//     share("channel link"),
// ])
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log("error : promises failed", err)
// });



// 4.  // Promise.any() accepts an array of promises,
// but it only returns the first one that is **fulfilled** (resolved).
// It completely ignores all the rejected promises.
// 
// 👉 If all promises are rejected, then it throws an AggregateError.

//  Promise.any([
//     important("Palak's channel"),
//     like("video"),
//     share("channel link"),
// ])
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log("error : promises failed", err)
// });



// console.log("finish"); // This will run first, before async tasks finish




// asnyc and await

// console.log("Namaste");

// function important(username) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(` Subscribe to ${username}`);
//         }, 100);
//     });
// }

// function like(video) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(` Like the ${video}`);
//         }, 100);
//     });
// }

// function share(image) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(` Share the ${image}`);
//         }, 100);
//     });
// }

// const result =  async () => {
//     try{
//     const message = await important("Subscribe");
//     console.log(message);
//     const message1 = await like("channel");
//     console.log(message1);
//     const message2 = await share("link");
//     console.log(message2);
//     }
//    catch(error){
//     console.log("promises failed",error)
//    }
// };
// result();
//  console.log("done"); // this is one of the best way to solve promises




// Q1 output base Question

console.log("start");  //  Step 1

const promise2 = new Promise((resolve, reject) => {
  console.log(1);      //  Step 2
  resolve(2);          //  Resolves the promise immediately
});

promise2.then((res) => {
  console.log(res);    //  Step 5 (runs in microtask queue after call stack clears)
});

console.log("end");    //  Step 3



// Q2 


console.log("start");  //  Step 1: Logs "start"

const promise1 = new Promise((resolve, reject) => {
  console.log(1);       //  Step 2: Logs 1 (synchronous inside constructor)
  resolve(2);           //  Promise is resolved with value 2
  console.log(3);       //  Step 3: Logs 3 (still synchronous)
});

promise1.then((res) => {
  console.log(res);     //  Step 5: Logs 2 (after main stack completes)
});

console.log("end");     //  Step 4: Logs "end" (after synchronous parts)



// Q3

console.log("start"); //  Synchronous → printed immediately

const fn = () => new Promise((resolve, reject) => {
  console.log(1);     //  Synchronous → runs when fn() is called
  resolve("success"); //  Promise resolves immediately
});

console.log("middle"); //  Synchronous → printed before fn is called

fn().then((res) => {
  console.log(res);   //  Asynchronous → scheduled to run in microtask queue
});

console.log("end");    //  Synchronous → printed immediately after fn()




// // Q4   

function job() {
  return new Promise(function (resolve, reject) {
    reject(); //  Immediately rejects the promise
  });
}

let promisess = job(); //  Creates a rejected promise

promisess
  .then(function () {
    console.log("success 1"); //  Skipped because promise is rejected
  })
  .then(function () {
    console.log("success 2"); //  Skipped due to earlier rejection
  })
  .then(function () {
    console.log("success 3"); //  Skipped
  })
  .catch(function () {
    console.log("error 1");   //  Runs: catches the rejection above
  })
  .then(function () {
    console.log("success 4"); //  Runs: chain resumes as resolved
  });





// Q5 



function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}

let promise = job(true);

promise
  .then(function (data) {
    console.log(data); //  Output: success
    return job(false); // This will reject with "error"
  })
  .catch(function (error) {
    console.log(error); //  Output: error
    return "error caught"; // Returns a resolved value
  })
  .then(function (data) {
    console.log(data); // Output: error caught
    return job(true);  // Returns a promise that resolves with "success"
  })
  .catch(function (error) {
    console.log(error); //  Not triggered because no error occurs here
  });




// Q6


function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}

let promises = job(true); // ✅ Resolves with "success"

promises
  .then(function (data) {
    console.log(data); //  Prints: success
    return job(true);  //  Resolves again with "success"
  })
  .then(function (data) {
    if (data !== "victory") {
      throw "Defeat"; //  Throws "Defeat" (manual rejection)
    }
    return job(true);  // Not reached due to throw
  })
  .then(function (data) {
    console.log(data); //  Skipped due to rejection above
  })
  .catch(function (error) {
    console.log(error); //  Prints: Defeat
    return job(false);  //  Returns rejected promise with "error"
  })
  .then(function (data) {
    console.log(data); //  Skipped because job(false) rejects
    return true;
  })
  .catch(function (error) {
    console.log(error); //  Prints: error
    return "error caught"; //  Resolved value
  })
  .then(function (data) {
    console.log(data); // Prints: error caught
    return new Error("test"); //  Resolved with an Error object (not thrown)
  })
  .then(function (data) {
    console.log("success", data.message); //  Prints: success test
  })
  .catch(function (data) {
    console.log("error:", data.message); //  Not executed (no rejection happened)
  });




// Q7  promise chaining 


const firstpromise = new Promise((resolve, reject) => {
  resolve("first");
});
const secondpromise = new Promise((resolve, reject) => {
  resolve(firstpromise);
});

secondpromise
  .then((res) => {
    return res;
  }).then((res) => {
    console.log(res)
  });



// Q8 rewrite this example cose using Async/await  instead of .then.catch


function loadJson(url) {
  return fetch(url).then((response) => {
    if (response.status == 200) {
      return response.json;
    } else {
      throw new Error(response.status);
    }
  });
}

loadJson("http://fekeurl.com/no-such-user.json").catch((err) =>
  console.log(err)
);


async function loadJson(url) {
  let response = await fetch(url);

  if (response.status == 200) {
    let json = await response.json()
    return json;
  }
  throw new Error(response.status);
}

loadJson("http://fekeurl.com/no-such-user.json").catch((err) =>
  console.log(err)
);

// Both .then() and async/await versions fail at the fetch() step.
// The .catch() block is triggered, and you'll see a network error printed.

// Q9  solve promise recursively

function important(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(` Subscribe to ${username}`);
    }, 100);
  });
}

function like(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(` Like the ${video}`);
    }, 100);
  });
}

function share(image) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(` Share the ${image}`);
    }, 100);
  });
}

function promRescur(funcPromise) {
  if (funcPromise.length === 0) return;

  const currprom = funcPromise.shift();

  currprom
    .then((res) => console.log(res))
    .catch((err) => console.log(err))

  promRescur(funcPromise);

}

promRescur([
  important("Palak's channel"),
  like("video"),
  share("channel link"),
]);



// Q10 Promise polyfill 

function promisepolyfill(execute) {

  let onresolve, onrejecct, isfullfilled = false,
    iscalled = false, value, isRejected;

  function resolve(val) {
    isfullfilled = true;
    value = val;

    if (typeof onresolve === 'function') {
      onresolve(val);
      iscalled = true;
    }

  }


  function reject(val) {
    isRejected = true;
    value = val;
    if (typeof onrejecct === 'function') {
      onrejecct(val);
      iscalled = true;
    }
  }


  this.then = function (callback) {
    onresolve = callback;
    if (isfullfilled && !iscalled) {
      iscalled = true;
      onresolve(value)
    }

    return this;
  }
  this.catch = function (callback) {
    onrejecct = callback;

    if (isRejected && !iscalled) {
      iscalled = true;
      onrejecct(value)
    }
    return this;
  };
  try {
    execute(resolve, reject)

  } catch (error) {
    reject(error);
  }

}

const examplepromise = new promisepolyfill((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 1000);
});

examplepromise
  .then((res) => {
    console.log(res);
  }).catch((err) => {
    console.error(err);
  })



// Q10.1 promise.all() polyfill implementations


function important(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Subscribe to ${username}`);
    }, 100);
  });
}

function like(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Like the ${video}`);
    }, 100);
  });
}

function share(image) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Share the ${image}`);
    }, 100);
  });
}

// ✅ Polyfill for Promise.all()
Promise.allPolyfill = function (promises) {
  return new Promise((resolve, reject) => {
    const result = [];

    if (!promises.length) {
      resolve(result);
      return;
    }

    let pending = promises.length;

    promises.forEach((promise, index) => {
      Promise.resolve(promise).then((res) => {
        result[index] = res;
        pending--;

        if (pending === 0) {
          resolve(result);
        }
      }, reject); // If any promise rejects, reject the whole Promise.allPolyfill
    });
  });
};

// 'share' rejects → .catch() will run
Promise.allPolyfill([
  important("Palak's channel"),
  like("video"),
  share("channel link"),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("Error:", err);
  });


// 🧠 Explanation:
// It takes an array of promises.
// Resolves when all promises are fulfilled.
// Rejects immediately if any promise rejects.


// 🧠Here's what Promise.allPolyfill does:
// It returns a new promise.
// It first checks if the input array (promises) is empty.
// If yes, it immediately resolves with an empty array.
// If not, it:
// Creates a result array to store resolved values.
// Sets a pending counter to track how many promises are still unresolved.
// It loops through all the promises in the array:
// Each promise is passed through Promise.resolve() to make sure even non-promise values are handled.
// If a promise resolves:
// The result is stored at the correct index in the result array.
// pending count is decreased.
// If pending reaches 0, it means all promises succeeded, so the polyfill resolves with the result array.
// If any promise rejects, it immediately rejects the whole polyfill with that error.

