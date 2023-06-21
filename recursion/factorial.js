// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
    //or if(number === 2) return 2;
    if(number === 1) return 1;

    return number * findFactorialRecursive(number - 1)
   
  }
  
  function findFactorialIterative(number) {
    
    let answer = number;
    while (number != 1){

        number--;
        answer = answer * number;
    }
    return answer;
  }

  //solution from the video
  function findFactorialIterative2(number){
    let answer = 1;
    if(number === 2){
        answer = 2;
    }
    for(let i = 2; i <= number; i++){
        answer = answer * i;
    }
    return answer;
  }


  console.log(findFactorialRecursive(5))
  console.log(findFactorialIterative(5))
  