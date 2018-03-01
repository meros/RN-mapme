// @flow

import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default class LoginPage extends React.Component<{}, {}> {
  render() {
    return <LinearGradient colors={['#f53b57', '#f53b57']} style={styles.container} />;
  }
}

// f6d365→#fda085
const styles = {
  container: { flex: 1 },
};
