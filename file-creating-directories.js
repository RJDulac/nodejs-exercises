const fs = require('fs');


  //check if view directory exists
  if(!fs.exists("views")) {
  //create view directory
    fs.mkdir('views', (err)=>{
      //check for error and end function so it doesn't write new file
      if(err) return err;
      //write file if no error
      fs.writeFile('./views/new.html', 'this is a new directory and data', (err)=>{
        if(err) return err;
        console.log('Directory and file saved')
      });

    });
}
