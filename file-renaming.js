const fs = require('fs');

//rename and move file
//fs.renameSync('./newfile2.js', 'newDir/newfile.js');


fs.renameSync('./newDir/child', './ParentDir');
