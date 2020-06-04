import React , {Component} from 'react'; 
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import Dashboard from './components/screens/dashboard';
import Navigator from './routes/navigator';
import NewClient from './components/screens/newClient';

export default class App extends Component{ 
  render(){
    return (   
       <Navigator/>
      //  <Dashboard/>
      // <NewClient/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
