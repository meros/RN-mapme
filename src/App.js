// @flow

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { observer } from 'mobx-react';

import Map from './components/Map';
import LoginPage from './pages/LoginPage';

import appFlow from './model/AppFlow';

@observer
export default class App extends React.Component {
  renderContent() {
    if (appFlow.isAuthenticated) {
      return <Map />;
    }

    return <LoginPage />;
  }

  render() {
    return <View style={styles.container}>{this.renderContent()}</View>;
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
