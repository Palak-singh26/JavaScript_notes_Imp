//❓ Q1  What is event propagation ?
// Event propagation is the process that defines how events travel through the 
// DOM (Document Object Model) tree. It determines the order in which event handlers are
//  executed when an event occurs on an element nested inside other elements.



// ❓ Q2 what is Event Bubbling?
// Event bubbling is a type of event propagation in which an event starts
//  from the target element (the one actually interacted with) and bubbles
//  up through its ancestors in the DOM tree (like parent, grandparent, etc.).
// Example 

    const div = document.getElementById("Div");
    const form = document.getElementById("Form");
    const button = document.getElementById("Button");

    div.addEventListener("click", ()=>{
          alert("DIV BLOCK");
    });
    form.addEventListener("click", ()=>{
          alert("FORM BLOCK");
    });
    button.addEventListener("click", ()=>{
          alert("BUTTON BLOCK");
    });

// **There are a few events that do not bubble, such as focus, blur, etc.**
 //  In capturing, event goes from DIV → FORM → BUTTON.
 // In bubbling, it bubbles back from BUTTON → FORM → DIV.
 //  // So all listeners run twice: once during capture, once during bubble.



// ❓ Q3 Event.target vs this.target vs event.currenttarget ?
// 🔹 1. event.target
// Refers to the element that actually triggered the event.
// It can be a child element inside the element that has the event listener.
// Used when you want to know where the event originated.
// 👉 Example: If you click a <button> inside a <div>, event.target will be the <button>.

    const mydiv = document.getElementById("Div");
    const myform = document.getElementById("Form");
    const mybutton = document.getElementById("Button");
    
    mydiv.addEventListener("click",func);
    myform.addEventListener("click",func);
    mybutton.addEventListener("click" ,func);

    function func(event){
        alert("CurrentTarget = " + event.currentTarget.tagName +
            ", target = " + event.target.tagName + 
            ",this =" + this.tagName);
    }

//  🔹 2. event.currentTarget
// Refers to the element on which the event listener is attached.
// It always points to the element handling the event, not necessarily the one that triggered it.
// Useful when you want to refer to the listener's owner element.
// 👉 Example: If a listener is on a <div> and you click a <button> inside it, event.currentTarget will still be the <div>.

// 🔹 3. this
// Inside a regular function, this refers to the element where the event listener is attached (same as event.currentTarget).
// Inside an arrow function, this is lexically bound (doesn’t refer to the element — usually points to window or outer scope).
// Not recommended in arrow functions for event handlers if you need element context.




// ❓Q4  what is event capturing /Tricking ?
// Event capturing (also called trickling) 
// is the first phase of event propagation in the DOM.
// By default, events are handled in the bubbling phase.
// To handle events in the capturing phase, pass true as the third argument in addEventListener.

  const Blockdiv = document.getElementById("Div");
    const Blockform = document.getElementById("Form");
    const Blockbutton = document.getElementById("Button");

    Blockdiv.addEventListener("click", function(){
          alert("DIV BLOCK CAPTURE");
    },{
        capture:true
    });
    Blockform.addEventListener("click", function(){
          alert("FORM BLOCK CAPTURE");
    },{
        capture:true,
    });
    Blockbutton.addEventListener("click", function(){
          alert("BUTTON BLOCK CAPTURE");
    },{
        capture:true,
    });




// ❓ Q5 How to stop bubbling or capturing  ?

  const stopdiv = document.getElementById("Div");
    const stopform = document.getElementById("Form");
    const stopbutton = document.getElementById("Button");

    stopdiv.addEventListener("click", function(e){
        e.stopPropagation();
          alert("DIV");
    });
    stopform.addEventListener("click", function(e){
         e.stopPropagation();
          alert("FORM");
    });
    stopbutton.addEventListener("click", function(e){
         e.stopPropagation();
          alert("BUTTON");
    });   
// When you click the button:
// alert("BUTTON") is shown.
// Bubbling stops, so neither the form nor the div will receive the event.
// If you remove e.stopPropagation(),it will alert "BUTTON", then "FORM", 
// and finally "DIV" because the event bubbles up.



// ❓Q6 what is Event Delegation? ====> Most imp Question
// Event Delegation is a technique in JavaScript where a single event listener
//  is added to a parent element to handle events from its child elements.

  document.querySelector(".products").addEventListener("click",(event)=>{
         
          console.log(event.target.closest("SPAN"));

          if(event.target.tagName === "SPAN"){
                  window.location.href += "/" + event.target.className;
          }
  });


// Q7  what the output

    const divs = document.getElementById("Div");
    const forms = document.getElementById("Form");
    const buttons = document.getElementById("Button");

    divs.addEventListener("click", ()=>{
          alert("DIV BLOCK");
    });
    forms.addEventListener("click", ()=>{
          alert("FORM BLOCK");
    },{
        capture:true,
    });
    buttons.addEventListener("click", ()=>{
          alert("BUTTON BLOCK");
    });


// ❓Q8 create a modal which closes by clicking on negative space?

 const Btn = document.querySelector('.modalbutton');
const modal = document.querySelector('.modelcontainer');

Btn.addEventListener("click", () => {
  toggleModal(true);
});

function toggleModal(toggle) {
  modal.style.display = toggle ? "flex" : "none";
}

modal.addEventListener("click",(e)=>{
    if(e.target.className === "modelcontainer")
    toggleModal(false);
})

