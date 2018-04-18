var command = require('./command.js');

process.stdout.write("prompt:");
process.stdin.on('data', function(data) {
	var cmd = data.toString().trim();
   // remove the newline
      cmd = cmd.split(" ")

      let func = cmd[0]
      let args = cmd.slice(1).join(" ")
     
	 if(command[func]) {
	 	command[func](args);
	 	
	 }
	 else process.stdout.write("Not a valid Prompt" + "\n");
	 	
	 process.stdout.write("prompt:");
});

