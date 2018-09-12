// curry :: ((a, b, ...) -> c) -> a -> b -> ... -> c
const curry = (fn) => {
    const arity = fn.length;

    return function $curry(...args) {
        if (args.length < arity) {
            return $curry.bind(null, ...args);
        }

        return fn.call(null, ...args);
    };
};

// join :: Monad m => m (m a) -> m a
const join = m => { 
    console.log(m.bound);
    return m.join();
};

// map :: Functor f => (a -> b) -> f a -> f b
const map = curry((fn, f) => f.map(fn));

const reduce = curry((fn, zero, xs) => xs.reduce(fn, zero));
const replace = curry((re, rpl, str) => str.replace(re, rpl));
// split :: String -> String -> [String]
const split = curry((sep, str) => str.split(sep));
// toLowerCase :: String -> String
const toLowerCase = s => s.toLowerCase();
const trace = curry((tag, x) => {
    console.log(tag, x);
    return x;
});

module.exports = {
    curry,
    reduce,
    replace,
    toLowerCase,
    join,
    map,
    split,
    trace,
};