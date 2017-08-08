const assert = require('chai').assert;
const funcs = require('../src/project-1');

// we've gone ahead and gotten a start here for you, 
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work. 
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test to see if the expected return output is of a specified type, as well as the correct outcome.

describe('Project-1 Functions', () => {

  describe('`multiplyByTen`', () => {
    it('should be a function', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.typeOf(multiplyByTen, 'function');
    });
    // begin here
    it('should be a number', () => {
      const num = 5;
      assert.typeOf(num, 'number');
    });
    it('should be equal to 50', () => {
      const num = 5;
      const multiplyByTen = funcs.multiplyByTen;
      assert.equal(multiplyByTen(num), 50);
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should be a number', () => {
      const num = 7;
      assert.typeOf(num, 'number');
    });
    it('should be equal to 2', () => {
      const num = 7;
      const subtractFive = funcs.subtractFive;
      assert.equal(subtractFive(num), 2);
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should be a boolean', () => {
      const str1 = 'a';
      const str2 = 'abc';
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength(str1, str2), 'boolean');
    });
    it('should be a string', () => {
      const str1 = 're';
      const str2 = 'abc';
      assert.typeOf(str1, 'string');
      assert.typeOf(str2, 'string');
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should be an array', () => {
      const areEqual = funcs.areEqual;
      const x = [];
      const y = [];
      assert.typeOf(x, 'array');
      assert.typeOf(y, 'array');
    });
    it('should not be equal', () => {
      const x = 5;
      const y = '5';
      assert.notStrictEqual(x, y, 'these numbers are not equal');
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should be a number', () => {
      const num = 4;
      assert.typeOf(num, 'number');
    });
    it('should be equal to false', () => {
      const num = 100;
      const lessThanNinety = funcs.lessThanNinety;
      assert.isFalse(lessThanNinety(num), 'this should be false');
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should be a boolean', () => {
      const num = 90;
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.isBoolean(greaterThanFifty(num), 'true or false');
    });
    it('should be equal to true', () => {
      const num = 51;
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.isTrue(greaterThanFifty(num), 'needs to be true');
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should be equal to true', () => {
      const add = funcs.add;
      const x = 5;
      const y = 7;
      assert.isAbove(add(x, y), x, 'sum should be greater than its parts');
      assert.isAbove(add(x, y), y, 'sum should be greater than its parts');
    });
    it('should be a number', () => {
      const x = 5;
      const y = 7;
      assert.typeOf(x, 'number');
      assert.typeOf(y, 'number');
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should be equal to true', () => {
      const subtract = funcs.subtract;
      const x = 5;
      const y = 7;
      assert.isBelow(subtract(x, y), x, 'difference should be smaller than its parts');
      assert.isBelow(subtract(x, y), y, 'difference should be smaller than its parts');
    });
    it('should be a number', () => {
      const x = 5;
      const y = 7;
      assert.typeOf(x, 'number');
      assert.typeOf(y, 'number');
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should be a number', () => {
      const x = 5;
      const y = 7;
      assert.typeOf(x, 'number');
      assert.typeOf(y, 'number');
    });
    it('should be equal to true', () => {
      const divide = funcs.divide;
      const x = 90;
      const y = 3;
      assert.strictEqual(divide(x, y), 30, 'difference should be smaller than its parts');
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function')
    });
    it('should be a number', () => {
      const x = 5;
      const y = 7;
      assert.typeOf(x, 'number');
      assert.typeOf(y, 'number');
    });
    it('should be equal to true', () => {
      const multiply = funcs.multiply;
      const x = 3;
      const y = 5;
      assert.strictEqual(multiply(x, y), 15);
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('should be a number', () => {
      const x = 5;
      const y = 7;
      assert.typeOf(x, 'number');
      assert.typeOf(y, 'number');
    });
    it('should be equal to true', () => {
      const getRemainder = funcs.getRemainder;
      const x = 10;
      const y = 5;
      assert.isAtMost(y, x);
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('should be a number', () => {
      const num = 8;
      assert.typeOf(num, 'number');
    });
    it('should be a boolean', () => {
      const isEven = funcs.isEven;
      const num = 10;
      assert.isBoolean(isEven(num), 'should be true or false');
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function')
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function')
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function')
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function')
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function')
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function')
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function')
    });
  });

});