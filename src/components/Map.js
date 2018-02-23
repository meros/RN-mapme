// @flow
import React from 'react';

import MapView from 'react-native-maps';

export default class Map extends React.Component<{}, {}> {
  render() {
    return <MapView style={styles.map} />;
  }
}

const styles = {
  map: {
    flex: 1,
  },
};
