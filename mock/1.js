var isPalindrome = function(s){
    let left = 0, right = s.length - 1;
    while(left < right){
        if(!isAlphaNum(s[left])){
            left++;
        }
        else if(!isAlphaNum(s[right])){
            right--;
        }
        else if(s[left].toLowerCase()!=s[right].toLowerCase()) return false;
        else 
        {left++;
        right--;
        }
    }
    return true;
}

var isAlphaNum = function(char){
    char = char.toLowerCase();
    if((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) return true;
    else return false;
}


// var isPalindrome = function(s){
//     s = s.replaceAll(/[^A-Za-z0-9]/g, "").toLowerCase();
//     let left =0, right = s.length - 1;
//     while(left < right){
//         if(s[left]!=s[right]) return false;
//         left++;
//         right--;
//     }
//     return true;
// }
