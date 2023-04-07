import Apple from "./Apple.js";
import Snake from "./Snake.js";
import drawScore from "./drawScore.js";
import drawBorder from "./drawBorder.js";
import { width, height, ctx } from "../index.js";

export default class SnakeGame {
  constructor() {
    this.snake = new Snake();
    this.apple = new Apple();
    this.inProgress = false;
    this.isOver = false;

    this.set = () => {
      ctx.clearRect(0, 0, width, height);
      drawScore(this.snake.score);
      this.snake.move();
      this.snake.draw();
      this.apple.draw();
      drawBorder();
    }
  }

  start() {
    if (!this.inProgress) {
      this.inProgress = true;
      this.game = setInterval(this.set, 100);
    } else this.pause();
  }

  pause() {
    if (this.inProgress) {
      this.inProgress = false;
      clearInterval(this.game);
    } else return;
  }

  over() {
    this.isOver = true;
    // 게임 종료 화면 표시
    clearInterval(this.game);
    ctx.font = "60px Courier";
    ctx.fillStyle = "Black";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Game Over", width / 2, height / 2);
  }

  reset() {
    if (this.isOver) {
      this.snake = new Snake();
      this.apple = new Apple();
      this.inProgress = false;
      this.isOver = false;

      this.set();
    } else this.start();
  }
}