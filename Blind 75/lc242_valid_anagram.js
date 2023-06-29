/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//not as efficient as the one below
var isAnagram = function (s, t) {

    // //sorting will take O(nlogn) if use good sorting algo
    // //but good sorting algo will usually take O(n) memory
    // let sS = s.split("").sort().join('');
    // let tS = t.split("").sort().join('');

    // if (sS === tS) return true;
    // else return false;

    //or 1 liner

    return s.split("").sort().join("") === t.split("").sort().join("")

};

/*
Use a HashMap

make a hm for s
make a hm for t

compare 2 hm's

Time: O(s + t)
Memory: O(s + t) for building hashmaps
*/

var isAnagram2 = function(s, t){

    if(s.length != t.length) return false;

    let hm_s = {};
    let hm_t = {};

    for(let c in s){

        if(hm_s[s[c]]) hm_s[s[c]]++;
        else hm_s[s[c]] = 1;
    }

    for(let c in t){

        if(hm_t[t[c]]) hm_t[t[c]]++;
        else hm_t[t[c]] = 1;
    }

    console.log(hm_s, hm_t)

    for(key of Object.keys(hm_s)){
        console.log("key ", key)
        if(hm_s[key]!=hm_t[key]) return false;
    }

    return true;
}

console.log(isAnagram("anagram", "gramana"))