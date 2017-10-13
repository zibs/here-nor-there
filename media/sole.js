fs = require("fs")
var s = function() { 
            

            //Do your processing, MD5, send a satellite to the moon, etc.
            fs.writeFile ("./what.js", data, function(err) {
                if (err) throw err;
                console.log('complete');
            });
        };
        s()