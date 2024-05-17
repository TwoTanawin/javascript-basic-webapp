// console.log(`Hello`);
// console.log(`I like Pizza`);

// window.alert(`This is an alert!`);
// window.alert(`I like Pizza!`);

// document.getElementById("myH1").textContent = `Hello`;
// document.getElementById("myP1").textContent = `I like pizza`;

// let x;
// let x = 123;

// console.log(x);

// let age = 25;
// let price = 10.99;
// let gpa= 3.5;

// console.log(typeof age);
// console.log(`You are ${age} years old`);
// console.log(`This price is ${price}`);
// console.log(`Your GPA is ${gpa}`);

// let firstName = "Bro";
// console.log(typeof firstName);
// console.log(firstName);
// console.log(`Your name is ${firstName}`);

// let fullName = "Bro Code";
// let age = 24;
// let studet = true;

// document.getElementById("myP1").textContent = `Your name is ${fullName}`;
// document.getElementById("myP2").textContent = `Your are ${age} years old`;
// document.getElementById("myP3").textContent = `Enrolled : ${studet}`;

// let userName;

// userName = window.prompt(`What's your username`)

// console.log(userName)

// let username;

// document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("myText").value;
//     // console.log(username)
//     document.getElementById("myH1").textContent = `Hello ${username}`
// };

const PI = 3.1459;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value; 
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + "cm"
};