const greeter = require('../../lib/greeter');
console.log(greeter);


describe('greeter', ()=> {
  describe('hiWorld()', ()=> {
    it('can return null', ()=>{
      var greeting = greeter.hiWorld(name);

      expect(greeting).toBe(null);
    });
  });

});