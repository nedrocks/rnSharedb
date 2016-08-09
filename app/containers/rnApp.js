/* @flow */

import React, { Component } from 'react';

import Leaderboard from '../components/Leaderboard'

import { Text, View } from 'react-native';

import { connection } from '../globals';

class RNApp extends Component {

  constructor(props: Object) {
    super(props);

    connection.connect().then((ob) => {
      console.log('done');
    });
  }

  render: Function = () => {
    return (
      <View><Text>Hello world</Text></View>
    )
  }
}

export default RNApp;
