import React, { Component } from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Button
  } from 'react-native';
class SingleItem extends Component{
  render(){
    return (
        <View 
          style={
            {flexDirection:'row', 
              justifyContent: 'space-between', 
              backgroundColor:'red', 
              width:'95%',
              margin: 10,
              borderRadius:5
            }
            }>
          <View style={{margin: 5, fontsize: 50}}>
            <Text style={{ fontSize: 15, margin: 2}}>Name</Text>
            <Text style={{ fontSize: 15, margin: 2}}>Address</Text>
            <Text style={{ fontSize: 15, margin: 2}}>mobileNumber</Text>
          </View>
          <View style={{justifyContent: 'space-between', margin: 5}}>
            <Text style={{fontSize: 40}}>1000</Text>
            <View style={{alignItems:'flex-end'}}>
              <TouchableOpacity style={{backgroundColor: 'white', borderRadius: 10}}>
                <Text style={{fontSize: 19}}> View </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )
  }
  
}

export default SingleItem;