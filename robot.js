class Robot {
  constructor(positionX, positionY, direction, commands) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.direction = direction;
    this.commands = commands;
  }

  isValidCommand(input) {
    var isValid = false;
    isValid = this.commands.some((command) => {
      return command === input;
    });
    return isValid;
  }

  changePosition(positionX, positionY) {
    this.positionX = positionX;
    this.positionY = positionY;
  }

  changeDirection(deltaDirection) {
    tempDirection = this.direction;
    tempDirection += deltaDirection;
    if (tempDirection < 0) {
      tempDirection = 360 - tempDirection;
    }
    if (tempDirection >= 360) {
      tempDirection = tempDirection - 360;
    }
    this.direction = tempDirection;
  }

  getPosition() {
    return { x: this.positionX, y: this.positionY }
  }

  getDirection() {
    return this.direction;
  }
}

module.exports = Robot;