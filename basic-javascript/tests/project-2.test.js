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

    describe('`fizzBuzz`', () => {
       it('should be a function', () =>{
           const fizzBuzz = funcs.fizzBuzz;
           assert.typeOf(fizzBuzz, 'function');
       });
       it('should be a number', () => {
           const num = 7;
           const fizzBuzz = funcs.fizzBuzz;
           assert.isNumber(num, 'needs to be a number')
       });
       it('should not return a string', () => {
           const num = 7;
           const fizzBuzz = funcs.fizzBuzz;
           assert.isNotString(fizzBuzz(num), 'needs to be a number');
       });
       it('should return a string', () => {
           const num = 15;
           const fizzBuzz = funcs.fizzBuzz;
           assert.isString(fizzBuzz(num), 'string');
       });      
    });

    describe('`isPrime`', () => {
        it('should be a function',() => {
            const isPrime = funcs.isPrime;
            assert.typeOf(isPrime, 'function');
        });
        it('should be a number', () => {
            const num = 2;
            const isPrime = funcs.isPrime;
            assert.isNumber(num, 'number');
        });
        it('should return a boolean', () => {
            const num = 33;
            const isPrime = funcs.isPrime;
            assert.isBoolean(isPrime(num), 'true or false');
        });
    });


    describe('`returnFirst`', () => {
        it('should be a function', () => {
            const returnFirst = funcs.returnFirst;
            assert.typeOf(returnFirst, 'function');
        });
        it('should contain the value in array', () => {
            const arr = [1, [2]];
            const returnFirst = funcs.returnFirst;
            assert.include(arr, 1, 'array contains value');
        });
        it('should return array', () => {
            const arr = [[1], 2];
            const returnFirst = funcs.returnFirst;
            assert.isArray(returnFirst(arr),  'array');
        });
    });

    describe('`returnLast`', () => {
        it('should be a function', () => {
            const returnLast = funcs.returnLast;
            assert.typeOf(returnLast, 'function');
        });
        it('should contain the value in array', () => {
            const arr = [1, 3, [7], [2]];
            const returnLast = funcs.returnLast;
            assert.include(arr, 3, 'array contains value');
        });
        it('should return array', () => {
            const arr = [[1], [2]];
            const returnLast = funcs.returnLast;
            assert.isArray(returnLast(arr),  'array');
        });
    });


    describe('`getArrayLength`', () => {
        it('should be a function', () => {
            const getArrayLength = funcs.getArrayLength;
            assert.typeOf(getArrayLength, 'function');
        });
        it('should be number', () => {
            const arr = [];
            const getArrayLength = funcs.getArrayLength;
            assert.isNumber(getArrayLength(arr), 'number');
        });
        it('should be an array', () => {
            const arr = []; 
            assert.isArray(arr, 'array');
        });
    });

    describe('`incrementByOne`', () => {
        it('should be a function', () => {
            const incrementByOne = funcs.incrementByOne;
            assert.typeOf(incrementByOne, 'function');
        });
        it('should return an array', () => {
            const arr = [1, 2, 3, 4, 5];
            const incrementByOne = funcs.incrementByOne;
            assert.isArray(incrementByOne(arr), 'incremented array');
        });
        it('should contain the value', () => {
            const arr = [1, 2, 3, 4, 5];
            const incrementByOne = funcs.incrementByOne;
            assert.include((arr), 3, 'array contains value');
        });
    });

    describe('`addItemToArray`', () => {
        it('should be a function', () => {
            const addItemToArray = funcs.addItemToArray;
            assert.typeOf(addItemToArray, 'function');
        });
        it('should return an array', () => {
            const addItemToArray = funcs.addItemToArray;
            const arr = [1, 2, 3, 4, 5];
            assert.isArray(addItemToArray(arr), 'array');
        });
        it('should contain the value', () => {
            const addItemToArray = funcs.addItemToArray;
            const arr = [1, 2, 3, 4, 5];
            const item = 7;
            assert.include(addItemToArray(arr, item), 7, 'array contains value');
        });
    });    

    describe('`addItemToFront`', () => {
        it('should be a function', () => {
            const addItemToFront = funcs.addItemToFront;
            assert.typeOf(addItemToFront, 'function');
        });
        it('should return an array', () => {
            const addItemToFront = funcs.addItemToFront;
            const arr = [1, 2, 3, 4, 5];
            assert.isArray(addItemToFront(arr), 'array');
        });
        it('should contain the value', () => {
            const addItemToFront = funcs.addItemToFront;
            const arr = [1, 2, 3, 4, 5];
            const item = 7;
            assert.include(addItemToFront(arr, item), 7, 'array contains value');
        });
    });  

    describe('`wordsToSentence`', () => {
        it('should be a function', () => {
            const wordsToSentence = funcs.wordsToSentence;
            assert.typeOf(wordsToSentence, 'function');
        });
        it('should be a string', () => {
            const wordsToSentence = funcs.wordsToSentence; 
            words = 'What a beautiful day';
            assert.isString(words, 'string');
        });
        it('should neither be null nor undefined', () => {
            const wordsToSentence = funcs.wordsToSentence; 
            words = 'What a beautiful day';
            assert.exists(wordsToSentence(words), 'it is neither `null` nor `undefined`');
        });
    });

    describe('`contains`', () => {
        it('should be a function', () => {
            const contains = funcs.contains;
            assert.typeOf(contains, 'function');
        });
        it('should return true or false', () => {
            const contains = funcs.contains;
            const arr = ['hello', 'world', '!'];
            const item = 'world';
            assert.isBoolean(contains(arr, item), 'boolean')
        });
        it('should not be empty', () => {
            const contains = funcs.contains;
            const arr = ['hello', 'world', '!'];
            const item = 'world';
            assert.isNotEmpty(arr);
            assert.isNotEmpty(item);
        });
    });

    describe('`addNumbers`', () => {
        it('should be a function', () => {
            const addNumbers = funcs.addNumbers;
            assert.typeOf(addNumbers, 'function');
        });
        it('should be an array', () => {
            const addNumbers = funcs.addNumbers;
            const numbers = [1, 2, 3, 4, 5];
            assert.isArray(numbers, 'array');
        });
        it('should be a number', () => {
            const addNumbers = funcs.addNumbers;
            const numbers = [1, 2, 3, 4, 5];
            assert.isNumber(addNumbers(numbers), 'number');
        });
    });

    describe('`averageTestScore`', () => {
        it('should be a function', () => {
            const averageTestScore = funcs.averageTestScore;
            assert.typeOf(averageTestScore, 'function');
        });
        it('should be an array', () => {
            const averageTestScore = funcs.averageTestScore;
            const testScores = [10, 20, 10, 30];
            assert.isArray(testScores, 'array');
        });
        it('should contain value', () => {
            const averageTestScore = funcs.averageTestScore;
            const testScores = [10, 20, 10, 30];
            assert.include(testScores, 10,  'value present');
        });
    });

    describe('`largestNumber`', () => {
        it('should be a function', () => {
            const largestNumber = funcs.largestNumber;
            assert.typeOf(largestNumber, 'function');
        });
        it('should be an array', () => {
            const largestNumber = funcs.largestNumber;
            const numbers = [1, 2, 3, 4, 5];
            assert.isArray(numbers, 'array');
        });
        it('should be number', () => {
            const largestNumber = funcs.largestNumber;
            const numbers = [1, 2, 3, 4, 5];
            assert.isNumber(largestNumber(numbers), 'number');
        });
    });    
});