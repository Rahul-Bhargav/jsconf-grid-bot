class CommandInterface {
  constructor(robot, grid) {
    this.robot = robot;
    this.grid = grid;
  }

  MoveRobot() {
    robotDirection = this.robot.getDirection();
    var updatedPositionX, updatedPositionY;
    currentPosition = robot.getPosition();
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
  }

  executeCommand(command) {
    command = command.toUpperCase();
    switch (command) {
      case 'L':
        this.robot.changeDirection(90);
        break;
      case 'R':
        this.robot.changeDirection(90);
        break;
      case 'M':
        this.MoveRobot();
        break;
      default:
        console.log('Invalid command ', command);
        break;
    }
  }

  initializeExcecution(commands, done){
    var errorIndices = [];
    var isValid = true;
    
    commands.forEach((command, index) => {
      validCommand = this.robot.isValidCommand(command)
      if(!validCommand){
        isValid = false;
        errorIndices.push(index);
      }
    });
    
    if(!isValid){
      done(`The followwing indexes of the input commands are invalid' - ${errorIndices}`);
      return;
    }
    commands.forEach(executeCommand(command));
    done();
  }
}
module.exports = CommandInterface;