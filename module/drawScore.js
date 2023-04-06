import { ctx, score, blockSize } from "../index.js";

export default function drawScore() {
  // 점수 표시하기
  ctx.font = "20px Courier";
  ctx.fillStyle = "Black";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText("Score: " + score.score, blockSize, blockSize);
}