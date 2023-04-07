export default function drawScore(score) {
  // 점수 표시하기
  const p = document.querySelector(".snake-game-score");

  if (score === Number(p.innerText)) return;
  else p.innerText = score;
}