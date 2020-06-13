import React, { Component } from 'react';
import { 
  View, 
  Text, 
  ImageBackground, 
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  TextInput,
  Button, 
  ActivityIndicator
} from 'react-native';
import GStyleSheet from '../globalstyle';
import firebase from '../../database/firebase';

import SingleItem from './singleItem';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [],
      keys: [],
      error: false
    }
  }
  
  componentDidMount(){
    
    const db = firebase.database();
   
    db.ref('/clients').on('value', snapshot => {
      let dataItem = snapshot.val()
      this.setState({
        clients: {...dataItem}
      })
      this.setState({
        keys: Object.keys(this.state.clients)
      })
    })
  }

  onCreateNewUser = () => {
    this.props.navigation.navigate('NewClientScreen');
  }
  
  render() {
    console.log('Key  ',this.state.keys)
    console.log('data ', this.state.clients[this.state.keys[0]])

    if(this.state.keys.length < 1){
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }
     
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
        { 
          this.state.keys.length > 0 ?
          this.state.keys.map(key =>{
            return (
              <SingleItem
                key={key}
                id={key}
                client={this.state.clients[key]}
                nav={this.props.navigation.navigate}
            />)
          })
          :
          <Text>done so</Text>
          
        }
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
  }, 
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
export default Dashboard;