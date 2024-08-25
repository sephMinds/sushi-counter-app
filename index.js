let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el");
let totalCountEl = document.getElementById("total-count-el");
let count = 0;
let totalCount = 0;

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let countAsNumber = parseInt(count);
    let totalCountAsNumber = parseInt(totalCount);
    let totalEaten = countAsNumber + totalCountAsNumber;
    totalCount = totalEaten;
    totalCountEl.textContent = "Total Sushi Eaten: " + totalEaten;

    let countString = count + " - ";
    count = 0;
    countEl.innerText = 0;
    saveEl.textContent += countString;
}

function reset(){
    count = 0;
    totalCount = 0;
    countEl.innerText = 0;
    saveEl.textContent = "Sushi Eaten Log Count: ";
    totalCountEl.textContent = "Total Sushi Eaten: ";
}

