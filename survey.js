const readline = require('readline');
let profile = '';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question( "What's your name? Nicknames are also acceptable :)", (answer) => {
  profile +=answer;
  
  rl.question( "What's an activity you like doing?", (answer) => {
    profile += ' ' + answer;
    
    rl.question( "What do you listen to while doing that?", (answer) => {
      profile += ' ' + answer;

      rl.question( "Which meal is your favourite (eg: dinner, brunch, etc.)", (answer) => {
        profile += ' ' + answer;
        
        rl.question( "What's your favourite thing to eat for that meal?", (answer) => {
          profile += ' ' + answer;

          rl.question( "Which sport is your absolute favourite?)", (answer) => {
            profile += ' ' + answer;

            rl.question( "What is your superpower? In a few words, tell us what you are amazing at!)", (answer) => {
              profile += ' ' + answer;
              profile = profile.split(' ');
              console.log(`${profile[0]} loves listening to ${profile[2]} while ${profile[1]}, devouring ${profile[4]} for ${profile[3]}, \n prefers ${profile[5]} over any other sport, and is amazing at ${profile[6]}.`)
              rl.close();
            });
          });
        });
      });
    });
  });
});


