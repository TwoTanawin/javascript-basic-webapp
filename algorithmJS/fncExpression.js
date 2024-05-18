
// const hello = function(){
//     console.log("Hello");
// }

// hello();

// setTimeout(hello, 3000);

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(function(element){
    return Math.pow(element, 2);
});

console.log(squares)

const cubes = numbers.map(function(element){
    return Math.pow(element, 3);
});

console.log(cubes)

const evenNum = numbers.filter(function(element){
    return element % 2 === 0;
});

console.log(evenNum)
