import { ctx, width, height, gameOn } from "../index.js";

export default function gameOver() {
  // 게임 종료 화면 표시
  clearInterval(gameOn);
  ctx.font = "60px Courier";
  ctx.fillStyle = "Black";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("Game Over", width / 2, height / 2);
};