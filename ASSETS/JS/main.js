




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

//Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let bombs = []
let safe = []
let bombEl = document.getElementsByClassName("bomb")
for (let i = 1; i <= maxValue; i++) {
    const divEl = document.createElement('div')
    divEl.className = "cell"
    divEl.className += ` cell_${maxValue}`
    divEl.append(i)
    container.append(divEl)

    if (bombs.includes(parseInt(divEl.innerHTML))) {
        divEl.classList.add("bomb")
    }

    //I numeri nella lista delle bombe non possono essere duplicati.
    while (bombs.length < 16) {
        let bomb = getRandomNumber(1, maxValue)
        if (!bombs.includes(bomb)) {
            bombs.push(bomb)

        }
    }
    divEl.removeEventListener('click', addClassClick)
    divEl.addEventListener('click', addClassClick)

    /* se il numero è presente nella lista dei numeri generati
    la cella si colora di rosso e la partita termina*/

}
function addClassClick() {
    if (bombs.includes(parseInt(this.innerHTML))) {
        for (let i = 0; i < bombEl.length; i++) {
            bombEl[i].classList.add("red")
        }
        let point = safe.length
        document.querySelector('h1').innerHTML = `GAME OVER hai fatto ${point} punti`


        /* altrimenti la cella cliccata si colora di azzurro e 
        l'utente può continuare a cliccare sulle altre celle */
    } else {
        safe.push(this.innerHTML)
        this.classList.add("blue")
        if (safe.length == (maxValue - 16)) {
            document.querySelector('h1').innerHTML = `CONGRATULAZIONI HAI VINTO`
        }
    }


}




