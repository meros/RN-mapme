// @flow

import React from 'react';
import { Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class Button extends React.Component {
  render() {
    return (
      <LinearGradient
        start={{ x: 0.0, y: 0 }}
        end={{ x: 0, y: 1.0 }}
        colors={['#05c46b', '#0be881']}
        style={styles.container}
      >
        <Text style={styles.buttonText}>{this.props.children}</Text>
      </LinearGradient>
    );
  }
}

const styles = {
  container: {
    borderRadius: 10,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
  },
  buttonText: {
    fontSize: 28,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#1e272e',
    backgroundColor: 'transparent',
  },
};
