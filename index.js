const div = document.querySelector("div");
const button = document.querySelector("button");
// console.log(button);
// console.log(div);


div.addEventListener("click",(e) => (
    console.log("div")
),true)


button.addEventListener("click",(e) => (
    console.log("button")
),true)

// This is bubbling


