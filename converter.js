var ffmpeg = require('fluent-ffmpeg');

/**
 *    input - string, path of input file
 *    output - string, path of output file
 *    callback - function, node-style callback fn (error, result)        
 */

function convert(input, output, callback) {
    ffmpeg(input)
        .output(output)
        .on('end', function() {                    
            console.log('conversion ended');
            callback(null);
        }).on('error', function(err){
            console.log('error: ', e.code, e.msg);
            callback(err);
        }).run();
}

convert('sample_input/sample.mp4', './sample_output/output.mp3', function(err){
   if(!err) {
       console.log('conversion complete');
       //...

   }
});

