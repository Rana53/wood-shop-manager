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
import firebase from '../../database/firebase';
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
      
    }
  }
  onSubmitForm = () => {
    const db = firebase.database();
    
    console.log(' on submit form function');
    if(this.state.name == '' || this.state.mobileNumber.length < 11 || this.state.amount == null){
      console.log('inside if ')
      Alert.alert(
        "Client Info. error",
        "Try again",
        [
          { text: "ok", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      )
    }
    else{
      console.log('inside else ')
      db.ref('/clients').push({
        name: this.state.name,
        village: this.state.village,
        post: this.state.post,
        upozila: this.state.upozila,
        mobileNumber: this.state.mobileNumber,
        amount: this.state.amount,
        paidHistory: {
          
        },
        comment: this.state.comment
      });
      this.props.navigation.navigate('DashbordScreen');
      
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
          <Button title='Add Client' onPress={this.onSubmitForm}/>
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