import React, {Component} from 'react';
import {
  View, 
  Text,
  ImageBackground,
  Image, 
  StyleSheet, 
  TouchableOpacity,
  Button,
  TextInput,
  Alert
} from 'react-native';
import firebase from '../../database/firebase';
import GStyleSheet from '../globalstyle';
 class viewDetails extends Component{
  constructor(props){
    super(props)
    const {params} = this.props.navigation.state;
    this.state = {
      name: params.client.name,
      village: params.client.village,
      post: params.client.post,
      upozila: params.client.upozila,
      mobileNumber: params.client.mobileNumber,
      amount: params.client.amount,

      paidableAmount: 0
    }
    this.id = params.id;
    this.paidHistory = params.client.paidHistory
  }
  onPressUpdateAmount = () => {
    console.log('update-----------------')
    let newAmount = this.state.amount - this.state.paidableAmount
    console.log(newAmount)
    this.setState({
      amount: newAmount
    })
    
    console.log("paid histoyr " ,this.paidHistory)
    const history = this.paidHistory;
    history.push({
      date: new Date().getDate()+'-'+ new Date().getMonth()+'-'+new Date().getFullYear(),
      paidAmount: this.state.paidableAmount,
      remaining: newAmount
    });
    console.log('paidable amount ', this.state.paidableAmount);
    console.log("paid histoyr ",history);
    console.log('remaining ', this.state.amount);
    const db = firebase.database();
    db.ref('/clients').update({
      [this.id] : {
        name: this.state.name,
        name: this.state.name,
        village: this.state.village,
        post: this.state.post,
        upozila: this.state.upozila,
        mobileNumber: this.state.mobileNumber,

        amount: newAmount,
        paidHistory: history
      }
    })
    
    console.log("Update done")
  }
  commnet = () => {
    Alert.alert(
      `Are your sure to paid ?${this.state.paidableAmount}`,'error',

      [
        { text: "No", onPress: () => console.log("OK Pressed") }, 
        { text: "Yes", onPress: () => this.updateAmount() }
      ],
      { cancelable: false }
    )
  }
  render(){
    console.log(this.state.paidableAmount)
    return (
      <ImageBackground 
        style={styles.container}
        source={require('../../assets/bg_image.png')}>
        <Image 
          style={styles.image}
          source={require('../../assets/imageTemp.png')}
        />
        <Text style={styles.nameText}>{this.state.name}</Text>
        <Text>{this.state.village} , {this.state.post}</Text>
        <Text style={{fontWeight: '300'}}>{this.state.upozila}</Text>
        <Text style={{margin: 10}}>{this.state.mobileNumber}</Text>
        <TouchableOpacity style={styles.tObuttonStyle}>
          <Text>Call Now</Text>
        </TouchableOpacity>
        <View style={{backgroundColor: 'red', marginBottom: 5}}>
          <Text>Amount need to pay: $ {this.state.amount}</Text>
        </View>


        <View style={{alignItems: 'center'}}>
                <View style={{flexDirection: 'row'}}>
                    <Text 
                    style={{fontWeight:'500', color: 'white'}}> 
                    পাওনা টাকা : 
                    </Text>
                    <Text style={{fontWeight:'500', color: 'red'}}>
                    {this.state.amount}                  
                    </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                <Text 
                    style={{fontWeight:'500', color: 'white'}}> 
                    জমা দিবে  : 
                    </Text>
                    <TextInput style={{width: 50, paddingLeft: 3,borderBottomWidth: 2, borderColor: '#777'}}
                      onChangeText={(value) => this.setState({paidableAmount: value})}
                      keyboardType='numeric'
                    />
                </View>
                <TouchableOpacity 
                    style={{backgroundColor: '#64F321', padding: 2, borderRadius: 5}}
                      onPress={this.onPressUpdateAmount}
                    >
                    <Text> জমা করুন </Text>
                </TouchableOpacity>
            </View>
      </ImageBackground>  
    )
  }
}

export default viewDetails;

const styles= StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    marginTop: 20,
    height: 150,
    width: 150,
    borderRadius: 100,
    borderColor: 'gray'
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 20    
  },
  tObuttonStyle: {
    margin: 10,
    backgroundColor:'#64F321', 
    width: '35%', 
    borderRadius: 5, 
    alignItems: 'center'
  }
})