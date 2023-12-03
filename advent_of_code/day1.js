var fs = require('fs');

try {  
    var data = fs.readFileSync('day1.txt', 'utf8');
    var lines = data.split(/\r?\n/);
    let sum = 0;
    console.log(lines.length);
    for(let line of lines){
        let nums = line.match(/([+-]?\d+)/g);
        let firstDigit = nums[0][0];
        let lastNum = nums[nums.length - 1];
        let lastDigit = lastNum[lastNum.length - 1];
        console.log({firstDigit, lastDigit});
        let number = firstDigit + lastDigit;
        console.log(number)
        sum = sum + parseInt(number);
        console.log(sum)
    }  
} catch(e) {
    console.log('Error:', e.stack);
}