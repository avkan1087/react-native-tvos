/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TVEventHandler,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
    this._enableTvHandler = this._enableTvHandler.bind(this);
  }
  _enableTvHandler() {
    const that = this;
    this._tvEventHandler = new TVEventHandler();
    this._tvEventHandler.enable(this, function(cpm, evt) {
      that.setState({pos: evt.eventType});
    });
  }
  _disableTvEventHandler() {
    if (this._tvEventHandler) {
      this._tvEventHandler.disable();
      delete this._tvEventHandler;
    }
  }
  componentWillUnmount() {
    this._disableTvEventHandler();
  }
  componentDidMount() {
    this._enableTvHandler();
  }
  render() {
    return (
      <View style={styles.backgroud}>
        <Text style={styles.title}>hello world {this.state.name}</Text>
        <Text style={styles.title}>key : {this.state.pos}</Text>

        <TouchableOpacity
          onPress={() => {
            this.input.focus();
          }}>
          <Text>change name</Text>
        </TouchableOpacity>
        <TextInput
          ref={x => (this.input = x)}
          placeholder="customer name"
          onChangeText={name => {
            this.setState({name});
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroud: {
    backgroundColor: 'yellow',
    height: 1080,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 150,
  },
});
