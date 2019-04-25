
import { getData } from '../common/utils';
import { View, ActivityIndicator } from 'react-native';
import React, { Component } from 'react';
import { isLoggedIn } from '../common/constant';


export default class SplashScreen extends Component {
  constructor() {
    super();
    this.navigateBasedOnLoginStatus();
  }

  // Fetch the token from storage then navigate to our appropriate place
  navigateBasedOnLoginStatus = async () => {
    const userLoggedIn = await getData(isLoggedIn);
    this.props.navigation.navigate((userLoggedIn === '1') ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
};
