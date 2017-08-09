const assert = require('chai').assert;
const funcs = require('../src/project-4.js');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project-4 Functions', () => {

    describe('`multiplyArguments`', () => {
        it ('should be function', () => {
            const multiplyArguments = funcs.multiplyArguments;
            assert.typeOf(multiplyArguments, 'function');
        });
        it('should be a number', () => {
            const multiplyArguments = funcs.multiplyArguments;
            const args = [1, 3, 4, 5];
            assert.isNumber(multiplyArguments(args), 'number');
        });
        it('should contain the value', () =>{
            const multiplyArguments = funcs.multiplyArguments;
            const args = [1, 3, 4, 5];
            assert.include(args, 4, 'value present');
        });
    });


    describe('`invokeCallback`', () => {
        it('should be a function', () => {
            const invokeCallback = funcs.invokeCallback;
            assert.typeOf(invokeCallback, 'function');
        });
    });
});