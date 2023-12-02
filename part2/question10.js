var isValid = function(s) {
    let stack = [];
    let matches = {
        '{' : '}',
        '(': ')',
        '[': ']'
    }
   for (let i in s){
       let c = s[i];
       if(matches[c]){
           stack.push(c)
       }
       else{
           let lastPar = stack.pop();
           if(matches[lastPar]!==c) return false;

       }
    

   }
   return stack.length == 0;
};