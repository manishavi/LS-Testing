const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project-2 Functions', () => {
   describe('`getBiggest`', () => {
    it('should be a function', () => {
      const getBiggest = funcs.getBiggest;
      assert.typeOf(getBiggest, 'function');
    });
    it('should be a number', () => {
        const x = 3;
        const y = 7;
        assert.isNumber(x, 'what is the value');
    });
    it('should be greater than or equal to', () => {
        const x = 3;
        const y = 7;
        assert.isAtLeast(y, x, 'y is greater than or equal to x');
    });
   });  

   describe('`greeting`', () => {
    it('should be a function', () => {
        const greeting = funcs.greeting;
        assert.typeOf(greeting, 'function');
    });
    it('should be a string', () => {
        const greet = funcs.greeting('');
        assert.typeOf(greet, 'string');
    });
    it('should handle German, English, Spanish', () => {
        const greetGerm = funcs.greeting('German');
        const greetEng = funcs.greeting('English');
        const greetSpan = funcs.greeting('Spanish');
        assert.equal(greetGerm, 'Guten Tag!');
        assert.equal(greetEng, 'Hello!');
        assert.equal(greetSpan, 'Hola!');
    });
   }); 

   describe('`isTenOrFive`', () => {
    it('should be a function', () => {
        const isTenOrFive = funcs.isTenOrFive;
        assert.typeOf(isTenOrFive, 'function');
    });
    it('should be a number', () => {
      const num = 4;
      assert.typeOf(num, 'number');
    });
    it('should be equal to false', () => {
      const num = 50;
      const isTenOrFive = funcs.isTenOrFive;
      assert.isFalse(isTenOrFive(num), 'this should be false');
    });
   });


   describe('`isInRange`', () => {
    it('should be a function', () => {
        const isInRange = funcs.isInRange;
        assert.typeOf(isInRange, 'function');
    });
    it('should be a number', () => {
      const num = 4;
      assert.typeOf(num, 'number');
    });
    it('should be equal to false', () => {
      const num = 50;
      const isInRange= funcs.isInRange;
      assert.isFalse(isInRange(num), 'this should be false');
    });
    it('should be a boolean', () => {
      const num = 30;
      const isInRange = funcs.isInRange;
      assert.isBoolean(isInRange(num), 'true or false');
    });
   });  

   describe('`isInteger`', () => {
    it('should be a function', () => {
        const isInteger = funcs.isInteger;
        assert.typeOf(isInteger, 'function');
    });
    it('should be a boolean', () => {
      const num = 3.35;
      const isInteger = funcs.isInteger;
      assert.isBoolean(isInteger(num), 'true or false');
    });
    it('should be equal to false', () => {
      const num = 3.25;
      const isInteger = funcs.isInteger;
      assert.isFalse(isInteger(num), 'needs to be false');
    });
   });

});