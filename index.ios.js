/**
 * @flow
 */

require('./shim');
const reactNative = require('react-native');
const App = require('./app/containers/app').default;

reactNative.AppRegistry.registerComponent('rnRacer', () => App);
