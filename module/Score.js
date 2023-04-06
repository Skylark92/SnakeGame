export default class Score {
  constructor(initialScore) {
    this.score = initialScore;
  }

  up() {
    this.score++;
  }

  down() {
    this.score--;
  }
}