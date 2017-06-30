
var fs =require('fs')
var air = fs.readFileSync('error.txt',"utf-8");
var airFault = fs.readFileSync('fault.txt',"utf-8");
var errorMessage = air.split('\r\n'); //错误信息
var airFault = airFault.split('\r\n'); //航班信息

var realMessage = []

// 判断错误号码
for (var i = airFault.length - 1; i >= 0; i--) {
	// console.log(airFault[i]) //航班号    
	// 可能错误的航班号
	var airFaultnum = airFault[i].split(',')[3].split('.')
	// console.log(airFaultnum)

	// 可能错误的故障部件
	var airFaultpart = airFault[i].split(',')[2].split('.')
	// console.log(airFaultpart)

	outernum:
	for (var j = airFaultnum.length - 1; j >= 0; j--) {
		// console.log(airFaultnum[j])
		for (var k = errorMessage.length - 1; k >= 0; k--) {
			var errnum = errorMessage[k].split(',')[2].split('.')
			inner:
			for (var x = errnum.length - 1; x >= 0; x--) {
				if (parseInt(airFaultnum[j]) === parseInt(errnum[x])) {
					realMessage.push(airFault[i])
					break outernum;
				} 
			}
		}
	}
}
// 判断错误部件
for (var i = airFault.length - 1; i >= 0; i--) {
	// 可能错误的故障部件
	var airFaultpart = airFault[i].split(',')[2].split('.')
	// console.log(airFaultpart)

	outerpart:
	for (var j = airFaultpart.length - 1; j >= 0; j--) {
		// console.log(airFaultnum[j])
		for (var k = errorMessage.length - 1; k >= 0; k--) {
			var errpart = errorMessage[k].split(',')[1].split('.')
			inner:
			for (var x = errpart.length - 1; x >= 0; x--) {
				if (parseInt(airFaultpart[j]) === parseInt(errpart[x])) {
					realMessage.push(airFault[i])
					break outerpart;
				} 
			}
		}
	}

	// var airFaultnum = airFault[i][4].split('.')
	// console.log(airFaultnum)
}

// 判断错误章节
for (var i = airFault.length - 1; i >= 0; i--) {
	// 可能错误的章节
	var airFaultpart = airFault[i].split(',')[4].split('.')
	// console.log(airFaultpart)

	outerpart:
	for (var j = airFaultpart.length - 1; j >= 0; j--) {
		// console.log(airFaultnum[j])
		for (var k = errorMessage.length - 1; k >= 0; k--) {
			var errpart = errorMessage[k].split(',')[3]
			if (airFaultpart[j] === errpart) {
				realMessage.push(airFault[i])
				break outerpart;
			} 
		}
	}

	// var airFaultnum = airFault[i][4].split('.')
	// console.log(airFaultnum)
}
// console.log(realMessage)

const s = new Set();

realMessage.forEach(x => s.add(x));
realMessage = [];

for (let i of s) {
  realMessage.push('\r\n' + i)
}

console.log(realMessage + '')

fs.writeFile('message.txt', realMessage, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
