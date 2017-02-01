fileReader = require('./asyncFileRead');
class FileInputManager {
  constructor(inputPath) {
    this.inputPath = inputPath;
  }

  fetchData() {
    var recieveData;
    var isSuccess = true;
    fileReader(this.inputPath, (err, data) => {
      if (err) {
        console.log(err);
        isSuccess = false;
      } else {
        recieveData = data;
      }
    });
    if (!isSuccess)
      return false;

    this.dataArray = recieveData.split('\n');
    return true;
  }

  getGridSize(){
    var sizeArray = dataArray.split(' ');
    return { x: sizeArray[0], y:sizeArray[1]}
  }
}

module.exports = FileInputManager;