let numberOfSquares = 6;
let colors = [];
let pickedColor;
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let squares = document.querySelectorAll(".square");
// let colorDisplay = document.querySelector("#colorDisp");
let colorDisplay = document.getElementById("colorDisp");
let messageDisplay = document.getElementById("message");
let modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setupModeButtons();
    setupSquares();
    reset();
}

function setupSquares() {
    for (let i = 0; i < squares.length; i++) {
        //adding initial colors to squares
        squares[i].style.background = colors[i];
        //adding click listeners to squares
        squares[i].addEventListener("click", function () {
            let clickedColor = this.style.background;
            console.log("clicked color: ", clickedColor, "picked color: ", pickedColor);

            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                changeColors(pickedColor);
                resetButton.textContent = "Play Again?";

            } else {
                messageDisplay.textContent = "Try Again!";
                this.style.background = "#2f4f4f";

            }
        })
    }
}

function setupModeButtons() {
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            //using ternary operator
            this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;

            reset();
        })
    }
}


function reset() {
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    //generate new colors
    colors = generateRandomColors(numberOfSquares);
    //pick new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match new color
    colorDisplay.textContent = pickedColor;
    //change color of squares
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue";
}


resetButton.addEventListener("click", function () {
    reset();
})

colorDisplay.textContent = pickedColor;

function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.background = color;

    }
    h1.style.background = color;
}

function pickColor() {
    let randomNumber = Math.floor(Math.random() * colors.length);
    console.log("colors array length in pickColor function: ", colors.length);
    console.log("random number", randomNumber);
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