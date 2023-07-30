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