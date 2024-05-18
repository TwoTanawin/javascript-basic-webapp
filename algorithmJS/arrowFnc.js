
// const hello = function(){
//     console.log("Hello");
// }

// function hello(){
//     console.log("Hello");
// }

const hello = (name, digit) => {console.log(`Hello ${name}!`)
                            console.log(`Hello ${digit}!`)
}

hello("Bro", 69);


// setTimeout( () => console.log("Hello 3000!"), 3000);

const numbers = [1, 2, 3, 4, 5, 6];

const square = numbers.map((element) => Math.pow(element, 2));

console.log(square)