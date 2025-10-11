## Binary Search in JavaScript

Binary Search is an efficient algorithm for finding a target value (`needle`) in a sorted array (`nums`).  
It repeatedly divides the search range in half, reducing the time complexity to **O(log n)**.

### Code Implementation

```js
function binarySearch(nums, needle) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (nums[mid] === needle) {
            return mid;
        } else if (needle < nums[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return -1;
}

let res = binarySearch([1, 2, 3, 5, 7], 1);
console.log(res); // Output: 0
