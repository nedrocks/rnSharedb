/* @flow */

require('react-native');

// Polyfills & monkey patching here:
// NOTE: Use `require` here to ensure that this happens early.
global.process = require('../lib/process.polyfill');

import React, { Component } from 'react';

import RNApp from './rnApp';

export default class App extends Component {
  render() {
    return (
      <RNApp />
    );
  }
}
