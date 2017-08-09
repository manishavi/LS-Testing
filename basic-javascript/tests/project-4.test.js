const assert = require('chai').assert;
const funcs = require('../src/project-4.js');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chai = require('chai');

sinon.assert.expose(chai.assert, {prefix: ''});

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
       it('should call a given callback', () => {
            const callBack = sinon.spy();
            const invokeCallback = funcs.invokeCallback;
            invokeCallback(callBack);
            assert.equal( callBack.callCount, 1);
            console.log(callBack.callCount);
        });
    });

    describe('`sumArray`', () => {
        it('should be a function', () => {
            const sumArray = funcs.sumArray;
            assert.typeOf(sumArray, 'function');
        });
        it('should be an array', () => {
            const sumArray = funcs.sumArray;
            const numbers = [1, 3, 4, 5];
            assert.isArray(numbers, 'array');
        });
        it('`should be undefined`', () => {
            const sumArray = funcs.sumArray;
            const numbers = [1, 2, 3, 4, 5];
            const cb = sinon.spy();
            assert.isUndefined(sumArray(numbers, cb));
        });
        it('should call a given callback', () => {
            const callBack = sinon.spy();
            const sumArray = funcs.sumArray;
            sumArray([1,2], callBack);
            assert(callBack.callCount, 2); 
        });
    });

    describe('`nFactorial`', () => {
        const nFactorial = funcs.nFactorial;
        const n = 5;
        it('should be a function', () => {
            assert.isFunction(nFactorial);
        });
        it('should be a number', () => {
            assert.isNumber(n);
            assert.isNumber(nFactorial(n));
        });
        it('should be equal to 120', () => {
            assert.strictEqual(nFactorial(n), 120);
        });
    });

});