// TC: O(n)
// SC: O(1)

function maxArea(n, height) {
    let start = 0
    let end = height.length - 1;
    let max = 0
    
    while(start <= end){
        let lower = Math.min(height[start], height[end])
        max = Math.max(max, lower*(end - start))
        
        if(height[start] > height[end]){
            end--
        }else{
            start++
        }
    }
    
    return max;
}
