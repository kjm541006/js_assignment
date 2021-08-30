const randomNumInput = document.querySelector("h2 input");
const guessNumInput = document.querySelector("h3 input");
const form = document.querySelector("#form");
const div = document.querySelector("div");

const h3 = document.createElement("h3");
const h2 = document.createElement("h2");
div.appendChild(h3);
div.appendChild(h2);

function createRandomNum(randomNumInput) {
  randomNum = Math.floor(Math.random() * randomNumInput + 1);
}

function checkRandomNum() {
  if (Number(guessNumInput.value) === randomNum) {
    h3.innerText = `You choose: ${guessNumInput.value}, the machine chose: ${randomNum}`;
    h2.innerText = "You Won!";
  } else {
    h3.innerText = `You choose: ${guessNumInput.value}, the machine chose: ${randomNum}`;
    h2.innerText = "You lost!";
  }
}

function play(event) {
  event.preventDefault();
  createRandomNum(randomNumInput.value);
  console.log(randomNum);
  console.log(guessNumInput.value);
  checkRandomNum(guessNumInput.value);
}

form.addEventListener("submit", play);
