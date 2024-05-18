

let number = [1, 2, 3, 4, 5];

number.forEach(sqaure)
number.forEach(display)


function double(element, index, array){
    array[index] = element * 2;
}

function tripple(element, index, array){
    array[index] = element * 3;
}

function sqaure(element, index, array){
    array[index] = Math.pow(element, index)
}

function display(element){
    console.log(element)
}