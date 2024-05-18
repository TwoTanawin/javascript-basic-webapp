
let numbers = [1, 2, 3, 4, 5];

let envenNums = numbers.filter(isEven)
let oddNums = numbers.filter(isOdd)

console.log(envenNums)
console.log(oddNums)


function isEven(element){
    return element % 2 === 0;
}

function isOdd(element){
    return element % 2 !== 0;
}