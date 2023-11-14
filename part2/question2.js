

function containerWithMostWaterBF(height){

    let maxArea = 0;
    for(let a = 0; a < height.length; a++){ 

        for(let b = a + 1; b < height.length; b++){ 
            let length = Math.min(height[a], height[b]);
            let width = b - a;
            let area = length * width;
            maxArea = Math.max(area, maxArea)

        }
    }

    return maxArea;

}


var maxArea = function(height){

    let maxArea = 0;
    let a = 0;
    let b = height.length - 1;
    while (a < b){
        let length = Math.min(height[a], height[b]);
        let width = b - a;
        let area = length * width;
        maxArea = Math.max(maxArea, area);

        if(height[a] < height[b]) a++;
        else b--;
    }
    return maxArea;
}