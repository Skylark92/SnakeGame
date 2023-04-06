import { ctx, width, height, blockSize } from "/index.js";

export default function drawBorder() {
  // 경계선 그리기
  ctx.fillStyle = "Gray";
  // 경계선 색 지정
  ctx.fillRect(0, 0, width, blockSize);
  ctx.fillRect(0, height - blockSize, width, blockSize);
  ctx.fillRect(0, 0, blockSize, height);
  ctx.fillRect(width - blockSize, 0, blockSize, height);
  // 위에서부터 각 상, 하, 좌, 우 경계선
}