// @flow

import React from 'react';
import { View, Text } from 'react-native';
import firebase from 'react-native-firebase';
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

  groupsRef: any;
  componentDidMount() {
    //const { firebaseUid } = this.props;
    this.groupsRef = firebase.database().ref('/groups/123/');

    this.groupsRef.on('value', (snapshot) => {
      const val = snapshot.val();
      this.setState({ members: val });
    });
  }

  componentWillUnmount() {
    this.groupsRef.remove();
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
