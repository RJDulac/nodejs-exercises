const readline = require('readline');
const util = require('util'); //like console but has time stamps
const RL = readline.createInterface(process.stdin, process.stdout);

RL.question('What is your name? ', (name)=>{
  RL.setPrompt(`${name} how old are you? `);
  RL.prompt();
  RL.on('line', (age)=>{
    if(age <18){
      util.log(`${name.trim()} because you are ${age} years old, you cannot proceed`);
      RL.close();
    }else {
      util.log(`${name.trim()} it's great you're ${age} years old, because now you can enjoy our services`);
      RL.close();
    }
  });
});
