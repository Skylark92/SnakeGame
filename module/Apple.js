import { heightInBlocks, widthInBlocks } from "../index.js";
import Block from "./Block.js";

export default class Apple {
  constructor() {
    this.move();
  }

  draw() {
    this.position.drawCircle("LimeGreen");
  }

  move() {
    const randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1;
    const randomRow = Math.floor(Math.random() * (heightInBlocks - 2)) + 1;

    this.position = new Block(randomCol, randomRow);
  }
}