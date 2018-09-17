
// Nothing special, guess there is a lot smarter solutions but great readability
// function fizzBuzz(num) {
//     for (let i = 1; i <= num; i += 1) {
//         if (i % 3 === 0 && i % 5 === 0) { // || i % 15 === 0
//             console.log('fizzBuzz');
//         } else if (i % 3 === 0) {
//             console.log('fizz');
//         } else if (i % 5 === 0) {
//             console.log('buzz');
//         } else {
//             console.log(i);
//         }
//     }
// }

const getI = c => c.toLowerCase().trim();
function harmlessRansomNote(noteText, magazineText) {
    const hashMatch = magazineText.split(' ').reduce((acc, curr, i, arr) => {
        acc[getI(curr)] = arr.filter(e => e === curr).length;
        return acc;
    }, {});

    // The arr.filter here could be refatored and thus create linear complexity, we don't really want nested arrays.
    // return noteText.split(' ').reduce((acc, curr, i, arr) => acc && hashMatch[curr.toLowerCase().trim()] > arr.filter(e => e === curr).length, true);
    // This solution has no netsted array however it has lost it's purity on row 35

    return noteText.split(' ').reduce((acc, curr) => {
        const index = getI(curr);
        if (!acc) {
            return false;
        }

        if (hashMatch[index] > 0) {
            hashMatch[index] -= 1; // not pure anymore
            return true;
        }

        return false;
    }, true);
}

// console.log(harmlessRansomNote('this is a secret note for you from a secret admirer',
//     'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited'
// ));

function isPalindrome(string) {
    const validChars = 'abcdefghijklmnopqrstuvwxyz';
    const chars = string.toLowerCase().split('').filter(s => validChars.includes(s));

    return chars.join('') === chars.reverse().join('');
}

// Palindromes
// console.log(isPalindrome('Madam I\'m Adam'));
// console.log(isPalindrome('No Madam I\'m Adam'));
// console.log(isPalindrome('race car'));


function ceasarCipher (str, n) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return str.toLowerCase().split('').reduce((acc, curr, i, arr) => {
        if (curr === ' '){
            return `${acc} `;
        }
        const index = (alphabet.indexOf(curr) + n) % alphabet.length;
        return acc + alphabet[index < 0 ? alphabet.length + index : index];
    }, '');
}


function reverseWords (str) {
    return str.split(' ').reduce((acc, word) => {
        const reversedWord = word.split('').reduceRight((acc, curr) => acc += curr, '');
        return `${acc} ${reversedWord}`;
    }, '');
}

// console.log(reverseWords('this is a string of words'))
// console.log(ceasarCipher('Zoo Keeper', 2)); // bqq mggrgt
// console.log(ceasarCipher('Big Car', -16)); // lsq mkb
// console.log(ceasarCipher('Javascript', -900)); // tkfkcmbszd
// console.log(ceasarCipher('anton ledström', 1));

// Fibinaci
// F(n) = F(n-1) + F(n-2)
// (2^N) time complexity, i e exponential and very bad
// function fibonacci(num) {
//     if (num <= 1) {
//         return 1;
//     }
//     return fibonacci(num - 1) + fibonacci(num - 2);
// }

// smarter recursion and fastest
function fib(prev, currentFibNumber, n) {
    // we don't have to recalculate all numbers
    return n ? fib(currentFibNumber, prev + currentFibNumber, n - 1) : prev;
}
// console.log(fib(0, 1, 50));

// linear time
// O(2n)
function fibonacci(num, memo) {
    memo = memo || {};

    if (memo[num]) return memo[num];
    if (num <= 1) return 1;

    return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}

const { assertEqual } = require("./test");

const getMean = (arr) => arr.reduce((acc, curr) => acc + curr, 0)/arr.length;
  // [ 1, 2, 3, 4, 5, 4, 6, 1] === { mean: 3.25, median: 3.5, mode: [1, 4] }
  // [ 9, 10, 23, 10, 23, 9 ] ==== { mean: 14, median: 10, mode: [] }
assertEqual(3.25, getMean([ 1, 2, 3, 4, 5, 4, 6, 1]));
assertEqual(14, getMean([ 9, 10, 23, 10, 23, 9 ]));
console.log('mean passed!');

const getMedian = (arr) => {
    const sortArr = arr.sort((a, b) => a - b);
    const split = arr.length/2;

    return arr.length % 2 === 0 ? (sortArr[split-1] + sortArr[split])/2 : sortArr[Math.floor(split)];
};

assertEqual(3.5, getMedian([ 1, 2, 3, 4, 5, 4, 6, 1]));
assertEqual(10, getMedian([ 9, 10, 23, 10, 23, 9 ]));
console.log('median passed!');


const getMode = (arr) => {
    const matchHash = arr.reduce((acc, curr) => {
        acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
        return acc;
    }, {});

    // Object.entries(matchHash).reduce((acc, curr) => {
    //     // curr [key, value] pairs
    //     const key = curr[0];
    //     const value = curr[1];
    //     value > curr[1] ? curr : curr
    //      return value > matchHash[acc[0]] ? [key] : value === acc[0] ? acc.push(key) : acc;
    // }, [null, -Infinity]);
    // return arr.reduce((acc, curr) => {
    //     matchHash[curr] >= acc[0];
    //     acc.push(curr);
    // }, [])

}

// function getMode(array) {
//     var modeObj = {};
    
//     // create modeObj
//     array.forEach(num => {
//       if (!modeObj[num]) modeObj[num] = 0;
//       modeObj[num]++;
//     });
    
//     // create array of mode/s 
//     var maxFrequency = 0;
//     var modes = [];
//     for (var num in modeObj) {
//       if (modeObj[num] > maxFrequency) {
//         modes = [num];
//         maxFrequency = modeObj[num];
//       }
//       else if (modeObj[num] === maxFrequency) modes.push(num);
//     }
//     // if every value appears same amount of times 
//     if (modes.length === Object.keys(modeObj).length) modes = [];
//     return modes;
//   }
   

console.log(getMode([ 1, 2, 3, 4, 5, 4, 6, 1]))