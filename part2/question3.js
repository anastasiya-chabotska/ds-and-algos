var trapBF = function (height) {


    let totalWater = 0;

    for (let i = 0; i < height.length; i++) {

        let left = height[i];
        let right = height[i];

        let leftI = i;
        while (leftI >= 0) {
            left = Math.max(left, height[leftI]);
            leftI--;
        }

        let rightI = i;
        while (rightI < height.length) {
            right = Math.max(right, height[rightI]);
            rightI++;
        }

        let currentWater = Math.min(left, right) - height[i];
        if (currentWater > 0)
            totalWater = totalWater + currentWater;

    }

    return totalWater;
};

var trap = function (height) {


    let totalWater = 0;

    let pLeft = 0;
    let pRight = height.length - 1;
    let maxLeft = height[pLeft];
    let maxRight = height[pRight];

    while (pLeft < pRight) {

        let curLeft = height[pLeft];
        let curRight = height[pRight];

        if (curLeft <= curRight) {
            if (curLeft > maxLeft) maxLeft = curLeft;
            else {
                let currentWater = maxLeft - curLeft;
                totalWater += currentWater;
            }
            pLeft++;
        }
        else {
            if (curRight > maxRight) maxRight = curRight;
            else {
                let currentWater = maxRight - curRight;
                totalWater += currentWater;
            }

            pRight--;
        }
    }

    return totalWater;
};