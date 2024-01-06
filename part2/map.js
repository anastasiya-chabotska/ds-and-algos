const array1 = [1, 2, 3, 4];
 const initialValue = 0;
 const sumWithInitital = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue, initialValue
 )

 console.log(sumWithInitital);

 const array2 = [2, 3, 4, 5, 6];
 const initVal = 1;
 const sumWithInitial = array2.reduce(
    (acc, curVal) => acc + currVal, initVal
 )
 console.log()