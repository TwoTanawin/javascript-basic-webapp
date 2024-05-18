
const prices = [5, 30, 10, 25, 15, 20];

const total = prices.reduce(sum); // array to sigle value

console.log(`${total.toFixed(2)}`)

function sum(accumulator, element){
    return accumulator + element;
}