
const {
    reduce,
    curry,
    replace,
    toLowerCase,
    join,
    map,
    split,
    trace,
    get,
    last,
    prop } = require("./appendix");

    // compose :: ((a -> b), (b -> c),  ..., (y -> z)) -> a -> z
const compose = (...fns) => (...args) => fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];

// f and g are functions and x is the value being "piped" through them.
const compose2 = (f, g) => x => f(g(x));

const toUpperCase = x => x.toUpperCase();
const exclaim = x => `${x}!`;
const shout = compose(exclaim, toUpperCase);

console.log(shout('send in the clowns'));

/*  The composition of two functions returns a new function.
    This makes perfect sense: composing two units of some type
    (in this case function) should yield a new unit of that very type.

    In our definition of compose, the g will run before the f, creating a right to left flow of data.
    This is much more readable than.

    const shout = x => exclaim(toUpperCase(x));


    associativity
    compose(f, compose(g, h)) === compose(compose(f, g), h);
    Composition is associative, meaning it doesn't matter how you group two of them.
*/

const head = x => x[0];
const reverse = reduce((acc, x) => [x].concat(acc), []);
// const last = compose(head, reverse);

last(['jumpkick', 'roundhouse', 'uppercut']); // uppercut

compose(toUpperCase, compose(head, reverse));
// or
compose(compose(toUpperCase, head), reverse);

/*  Since it doesn't matter how we group our calls to compose, the result
    will be the same. That allows us to write a variadic compose and use it as follows:
*/

// previously we'd have to write two composes, but since it's associative,
// we can give compose as many fn's as we like and let it decide how to group them.
const arg = ['jumpkick', 'roundhouse', 'uppercut'];
const lastUpper = compose(toUpperCase, head, reverse);
const loudLastUpper = compose(exclaim, toUpperCase, head, reverse);

lastUpper(arg); // 'UPPERCUT'
loudLastUpper(arg); // 'UPPERCUT!'

/*  Pointfree style means never having to say your data. It means functions that never mention
    the data upon which they operate. First class functions, currying, and composition all play
    well together to create this style.

    not pointfree because we mention the data: word
    const snakeCase = word => word.toLowerCase().replace(/\s+/ig, '_');

    pointfree:
*/

const snakeCase = compose(replace(/\s+/ig, '_'), toLowerCase);

/*  See how we partially applied replace? What we're doing is piping our data through each function
    of 1 argument. Currying allows us to prepare each function to just take its data, operate on it,
    and pass it along. Something else to notice is how we don't need the data to construct our function
    in the pointfree version, whereas in the pointful one, we must have our word available before anything else.

    // pointful
    const initials = name => name.split(' ').map(compose(toUpperCase, head)).join('. ');
*/


const initials = name => name.split(' ').map(compose(toUpperCase, head)).join('. ');
// pointfree
// const initials = compose( join, trace, map(compose(toUpperCase, head)), split(' '));

console.log(initials('hunter stockton thompson')); // 'H. S. T'


/*  Pointfree code can again, help us remove needless names and keep us concise and generic. Pointfree is a good
    litmus test for functional code as it lets us know we've got small functions that take input to output. One
    can't compose a while loop, for instance. Be warned, however, pointfree is a double-edged sword and can
    sometimes obfuscate intention.
*/

const cars = [{
    name: 'Aston Martin One-77',
    horsepower: 750,
    dollar_value: 1850000,
    in_stock: true,
},{
    name: 'BMW X5',
    horsepower: 500,
    dollar_value: 1250000,
    in_stock: false,
},{
    name: 'Volvo 740',
    horsepower: 5000,
    dollar_value: 250000,
    in_stock: true,
}];

const isLastInStock = compose(get('in_stock'), last);
isLastInStock(cars);

