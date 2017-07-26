var fs = require('fs');
var data = '';

// Tao mot Readable Stream
var readerStream = fs.createReadStream('config.json');

// Thiet lap encoding la utf8. 
readerStream.setEncoding('UTF8');

// Xu ly cac su kien lien quan toi Stream --> data, end, va error
readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end',function(){
    var buf = new Buffer(256);
    var len = buf.write(data);
    console.log( buf.toString('utf8',0,len));  
    console.log(__filename);
});

readerStream.on('error', function(err){
   console.log(err.stack);
});