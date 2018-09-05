
const add = x => y => x + y;
const increment = add(1);
const addTen = add(10);

/* eslint-disable */

console.log(increment(2));
console.log(addTen(2));

function curry(fn) {
    return function() {
        if (fn.length > arguments.length) {
            const { slice } = Array.prototype;
            const args = slice.apply(arguments);

            return () => fn.apply(null, args.concat(slice.apply(arguments)));
        }

        return fn.apply(null, arguments);
    };
}

const addCurry = curry((a) => a + 10);
console.log(addCurry(10)); // 20

const complex = curry((a, b, c) => a + b + c);
console.log(complex(1, 2, 3));


// separet arity from functions
const get = curry((property, object) => object[property]);
const people = [ { name: 'Anton' }, { name: 'liv' } ];

console.log(people.map(get('name')));