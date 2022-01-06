;
let firstName = "Joana";

const age = 19;

isStudent = true;


const user = window.document.getElementById("user")
user.innerText = firstName;
const handleClick = ()=>user.innerText = "Joana Sulce";

const btn = window.document.querySelector("button")

btn.addEventListener("click", handleClick)


// console.log("name: ",name + age + isStudent);

isStudent ? console.log(`My name is ${firstName} and i am ${age} years old`) : console.log("She is not a student");