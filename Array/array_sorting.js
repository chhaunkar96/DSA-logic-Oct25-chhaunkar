// TC: O(n^2)
// SC: O(1)
function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j + 1]
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

const data = [8, 3, 5, 4, 6];

const sortedArr = bubbleSort(data);
console.log('Sorted Array:', sortedArr.join(', '));


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

data = [8, 3, 5, 4, 6];

const sortedArray = insertionSort(data);
console.log('\nSorted Array:', sortedArray.join(', '));