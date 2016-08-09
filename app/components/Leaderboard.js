/* @flow */

import React, { Component } from 'react';

import { StyleSheet, Text, View } from 'react-native';

import PlayerList from './PlayerList';
import PlayerSelector from './PlayerSelector';

import { connection } from '../globals';

export default class Leaderboard extends Component {
  state: Object = {
    selectedPlayerId: null,
    players: []
  };

  query: any = null;

  constructor(props: any) {
    super(props);
  }

  componentDidMount: Function = () => {
    this.query = connection.createQuery();
    this.query.on('ready', this.updatePlayers);
    this.query.on('changed', this.updatePlayers);
  }

  componentWillUnmount: Function = () => {
    this.query.destroy();
  }

  handlePlayerSelected: Function = (id: number) => {
    this.setState({selectedPlayerId: id});
  }

  handleAddPoints: Function = () => {
    var op = [{p: ['score'], na: 5}];
    connection.connection.get(
      'players', this.state.selectedPlayerId
    ).submitOp(op, (err) => {
      if (err) {
        console.error(err);
      }
    });
  }

  updatePlayers: Function = () => {
    console.log('updating, results: ');
    this.setState({
      players: this.query.results,
    });
  }

  getSelectedPlayer: Function = () => {
    return this.state.players.find((elem) => {
      if (elem.id === this.state.selectedPlayerId) {
        return elem;
      } else {
        return undefined;
      }
    })
  }

  render: Function = () => {
    return (
      <View style={_styles.view}>
        <PlayerList {...this.state} onPlayerSelected={this.handlePlayerSelected} />
        <PlayerSelector selectedPlayer={this.getSelectedPlayer()} onAddPoints={this.handleAddPoints} />
      </View>
    )
  }
}

const _styles = StyleSheet.create({
  view: {
    marginTop: 22,
    flex: 1,
    flexDirection: 'column',
  }
});
