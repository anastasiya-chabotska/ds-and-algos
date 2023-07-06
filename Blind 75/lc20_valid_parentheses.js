/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    let matches = {
        '(': ')',
        '{': '}',
        '[': ']'

    }
    
    let stack = [];

    for (let c in s){
        
        //peek the last element in the stack
        let peeked = stack[stack.length - 1];        
        //check if char is closing pair of peeked
        if(s[c] == matches[peeked]) stack.pop()
        else stack.push(s[c])
    }

return stack.length == 0 ? true : false
};