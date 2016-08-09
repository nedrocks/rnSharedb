/* @flow */

import React, { Component } from 'react'

import { StyleSheet, Text, View } from 'react-native';
import Button from 'apsl-react-native-button';

export default class PlayerSelector extends Component {
  static propTypes: Object = {
    selectedPlayer: React.PropTypes.object,
  };

  constructor(props: any) {
    super(props);
  }

  render: Function = () => {
    let node;

    if (this.props.selectedPlayer) {
      node = (
        <View style={_styles.buttonView}>
          <Text style={_styles.playerName}>{this.props.selectedPlayer.name}</Text>
          <Button style={_styles.button} onPress={this.props.onAddPoints}>Add 5 points</Button>
        </View>
      );
    } else {
      node = (
        <View style={_styles.messageView}>
          <Text style={_styles.message}>Click a player to select</Text>
        </View>
      );
    }

    return node;
  }
}

const _styles = StyleSheet.create({
  buttonView: {
    flex: 1,
    flexDirection: 'row',
  },
  playerName: {

  },
  button: {

  },
  messageView: {

  },
  message: {

  }
});
