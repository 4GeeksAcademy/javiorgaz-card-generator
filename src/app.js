/* eslint-disable */
import "bootstrap";
import "./style.css";

const suits = ["spade", "heart", "diamond", "club"];

const suitSimbols = {
  spade: "♠",
  diamond: "♦",
  heart: "♥",
  club: "♣"
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getCardNumber() {
  const n = getRandomInt(1, 9);
  return n;
}

function getCard() {
  const suitIndex = getRandomInt(0, suits.length - 1);
  return suits[suitIndex];
}

function generateCard() {
  //write your code here

  const card = getCard();
  const number = getCardNumber();

  document.querySelector(".top-side").textContent = suitSimbols[card];
  document.querySelector(".cardNumber").textContent = number;
  document.querySelector(".bottom-side").textContent = suitSimbols[card];

  if (card === "heart" || card === "diamond") {
    document.querySelector(".card").style.color = "red";
  } else {
    document.querySelector(".card").style.color = "black";
  }
}

window.onload = generateCard;

document.getElementById("reLoad").onclick = generateCard;
