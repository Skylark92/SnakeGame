import drawBorder from "./module/drawBorder.js";
import drawScore from "./module/drawScore.js";
import Snake from "./module/Snake.js";
import Apple from "./module/Apple.js";
import Score from "./module/Score.js";

const snakeGameCanvas = document.getElementById("snake-game-canvas");
const ctx = snakeGameCanvas.getContext("2d");

const width = snakeGameCanvas.width;
const height = snakeGameCanvas.height;

const blockSize = 10;
const widthInBlocks = width / blockSize;
const heightInBlocks = height / blockSize;

const score = new Score(0);

const snake = new Snake();
const apple = new Apple();

const gameOn = setInterval(() => {
  ctx.clearRect(0, 0, width, height);
  drawScore();
  snake.move();
  snake.draw();
  apple.draw();
  drawBorder();
}, 100)

const app = document.querySelector("body");

const directions = {
  37: "left",
  38: "up",
  39: "right",
  40: "down",
  65: "left",
  68: "right",
  83: "down",
  87: "up",

}

app.addEventListener("keydown", (event) => {
  const newDirection = directions[event.keyCode];
  if (newDirection !== undefined) {
    snake.setDirection(newDirection);
  }
})

export { ctx, width, height, score, blockSize, gameOn, widthInBlocks, heightInBlocks, apple };