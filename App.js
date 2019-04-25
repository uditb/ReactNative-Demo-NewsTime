import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store/store';
import firebase from 'firebase';

import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthenticationScreen from './src/components/AuthenticationScreen'
import DashboardScreen from './src/components/DashboardScreen';
import NewsDetailsScreen from './src/components/NewsDetailsScreen';
import SplashScreen from './src/components/SplashScreen';

const store = configureStore()

export const AuthStack = createStackNavigator({
  Authentication: {
    screen: AuthenticationScreen,
    navigationOptions: () => ({
      title: 'Login'
    })
  }
},
  {
    initialRouteName: 'Authentication'
  }
);

export const AppStack = createStackNavigator({
  Dashboard: {
    screen: DashboardScreen,
    navigationOptions: () => ({
      title: 'News',
      headerLeft: null
    })
  },
  NewsDetails: {
    screen: NewsDetailsScreen,
    navigationOptions: () => ({
      title: 'News'
    })
  }
},
  {
    initialRouteName: 'Dashboard'
  }
);

const ParentContainer = createAppContainer(createSwitchNavigator(
  {
    Splash: SplashScreen,
    Auth: AuthStack,
    App: AppStack,
  },
  {
    initialRouteName: 'Splash'
  }
));


export default class App extends Component {

  componentWillMount() {
    var config = {
      apiKey: "AIzaSyCZNO-Y3UkrEr_ZXrq6QfNo7FpJq-ftYGE",
      authDomain: "newstime-a4e9b.firebaseapp.com",
      databaseURL: "https://newstime-a4e9b.firebaseio.com",
      projectId: "newstime-a4e9b",
      storageBucket: "newstime-a4e9b.appspot.com",
      messagingSenderId: "763577759325"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={store}>
        <ParentContainer />
      </Provider>
    )
  };
};



