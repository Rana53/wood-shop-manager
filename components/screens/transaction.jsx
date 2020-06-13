import React, { Component } from 'react'
import {View, Text, ImageBackground, StyleSheet, Alert} from 'react-native'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
export default class transaction extends Component {
    constructor(props){
      super(props)
      const {params} = this.props.navigation.state;
      this.state = {
        name: params.client.name, 
        amount: params.client.amount,
        clientId: params.client.clientId,
        history: params.client.paidHistory,

        paidableAmount: null
      }
      
      this.id = params.clientId
    }
    onPressUpdateAmount= () => {
        Alert.alert(
            `Are your sure to paid ?${this.state.paidableAmount}`,
            [
              { text: "Yes", onPress: () => console.log("OK Pressed") }, 
              { text: "No", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
          )
    }
    render() {
        return (
          <ImageBackground 
            style={styles.container}
            source={require('../../assets/bg_image.png')}>
            <Text style={{margin:20}}>{this.state.name}</Text>
            
            <ScrollView style={{height: "50", width: '80%'}}>
              
            </ScrollView>
          </ImageBackground>
        )
    }
}

const styles= StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center'
    }
})