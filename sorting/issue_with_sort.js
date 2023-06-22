const letters = ['a', 'd', 'z', 'e', 'r', 'b']

//works ok
console.log(letters.sort())

const basket = [2, 65, 34, 2, 1, 7, 8, 6, 61]

//not ok, [1, 2, 2, 34, 65, 7, 8 ]
console.log(basket.sort())



const basket2 = [65, 60, 61, 62, 63, 67, 64, 7]
console.log(basket2.sort())
//because
'65'.charCodeAt(0)