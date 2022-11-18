const player1 = document.querySelector("#p1Display");
const player2 = document.querySelector("#p2Display");
const playTo = document.querySelector("#playto");
const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const reset = document.querySelector("#reset");

let max = 3,
  player1Score = 0,
  player2Score = 0;
playTo.addEventListener("change", () => {
  max = playTo.value;
  player1Score = 0;
  player2Score = 0;
  player1.innerText = `${player1Score}`;
  player2.innerText = `${player2Score}`;
});
//! player 1 update score
p1Button.addEventListener("click", () => {
  player1Score++;
  player1.innerText = `${player1Score}`;
  if (player1Score == max) {
    p1Button.setAttribute("disabled", "");
    p2Button.setAttribute("disabled", "");
    player1.style.color = "green";
    player2.style.color = "red";
  }
});
//! player 2 update score
p2Button.addEventListener("click", () => {
  player2Score++;
  player2.innerText = `${player2Score}`;
  if (player2Score == max) {
    p1Button.setAttribute("disabled", "");
    p2Button.setAttribute("disabled", "");
    player1.style.color = "red";
    player2.style.color = "green";
  }
});
//! reset button
reset.addEventListener("click", () => {
  max = 3;
  player1Score = 0;
  player2Score = 0;
  player1.innerText = `${player1Score}`;
  player2.innerText = `${player2Score}`;
  playTo.value = 3;
  p1Button.removeAttribute("disabled");
  p2Button.removeAttribute("disabled");
  player1.style.color = "";
  player2.style.color = "";
});
