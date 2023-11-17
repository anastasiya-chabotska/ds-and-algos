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

