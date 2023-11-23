var validPalindrome = function(s) {

    let left = 0, right = s.length - 1;
    while(left < right){
        if(s[left]!=s[right]){
            return validSubPalindrome(s, left + 1, right) || validSubPalindrome(s, left, right - 1);
        }
        left++;
        right--;
    }
    return true;
 
  
};

var validSubPalindrome = function(s, left, right){
   while(left < right){
       if(s[left]!==s[right]) return false
       left++;
       right--;
   }
   return true;
}



//Almost Palindrome (my solution)
var validPalindrome = function(s, left = 0, right = s.length - 1, deleted = false) {
    while(left < right){
        if(s[left]!=s[right]){
          

            if(!deleted){
               return validPalindrome(s, left + 1, right, true) || validPalindrome(s, left, right - 1, true)
    }
    else return false;
        }
        left++;
        right--;
   
    }
    return true;
  
};

//compare against reverse
var isPalindrome3 = function (s) {

    //aabaa
    //aabbaa
    s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    let s1 = s.split("").reverse().join("");
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== s1[i]) return false;
    }
    return true;

};


const isValidPalindromeFromLecture = function(s) {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let rev = "";
    
    // generate a reverse string using a reverse for loop.
    for(let i = s.length - 1; i >= 0; i--) {
        rev += s[i];
    }

    return rev === s;
};

//2 pointers from center
var isPalindrome2 = function (s) {

    //aabaa
    //aabbaa
    s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    let right = Math.floor(s.length / 2);
    let left = right;
    if (s.length % 2 == 0) left = right - 1;

    while (left >= 0 && right < s.length) {
        if (s[left] !== s[right]) return false;
        left--;
        right++
    }
    return true;

};

//2 pointers from outside
var isPalindrome1 = function (s) {

    s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    let left = 0, right = s.length - 1;
    while (left < right) {
        if (s[left] != s[right]) return false;
        left++;
        right--;
    }
    return true;
};