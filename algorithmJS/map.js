
const number = [1, 2, 3, 4, 5];

const sqaures = number.map(square);

const cubes = number.map(cube);

console.log(cubes)

function square(element){
    return Math.pow(element, 2)
}

function cube(element){
    return Math.pow(element, 3)
}