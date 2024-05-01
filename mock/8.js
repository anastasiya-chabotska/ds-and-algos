function possibilities(num, curRes, strRes, p){
    if(num == 9){
        console.log("finished calculating", num, curRes, strRes)

        if(curRes == 100){
            p.push(strRes);
        }
        return;
    }

    for(let i = 0; i < 3; i++){
        let nextNum = num + 1;
        console.log({nextNum});
        if(i == 0){
            let newStr = strRes + "+" + nextNum
            let newRes = eval(newStr);
            possibilities(nextNum, newRes, newStr, p)
        }
        else if(i == 1){
            let newStr = strRes + "-" + nextNum
            let newRes = eval(newStr);
            possibilities(nextNum, newRes, newStr, p)
        }
        else{
            console.log("special case ", {curRes, strRes})
            let newStr = strRes + "" + nextNum
            let newRes = eval(newStr)
            console.log("special case ", {newRes, newStr})

            possibilities(nextNum, newRes, newStr, p)
        }
    }


}



  const result = [];
possibilities(1, 1, '1', result)
console.log(result)

for(let res of result){
    console.log(eval(res))
}



// Recursive function to generate all possible expressions with +, -, or nothing between numbers 1 through 9
function generateExpressions(numbers) {
    if (numbers.length === 1) {
        console.log({numbers})
      return [numbers[0].toString()];
    }
  
    const current = numbers[0].toString();
    console.log({current})
    const rest = generateExpressions(numbers.slice(1));
  
    const expressions = [];
    for (let expr of rest) {
        console.log({expr})
      expressions.push(current + '+' + expr);
      expressions.push(current + '-' + expr);
      expressions.push(current + expr);
    }
    console.log("returning ")
    return expressions;
  }
  
  // Function to evaluate expressions and find those that result in a given target
  function findExpressionsForTarget(target, numbers) {
    const expressions = generateExpressions(numbers);
    const validExpressions = [];
  
    for (let expression of expressions) {
      try {
        // Use Function constructor to safely evaluate expressions
        const result = new Function(`return ${expression}`)();
        if (result === target) {
          validExpressions.push(expression);
        }
      } catch (e) {
        console.error("Error evaluating expression:", expression, e);
      }
    }
  
    return validExpressions;
  }
  
  // Find all expressions that result in 100 with numbers 1 through 9
  const target = 100;
  const numbers = Array.from({ length: 9 }, (_, i) => i + 1);
  const expressionsFor100 = findExpressionsForTarget(target, numbers);
  
  // Display the valid expressions
  console.log("Expressions that result in 100:");
  expressionsFor100.forEach((expr) => console.log(expr));
  