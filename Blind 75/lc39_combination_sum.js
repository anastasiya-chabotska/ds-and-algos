/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = []

    let i = 0;
    let cur = [];


    function dfs(i, cur, total){
        //if the sum of the cur == target push to res
        //console.log(i, cur, total)

        if(total == target) {
          res.push([...cur]);
          return;
           
        }

        if(total > target || i >= candidates.length) return

        cur.push(candidates[i])
        dfs(i, [...cur], total+candidates[i])
        cur.pop()
        dfs(i + 1, [...cur], total)



    }
    dfs(i, cur, 0)
    return res;
};


/*decision tree

[2, 3, 6, 7] 7
                                -
                                         [2]                                     []

                        [2, 2]                         [2] 

            [2, 2, 2]               [2, 2]        [2, 3]  [2]

[2, 2, 2, 2]      [2, 2, 2]   [2, 2, 3]   [2, 2]

*/
