const math = require('../../lib/arithmetic');


describe('add', ()=>{
  it('can add two numbers', ()=>{
    expect(math.add(4,6)).toBe(10);
    expect(math.add(40,60)).toBe(100);
  });

  it('can return null if non numbers are used', ()=>{
    expect(math.add('','')).toBe(null);
    expect(math.add(1, '')).toBe(null);
    expect(math.add('', 1)).toBe(null);
    expect(math.add('2', 1)).toBe(null);
    expect(math.add(1, '2')).toBe(null);
  });

});

describe('sub', ()=>{
  it('can subtract two postive numbers', ()=>{
    expect(math.sub(10,6)).toBe(4);
  });

  it('returns null given non-number inputs', ()=>{
    expect(math.sub()).toBe(null);
    expect(math.sub(undefined, undefined)).toBe(null);
    expect(math.sub(null, null)).toBe(null);
    expect(math.sub('','')).toBe(null);
    expect(math.sub(1,'')).toBe(null);
    expect(math.sub('',1)).toBe(null);
  });
});