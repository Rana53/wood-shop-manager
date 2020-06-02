import React, { Component } from 'react'
import { Image, View, Text, ImageBackground, StyleSheet, Button} from 'react-native'
import GStyleSheet from '../globalstyle';

class Welcome extends Component {
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
          <Text>Ershad kath store</Text>
          <Text>Cilakhana, Nageswari</Text>
        </View>
        <View style={styles.button}>
          <Button
            title='Login here'
            style={{borderRadius:20}}
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
    alignItems: 'center',
    margin: 5,
    backgroundColor: 'white',
    width: 200
  }
});
export default Welcome;
