var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    let result = [];
    let minStart = intervals[0][0], maxEnd = intervals[0][1], curInt = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        if (isOverlap(curInt, intervals[i])) {
            minStart = Math.min(minStart, intervals[i][0]);
            maxEnd = Math.max(maxEnd, intervals[i][1]);
            curInt = [minStart, maxEnd];
        }
        else {
            result.push(curInt);
            minStart = intervals[i][0];
            maxEnd = intervals[i][1];
            curInt = [minStart, maxEnd];
        }
    }

    result.push(curInt);
    console.log(result);
    return result;
};

// [1, 4] [0, 0]
var isOverlap = function (int1, int2) {
    let end1 = int1[1];
    let start2 = int2[0];
    if (end1 >= start2) return true;
    else return false;
}


//cleaner
var merge = function(intervals) {
    intervals.sort((a, b)=>a[0]-b[0])
    let result = [intervals[0]];
    for(let i = 1; i<intervals.length;i++){
        let cur = intervals[i];
        let prev = result[result.length - 1];
        if(cur[0] <= prev[1]){
            result[result.length - 1][1] = Math.max(cur[1], prev[1])
        }
        else{
            result.push(intervals[i])
        }
    }
    return result;
};
