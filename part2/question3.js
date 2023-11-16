var trapBF = function(height) {
    

    let totalWater = 0;

    for(let i = 0; i <height.length; i++){

        let left = height[i];
        let right = height[i];

        let leftI = i;
        while(leftI >= 0){
            left = Math.max(left, height[leftI]);
            leftI--;
        }

        let rightI = i;
        while(rightI < height.length){
            right = Math.max(right, height[rightI]);
            rightI++;
        }

        let currentWater = Math.min(left, right) - height[i];
        if(currentWater > 0)
        totalWater = totalWater + currentWater;

    }

    return totalWater;
};