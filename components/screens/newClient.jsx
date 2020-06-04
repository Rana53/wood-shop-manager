import React, { Component } from 'react'
import {
  View, 
  Text, 
  ImageBackground, 
  StyleSheet, 
  TextInput,
  ScrollView, 
  Button,
  Alert
} from 'react-native';

import GStyleSheet from '../globalstyle';

class newClient extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      village: '',
      post: '',
      upozila: '',
      mobileNumber: '',
      amount: null,
      paidHistory: {
        
      },
      comment: '',

      formError: false
    }
  }
  onSubmitForm = () => {
    console.log("Yes")
    console.log(this.state);
    if(this.state.name == '' || this.state.mobileNumber.length < 11 || this.state.amount == null){
      console.log('inside')
      Alert.alert(
        "Client Info. error",
        "Try again",
        [
          
          { text: "OK", onPress: () => console.log("OK Pressed") },
          { text: "Cancle", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      )
    }
    else{
      // this.props.navigation.navigate('DashbordScreen', this.state);
      // this.navigation.navigate.goBack();
    }
    
  }
  render() {
    return (
      <ImageBackground 
        style={styles.container}
        source={require('../../assets/bg_image.png')}
        >
        <Text style={styles.headerText}>your client information here</Text>
        <ScrollView style={styles.formView}>
          <View style={styles.viewStyle}>
            <Text style={{ padding: 5}}>Name</Text>
            <TextInput 
              placeholder='input client name'
              style={styles.input}
              onChangeText={(data) => {this.setState({ name: data})}}
            />
          </View>
          <View style={styles.viewStyle}>
            <Text style={{ padding: 5}}>Mobile Number</Text>
            <TextInput 
              placeholder='Mobile Number'
              style={styles.input}
              onChangeText={(data) => {this.setState({ mobileNumber: data})}}
            />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 5}}>
            <View style={{width: '48%',backgroundColor: '#E05638', borderRadius: 8}}>
              <Text style={{ padding: 5}}>Village</Text>
              <TextInput 
                placeholder='Village'
                style={styles.input}
                onChangeText={(data) => {this.setState({ village: data})}}
              />
            </View>
            <View style={{width: '48%',backgroundColor: '#E05638', paddingLeft: 10, borderRadius: 8}}>
              <Text style={{ padding: 5}}>post</Text>
              <TextInput 
                placeholder='post input here'
                style={styles.input}
                onChangeText={(data) => {this.setState({ post: data})}}
              />
            </View>
          </View>
          <View style={styles.viewStyle}>
            <Text style={{ padding: 5}}>Upozilla</Text>
            <TextInput 
              placeholder='Upozilla'
              style={styles.input}
              onChangeText={(data) => {this.setState({ upozila: data})}}
            />
          </View>
          <View style={styles.viewStyle}>
            <Text style={{ padding: 5}}>Amount</Text>
            <TextInput 
              placeholder='Amount'
              style={styles.input}
              onChangeText={(data) => {this.setState({ amount: data})}}
            />
          </View>
          <View style={styles.viewStyle}>
            <Text style={{ padding: 5}}>Comment</Text>
            <TextInput 
              placeholder='Comment'
              style={styles.input}
              onChangeText={(data) => {this.setState({ comment: data})}}
            />
          </View>
        </ScrollView>
        <View style={{margin: 10}}>
          <Button title='Add Client' onPress={this.onSubmitForm.bind(this)}/>
        </View>
        
      </ImageBackground>      
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  headerText: {
    margin: 19,
    color: 'white',
    fontSize: 19,
  },
  formView: {
    margin: 19,
    width: '90%',
  },
  viewStyle: {
    margin: 5, 
    backgroundColor: '#E05638',
    width: '100%',
    borderRadius: 10
  },
  input: {
    padding: 5,
    borderWidth: .5,
    borderColor: '#7777'
  }
})
export default newClient;