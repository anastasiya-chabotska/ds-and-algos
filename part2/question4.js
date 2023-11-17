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

