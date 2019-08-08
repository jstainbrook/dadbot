/*
 *

@author hyperjoule

dadbot code

functions:

!dadjoke - get a random dad joke
!chucknorris - get a random chuck norris joke
!isitdoneyet - the answer is NO
!twss - that's what SHE said!
!phrasing - BOOM

 **/

// Requiring Packages
const discord = require('discord.js');

// Create the bot client
const client = new discord.Client();

// Here we load the config.json file that contains our token and our prefix values.
const config = require('./config.json');
// config.token contains the bot's token
// config.prefix contains the message prefix.

// include joke library
const giveMeAJoke = require('give-me-a-joke');
// hello world
client.on('ready', () => {
	console.log('Dad-bot locked and loaded!');
});

// Whenever someone types a message this gets activated.
client.on('message', (message) => {
	// Set the prefix of the bot.
	const settings = {
		prefix: config.prefix,
	};
	// This reads the first part of your message behind your prefix to see which command you want to use.
	const command = message.content.toLowerCase().slice(settings.prefix.length).split(' ')[0];
	// These are the arguments behind the commands.
	// const args = message.content.split(' ').slice(1);

	// If the user that types a message is a bot account return.
	if (message.author.bot) return;

	if (command === 'dadjoke') {
		giveMeAJoke.getRandomDadJoke (function(joke) {
			const groaners = new Array('https://media.tenor.com/images/6e6af9c5ac6c0334c0619f26723072ea/tenor.gif',
				'https://media.tenor.com/images/c439b567fe85b915f642e1a48b01458e/tenor.gif',
				'https://media.tenor.com/images/e5c127d67184da406c2a51c4d07c1ee1/tenor.gif',
				'https://media.tenor.com/images/47e1322b13ea8ce651845efcffa4ab24/tenor.gif',
				'https://media.tenor.com/images/b2d4f727430f529a715dd6cd73e786f1/tenor.gif',
				'https://media.tenor.com/images/4e26f01c05fee18b381e932ec6daa37b/tenor.gif',
				'https://media.tenor.com/images/2bb37a952c70086a9a9b3f57ed63796c/tenor.gif',
				'https://media.tenor.com/images/1123dc8f11ad839c81b50ff694640c16/tenor.gif',
				'https://media.tenor.com/images/df825b7b07b2c5f2dc1ec392cef24390/tenor.gif',
				'https://media.tenor.com/images/c59cec0c65774dc2d91b99cb4389f2de/tenor.gif'
			);
			const randno = groaners[Math.floor(Math.random() * groaners.length)];
			joke = joke.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
			joke = joke.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
			message.channel.send(joke, { files: [randno] });
			// => console.log(joke);
		});
	}
	if (command === 'chucknorris') {
		giveMeAJoke.getRandomCNJoke (function(joke) {
			joke = joke.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
			joke = joke.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
			message.channel.send(joke);
			// => console.log(joke);
		});
	}
	if (command === 'isitdoneyet') {
		const quotes = new Array('MAMA\'S COOKING GO AWAY!', 'NO, Dammit!', 'Yes.  Nailed it.', 'OMG, WHY????', 'No, but I GOT THIS, I\'m an ENGINEER!', 'Here, hold my beer and watch this!');
		const randno = quotes[Math.floor(Math.random() * quotes.length)];
		message.channel.send(randno, { files: ['https://media.tenor.com/images/2095174a8a8e0d1f431cd13c48e3387e/tenor.gif'] });
	}
	if (command === 'phrasing') {
		const boom = new Array('https://media.tenor.com/images/67ecccbfed3037cb59dc92e3a8acccd3/tenor.gif',
			'https://media.tenor.com/images/d6a85001956f2916ca4a4daaae1da4df/tenor.gif',
			'https://media.tenor.com/images/b2f8ba0a3c39929d9373ad572ba6adc2/tenor.gif',
			'https://media.tenor.com/images/78138218056388e778677ceda9541d75/tenor.gif'
			,
			'https://media.tenor.com/images/6eac1628986e54db733d73974969714f/tenor.gif'
		);
		const randno = boom[Math.floor(Math.random() * boom.length)];
		message.channel.send('boom.', { files: [randno] });
	}
	if (command === 'twss') {
		const boom = new Array('https://media.tenor.com/images/f548bddc4e22d7a12cbbbe8fd988ad3d/tenor.gif',
			'https://media.tenor.com/images/5e16e6d7bb336cf48191ea1d84c73f18/tenor.gif',
			'https://media.tenor.com/images/7688ae3d08d0673cf6f658c68fe4bda9/tenor.gif',
			'https://media.tenor.com/images/8876d9742a3a27a5fc809d8c9807b0a8/tenor.gif'
			,
			'https://media.tenor.com/images/9dcff9bb953e932f292008fdcad434d7/tenor.gif'
		);
		const randno = boom[Math.floor(Math.random() * boom.length)];
		message.channel.send('That\'s what SHE said!', { files: [randno] });
	}
});
// Your secret token to log the bot in. (never show this to anyone!)
client.login(config.token);
