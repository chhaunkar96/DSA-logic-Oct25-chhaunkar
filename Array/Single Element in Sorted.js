function singlelement(n, arr) {
    const map = new Map();

    for(let i = 0; i < n; i++){
        map.set(arr[i], (map.get(arr[i])+1) || 1)
    }

    for(let [key, value] of map){
        if(value === 1) {
            return key;
        }
    }

    return -1;
}