/*!
 * manager
 * Copyright(c) 2012 RGBboy <me@rgbboy.com>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var EventEmitter = require('events').EventEmitter;

/**
 * Module Exports
 */

/**
 * Storekeeper
 *
 * @api public
 */
exports = module.exports = function () {

  var storekeeper = new EventEmitter(),
      storedObjects = {};

  /**
   * .store
   *
   * Stores or returns an object;
   *
   * @param {String} name
   * @param {Object} object, optional
   * @api public
   */
  storekeeper.store = function (name, object) {
    if (!object) {
      return storedObjects[name];
    } else {
      storedObjects[name] = object;
      storekeeper.emit('stored', name, object);
    };
  };

  /**
   * .store.on
   *
   * Proxy for the storekeeper.on method
   *
   * @param {String} name
   * @param {Function} callback
   * @api public
   */
  storekeeper.store.on = function () {
    return storekeeper.on.apply(storekeeper, arguments);
  };

  /**
   * .store.once
   *
   * Proxy for the storekeeper.once method
   *
   * @param {String} name
   * @param {Function} callback
   * @api public
   */
  storekeeper.store.once = function () {
    return storekeeper.once.apply(storekeeper, arguments);
  };

  return storekeeper;

};

/**
* Library version.
*/

exports.version = '0.0.1';