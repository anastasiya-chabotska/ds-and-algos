var fs = require('fs');

try {
    var data = fs.readFileSync('day1.txt', 'utf8');
    var lines = data.split(/\r?\n/);
    let sum = 0;
    console.log(lines.length);
    const numbers = {
        'one': '1',
        'two': '2',
        'three': '3',
        'four': '4',
        'five': '5',
        'six': '6',
        'seven': '7',
        'eight': '8',
        'nine': '9',
    }
    // lines = [
    //     'two1nine',
    //     'eightwothree',
    //     'abcone2threexyz',
    //     'xtwone3four',
    //     '4nineeightseven2',
    //     'zoneight234',
    //     '7pqrstsixteen',
    //     'oneightwo'
    // ]
    for (let line of lines) {
        // let nums = line.match(/([+-]?\d+)/g);


        //did not account for overlapping
        // const matches = line.match(/(?:one|two|three|four|five|six|seven|eight|nine|\d+)/gi);


        const result = [];

        //account for overlapping
        for (let i = 0; i < line.length; i++) {
            for (let j = i + 1; j <= line.length; j++) {
                const substring = line.substring(i, j);
                const match = substring.match(/(?:one|two|three|four|five|six|seven|eight|nine|\d+)/i);

                if (match) {
                    const digit = match[0];
                    const numericValue = numbers[digit] !== undefined ? numbers[digit] : match[0];
                    result.push(numericValue);
                }
            }
        }

        //console.log(result);
        // const matches = line.match(/(?:\d+)/gi);
        let firstDigit = result[0];
        let lastDigit = result[result.length - 1];
        console.log(line)
        console.log({firstDigit, lastDigit})


        // console.log(matches);

        // let firstDigit = matches[0];
        // if (numbers[firstDigit]) firstDigit = numbers[firstDigit]
        // else firstDigit = firstDigit[0];

        // let lastDigit = matches[matches.length - 1];
        // if (numbers[lastDigit]) {
        //     lastDigit = numbers[lastDigit]
        // }
        // else lastDigit = lastDigit[lastDigit.length - 1]

        // // console.log({firstDigit, lastDigit})
         let number = firstDigit + lastDigit;
        // console.log(number)
        // // let firstDigit = nums[0][0];
        // // let lastNum = nums[nums.length - 1];
        // // let lastDigit = lastNum[lastNum.length - 1];
        // // console.log({firstDigit, lastDigit});
        // // let number = firstDigit + lastDigit;
        // // console.log(number)
        sum = sum + parseInt(number);

    }
    console.log(sum)
} catch (e) {
    console.log('Error:', e.stack);
}