

function rollDice(){
    const numDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    const values = [];
    const images = [];

    for(let i=0; i < numDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        // console.log(value)
        values.push(value);
        images.push(`<img src="dice-images/${value}.png" alt="Dice ${value}">`)
    }

    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');

    // console.log(values)
}