/* @flow */

import React, { Component } from 'react';

import Leaderboard from '../components/Leaderboard'

class RNApp extends Component {

  constructor(props: Object) {
    super(props);
  }

  render: Function = () => {
    return (
      <Leaderboard />
    )
  }
}

export default RNApp;
