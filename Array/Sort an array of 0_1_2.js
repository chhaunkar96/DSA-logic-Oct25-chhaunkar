
function sort_an_array(n, arr) {
    
    for(let i = 0; i < n; i++){
        for(let j = i; j < n; j++){
            if(arr[i] > arr[j]){
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    
    return arr;
}