




//STRUMENTI
const container = document.querySelector(".container")

//Chiedere all'utente un livello di difficolta
const userDifficulty = prompt("Scegli un numero tra: [1] [2] o [3]")

//collegare il prompt con il loop utilizzando il condizionale
let maxValue = 0
if (userDifficulty == 1) {
    maxValue = 100;

} else if (userDifficulty == 2) {
    maxValue = 81;

} else if (userDifficulty == 3) {
    maxValue = 49;

} else {
    alert("Devi inserire: 1 o 2 o 3")

}

//generare una griglia a seconda del livello 
//difficoltà 1 => tra 1 e 100
//difficoltà 2 => tra 1 e 81
// difficoltà 3 => tra 1 e 49

for (let i = 1; i <= maxValue; i++) {
    const divEl = document.createElement('div')
    divEl.className = "cell"
    divEl.className += ` cell_${maxValue}`
    divEl.append(i)
    container.append(divEl)

    //Assegnare un event listener a una cella
    divEl.addEventListener("click", function () {
        //Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
        divEl.classList.add("blue")


    })

}


//Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//I numeri nella lista delle bombe non possono essere duplicati.
let bombs = []
while (bombs.length < 16) {
    let bomb = getRandomNumber(1, maxValue)
    if (!bombs.includes(bomb)) {
        bombs.push(bomb)
    }
}
console.log(bombs);