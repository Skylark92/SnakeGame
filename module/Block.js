import { ctx, blockSize } from "../index.js";

export default class Block {
  constructor(col = 0, row = 0) {
    this.col = col;
    this.row = row;
  }

  drawSquare(color) {
    const x = this.col * blockSize;
    const y = this.row * blockSize;

    ctx.fillStyle = color;
    ctx.fillRect(x, y, blockSize, blockSize);
  }

  drawCircle(color) {
    const centerX = this.col * blockSize + blockSize / 2;
    const centerY = this.row * blockSize + blockSize / 2;

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(centerX, centerY, blockSize / 2, Math.PI * 2, false);
    ctx.fill();
  }

  equal(otherBlock) {
    return this.col === otherBlock.col && this.row === otherBlock.row;
  }
}
