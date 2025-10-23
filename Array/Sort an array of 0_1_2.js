// Bubble sort
// TC: O(n^2)
// SC: O(1)
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

// Insertion sort:
// TC: O(n^2)
// SC: O(1)
function insertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    let currentElement = arr[i];

    let j = i - 1;

    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = currentElement;
  }

  return arr;
}

