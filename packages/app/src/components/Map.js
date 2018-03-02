// @flow
import React from 'react';

import MapView, { Marker } from 'react-native-maps';

type Props = {
  location: { longiude: number, latitude: number },
  members: Array<{ longiude: number, latitude: number }>,
};
export default class Map extends React.Component<Props, {}> {
  render() {
    // alert(location);
    const { location, members } = this.props;

    return (
      <MapView
        initialRegion={{
          ...location,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}
      >
        {Object.keys(members).map(key => (
          <Marker key={key} coordinate={members[key]} title={key} />
        ))}
      </MapView>
    );
  }
}

const styles = {
  map: {
    flex: 1,
  },
};
