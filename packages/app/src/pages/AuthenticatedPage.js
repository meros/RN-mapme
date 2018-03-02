// @flow

import React from 'react';
import { View, Text } from 'react-native';
import firebase from 'react-native-firebase';
import BackgroundGeolocation from 'react-native-background-geolocation';
import Map from '../components/Map';

type Props = {
  firebaseUid: string,
};
type State = {
  coords: {},
  members: {},
};
export default class LoginPage extends React.Component<Props, State> {
  state: State = {
    coords: { longitude: 0, latitude: 0 },
    members: {},
  };
  componentDidMount() {
    const { firebaseUid } = this.props;
    const myLastKnownPositionRef = firebase.database().ref(`${firebaseUid}/lastKnownPosition`);
    const groupsRef = firebase.database().ref('/groups/123/');

    BackgroundGeolocation.on(
      'location',
      location => myLastKnownPositionRef.update({ location }),
      () => {},
    );

    BackgroundGeolocation.configure({}, (state) => {
      if (state.enabled) {
        return;
      }

      BackgroundGeolocation.start(() => {});
    });

    myLastKnownPositionRef.on('value', (snapshot) => {
      const val = snapshot.val();
      if (val.location && val.location.coords) {
        const { coords } = val.location;
        this.setState({ coords });
      }
    });

    groupsRef.on('value', (snapshot) => {
      const val = snapshot.val();
      this.setState({ members: val });
    });
  }

  componentWillUnmount() {
    BackgroundGeolocation.removeListeners();
  }

  render() {
    const { coords, members } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Map location={coords} members={members} />
      </View>
    );
  }
}
