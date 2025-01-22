//path module functions in node js
// var os = require('os');
// console.log("The free memory in the system is : "+ os.freemem());
// console.log("The home directory of  the system is : "+ os.homedir());
// console.log("The host name of  the system is : "+ os.hostname());
// console.log("The plat form of the file  in the system is : "+ os.platform());
// console.log("The release gate way of system is : "+ os.release());
// console.log("The  temporary directory in the system is : "+ os.tmpdir());
// console.log("The total memory in the system is : "+ os.totalmem());
// console.log("The type of the operatingSystem is : "+ os.type());

//===========================================================================================
//The methods in the path module are

var path = require('path');
console.log("The current filename is : "+__filename);
console.log("The current directory name is : "+__dirname);
console.log("The basename of the file is : "+path.basename(__filename));
console.log("The basename of the directory is : "+path.basename(__dirname));
console.log("The extension name of the currentfile is : "+path.extname(__filename));
console.log("The total details of the file is : ",(path.parse(__filename)));

//=========================================================================================

//The methods of the url module are 

// var url = require('url');
// var address = "http://localMhost:8080/default.html?year = 2017&month = november";
// var parseAddress = url.parse(address, true);
// console.log("The host name of url is : "+parseAddress.hostname);
// console.log("The path name of the url is : "+parseAddress.pathname);
// console.log("The parameters of the url is : "+parseAddress.search);
// data =  req.query();
// console.log("The data of the url is : "+data);