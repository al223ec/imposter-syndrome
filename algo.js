
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


console.log(isPalindrome('Madam I\'m Adam'));
console.log(isPalindrome('No Madam I\'m Adam'));
console.log(isPalindrome('race car'));