var productExceptSelf = function (nums) {
    const answer = [];
    const prefix = [];
    const postfix = new Array(nums.length);
    prefix[0] = nums[0]
    postfix[nums.length - 1] = nums[nums.length - 1];

    let i = 1; j = nums.length - 2;
    while (i < nums.length && j >= 0) {
        prefix[i] = prefix[i - 1] * nums[i];
        postfix[j] = postfix[j + 1] * nums[j];
        i++;
        j--;
    }
    answer[0] = 1 * postfix[0 + 1];
    answer[nums.length - 1] = prefix[nums.length - 2] * 1;
    for (let i = 1; i < nums.length - 1; i++) {
        answer[i] = prefix[i - 1] * postfix[i + 1];
    }
    return answer;
};