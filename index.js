var fs = require('fs')

// fs.readFile('2.txt','utf-8', (err, data)=>{
// 	if (err) {console.log("first" + err)}

// 	console.log('1' + data)
// })
var sleep = function (filepath) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filepath,"utf-8", function(err, data) {
        	if (err) {
        		console.log(err);
        		reject(err);
        		return
        	}

        	resolve(data)

        })
    })
};

console.log("时间1");

sleep('2.txt').then((data) => {
	console.log(data)
})