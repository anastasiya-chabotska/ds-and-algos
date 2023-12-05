const letters = ['a', 'd', 'z', 'e', 'r', 'b']; //this will sort fine
const basket = [2, 65, 34, 2, 1, 7, 8]; // this will sort based on character codes


'65'.charCodeAt(0);

//also the space and time can not be guaranteed

//other languages characters are also not properly supported, ex., á
const spanish = ['único', 'árbol', 'cosas', 'fútbol']
spanish.sort(function(a, b){
    return a.localeCompare(b);
})


basket.sort(function(a, b){
    return a - b;
})