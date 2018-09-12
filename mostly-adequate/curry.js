/*  # Curry
    The concept is simple: You can call a function with fewer arguments than it expects.
    It returns a function that takes the remaining arguments.
*/

const add = x => y => x + y;
const increment = add(1);
const addTen = add(10);

increment(2); // 3
addTen(2); // 12


// curry :: ((a, b, ...) -> c) -> a -> b -> ... -> c // From appendix
const curry = (fn) => {
    const arity = fn.length;

    return function $curry(...args) {
        if (args.length < arity) {
            return $curry.bind(null, ...args);
        }

        return fn.call(null, ...args);
    };
};

const match = curry((what, s) => s.match(what));
const replace = curry((what, replacement, s) => s.replace(what, replacement));
const filter = curry((f, xs) => xs.filter(f));
const map = curry((f, xs) => xs.map(f));

/*  The pattern I've followed is a simple, but important one.
    I've strategically positioned the data we're operating on (String, Array)
    as the last argument.
*/

match(/r/g, 'hello world'); // ['r']

const matchLetterR = match(/r/g);
matchLetterR('hello world'); // ['r']
matchLetterR('just j and s and t etc'); // null

filter(matchLetterR, ['rock and roll', 'smooth jazz']); // ['rock and roll']

const removeStringsWithoutRs = filter(matchLetterR); // xs => xs.filter(x => x.match(/r/g))
removeStringsWithoutRs(['rock and roll', 'smooth jazz', 'drum circle']); // ['rock and roll', 'drum circle']

const noVowels = replace(/[aeiou]/ig); // (r,x) => x.replace(/[aeiou]/ig, r)
const censored = noVowels('*'); // x => x.replace(/[aeiou]/ig, '*')
censored('Chocolate Rain'); // 'Ch*c*l*t* R**n'

/*  We can make new functions just by giving our base functions some arguments
    as seen in hasLetterR, removeStringsWithoutRs, and censored.
*/

const getChildren = x => x.childNodes;
const getAllTheChildren = map(getChildren);
/*  compared with allTheChildren function would be with the uncurried map from lodash (note the arguments are in a different order):
    const allTheChildren = elements => map(elements, getChildren);
*/

//  # Exercises
//  Helpers
const split = curry((sep, str) => str.split(sep));
const reduce = curry((fn, zero, xs) => xs.reduce(fn, zero));

const keepHighest = (x, y) => (x >= y ? x : y);
/*  # 1
    Refactor to remove all arguments by partially applying the function.
    const words = str => split(' ', str);
*/

const words = split(' ');

/*  # 2
    Refactor to remove all arguments by partially applying the functions.
    const filterQs = xs => filter(x => x.match(/q/i), xs);
*/

const filterQs = filter(match(/q/i));

/*  # 3
    Refactor `max` to not reference any arguments using the helper function
    `keepHighest`.
*/

const max = reduce(keepHighest, -Infinity);
max([1 , 3, 9 , 3, 4, 5]); // 9