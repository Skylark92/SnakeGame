import SnakeGame from "./module/SnakeGame.js";

const snakeGameCanvas = document.getElementById("snake-game-canvas");
const ctx = snakeGameCanvas.getContext("2d");

const width = snakeGameCanvas.width;
const height = snakeGameCanvas.height;

const blockSize = 10;
const widthInBlocks = width / blockSize;
const heightInBlocks = height / blockSize;

const snakeGame = new SnakeGame();

snakeGame.set();
snakeGame.notice();

const app = document.querySelector("body");

const directions = {
  ArrowLeft: "left",
  ArrowUp: "up",
  ArrowRight: "right",
  ArrowDown: "down",
  a: "left",
  d: "right",
  s: "down",
  w: "up",
  " ": "space"
}

app.addEventListener("keydown", (event) => {
  const newDirection = directions[event.key];
  if (newDirection === "space") {
    snakeGame.start();
  } else if (newDirection !== undefined && newDirection !== "space") {
    snakeGame.snake.setDirection(newDirection);
  }
})

const btn = document.querySelector(".snake-game-start-button");

btn.addEventListener("click", () => {
  snakeGame.reset();
  btn.blur();
})

export { ctx, width, height, blockSize, widthInBlocks, heightInBlocks, snakeGame };