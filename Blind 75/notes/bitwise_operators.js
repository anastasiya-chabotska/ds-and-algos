// 1 = 00000001
// 8 bits
// 2 = 00000010
// R = 00000011
//bitwise or goes vertically comparing
//if you convert R, console log will give 3
//AND
// R = 00000000


console.log(1 | 2); //Bitwise OR
//logical OR is ||
console.log(1 & 2); //Bitwise AND

// Read, Write, Execute
// 00000100 - r
// 00000010 - w
// 00000001 - x


const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission
console.log(myPermission) // 6 
//00000110

let message = (myPermission & readPermission) ? 'yes' : 'no'
console.log(message)


let num1 = 6; // 110
let num2 = 3; // 011
//               010 - 2
// 0 & 1 = 0
// 0 | 1 = 1
console.log(num1 & num2) //2

//exclusive OR ^
// 0 ^ 1 = 1
// 1 ^ 1 = 0