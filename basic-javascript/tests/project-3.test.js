const assert = require('chai').assert;
const funcs = require('../src/project-3');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Project-3 Functions', () => {
  
  describe('`makeCat`', () => {
    const makeCat = funcs.makeCat;
    it('should be a function', () => {
      assert.typeOf(makeCat, 'function');
    });
    it('should be a string', () => {
      const name = 'Garfield';
      assert.typeOf(name, 'string');
    });
    it('should be a number', () => {
      const age = 57;
      assert.typeOf(age, 'number');
    });
    it('should be an object', () => {
      const name = 'Garfield';
      const age = 74;
      assert.typeOf(makeCat(name, age), 'object');
    });
  });
  
  describe('`addProperty`', () => {
    const addProperty = funcs.addProperty;
    it('should be a function', () => {
      assert.typeOf(addProperty, 'function');
    });
    it('should be an object', () => {
      const object = {};
      assert.typeOf(object, 'object');
    });
    it('should exist', () => {
      const property = 'Dragons';
      assert.exists(property, 'property is required');
    });
    it('should be an object', () => {
      const object = {};
      const property = 'Dragons';
      assert.typeOf(addProperty(object, property), 'object');
    });
  });
  
  describe('`invokeMethod`', () => {
    const invokeMethod = funcs.invokeMethod
    it('should be a function', () => {
      assert.typeOf(invokeMethod, 'function');
    });
    it('should be an object', () => {
      const object = {};
      assert.typeOf(object, 'object');
    });
    it('should include method', () => {
      const object = {
        cb: () => {
          return true;
        }
      };
      const method = 'cb';
      assert.property(object, method);
    });
  });
  
  describe('`multiplyMysteryNumberByFive`', () => {
    const multiplyMysterNumberByFive = funcs.multiplyMysteryNumberByFive;
    const mysteryNumberObject = {mysteryNumber: Math.round(Math.random()) * 100};
    it('should be a function', () => {
      assert.typeOf(multiplyMysterNumberByFive, 'function');
    });
    it('should be a number', () => {
      assert.isNumber(multiplyMysterNumberByFive(mysteryNumberObject));
    });
    it('should be equal to mysteryNumber * 5', () => {
      const testResult = mysteryNumberObject.mysteryNumber * 5;
      assert.strictEqual(multiplyMysterNumberByFive(mysteryNumberObject), testResult);
    });
  });
  
  describe('`deleteProperty`', () => {
    const deleteProperty = funcs.deleteProperty;
    it('should be a function', () => {
      assert.typeOf(deleteProperty, 'function');
    });
    it('should be an object', () => {
      const object = {};
      const property = 'prop';
      assert.isObject(object);
      assert.isObject(deleteProperty(object, property));
    });
    it('should be a string', () => {
      const property = 'prop';
      assert.isString(property);
    });
    it('should not include property', () => {
      const object = {prop: null};
      const property = 'prop';
      deleteProperty(object, property);
      assert.notProperty(object, property);
    });
  });
  
  describe('`newUser`', () => {
    const newUser = funcs.newUser;
    const name = 'Ben';
    const email = 'ben@lambdaschool.com';
    const password = 'sunjieming45';
    it('should be a function', () => {
      assert.typeOf(newUser, 'function');
    });
    it('should be a string', () => {
      assert.isString(name);
      assert.isString(email);
      assert.isString(password);
    });
    it('should be an object', () => {
      assert.isObject(newUser(name, email, password));
    });
    it('should have property values equal to name, email, and password', () => {
      assert.propertyVal(newUser(name, email, password), 'name', name);
      assert.propertyVal(newUser(name, email, password), 'email', email);
      assert.propertyVal(newUser(name, email, password), 'password', password);
    });
  });
  
  describe('`hasEmail`', () => {
    const hasEmail = funcs.hasEmail;
    const user = {email: 'gmail@yahoo.com'};
    const user2 = {gmail: 'yahoo@gmail.com'};
    it('should be a function', () => {
      assert.typeOf(hasEmail, 'function');
    });
    it('should be an object', () => {
      assert.isObject(user);
    });
    it('should be true', () => {
      assert.isTrue(hasEmail(user), 'User has an email');
    });
    it('should be false', () => {
      assert.isFalse(hasEmail(user2), 'User does not have email');
    });
  });
  
  describe('`hasProperty`', () => {
    const hasProperty = funcs.hasProperty;
    const object = {prop: 'property'};
    const property = 'prop';
    it('should be a function', () => {
      assert.typeOf(hasProperty, 'function');
    });
    it('should be an object', () => {
      assert.isObject(object);
    });
    it('should be a string', () => {
      assert.isString(property);
    });
    it('should be true', () => {
      assert.isTrue(hasProperty(object, property));
    });
    it('should be false', () => {
      assert.isFalse(hasProperty(object, 'porp'));
    });
  });
  
  describe('`verifyPassword`', () => {
    const verifyPassword = funcs.verifyPassword;
    const user = {password: 'guest'};
    const password = 'guest';
    const password2 = 'guessedWrong';
    it('should be a function', () => {
      assert.typeOf(verifyPassword, 'function');
    });
    it('should be an object', () => {
      assert.isObject(user);
    });
    it('should be a string', () => {
      assert.isString(password);
    });
    it('should be true', () => {
      assert.isTrue(verifyPassword(user, password));
    });
    it('should be false', () => {
      assert.isFalse(verifyPassword(user, password2));
    });
  });
  
  describe('`updatePassword`', () => {
    const updatePassword = funcs.updatePassword;
    const user = {password: 'guest'}
    const newPassword = 'guessedCorrectly';
    it('should be a function', () => {
      assert.typeOf(updatePassword, 'function');
    });
    it('should be an object', () => {
      assert.isObject(user);
      assert.isObject(updatePassword(user, newPassword));
    });
    it('should be a string', () => {
      assert.isString(newPassword);
    });
    it('should equal `newPassword`', () => {
      updatePassword(user, newPassword);
      assert.propertyVal(user, 'password', newPassword);
    });
  });
  
  describe('`addFriend`', () => {
    const addFriend = funcs.addFriend;
    const user = {friends: []};
    const newFriend = 'Mr. Jones';
    it('should be a function', () => {
      assert.typeOf(addFriend, 'function');
    });
    it('should be an object', () => {
      assert.isObject(user);
      assert.isObject(addFriend(user, newFriend));
    });
    it('should be a string', () => {
      assert.isString(newFriend);
    });
    it('should include `newFriend`', () => {
      assert.include(user.friends, newFriend);
    });
  });
  
  describe('`setUsersToPremium`', () => {
    const setUsersToPremium = funcs.setUsersToPremium;
    const users = [{isPremium: false}];
    it('should be a function', () => {
      assert.typeOf(setUsersToPremium, 'function');
    });
    it('should be an array', () => {
      assert.isArray(users);
      assert.isArray(setUsersToPremium(users));
    });
    it('should be true', () => {
      setUsersToPremium(users);
      assert.isTrue(users[0].isPremium);
    });
  });
  
  describe('`sumUserPostLikes`', () => {
    const sumUserPostLikes = funcs.sumUserPostLikes;
    const user = {posts: [{likes: 51}, {likes: 251}, {likes: 146}]};
    it('should be a function', () => {
      assert.typeOf(sumUserPostLikes, 'function');
    });
    it('should be an object', () => {
      assert.isObject(user);
    });
    it('should be a number', () => {
      assert.isNumber(sumUserPostLikes(user));
    });
    it('should be equal to 448', () => {
      assert.strictEqual(sumUserPostLikes(user), 448);
    });
  });
  
  describe('`addCalculateDiscountPriceMethod`', () => {
    const addCalculateDiscountPriceMethod = funcs.addCalculateDiscountPriceMethod;
    const storeItem = {
      price: 100,
      discountPercentage: 0.25,
    };
    it('should be a function', () => {
      assert.typeOf(addCalculateDiscountPriceMethod, 'function');
    });
    it('should be an object', () => {
      assert.isObject(storeItem);
      assert.isObject(addCalculateDiscountPriceMethod(storeItem));
    });
    it('should contain property `calculateDiscountPrice`', () => {
      addCalculateDiscountPriceMethod(storeItem);
      assert.property(storeItem, 'calculateDiscountPrice');
    });
  });
  
});