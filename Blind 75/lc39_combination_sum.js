/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */


var combinationSum = function (candidates, target) {

  let res = [];

  function backTracking(target, combinations, answer, candidates, index) {

    //console.log("bt: ", target, combinations, answer, candidates)

    if (target == 0) {
      answer.push(combinations);
      return;
    }

    if (target < 0) return;

    else {
      for (let i = index; i < candidates.length; i++) {
        combinations.push(candidates[i]);
        backTracking(target - candidates[i], [...combinations], answer, candidates, i);
        combinations.pop();

      }
    }

  }

  backTracking(target, [], res, candidates, 0)

  return res;

};


//space complexity is O(target val / smallest val in candidates) b/c max depth of the tree is when it keeps adding the smallest element to the combination until it hits or exceeds target. time: O(number of candidates^max depth)
//2^t - because each time you make 2 decisions, and the max height of it will equal to the target number, otherwise we stop
var combinationSum = function (candidates, target) {
  let res = []

  let i = 0;
  let cur = [];


  function dfs(i, cur, total) {
    //if the sum of the cur == target push to res
    //console.log(i, cur, total)

    if (total == target) {
      res.push([...cur]);
      return;

    }

    if (total > target || i >= candidates.length) return

    cur.push(candidates[i])
    dfs(i, [...cur], total + candidates[i])
    cur.pop()
    dfs(i + 1, [...cur], total)



  }
  dfs(i, cur, 0)
  return res;
};

//O(n*target*avg(third for loop))
var combinationSum = function (candidates, target) {

  let dp = new Array(target + 1).fill(null).map(() => []);

  //2
  for (let c of candidates) {
    for (let i = 1; i < dp.length; i++) {
      if (c > i) continue;
      if (c == i) {

        dp[i].push([c]);
      }
      else {
        let r = i - c;
        if (dp[r].length > 0) {
          for (let rem of dp[r]) {
            //console.log(rem)
            dp[i].push(rem.concat([c]))
          }
        }
      }

    }
  }



  return dp[target]
};

/*decision tree

[2, 3, 6, 7] 7
                                -
                                         [2]                                     []

                        [2, 2]                         [2] 

            [2, 2, 2]               [2, 2]        [2, 3]  [2]

[2, 2, 2, 2]      [2, 2, 2]   [2, 2, 3]   [2, 2]

*/
