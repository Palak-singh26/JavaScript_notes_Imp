// Debouncing and throttling

// Debounce ensures a function runs only 
// after a certain period of time has passed since the last event.
// It's Limit the executions of a function call ansd wait for a certian amount of time before running it again 


// Throttling 

// Throttling is a technique used to limit how often a function can be 
// executed over time — even if it's triggered many times.




// Q1 create a button Ui and add debounce as follow =>
//       ------>  show button pressed<x> times" eevery rime button id pressed
// -----> increase "triggrtered <y> times" count after 800ms of debounce


const button = document.querySelector(".btn");
  const incpress = document.querySelector(".inc-press");
  const inccount = document.querySelector(".inc-count");

  var presscount = 0;
  var triigcount = 0;

  // Debounced function: only runs after 800ms of inactivity
  const debouncedCounts = _.debounce(() => {
      inccount.innerHTML = ++triigcount;
  }, 800);

  button.addEventListener('click', () => {
      incpress.innerHTML = ++presscount; 
      debouncedCounts(); // Triggers only once after delay
  });




// Q2 create a button Ui and add debounce as follow =>
//   ------>  show button pressed<x> times" eevery rime button id pressed
// -----> increase "triggrtered <y> times" count after 800ms of throttle

const btnss = document.querySelector(".btn");
const pre = document.querySelector(".inc-press");
const counted = document.querySelector(".inc-count");

var presscount = 0  ;
var triigcount = 0;

const throttlecountss = _.throttle(() => {
   counted.innerHTML = ++triigcount;  // Only update this once every 800ms
}, 800);


btnss.addEventListener('click', () => {
    pre.innerHTML = ++presscount;  // Update press counter immediately
    throttlecountss();               // Call throttled function
});




const butt = document.querySelector(".btn");
const pres = document.querySelector(".inc-press");
const count = document.querySelector(".inc-count");


var presscount = 0;
var triigcount = 0;

// Capture initial time to calculate delay between clicks
const start = new Date().getTime();


const throttlecount = _.throttle(() => {
    const now = new Date().getTime();
    console.log(now - start + "ms since start");
    count.innerHTML = ++triigcount; // Update throttled trigger count
}, 800); 

butt.addEventListener('click', () => {
    pres.innerHTML = ++presscount;
    throttlecount();
});





// Q3 - create debounce() - polyfill Implementation

const btns = document.querySelector(".btn");
const pressed = document.querySelector(".inc-press");
const counts = document.querySelector(".inc-count");


var presscount = 0;
var triigcount = 0;


const mydebounced = (cb, d) => {
    let timer;

    return function (...args) {
        if (timer) clearTimeout(timer);  // Clear the previous timer if still running
        timer = setTimeout(() => {
            cb(...args);                   // Call the actual callback after delay
        }, d);
    };
};

const debouncdcount = mydebounced(() => {
    triigcount += 1;
    counts.innerHTML = triigcount;
}, 800);

btns.addEventListener('click', () => {
    pressed.innerHTML = ++presscount;  // Update how many times user has clicked
    debouncdcount();                 // Call debounced function (updates count only after user stops clicking)
});





// Q4  Throttle code — same as above



const btn = document.querySelector(".btn");          // Button to click
const press = document.querySelector(".inc-press");  // Displays total button presses
const incrcount = document.querySelector(".inc-count");  // Displays throttled function calls


var presscount = 0 ;   // Tracks how many times user clicks the button
var triigcount = 0;    // Tracks how many times the throttled function runs

const starts = new Date().getTime(); // Used to measure time since script started

const mythrottle = (cb , d) => {
  let last = 0;
  return (...args) => {
    let now = new Date().getTime();
    if (now - last < d) return; // Ignore calls within 'd' ms
    last = now;
    return cb(...args); // Execute callback if delay passed
  };
};


var throttlecounts = mythrottle(()=>{
    triigcount += 1;
    incrcount.innerHTML = triigcount;  //Every 1 second at most, the triigcount will increase by 1.
},1000)

btn.addEventListener('click', () => {
    press.innerHTML = presscount++;     // Increments every click
    const now = new Date().getTime();
    const second = (now - start) / 1000;
    console.log(second.toFixed());      // Logs elapsed seconds
    throttlecounts();                    // Calls the throttled function
});






