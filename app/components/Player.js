/* @flow */

import React, { Component } from 'react';

import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default class Player extends Component {
  static propTypes: Object = {
    doc: React.PropTypes.object.isRequired,
    onPlayerSelected: React.PropTypes.func.isRequired,
    selected: React.PropTypes.bool.isRequired
  };

  constructor(props: any) {
    super(props);
  }

  componentWillReceiveProps: Function = (nextProps) => {
    this.docUpdated(nextProps);
  }

  handleClick: Function = (event) => {
    this.props.onPlayerSelected(this.props.doc.id);
  };

  docUpdated: Function = (nextProps) => {
    // TODO: Force update sucks.
    this.forceUpdate();
  }

  componentDidMount: Function = () => {
    this.props.doc.subscribe();
    this.props.doc.on('load', this.docUpdated.bind(this, this.props));
    this.props.doc.on('op', this.docUpdated.bind(this, this.props));
    this.docUpdated();
  };

  componentWillUnmount: Function = () => {
    this.props.doc.unsubscribe();
  };

  render: Function = () => {
    if (this.props.selected) {
      console.log('this is selected');
    }
    return (
      <TouchableHighlight onPress={this.handleClick}>
        <View style={[_styles.view, this.props.selected && _styles.selected]}>
          <Text style={_styles.name}>{this.props.doc.data.name}</Text>
          <Text style={_styles.score}>{this.props.doc.data.score}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const _styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20
  },
  selected: {
    backgroundColor: 'yellow',
  },
  name: {

  },
  score: {

  }
});
