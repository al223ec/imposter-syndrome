/* eslint-disable */

function assertEqualArrays(x, y) {
    if(x.length !== y.length) throw("expected "+x+" to equal "+y);
    for(var i in x) {
      if(x[i] !== y[i]) {
        throw("expected "+x+" to equal "+y);
      }
    }
  }
  function assertEqual(x,y){
    if(x !== y) throw("expected "+x+" to equal "+y);
  }

module.exports = {
    assertEqual,
    assertEqualArrays,
};
