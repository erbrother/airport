// var fs = require('fs')
// var AdmZip = require('adm-zip')

// var zip = new AdmZip('./airport.zip')

// var contentXml = zip.readAsText("word/document.xml")

// // console.log(contentXml)
// let str = "";
// contentXml.match(/<w:t>[\s\S]*?<\/w:t>/ig).forEach((item)=>{

// 	console.log(item)
// 	// str += item.slice(5,-6)});
// 	// fs.writeFile("./2.txt",str,(err)=>{//将./2.txt替换为你要输出的文件路径
// 	// if(err)throw err;
// });

var fs =require('fs')
var air = fs.readFileSync('error.txt',"utf-8");
var airFault = fs.readFileSync('fault.txt',"utf-8");
var errorMessage = air.split('\r\n'); 
var airFault = airFault.split('\r\n');

// console.log(errorMessage[0]);
console.log('数据读取完毕')
var count = 0

airFault.forEach((faultItem, index) => {
	// 每条可能错误的信息
	faultItem = faultItem.split(',')
	console.log(faultItem)
	var faultItemnum = faultItem[3].split(".") //错误航班号

	errorMessage.forEach((erritem, errindex) => {
		erritem = erritem.split(',')
		var errnum = erritem[2].split('.')


		for (var i = errnum.length - 1; i >= 0; i--) {
			if(parseInt(errnum[i]) === parseInt()){

			}
		}
		// console.log(errnum)
		count++;
	})
})
console.log(count)