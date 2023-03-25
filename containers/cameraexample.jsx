import React, {Component} from 'react';
import { StyleSheet, View, Button} from 'react-native';
import { Camera } from 'expo-camera';

export default class App extends Component {

    // Define state variables
    state = {
        hasCameraPermission: null,
        camera: null,
        image: null,
        type: Camera.Constants.Type.back
    }

    // Render the component
    render(){
        return (
        <View style={{ flex: 1}}>
            <View style={styles.cameraContainer}>
                    <Camera 
                        style={styles.fixedRatio} 
                        type={this.state.type}
                        ratio={'1:1'} 
                    />
            </View>
            <Button
                title="Flip Image"
                onPress={() => {
                setType(
                    type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
                }}>
            </Button>
            <Button 
                title="Take Picture" 
                onPress={ () => {this.props.navigation.navigate("Home")}} 
            />
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