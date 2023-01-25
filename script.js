//Variables and audios.

let count = 1;

let boxval = document.querySelectorAll(".box");

let tick = document.getElementById("tick");

let resaudio = document.getElementById("reset");

let gameover = false;

// Game Logic.

function insertChar(element) {
  if (!element.innerText == "") {
    alert("The box is already checked.");
  } else if (count == 1) {
    count = count - 1;
    element.innerText += "X";
    console.log("X");
    document.getElementById("turn").innerText = "Player Turn : O";
    winCheck();
    tick.play();
  } else if (count == 0) {
    count = count + 1;
    element.innerText = "O";
    console.log("O");
    document.getElementById("turn").innerText = "Player Turn : X";
    winCheck();
    tick.play();
  }
}

//Game winning Logic.
const wins = [
  [0, 1, 2],
  [0, 4, 8],
  [1, 4, 7],
  [3, 4, 5],
  [2, 4, 6],
  [6, 7, 8],
  [0, 3, 6],
  [2, 5, 8],
];

// Win checker
function winCheck() {
  let board = [];
  boxval.forEach((e) => board.push(e.innerText));

  wins.forEach((w) => {
    if (
      board[w[0]] === board[w[1]] &&
      board[w[1]] === board[w[2]] &&
      board[w[0]] !== ""
    ) {
      document.querySelector(".result h1").innerText =
        "Hurrah !!" + board[w[0]] + " wins the Game.";
      document.querySelector(".result").classList.remove("inactive");
    }
  });
}

//Reload Button.
let reload = document.getElementsByClassName("reset");

function reset() {
  resaudio.play();
  window.location.reload();
}
