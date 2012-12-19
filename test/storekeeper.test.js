/**
 * Module dependencies.
 */

var should = require('should'),
    Storekeeper = require('../');

describe('Storekeeper', function () {

  describe('.version', function () {

    it('should match the format x.x.x', function (done) {
      Storekeeper.version.should.match(/^\d+\.\d+\.\d+$/);
      done();
    });

  });

  describe('instance', function () {

    var storekeeper;

    beforeEach(function (done) {
      storekeeper = new Storekeeper();
      done();
    });

    describe('.store', function () {

      it('should store the object and return when requested', function (done) {
        var testObject1 = {},
            testObject2 = {};
        storekeeper.store('test1', testObject1);
        storekeeper.store('test2', testObject2);
        storekeeper.store('test1').should.equal(testObject1);
        storekeeper.store('test2').should.equal(testObject2);
        done();
      });

      describe('.on', function () {

        it('should fire the \'stored\' event when an object is stored', function (done) {
          var testName = 'test',
              testObject = {};
          storekeeper.store.on('stored', function (name, object) {
            name.should.equal(testName);
            object.should.equal(testObject);
            done();
          })
          storekeeper.store('test', testObject);
        });

      });

      describe('.once', function () {

        it('should fire the \'stored\' event once when an object is stored', function (done) {
          var testName = 'test',
              testObject = {};
          storekeeper.store.once('stored', function (name, object) {
            name.should.equal(testName);
            object.should.equal(testObject);
            done();
          });
          storekeeper.store(testName, testObject);
          storekeeper.store('test2', {});
          storekeeper.store('test3', {});
        });

      });

    });

    

    

  });

});