const greeter = require('../../lib/greeter');
console.log(greeter);

describe('greeter', ()=> {
  describe('hiWorld()', ()=> {
    it('returns null given non-string', ()=>{
      expect(greeter.hiWorld(null)).toBe(null);
      expect(greeter.hiWorld(undefined)).toBe(null);
      expect(greeter.hiWorld(true)).toBe(null);
      expect(greeter.hiWorld(false)).toBe(null);
      expect(greeter.hiWorld({})).toBe(null);
      expect(greeter.hiWorld([])).toBe(null);
    });

    it('returns null given an empty string', ()=>{
      var greeting = greeter.hiWorld('');
      expect(greeting).toBe(null);
    });

    it('returns null given an extra string', ()=>{
      expect(greeter.hiWorld('one', 'two')).toBe(null);
      expect(greeter.hiWorld('one', 'two', 'three')).toBe(null);
      expect(greeter.hiWorld('one', 'two', 'three', 'four')).toBe(null);
    });

    it('returns null given a number', ()=>{
      var greeting = greeter.hiWorld(0);
      expect(greeting).toBe(null);
    });

    it('can greet the world', () => {
      expect(greeter.hiWorld('world')).toBe('hello world');
    });

    it('can greet people', () => {
      expect(greeter.hiWorld('Dylan')).toBe('hello Dylan');
    });
  });

});