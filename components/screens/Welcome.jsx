import React, { Component } from 'react'
import { Image, View, Text, ImageBackground, StyleSheet, Button} from 'react-native'
import GStyleSheet from '../globalstyle';

import firebase from '../../database/firebase';

class Welcome extends Component {
  componentDidMount(){
    this.checkIfLoggedIn();
  }
  checkIfLoggedIn(){
    firebase.auth().onAuthStateChanged( user => {
      if(user){
        console.log(user);
        this.props.navigation.navigate('DashbordScreen');
      }
      
    }
    )
  }

  onLogin = () => {
    this.props.navigation.navigate('LoginScreen');
  }
  render() {
    return (
      <ImageBackground 
        style={GStyleSheet.container}
        source={require('../../assets/bg_image.png')}
        >
        <Image 
          style={styles.image}
          source={require('../../assets/welcome_image.jpeg')}
        />
        <View style={styles.textView}>
          <Text>এরশাদ কাঠ স্টোর </Text>
          <Text>চিলাখানা বাজার , নাগেশ্বরী</Text>
        </View>
        <View style={styles.button}>
          <Button
            title='Login here'
            onPress={this.onLogin}
          />
        </View>
      </ImageBackground>
    )
  }
}
const styles= StyleSheet.create({
  image: {
    height: 200,
    width: 200,
    borderRadius: 100
  },
  button: {
    borderRadius: 50,
    margin: 5,
    height: 20,
    width: 200
  },
  textView: {
    borderRadius: 5,
    height: 55,
    alignItems: 'center',
    margin: 5,
    backgroundColor: 'white',
    width: 200
  }
});
export default Welcome;
