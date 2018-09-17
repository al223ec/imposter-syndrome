/* eslint-disable */

function assertEqualArrays(x, y) {
  if (x.length !== y.length) {
    throw(`expected ${x} to equal ${y}`);
  }

  for (var i in x) {
    assertEqual(x[i], y[i]);
  }
}

function assertEqual(x, y) {
  if (x !== y) {
    throw(`expected ${x} to equal ${y}`);
  }
}

function testMeanMedianMode(obj) {
  // [ 1, 2, 3, 4, 5, 4, 6, 1] === { mean: 3.25, median: 3.5, mode: [1, 4] }
  // [ 9, 10, 23, 10, 23, 9 ] ==== { meain: 14, median: 10, mode: [] }
  const results = obj([ 1, 2, 3, 4, 5, 4, 6, 1]);
  console.log('Testing mean');
  assertEqual(3.25, results.mean);
  console.log('Mean passed!');
  console.log('Testing median ... ');
  assertEqual(3.5, results.median);
  console.log('Median passed!');
  console.log('Testing mode ... ');
  assertEqualArrays([1, 4], results.mode);
  console.log('Mode passed!');
}

module.exports = {
    assertEqual,
    assertEqualArrays,
    testMeanMedianMode
};
