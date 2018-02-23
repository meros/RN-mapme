// @flow

import React from 'react';
import { View, StyleSheet } from 'react-native';
import Map from './src/Map';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Map />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});
