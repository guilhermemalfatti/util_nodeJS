/**
 * Created by guilherme on 22/08/16.
 */
var lineReader = require('line-reader');
var fs = require('fs');
var i = 0;
var Q = require('q');
var promises = [];

try{
    if(process.argv.length < 4){
        console.log("please pass two parameters, fist is the input, second is the output");
        throw new Error('number of parameters are incorrect.')
    }else{
        var outputFile = process.argv[3]
        var inputFile = process.argv[2]
    }


    fs.writeFile(outputFile, '.\n', function (err) {
        if (err) throw err;
           lineReader.eachLine(inputFile, function(line, last) {        
            
            //debugger;
            promises.push(write_file(line));
            i++;
            if(last){
                Q.allSettled(promises).then(function (results) {
                    
                    console.log('Done! ' + i);
                    return false; // stop reading 
                    
                });            
            }

        });
    });

    
    
}catch(err){
    console.log(err);
}

function write_file(line){
    var deferred = Q.defer();
    var indexOf = line.indexOf(" ");
    fs.appendFile(outputFile,line.substr(indexOf).trim() + '\n', function (err) {
        deferred.resolve();
    });
    return deferred.promise;
}