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

  changeDirection(direction) {
    this.direction = direction
  }

}

module.exports = Robot;