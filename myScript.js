
let randomN1 = Math.floor((Math.random() * 6)) + 1;
let dice1 = "images/dice" + randomN1 + ".png";
function randomImg1() {
    // let randomN1 = Math.floor((Math.random() * 6)) + 1;
    // let dice1 = "images/dice" + randomN1 + ".png";
    const imgElement1 = document.querySelector(".img1");
    if (imgElement1) {
        imgElement1.src = dice1;
    } else {
        console.error("Element with class 'img1' not found.");
    }
    return randomN1;
}
// Wait for the DOM to be fully loaded before running randomImg1
document.addEventListener('DOMContentLoaded', randomImg1);

let randomN2 = Math.floor((Math.random() * 6)) + 1;
let dice2 = "images/dice" + randomN2 + ".png";
function randomImg2() {
    // let randomN2 = Math.floor((Math.random() * 6)) + 1;
    // let dice2 = "images/dice" + randomN2 + ".png";
    const imgElement2 = document.querySelector(".img2");
    if (imgElement2) {
        imgElement2.src = dice2;
    } else {
        console.error("Element with class 'img1' not found.");
    }
    return randomN2;
}
document.addEventListener('DOMContentLoaded', randomImg2);

//reset button
function reloadPage() {
    location.reload();
}

const win1 = document.querySelector("#p1").firstElementChild;
if (randomN1 > randomN2) {
    if (win1) {
         win1.innerHTML = "Player 1 Wins!";
         win1.setAttribute("class", "blinking");
         win1.style.color = "white"
        } else {
        console.error("Element with id '#p1' not found.");
    }
   } 

const win2 = document.querySelector("#p2").firstElementChild;
if (randomN1 < randomN2) {
    if (win2) {
         win2.innerHTML = "Player 2 Wins!";
         win2.setAttribute("class", "blinking");
         win2.style.color = "white"
        } else {
        console.error("Element with id '#p1' not found.");
    }
   }

// const win2Dice = document.querySelector(".dice");
// if (randomN1 < randomN2) {
//     if (win2Dice) {
//          win2Dice.innerHTML = "Player 2 Wins!";
//          win2Dice.setAttribute("class", "blinking");
//          win2Dice.style.color = "white"
//         } else {
//         console.error("Element with id '#p1' not found.");
//     }
//    }

if (randomN1 === randomN2) {
        win2.innerHTML = "It's a Draw!";
        win1.innerHTML = "It's a Draw!";
    }



// var output = randomN1.toString();
// document.querySelector("#p1").firstElementChild.innerHTML = output;

//animation
 // Get the div element by its ID
        // const blinkDiv =
        //     document.getElementById('blinkDiv');

        // // An array of colors to be used for blinking
        // const colors = ['#ff0000', 'black', '#0000ff'];

        // // Variable to keep track of the
        // // current color index
        // let currentColorIndex = 0;

        // // Function to toggle the background
        // // color of the div
        // function blinkBackground() {
        //     blinkDiv.style.backgroundColor =
        //         colors[currentColorIndex];
        //     currentColorIndex =
        //         (currentColorIndex + 1) % colors.length;
        // }

        // // Start the blinking by setting an interval 
        // // that calls the blinkBackground 
        // // function every 1000ms (1 second)
        // const blinkingInterval =
        //     setInterval(blinkBackground, 1000);

        // // To stop blinking after 5 seconds, 
        // // use setTimeout to clear the interval
        // setTimeout(() => {
        //     clearInterval(blinkingInterval);
        // }, 5000);