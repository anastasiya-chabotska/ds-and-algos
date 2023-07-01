/**
 * @param {string} s
 * @return {boolean}
 */

//Time: O(n) Space: O(n)
var isPalindrome = function(s) {

    //remove all non-alphanumeric characters

    let string = s.replace(/[\W_]/g, '')
    console.log(string)

    let left = 0;
    let right = string.length - 1;
    while(left < right){
        
        console.log("comparing", string[left], string[right])
        // console.log(string[left].localeCompare(string[right], undefined, {sensitivity: 'accent'}))
        if (string[left].localeCompare(string[right], undefined, {sensitivity: 'accent'})!=0){
            return false;
        }
        left++;
        right--;
    }
    return true;

    
};

//Time: O(n) Space: O(1)
var isPalindrome2 = function(s) {



    let left = 0;
    let right = s.length - 1;
    while(left < right){
        
        console.log("comparing", s[left], s[right])
        if(!/[a-zA-Z0-9]/.test(s[left])) {
            console.log("left")
            left++;
        }
        else if(!/[a-zA-Z0-9]/.test(s[right])) {
            console.log("right")
            right--;
        }
        // console.log(string[left].localeCompare(string[right], undefined, {sensitivity: 'accent'}))
        else if (s[left].localeCompare(s[right], undefined, {sensitivity: 'accent'})!=0){
            return false;
        }
        else {
        left++;
        right--;
        }
    }
    return true;

    
};


//localeCompare is more optimal for special unicode characters
//'ß'.toUpperCase() transforms the string to SS. Wow, not expected. In my opinion the ß should not be changed. But for this I prefer toLowerCase() for case insensitive check.

//since the problem mentions that we only care about alphanumeric then toLowerCase should be fine

console.log(isPalindrome2("race a car"))

