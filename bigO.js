// Constant runtime
// Big O Notation: "O (1)"

function log(array) {
    console.log(array[0]);
    console.log(array[1]);
}

// Linear runtime
// Big O Notation: "O (n)"
function logAll(array) {
    array.forEach((e) => {
        console.log(e);
    });
}


// Exponential runtime
// Big O Notation: "O (n^2)"
function addAndLog(array) {
    array.forEach((e) => {
        array.forEach((_e) => {
            console.log(e + _e);
        });
    });
}


// Logaritmic runtime, time complexity
// Big O Notation: 0 (log n)
// 4000 elements => 12 operations

function binarySearch(sortedArray, key) {
    let low = 0;
    let high = sortedArray.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2, 10);
        const element = sortedArray[mid];
        if (element < key) {
            low = mid + 1;
        } else if (element > key) {
            high = mid - 1;
        } else {
            return mid;
        }
    }

    return -1;
}


