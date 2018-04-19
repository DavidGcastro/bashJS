const fs = require('fs');

function cat(files) {
	files = files.split(' ');
	const texts = [];
	var count = 0;

	files.forEach(function(file, i) {
		fs.readFile(file, 'utf8', function(err, text) {
			if (err) console.log(err);
			texts[i] = text;
			count++;
			if (count === files.length) process.stdout.write(texts.join(''));
		});
	});
}

function head(fileName) {
	fs.readFile(fileName, 'utf8', function(err, text) {
		if (err) console.log(err);
		text = text.split('\n').slice(0, 5);
		process.stdout.write(text.join('\n'));
		process.stdout.write('\nprompt:');
	});
}

function tail(fileName) {
	fs.readFile(fileName, 'utf8', function(err, text) {
		if (err) console.log(err);
		text = text.split('\n').slice(-5);
		process.stdout.write(text.join('\n'));
		process.stdout.write('\nprompt:');
	});
}

module.exports = {
	cat: cat,
	head: head,
	tail: tail,
};
