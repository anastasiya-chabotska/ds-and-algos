//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str) {

    if(str.length == 1) return str;

    return str[str.length -1] + reverseString(str.substring(0, str.length - 1))

}

console.log(reverseString('yoyo mastery'))
//should return: 'yretsam oyoy'


function reverseString2(str){

    let strArr = str.split("");
    //console.log(strArr)

    let start = 0;
    let end = strArr.length - 1;
    while(start < end){
        let temp = strArr[end];
        strArr[end] = strArr[start];
        strArr[start] = temp;
        start++;
        end--;
    }
    return strArr.join("")
}

console.log(reverseString2('yoyo mastery'))