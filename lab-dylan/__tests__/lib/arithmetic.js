const math = require('../../lib/arithmetic');


describe('add', ()=>{
  it('can add two numbers', ()=>{
    expect(math.add(4,6)).toBe(10);
    expect(math.add(40,60)).toBe(100);
  });

  it('can return null if non numbers are used', ()=>{
    expect(math.add('','')).toBe(null);
  });

});

describe('sub', ()=>{
  it('can subtract two postive numbers', ()=>{
    expect(math.sub(10,6)).toBe(4);
  });

  it('can return null', ()=>{
    expect(math.sub('','')).toBe(null);
  });
});