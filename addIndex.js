/**
 * Created by guilherme on 22/08/16.
 */
var lineReader = require('line-reader');
var fs = require('fs');

if(process.argv.length < 4){
	console.log("please pass two parameters, fist is the input, second is the output");
	 throw new Error('number of parameters are incorrect.')
}


fs.writeFile(process.argv[3], 'Hello Node\n', function (err) {
    if (err) throw err;
    console.log('It\'s saved!');
});
var i = 0;
lineReader.eachLine(process.argv[2], function(line, last) {
    i++;
    //console.log(i);
    //debugger;
    fs.appendFile(process.argv[3], i + ' ' + line + '\n', function (err) {

    });
    if (last) {
        console.log('Done!');
        return false; // stop reading
    }

});