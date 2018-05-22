//name variable the same as module-good practice
const fs = require('fs');

fs.readdir('./', (err, content)=>{
  if(err) return err;
  console.log(content);

});

fs.readFile('global.html', 'UTF-8', (err, content)=>{ //don't need ./ for global.html without encoding it will give binary code-use UTF-8
  console.log(content);

})
