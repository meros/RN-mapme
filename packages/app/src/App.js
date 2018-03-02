// @flow

import React from 'react';
import { View, StyleSheet } from 'react-native';
import firebase from 'react-native-firebase';
import { observer } from 'mobx-react';

import LoginPage from './pages/LoginPage';
import AuthenticatedPage from './pages/AuthenticatedPage';

import appFlow from './model/AppFlow';

@observer
export default class App extends React.Component<{}, {}> {
  componentDidMount() {
    firebase
      .auth()
      .signInAnonymouslyAndRetrieveData()
      .then((credential) => {
        if (credential) {
          appFlow.setCredential(credential);
        }
      });
  }

  renderContent() {
    if (appFlow.isAuthenticated) {
      return <AuthenticatedPage firebaseUid={appFlow.credential.user.uid} />;
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
