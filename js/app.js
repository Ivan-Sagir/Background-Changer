const button = document.getElementById("btn");
const color = document.querySelector(".color");


const hex =["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

button.addEventListener("click", () => {
    let hexColor = generateHex();
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
})

function generateHex() {
    let hexColor = "#";
    //for(let i = 0; i < 6; i++) {
    for(let i = 5; i >= 0; i--) {
        hexColor += hex[getRandomNumber()]
    }


    
    return hexColor;
}

// let j = 1;
// console.log(j++);
// const k = j;
// console.log(k);

function getRandomNumber() { 
   return Math.floor(Math.random() * hex.length);
}

