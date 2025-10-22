function move_func(n, arr) {
    let start = 0;
    for(let i = 0; i < n; i++){
       if(arr[i] !== 0){
           arr[start++] = arr[i]
       }
    }
    
    while(start <= n-1){
        arr[start++] = 0;
    }
    
    return arr;
}