function two_sum(arr, target) {
    for(let i = 0; i < arr.length -1; i++){
        for(let j= i+1; j <= arr.length -1; j++){
            if(arr[i]+arr[j] === target){
                return [i, j];
            }
        }
    }

}