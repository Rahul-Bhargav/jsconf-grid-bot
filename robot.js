class Robot {
  constructor(positionX, positionY, direction, commands) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.commands = commands;
    this.direction = this.getAngle(direction);
  }

  getCompassDirection(direction) {
    var updatedDirection;
    switch (direction) {
      case 0:
        updatedDirection = 'E';
        break;
      case 90:
        updatedDirection = 'N';
        break;
      case 180:
        updatedDirection = 'W';
        break;
      case 270:
        updatedDirection = 'S';
        break;
    }
    return updatedDirection;
  }

  getAngle(direction) {
    var updatedDirection;
    switch (direction) {
      case 'E':
        updatedDirection = 0;
        break;
      case 'N':
        updatedDirection = 90;
        break;
      case 'W':
        updatedDirection = 180;
        break;
      case 'S':
        updatedDirection = 270;
        break;
    }
    return updatedDirection;
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
    var tempDirection = this.direction;
    tempDirection += deltaDirection;
    if (tempDirection < 0) {
      tempDirection = 360 + tempDirection;
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