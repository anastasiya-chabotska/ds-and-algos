var reverseWords = function(s) {
    s = s.split(" ");
    s = s.filter(char => char!='');
    s = s.reverse();
    s = s.join(" ");
    return s;
    
 };
 // var reverseWords = function(s) {
 //     s = s.trim();
 //     let curWord = "";
 //     let answer = "";
 //     for(let i = 0; i < s.length; i++){
 //         if(s[i]!=" "){
 //             curWord += s[i];
 //         }
 //         else{
 //             if(curWord!=""){
 //             answer = curWord + " " + answer;
 //             curWord = "";
 //             }
 //         }
 //     }
 //     answer = curWord + " " + answer;
 //     answer = answer.trim();
 
 //     return answer;
 // };