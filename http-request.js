const https = require('https');
const fs = require('fs');

const url = 'https://jsonplaceholder.typicode.com/posts';

https.get(url, res => {
  res.setEncoding('utf8');
  let body = '';

  //listen for data
  res.on('data', data => {
    body += data;
  });
  res.on('end', ()=>{
    //try random array doing this
    body = JSON.parse(body);
    console.log(
      `
      ${body[0].title}

      `
    );

    // fs.writeFile('data.json', body, 'utf8', (err)=>{
    //   if(err) return err;
    //   console.log('just pulled all the posts and created a file')
    // });
  })


});
