/**
 * Created by guilherme on 22/08/16.
 */
var lineReader = require('line-reader');
var fs = require('fs');

if(process.argv.length < 4){
	console.log("please pass two parameters, fist is the input, second is the output");
	 throw new Error('number of parameters are incorrect.')
}


fs.writeFile(process.argv[3], '', function (err) {
    if (err) throw err;
    console.log('It\'s saved!');
});

var indexOf = 0;
lineReader.eachLine(process.argv[2], function(line, last) {
    indexOf = line.indexOf(" ");

    fs.appendFile(process.argv[3], line.substr(indexOf).trim() + '\n', function (err) {

    });
    if (last) {
        console.log('Done!');
        return false; // stop reading
    }

});