const _ = require('lodash');

_.assign(
	module.exports,
	require('./command.js'),
	require('./pipeableCommands.js')
);
