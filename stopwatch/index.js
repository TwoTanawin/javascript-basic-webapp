
const display = document.getElementById("display");
let timmer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){
    if(!isRunning){
        startTime = Date.now() -elapsedTime;
        timmer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop(){
    if(isRunning){
        clearInterval(timmer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset(){
    clearInterval(timmer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}

function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minites = Math.floor(elapsedTime / (1000 * 60) % 60);
    let sec = Math.floor(elapsedTime / 1000 % 60);
    let millisec = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, 0);
    minites = String(minites).padStart(2, 0);
    sec = String(sec).padStart(2, 0);
    millisec = String(millisec).padStart(2, 0);

    display.textContent = `${hours}:${minites}:${sec}:${millisec}`
}