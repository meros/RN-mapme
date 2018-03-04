// @flow

import React from 'react';
import { Text, View } from 'react-native';

type Props = {
  children: React.ReactNode,
};

export default class Button extends React.Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.buttonText}>{this.props.children}</Text>
      </View>
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
