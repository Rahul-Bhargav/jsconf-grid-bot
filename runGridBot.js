Robot = require('./robot.js');
Grid = require('./grid.js');
CommandInterface = require('./commandInterface.js');
FileInputManager = require('./fileInputManager.js');

var inputPath = '/Users/rahulsurabhi/Documents/Training/jsconf-grid-bot/testInput.txt';

function createRobot(positionX, positionY, direction, commands) {
  var robot = new Robot(positionX, positionY, direction, commands);
  return robot;
}

function createGrid(xLimit, yLimit) {
  var grid = new Robot(xLimit, yLimit);
  return grid;
}

function createCommandInterface(robot, grid) {
  var commandInterface = new CommandInterface(robot, grid);
  return commandInterface;
}

function continueExecution(isSuccess) {
  if (!isSuccess) {
    return;
  }
  // var gridSize = inputManager.getGridSize();
  var grid = new Grid(4, 4);

  // var initialBotPosition = inputMana.getBotPosition
  var robot = new Robot(1, 2, 90, ['L', 'R', 'M']);
  var commandInterface = new CommandInterface(robot, grid);
  commandInterface.initializeExecution(['L', 'R', 'M', 'M', 'L', 'M', 'R', 'R', 'R'], (err, result) => {
    if (err) console.log(err);
    else {
      console.log(result);
    }
  });
}

function initialize() {
  inputManager = new FileInputManager(inputPath);
  inputManager.fetchData(continueExecution);
}

initialize();