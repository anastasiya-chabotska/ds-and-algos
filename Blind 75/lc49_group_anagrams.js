/**
 * @param {string[]} strs
 * @return {string[][]}
 */

 //Time: O(n * (k * log(k)))
 //Space: O(n * k))
 var groupAnagrams = function(strs) {
    
    let anagrams = {} 

//O(n)
    for(let i = 0; i < strs.length; i++){
        //O(k*log(k)) + O(k) + O(k)
        let string = strs[i]
        .split('') //T: (k) S: O(k)
        .sort() //T: (k*log(k)) S: log(k)
        .join('')//T: (k) S: O(k)
        if(anagrams[string]) anagrams[string].push(strs[i])
        else anagrams[string] = [strs[i]]
    }
//O(n)
    return Object.values(anagrams)
};



/** 
{
    "aet": ["eat", "tea"]
    "ant": ["tan"]
}
*/


//Time: O(n * m)
//Space: O(n * 26m) (n*m)
var groupAnagrams3 = function(strs) {
    
    let anagrams = {}

    for(let s of strs){

        let count = Array(26).fill(0);
        for(let c of s){

            let index = c.charCodeAt(0) - 'a'.charCodeAt(0);
            count[index]+=1;
        }
        
        if(anagrams[count]) anagrams[count].push(s);
        else anagrams[count] = [s]
    }

    return Object.values(anagrams)

};