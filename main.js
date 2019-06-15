/*
 * 

@author hyperjoule

dadbot code

funtions:

!dadjoke - get a random dad joke
!chucknorris - get a random chuck norris joke
!isitdoneyet - the answer is NO
!toddles - you deserve this
!moosey - you too

 **/
 
 
//Requiring Packages
const discord = require('discord.js'); //This can also be discord.js-commando or other node based packages!

//Create the bot client
const client = new discord.Client();
 
// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.
 
//include joke library
var giveMeAJoke = require('give-me-a-joke');
// hello world
client.on("ready", () => {
  console.log("Dad-bot locked and loaded!");
});

//Whenever someone types a message this gets activated.
client.on("message", (message) => {
  //Set the prefix of the bot.
  const settings = {
    prefix: config.prefix,
  }    
  //This reads the first part of your message behind your prefix to see which command you want to use.
  var command = message.content.toLowerCase().slice(settings.prefix.length).split(' ')[0];
  //These are the arguments behind the commands.
  var args = message.content.split(' ').slice(1);
  
    //If the user that types a message is a bot account return.
  if (message.author.bot) return;
  
  if (command === 'dadjoke') {
    giveMeAJoke.getRandomDadJoke (function(joke) {
      var groaners = new Array("https://media.tenor.com/images/6e6af9c5ac6c0334c0619f26723072ea/tenor.gif", 
                               "https://media.tenor.com/images/c439b567fe85b915f642e1a48b01458e/tenor.gif",
                               "https://media.tenor.com/images/e5c127d67184da406c2a51c4d07c1ee1/tenor.gif",
                               "https://media.tenor.com/images/47e1322b13ea8ce651845efcffa4ab24/tenor.gif",
                               "https://media.tenor.com/images/b2d4f727430f529a715dd6cd73e786f1/tenor.gif",
                               "https://media.tenor.com/images/4e26f01c05fee18b381e932ec6daa37b/tenor.gif", 
                               "https://media.tenor.com/images/2bb37a952c70086a9a9b3f57ed63796c/tenor.gif",
                               "https://media.tenor.com/images/1123dc8f11ad839c81b50ff694640c16/tenor.gif",
                               "https://media.tenor.com/images/df825b7b07b2c5f2dc1ec392cef24390/tenor.gif",
                               "https://media.tenor.com/images/c59cec0c65774dc2d91b99cb4389f2de/tenor.gif"                               
                               );
      var randno = groaners[Math.floor( Math.random() * groaners.length )];
      joke = joke.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
      joke = joke.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');          
      message.channel.send(joke, {files: [randno]});
      //=> console.log(joke);
    });
  }
  if (command === 'chucknorris') {
    giveMeAJoke.getRandomCNJoke  (function(joke) {
      joke = joke.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
      joke = joke.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');          
      message.channel.send(joke);
      //=> console.log(joke);
    });
  }
  if (command === 'toddles') {
    var memtag = 'obsidianspider#3590';
    var fn = "Obsidian";
    var ln = "Spider";
    message.react("🤔");
    giveMeAJoke.getCustomJoke (fn, ln, function(joke) {
      joke = joke.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
      joke = joke.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');        
      message.channel.send(joke.replace("'ss","'s"));
    });
  }
  if (command === 'moosey') {
    var memtag = '@moosepr#2629';
    var fn = "Mr";
    var ln = "Mooseman";
    message.react("🤔");
    joke = joke.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
    joke = joke.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');    
    giveMeAJoke.getCustomJoke (fn, ln, function(joke) {
      message.channel.send(joke.replace("'ss","'s"));
    });
  }  
  if (command === 'isitdoneyet') {
    var quotes = new Array("MAMA'S COOKING GO AWAY!","NO, Dammit!", "Yes.  Nailed it.", "OMG, WHY????", "No, but I GOT THIS, I'm an ENGINEER!");
    var randno = quotes[Math.floor( Math.random() * quotes.length )];      
    message.channel.send(randno);
  }  
}); 
//Your secret token to log the bot in. (never show this to anyone!)
client.login(config.token);
