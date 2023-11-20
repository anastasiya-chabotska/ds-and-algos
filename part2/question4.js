const backspaceCompareFinal = function(s, t){

    let p1 = s.length - 1, p2 = t.length - 1;

    while(p1 >= 0 || p2 >= 0){
        console.log({p1, p2})
        if(s[p1] === '#' || t[p2] === '#'){
            if(s[p1]=== '#'){
                let backTrackCount = 2;
                while(backTrackCount > 0){
                    p1--;
                    backTrackCount--;
                    if(s[p1]==='#') backTrackCount += 2;
                }
            }
            if(t[p2]=== '#'){
                let backTrackCount = 2;
                while(backTrackCount > 0){
                    p2--;
                    backTrackCount--;
                    if(t[p2]==='#') backTrackCount += 2;
                }
            }
        }
        else{
            if(s[p1]!==t[p2]) return false;
            else{
                p1--;
                p2--;
            }
        }
    }
    return true;

}

const movePointer = function (index, string, numHashes = 0) {
    let p = index;

    console.log(p, numHashes, string[p])
    if (p < 0) return null;

    if (string[p] == '#') {
        numHashes++;
        p--;
    }
    else {
        if (numHashes > 0) {
            p--;
            numHashes--;
        }
        else {
            console.log("returning ", p)
            return p;
        }
    }

    return movePointer(p, string, numHashes);


}

const backspaceCompare = function (s, t) {

    let pS = s.length - 1, pT = t.length - 1;

    let currentS = s[pS];
    let currentT = s[pT];
    while (pS > 0 || pT > 0) {

        if (pS > 0) {
            currentS = s[pS];
            if (currentS == '#') pS = movePointer(pS, s);
            currentS = s[pS]
        }
        else currentS = null;
        if (pT > 0) {
            currentT = t[pT];
            if (currentT == '#') pT = movePointer(pT, t);
            console.log({ pT })
            currentT = t[pT]
        }
        else currentT = null;

        console.log({ currentS, currentT })
        if (currentS != currentT) return false;
        else {
            pS--;
            pT--;
        }

    }


}

var backspaceCompareBF = function (s, t) {

    let sArr = [];
    let tArr = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] == '#') sArr.pop()
        else sArr.push(s[i])
    }

    for (let i = 0; i < t.length; i++) {
        if (t[i] == '#') tArr.pop()
        else tArr.push(t[i])
    }

    if (sArr.length == tArr.length) {
        for (let i = 0; i < sArr.length; i++) {
            if (sArr[i] != tArr[i]) return false;
        }
        return true;
    }
    else return false;

};


const removeHashes = function (string) {

    let finalString = [];

    for (let i = 0; i < string.length; i++) {
        if (string[i] == '#') {
            finalString.pop();
        }
        else {
            finalString.push(string[i]);
        }
    }

    return finalString;
}

const backspaceCompareBF2 = function (s, t) {
    let finalS = removeHashes(s);
    let finalT = removeHashes(t);

    if (finalS.length !== finalT.length) return false;
    else {
        for (let i = 0; i < finalS.length; i++) {
            if (finalS[i] !== finalT[i]) return false
        }
    }
    return true;
}


console.log(backspaceCompareBF2("a#c", "b"))

