import { createStackNavigator } from 'react-navigation-stack';
import {  createAppContainer } from 'react-navigation'; 

import Welcome from '../components/screens/Welcome';
import Login from '../components/screens/login';


const appStackNavigator = createStackNavigator(
  { 
    WelcomeScreen: {
      screen: Welcome
    },
    LgoinScreen:{
      screen: Login
    }
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
  
);
export default createAppContainer(appStackNavigator);
