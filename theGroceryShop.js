let apples = 5;
let oranges = 5;
let bananas = 5;
let watermelons = 5;

let coins = 0;
let gems = 0;

let exchangeMultiplier = 1;
let exchangeError = document.querySelector("#exchange-error-msg")

let firstNumber = Math.floor(Math.random() * 1000);
let secondNumber = Math.floor(Math.random() * 1000);
let sum = firstNumber + secondNumber;

let farmSpeed = 1;

let applesInFarm = 0;
let orangesInFarm = 0;
let bananasInFarm = 0;
let watermelonsInFarm = 0;

const iBtn = document.querySelector("#i-btn")

const applesTxtBox = document.querySelector("#apple li")
const orangesTxtBox = document.querySelector("#orange li")
const bananasTxtBox = document.querySelector("#banana li")
const watermelonsTxtBox = document.querySelector("#watermelon li")

const exchangeCoinsTextBox = document.querySelector("#exchange-coins")
const exchangeGemsTextBox = document.querySelector("#exchange-gems")

const questionTextBox = document.querySelector("#addition-prob");
const answerField = document.querySelector("#answer-field")
const result = document.querySelector("#result")

const li1 = document.querySelector("#li-1")
const li2 = document.querySelector("#li-2")
const li3 = document.querySelector("#li-3")
const li4 = document.querySelector("#li-4")

const farmError = document.querySelector("#farm-error")




questionTextBox.innerText = firstNumber + " + " + secondNumber

const mainLoop = setInterval(function () {

    applesTxtBox.innerText = "Apples(" + apples + ")"

    orangesTxtBox.innerText = "Oranges(" + oranges + ")"

    bananasTxtBox.innerText = "Bananas(" + bananas + ")"

    watermelonsTxtBox.innerText = "Watermelons(" + watermelons + ")"

    exchangeCoinsTextBox.innerText = exchangeMultiplier * 50 + "c";

    exchangeGemsTextBox.innerText = exchangeMultiplier + "g"

    li1.innerText = "Apples Grown(" + farmSpeed + " every 5 minutes): " + applesInFarm
    li2.innerText = "Oranges Grown(" + farmSpeed + " every 5 minutes): " + orangesInFarm
    li3.innerText = "Bananas Grown(" + farmSpeed + " every 5 minutes): " + bananasInFarm
    li4.innerText = "Watermelons Grown(" + farmSpeed + " every 5 minutes): " + watermelonsInFarm



}, 1)

const farmLoop = setInterval(function () {
    applesInFarm += farmSpeed
    orangesInFarm += farmSpeed
    bananasInFarm += farmSpeed
    watermelonsInFarm += farmSpeed
}, 3e+5)

iBtn.addEventListener("mouseover", function () {
    iBtn.innerText = "Coins: " + coins
        + "\nGems: " + gems
});

iBtn.addEventListener("mouseout", function () {
    iBtn.innerText = "i"
});

function sell(fruit) {
    switch (fruit) {

        case "apple":
            if (apples > 0) {
                apples -= 1;
                coins += 10;
                break;
            }
            else {
                break
            }

        case "orange":
            if (oranges > 0) {
                oranges -= 1;
                coins += 5;
                break;
            } else { break }

        case "banana":
            if (bananas > 0) {
                bananas -= 1;
                coins += 15;
                break;
            } else { break }

        case "watermelon":
            if (watermelons > 0) {
                watermelons -= 1;
                coins += 20;
                break;
            } else { break }

    }
}

function sellAll(fruit) {
    switch (fruit) {

        case "apple":
            if (apples > 0) {
                coins += apples * 10;
                apples = 0;
                break;
            }
            else {
                break
            }

        case "orange":
            if (oranges > 0) {
                coins += oranges * 5;
                oranges = 0;
                break;
            } else { break }

        case "banana":
            if (bananas > 0) {
                coins += bananas * 15;
                bananas = 0;
                break;
            } else { break }

        case "watermelon":
            if (watermelons > 0) {
                coins += watermelons * 20;
                watermelons = 0;
                break;
            } else { break }

    }
}

function sellAllFruits() {
    coins += apples * 10;
    coins += oranges * 5;
    coins += bananas * 15;
    coins += watermelons * 20;

    apples = 0;
    oranges = 0;
    bananas = 0;
    watermelons = 0;
}

function exchangeInc() {
    exchangeMultiplier += 1;
}

function exchangeDec() {
    if (exchangeMultiplier != 1) {
        exchangeMultiplier -= 1;
    }
    else { }
}

function exchange() {

    if (coins >= exchangeMultiplier * 50) {
        coins -= exchangeMultiplier * 50
        gems += exchangeMultiplier
        exchangeError.innerText = ""
    } else {
        exchangeError.innerText = "You don't have enough coins"
    }
}

function submitAnswer() {
    if (answerField.value == sum) {
        coins += 30;
        result.innerText = "+30c"
        result.style.color = "lime"


        firstNumber = Math.floor(Math.random() * 100)
        secondNumber = Math.floor(Math.random() * 100)
        sum = firstNumber + secondNumber

        questionTextBox.innerText = firstNumber + " + " + secondNumber
    } else {
        result.innerText = "Wrong Answer"
        result.style.color = "red"
    }



}


function harvest() {
    apples += applesInFarm;
    oranges += orangesInFarm;
    bananas += bananasInFarm;
    watermelons += watermelonsInFarm;

    applesInFarm = 0;
    orangesInFarm = 0;
    bananasInFarm = 0;
    watermelonsInFarm = 0;
}

function upgrade() {
    if (gems >= 3) {
        farmSpeed += 1;
        gems -= 3;
        farmError.innerText = "Farm Upgraded"
        farmError.style.color = "lime"
    } else {
        farmError.innerText = "Not Enough Gems"
        farmError.style.color = "red"
    }
}