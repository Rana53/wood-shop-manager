import React , {Component} from 'react'; 
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import Welcome from './components/screens/login.jsx'
import Navigator from './routes/navigator';

export default class App extends Component{ 
  render(){
    return (   
      <Navigator/>
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
