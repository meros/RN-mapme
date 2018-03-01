// @flow
import React from 'react';

import MapView from 'react-native-maps';

type Props = {
  location: any,
};
export default class Map extends React.Component<Props, {}> {
  render() {
    // alert(location);
    const { location } = this.props;

    return <MapView initialRegion={location} style={styles.map} />;
  }
}

const styles = {
  map: {
    flex: 1,
  },
};
