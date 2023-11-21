var lengthOfLongestSubstringBF = function(s) {

    let max = 0;
    for(let i = 0; i < s.length; i++){
        let hashMap = {}, tempMax = 1;
        hashMap[s[i]] = i;
        for(let j = i + 1; j < s.length; j++){
            let currChar = s[j];
            if(hashMap[currChar]!=null){
                break;
            }
            else{
                hashMap[currChar] = j;
                tempMax++;
            }
        }
        max = Math.max(max, tempMax)

    }
    return max;
}