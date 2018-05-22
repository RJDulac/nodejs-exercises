const fs = require('fs');

//fs.rmdirSync('./newDir');
//remove file

try {
  fs.unlinkSync('./newDir/newFile.js');
}catch (err){
  console.log(err + 'here is the error');
}
