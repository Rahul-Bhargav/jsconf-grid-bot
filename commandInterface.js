class CommandInterface {
  constructor(robot, grid) {
    this.robot = robot;
    this.grid = grid;
  }

  MoveRobot() {
    var robotDirection = this.robot.getDirection();
    var currentPosition = this.robot.getPosition();
    switch (robotDirection) {
      case 0:
        currentPosition.x += 1;
        if (currentPosition.x === this.grid.xLimit)
          currentPosition.x = this.grid.xLimit - 1;
        break;
      case 180:
        currentPosition.x += -1;
        if (currentPosition.x < 0)
          currentPosition.x = 0;
        break;
      case 90:
        currentPosition.y += 1;
        if (currentPosition.y === this.grid.yLimit)
          currentPosition.y = this.grid.yLimit - 1;
        break;
      case 270:
        currentPosition.y -= 1;
        if (currentPosition.y < 0)
          currentPosition.y = 0;
        break;
      default:
        console.log('Invalid direction ', robotDirection);
        break;
    }
    this.robot.changePosition(currentPosition.x, currentPosition.y);
  }

  executeCommand(command) {
    command = command.toUpperCase();
    switch (command) {
      case 'L':
        this.robot.changeDirection(90);
        break;
      case 'R':
        this.robot.changeDirection(-90);
        break;
      case 'M':
        this.MoveRobot();
        break;
      default:
        console.log('Invalid command ', command);
        break;
    }
    console.log(command,' ',{ position: this.robot.getPosition(), direction: this.robot.getCompassDirection(this.robot.getDirection()) });
  }

  initializeExecution(commands, done) {
    var errorIndices = [];
    var isValid = true;

    commands.forEach((command, index) => {
      var validCommand = this.robot.isValidCommand(command)
      if (!validCommand) {
        isValid = false;
        errorIndices.push(index);
      }
    });

    if (!isValid) {
      done(`The following indexes of the input commands are invalid' - ${errorIndices}`);
      return;
    }
    commands.forEach((command) => this.executeCommand(command));
    done({ position: this.robot.getPosition(), direction: this.robot.getCompassDirection(this.robot.getDirection()) });
  }
}
module.exports = CommandInterface;