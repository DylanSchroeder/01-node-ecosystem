const greeter = require('../../lib/greeter');
console.log(greeter);


describe('greeter', ()=> {
  describe('hiWorld()', ()=> {
    it('can return null', ()=>{
      var greeting = greeter.hiWorld(0);

      expect(greeting).toBe(null);
    });

    it('can greet the world', () => {
      expect(greeter.hiWorld('world')).toBe('hello world');
    });
  });

});