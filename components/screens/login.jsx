import React, { Component } from 'react';
import { ImageBackground, TextInput, Button, Text, StyleSheet } from 'react-native';
import GStyleSheet from '../globalstyle';
import firebase from 'firebase';

class login extends Component {
  constructor(){
    super();
    this.state = {
      user: '',
      password: '',
      error: false,
      errorMessage: ''
    }
  }
  submitForm = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.user, this.state.password)
      .then((res) => {
        console.log('success');
        this.props.navigation.navigate('DashbordScreen');
      })
      .catch((err) => {
        this.setState({
          error: true,
          errorMessage: 'Invalid admin information'
        })
        console.log(err);
      })
  }
  render() {
    return (
      <ImageBackground 
        style={GStyleSheet.container}
        source={require('../../assets/bg_image.png')}
      >
      <TextInput
        placeholder='User'
        onChangeText= { (user) => this.setState({user: user})}
      />
      <TextInput
        placeholder='password'
        onChangeText= { (password) => this.setState({password: password})}
      />
      <Button title='submit' onPress={this.submitForm}/>
      {this.state.error? <Text style={styles.invalidBtnText}>Invalid Admin</Text>:<Text></Text>}
      </ImageBackground>
    )
  }
}

const styles=StyleSheet.create({
  invalidBtnText: {
    color: 'red'
  }
})
export default login;

/*
@
2
*/