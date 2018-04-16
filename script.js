
// variables declarion

var numSquares = 6;
var pickedColor;
var colors = [];
var square = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

resetButton.addEventListener("click", function() {
    reset();
});


/* all function goes here */

function init() {
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpModeButtons() {
    for ( var i = 0; i < modeButtons.length; i++ ) {
        modeButtons[ i ].addEventListener("click", function() {
            modeButtons[ 0 ].classList.remove("selected");
            modeButtons[ 1 ].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

function setUpSquares() {
    for ( var i = 0; i < square.length; i++ ) {
        // add initial color to the square
        square[ i ].style.backgroundColor = colors[ i ];
    
        // add event listener
        square[ i ].addEventListener("click", function(){
            // grab color of picked ssquare
            var clickColor = this.style.backgroundColor;
            
            // compare pickedColor and clickColor
            if ( clickColor === pickedColor ) {
                messageDisplay.textContent = "Correct";
                changeColor( clickColor );
                resetButton.textContent = "Play Again?";
                h1.style.backgroundColor = clickColor;
            }
            else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset() {
    // generate all new colors
    colors = generateRandomColors(numSquares);
    // pick a new random colors from array
    pickedColor = pickColor();
    // change color display to match picked color
    colorDisplay.textContent = pickedColor;
    // change colors of squares
    for ( var i = 0; i < square.length; i++ ) {
        if ( colors[ i ] ) {
            square[ i ].style.display = "block";
            square[ i ].style.backgroundColor = colors[ i ];
        } else {
            square[ i ].style.display = "none";
        }
        
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    resetButton.textContent = "New Color";
}

function changeColor( color ) {
    // loop through all squares
    for ( var i = 0; i < square.length; i++ ) {
        //change background colors
        square[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor( Math.random() * colors.length );
    return colors[ random ];
}

function generateRandomColors( num ) {
    // make an array
    var arr = [];
    // repeat num times
    for ( var i = 0; i < num; i++ ) {
        // get random color and push into arr
        arr.push( randomColor() );
    }
    // return that array
    return arr;
}

function randomColor() {
    //pick a "red" from 0 - 255
    var r = Math.floor( Math.random() * 256 );
    //pick a "green" from 0 - 255
    var g = Math.floor( Math.random() * 256 );
    //pick a "blue" from 0 - 255
    var b = Math.floor( Math.random() * 256 );

    return "rgb(" + r + ", " + g + ", " + b + ")";
}