var fs = require('fs');
var request = require('request');

module.exports = {
	pwd: function(args) {
		process.stdout.write(process.cwd() + '\n');
	},
	date: function(args) {
		var d = new Date();
		process.stdout.write(d + '\n');
	},
	ls: function(args) {
		fs.readdir('.', function(err, files) {
			if (err) throw err;
			files.forEach(function(file) {
				process.stdout.write(file.toString() + '\n');
			});
			process.stdout.write('prompt: ');
		});
	},
	echo: function(args) {
		process.stdout.write(args + '\n');
	},

	wc: function(args) {
		fs.readFile(args, 'utf8', function(err, data) {
			if (err) {
				console.log(err);
			} else {
				data = data.split('\n');
				process.stdout.write(parseInt(data.length) + '\n' + 'prompt:');
			}
		});
	},
	curl: function(args) {
		request(args, function(error, response, body) {
			if (error) error; // Print the error if one occurred
			console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
			process.stdout.write(body + '\n' + 'prompt:');
		});
	},
};
