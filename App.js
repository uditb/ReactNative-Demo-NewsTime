import React, { Component } from 'react';

import { Provider } from 'react-redux';
import configureStore from './src/store/store';
import AuthenticationScreen from './src/components/AuthenticationScreen'
import firebase from 'firebase';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
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



async componentDidMount() {
    console.log("Tabs => componentDidMount()");

     

}

  // Fetch the token from storage then navigate to our appropriate place
  // _bootstrapAsync = async () => {
  //   const userToken = await getData(isLoggedIn);
  //   alert(this.props.navigation);
  //   this.props.navigation.navigate((userToken === '1') ? 'App' : 'Auth');
  // };

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

  // componentDidMount = () => {
  //   this._bootstrapAsync();
  // };

  render() {
    return (
      <Provider store={store}>
          <ParentContainer />
      </Provider>
    )
  };
};



