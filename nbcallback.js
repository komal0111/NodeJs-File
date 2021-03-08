//Name of the file: non-blocking-code.js
var fs = require('fs');


//For calculating execution time
var date1 = new Date();
var time_start = date1.getTime();
console.log("{Check point 1} starting at: " + time_start);
console.log("Let's start reading file");

//Name of the file to be read
var filename = 'nbcallback1.txt'; //create nbcallback1.txt in your folder with sample content inside
//Reading file asynchronously
fs.readFile('nbcallback1.txt', (err, data) => {
	if (err) 
		throw err;
		
	console.log("Content :  " + data);
});
