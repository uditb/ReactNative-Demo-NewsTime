import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store/store';
import AuthenticationScreen from './src/components/AuthenticationScreen'
import firebase from 'firebase';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import DashboardScreen from './src/components/DashboardScreen';
import NewsDetailsScreen from './src/components/NewsDetailsScreen';

const store = configureStore()

const AppNavigator = createStackNavigator({
  Authentication: {
    screen: AuthenticationScreen,
    navigationOptions: () => ({
      title: 'Login'
    })
  },
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
    initialRouteName: 'Authentication'
  }
);

const AppContainer = createAppContainer(AppNavigator);


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
        {/* <AuthenticationScreen /> */}
        <AppContainer />
      </Provider>
    )
  };


};



