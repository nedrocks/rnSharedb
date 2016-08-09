/* @flow */

import React, { Component } from 'react';

import { StyleSheet, View } from 'react-native';

import Player from './Player';

export default class PlayerList extends Component {
  static propTypes: Object = {
    players: React.PropTypes.array.isRequired,
    selectedPlayerId: React.PropTypes.string,
  };

  constructor(props: any) {
    super(props);
  }

  render: Function = () => {
    const { players, selectedPlayerId } = this.props;
    const other = Object.keys(this.props).reduce((accum, key) => {
      if (key !== 'players' && key !== 'selectedPlayerId') {
        accum[key] = this.props[key];
      }
      return accum;
    }, {});

    const playerList = players.map((player, idx) => {
      const selected = selectedPlayerId === player.id;

      return (
        <Player {...other} doc={player} key={player.id} selected={selected} />
      );
    });

    console.log('player list lenght: ', playerList.length);

    return (
      <View style={_styles.view}>
        {playerList}
      </View>
    )
  }
}

const _styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
  }
})
