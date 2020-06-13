import React, { Component } from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Button 
  } from 'react-native';
class SingleItem extends Component{
  constructor(props){
    super(props);
  }
  onPressView = () => {
    this.props.nav('ViewDetilsScreen',{client:this.props.client, id:this.props.id})
  }
  render(){
    return (
        <View 
          style={
            { flex: 1,
              flexDirection:'row', 
              justifyContent: 'space-between', 
              backgroundColor:'red', 
              width:'95%',
              margin: 10,
              borderRadius:5
            }
          }>
          <View style={{margin: 5, fontsize: 50}}>
            <Text style={{ fontSize: 15, margin: 2}}>{this.props.client.name}</Text>
            <Text style={{ fontSize: 15, margin: 2}}>{this.props.client.village} , {this.props.client.post}</Text>
            <Text style={{ fontSize: 15, margin: 2}}>{this.props.client.mobileNumber}</Text>
          </View>
          <View style={{justifyContent: 'space-between', margin: 5}}>
            <Text style={{fontSize: 40}}>$ {this.props.client.amount}</Text>
            <View style={{alignItems:'flex-end'}}>
              <Button title='View' onPress={this.onPressView}/>
              {/* <TouchableOpacity 
                style={{backgroundColor: 'white', borderRadius: 10}} 
                onPress={this.onPressView.bind(this)}>
                <Text style={{fontSize: 19}}> View </Text>
              </TouchableOpacity> */}
            </View>
          </View>
        </View>
      )
  }
  
}

export default SingleItem;