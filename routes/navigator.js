import { createStackNavigator } from 'react-navigation-stack';
import {  createAppContainer } from 'react-navigation'; 

import Welcome from '../components/screens/Welcome';
import Login from '../components/screens/login';
import Dashboard from '../components/screens/dashboard';
import NewClient from '../components/screens/newClient';
import ViewDetils from '../components/screens/viewDetails';
import Transaction from '../components/screens/transaction';

const appStackNavigator = createStackNavigator(
  { 
    WelcomeScreen: {
      screen: Welcome
    },
    LoginScreen: {
      screen: Login
    },
    DashbordScreen: {
      screen: Dashboard
    },
    NewClientScreen: {
      screen: NewClient
    },
    ViewDetilsScreen: {
      screen: ViewDetils
    },
    TransactionScreen: {
      screen: Transaction
    }
  },
  {
    defaultNavigationOptions: {
      headerShown: false
    }
  }
  
);
export default createAppContainer(appStackNavigator);
