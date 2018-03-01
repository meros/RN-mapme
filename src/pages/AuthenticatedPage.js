// @flow

import React from 'react';
import firebase from 'react-native-firebase';
import BackgroundGeolocation from 'react-native-background-geolocation';
import Map from '../components/Map';

type Props = {
  firebaseUid: string,
};
export default class LoginPage extends React.Component<Props, {}> {
  componentDidMount() {
    const { firebaseUid } = this.props;
    const ref = firebase.database().ref(`${firebaseUid}/lastKnownPosition`);

    BackgroundGeolocation.on('location', location => ref.update({ location }), () => {});

    BackgroundGeolocation.configure({}, (state) => {
      if (state.enabled) {
        return;
      }

      BackgroundGeolocation.start(() => {});
    });
  }

  componentWillUnmount() {
    BackgroundGeolocation.removeListeners();
  }

  render() {
    return <Map location={undefined} />;
  }
}
