const div = document.querySelector("div");
const button = document.querySelector("button");
// console.log(button);
// console.log(div);


// div.addEventListener("click",(e) => (
//     console.log("div")
// ))


// button.addEventListener("click",(e) => (
//     console.log("button")
// ))

// This is bubbling
// OUTPUT :
// button
// div


/*  Event CAPTURING  */


// div.addEventListener("click",(e) => (
//     console.log("div")
// ),true)


// button.addEventListener("click",(e) => (
//     console.log("button")
// ),true)

// This is bubbling
// OUTPUT :
//div
// button


// Event PROPOGATION



// div.addEventListener("click",() => (
//     console.log("div")
// ))


// button.addEventListener("click",(event) => {  

//     event.stopPropagation()
//     console.log("button")
   
    
// })

// This is bubbling
// OUTPUT :
// button
// Here it is not going to its parent 



// IMMMEDIATE STOP PROPOGATION

// CASE 1:

// button.addEventListener("click",(event) => {  
//     console.log("button")
// })


// button.addEventListener("click",(event) => {  
//     console.log("button1")
// })

// This is bubbling
// OUTPUT :
// button
// button1


// CASE 2:

// button.addEventListener("click",(event) => {  

//     event.stopImmediatePropagation()
//     console.log("button")
// })


// button.addEventListener("click",(event) => {  

//     console.log("button1")
// })

// This is bubbling
// OUTPUT :
// button


// PREVENT DEFAULt

const anchor = document.querySelector("a")

console.log(anchor);

anchor.addEventListener("click", function(event){
    event.preventDefault()
})


