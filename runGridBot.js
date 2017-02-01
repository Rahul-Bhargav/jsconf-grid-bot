Robot = require('./robot.js');
Grid = require('./grid.js');
CommandInterface = require('./commandInterface.js');
FileInputManager = require('./fileInputManager.js');
var inputManager;
var inputPath = '/Users/rahulsurabhi/Documents/Training/jsconf-grid-bot/testInput.txt';

function createGrid() {
  var gridSize = inputManager.getGridSize();
  var gridX = parseInt(gridSize.x);
  var gridY = parseInt(gridSize.y);
  if (isNaN(gridX) || isNaN(gridY)) {
    console.log('Invalid Grid Inputs');
    return false;
  }
  var grid = new Grid(gridX, gridY);
  return grid;
}

function createRobot(xLimit, yLimit) {
  var initialBotInput = inputManager.getBotInputs();
  var initialX = parseInt(initialBotInput.x);
  var initialY = parseInt(initialBotInput.y);
  if (isNaN(initialX) || isNaN(initialX)) {
    console.log('Invalid Bot Position Input');
    return false;
  }
  console.log(initialX, initialY, initialBotInput.direction);
  if (initialX > xLimit || initialY > yLimit) {
    conso.log('The initial bot position is out of bounds');
    return false;
  }
  var robot = new Robot(initialX, initialY, initialBotInput.direction, ['L', 'M', 'R']);
  return robot;
}

function continueExecution(isSuccess) {
  if (!isSuccess) {
    return;
  }

  var grid = createGrid();
  if (!grid) return;
  var robot = createRobot(grid.xLimit, grid.yLimit);
  if (!robot) return;

  var commands = inputManager.getCommands();
  var commandInterface = new CommandInterface(robot, grid);
  commandInterface.initializeExecution(commands, (err, result) => {
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