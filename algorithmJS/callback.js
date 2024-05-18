// console.log("Hello")

// Method I

// hello(wait);
// goodBye();

function hello(callback){
    console.log("Hello!");
    callback() // execute function in args
}

function wait(){
    console.log("Wait!")
}

function leave(){
    console.log("Leave!")
}

function goodBye(){
    console.log("Goodbye!");
}

// Method II

sum(displayConsole, 1, 2);

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result)
}