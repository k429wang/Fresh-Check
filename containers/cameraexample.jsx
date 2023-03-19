import React, {Component} from 'react';
import { StyleSheet ,Text, View, Button, Image} from 'react-native';
import { Camera } from 'expo-camera';

export default class App extends Component {
    state = {
        hasCameraPermission: null,
        camera: null,
        image: null,
        type: Camera.Constants.Type.back
    }
// useEffect(() => {
//     (async () => {
//     const cameraStatus = await Camera.requestPermissionsAsync();
//     setHasCameraPermission(cameraStatus.status === 'granted');
// })();
// }, []);
    render(){
  return (
   <View style={{ flex: 1}}>
      <View style={styles.cameraContainer}>
            <Camera 
            //ref={ref => this.setState({camera: ref})}
            style={styles.fixedRatio} 
            type={this.state.type}
            ratio={'1:1'} />
      </View>
      <Button title="Take Picture" onPress={ () => {this.props.navigation.navigate("Home")}} />
   </View>
  );
    }
}
const styles = StyleSheet.create({
  cameraContainer: {
      flex: 1,
      flexDirection: 'row'
  },
  fixedRatio:{
      flex: 1,
      aspectRatio: 1
  }
})