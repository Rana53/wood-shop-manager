import React, { Component } from 'react';
import { View, 
  Text, 
  ImageBackground, 
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Button
} from 'react-native';
import GStyleSheet from '../globalstyle';
import SingleItem from './singleItem';

class Dashboard extends Component {
  onCreateNewUser = () => {
    this.props.navigation.navigate('NewClientScreen');
  }
  constructor(){
    super();
    this.state = {
      
    }
  }
  render() {
    return (
      <ImageBackground 
        style={styles.container}
        source={require('../../assets/bg_image.png')}>
        <Text style={styles.headerText}>your client information here</Text>
        <View style={{width: '80%',height: 25, backgroundColor: 'blue', borderRadius: 10, marginBottom: 5}}>
          <TextInput style={{paddingLeft: 10, justifyContent: 'center'}}/>
        </View>
        <View style={{width: '97%', justifyContent: 'center', height: '78%'}}>
        
        <ScrollView>
          <SingleItem/> 
          <SingleItem/>
          <SingleItem/>
          <SingleItem/>  
          <SingleItem/>  
        </ScrollView>
        </View>
         <View style={{ margin: 10}}>
           <Button title='Add new Customer' onPress={this.onCreateNewUser}/>
         </View>
        
      </ImageBackground>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  headerText: {
    margin: 19,
    color: 'white',
    fontSize: 19,
  }
})
export default Dashboard;