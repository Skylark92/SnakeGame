import { score } from "../index.js";

export default function drawScore() {
  // 점수 표시하기
  const p = document.querySelector(".snake-game-score");
  p.innerText = score.score;
}