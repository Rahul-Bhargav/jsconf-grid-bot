Robot = require('./robot.js');
Grid = require('./grid.js');
CommandInterface = require('./commandInterface.js');
FileInputManager = require('./fileInputManager.js');

var inputPath = '/Users/rahulsurabhi/Documents/Training/jsconf-grid-bot/testInput.txt';

function continueExecution(isSuccess) {
  if (!isSuccess) {
    return;
  }

  var gridSize = inputManager.getGridSize();
  var gridX = parseInt(gridSize.x);
  var gridY = parseInt(gridSize.y);
  if(isNaN(gridX)||isNaN(gridY)){
    console.log('Invalid Grid Inputs');
    return;
  }
  var grid = new Grid(gridX, gridY);

  var initialBotInput = inputManager.getBotInputs();
  var initialX = parseInt(initialBotInput.x);
  var initialY = parseInt(initialBotInput.y);
  if(isNaN(initialX)||isNaN(initialX)){
    console.log('Invalid Bot Position Input');
    return;
  }
  console.log(initialX,initialY,initialBotInput.direction);

  var robot = new Robot(initialX, initialY, initialBotInput.direction, ['L', 'M', 'R']);

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