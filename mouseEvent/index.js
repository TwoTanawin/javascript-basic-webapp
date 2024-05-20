
const myBox = document.getElementById("myBox");
const myBtn = document.getElementById("myBtn");


// function changeColor(event){
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "OUCH!"
// }

myBox.addEventListener("click", event => {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH!"
});

myBox.addEventListener("mouseover", event =>{
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Doon't do it!"
});

myBox.addEventListener("mouseout", event =>{
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click Me"
})

myBtn.addEventListener("click", event => {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH!"
});

myBtn.addEventListener("mouseover", event =>{
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Doon't do it!"
});

myBtn.addEventListener("mouseout", event =>{
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click Me"
})