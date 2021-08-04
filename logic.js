// alert("CONNECT!");

// let colors = [
//     // "rgb(255, 0, 0)",
//     // "rgb(0, 255, 0)",
//     // "rgb(0, 0, 255)",
//     // "rgb(255, 255, 0)",
//     // "rgb(0, 255, 255)",
//     // "rgb(255, 0, 255)",
// ]

let colors = generateRandomColors(6);

let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");

let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
// let colorDisplay = document.querySelector("#colorDisp");
let colorDisplay = document.getElementById("colorDisp");

let messageDisplay = document.getElementById("message");

let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function () {
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
})

hardBtn.addEventListener("click", function () {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
})

resetButton.addEventListener("click", function () {
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    //generate new colors
    colors = generateRandomColors(6);
    //pick new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match new color
    colorDisplay.textContent = pickedColor;
    //change color of sqaures
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }

    h1.style.background = 0;


})

// let bodyBackground = document.getElementById("mainBody");
// let bodyBackgroundColor = bodyBackground.style.background;
// console.log("body background color: ",bodyBackgroundColor);

colorDisplay.textContent = pickedColor;


for (let i = 0; i < squares.length; i++) {
    //adding initial colors to squares
    squares[i].style.background = colors[i];

    //adding click listeners to squares
    squares[i].addEventListener("click", function () {
        let clickedColor = this.style.background;
        console.log(clickedColor, pickedColor);


        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColors(pickedColor);
            resetButton.textContent = "Play Again?";

        } else {
            messageDisplay.textContent = "Try Again!";
            this.style.background = "#2f4f4f";


            // this.style.background = bodyBackground.style.color;

        }
    })
}

function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.background = color;

    }
    h1.style.background = color;
}

function pickColor() {
    let randomNumber = Math.floor(Math.random() * colors.length);
    console.log(randomNumber);
    return colors[randomNumber];
}

function generateRandomColors(numberOfColors) {
    let arr = []

    // repeat number of color times
    for (let i = 0; i < numberOfColors; i++) {
        let r = randomColor();
        let g = randomColor();
        let b = randomColor();

        let generatedColor = "rgb(" + r + ", " + g + ", " + b + ")";

        arr.push(generatedColor);


    }

    console.log(arr);
    return arr;

}

function randomColor() {
    return Math.floor(Math.random() * 256);
}