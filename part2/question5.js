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
var lengthOfLongestSubstring = function(s) {
    if(s.length <= 1) return s.length;

    let max = 0, left = 0, right = 0, seenChars = {};

    while(right < s.length){
        let currentChar = s[right];
        if(seenChars[currentChar]==null){
            seenChars[currentChar] = right;
            let currentLength = right - left + 1;
            max = Math.max(currentLength, max);
            right++;
        }
        else{
            left = seenChars[currentChar] + 1;
            right = left;
            seenChars = {};
        }

    }
    return max;

}