var backspaceCompareBF = function(s, t) {

    let sArr = [];
    let tArr = [];

    for(let i = 0; i < s.length; i++){
        if(s[i]=='#') sArr.pop()
        else sArr.push(s[i])
    }

     for(let i = 0; i < t.length; i++){
        if(t[i]=='#') tArr.pop()
        else tArr.push(t[i])
    }

    if(sArr.length == tArr.length){
        for(let i = 0; i < sArr.length; i++){
            if(sArr[i]!=tArr[i]) return false;
        }
        return true;
    }
    else return false;
    
};


const removeHashes = function (string){

    let finalString = [];

    for (let i =0; i < string.length; i++){
        if(string[i]=='#'){
            finalString.pop();
        }
        else{
            finalString.push(string[i]);
        }
    }

    return finalString;
}

const backspaceCompareBF2 = function(s, t){
    let finalS = removeHashes(s);
    let finalT = removeHashes(t);

    if(finalS.length!==finalT.length) return false;
    else{
        for(let i =0; i < finalS.length; i++){
            if(finalS[i]!==finalT[i]) return false
        }
    }
    return true;
}


console.log(backspaceCompareBF2("a#c", "b"))

