const math = {};

math.add = function (a, b){
  if(typeof a !== 'number' || typeof b !== 'number') {
    return null;
  }
  return a + b;
};

math.sub = function (a, b){
  if(typeof a !== 'number' || typeof b !== 'number') {
    return null;
  }
  return a - b;
};

module.exports = math;