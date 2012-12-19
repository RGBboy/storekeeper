# Storekeeper

Simple name value storage with emitted events.

[![Build Status](https://secure.travis-ci.org/RGBboy/storekeeper.png)](http://travis-ci.org/RGBboy/storekeeper)

## Installation

Works with Express 3.0.x

    $ npm install storekeeper

## Usage

Storekeeper 

``` javascript
// require it
var Storekeeper = require('storekeeper').
    store = new Storekeeper().store;

// Listen to the 'stored' event
store.on('stored', function (name, object) {
  console.log(name + ' has been stored');
});

// add an object to the store
store('item1', { title: 'Item 1' });

```

## Todo

* Write Tests
