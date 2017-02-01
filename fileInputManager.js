fileReader = require('./asyncFileRead');
class FileInputManager {
  constructor(inputPath) {
    this.inputPath = inputPath;
  }

  fetchData(done) {
    var that = this;
    var isSuccess = true;
    fileReader(this.inputPath, (err, data) => {
      if (err) {
        console.log(err);
        isSuccess = false;
        done(isSuccess);
      } else {
        that.dataArray = data.split('\n');
        done(isSuccess);
      }
    });
  }

  getGridSize() {
    var sizeArray = this.dataArray[0].split(' ');
    return { x: sizeArray[0], y: sizeArray[1] }
  }

  getBotInputs(){
    var botInputArray = this.dataArray[1].split(' ');
    return {x : botInputArray[0], y : botInputArray[1], direction : botInputArray[2]}
  }

  getCommands(){
    var commands = this.dataArray[2].split(' ');
    var result = [];
    commands.forEach((command)=>{
      result.push(command[0]);
    })
    return result;
  }
}

module.exports = FileInputManager;