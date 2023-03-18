import React from 'react';
import { ScrollView , View} from 'react-native';
import Landing from './containers/landing.jsx';
import Test from './containers/testing.jsx';

export default function App() {
  return ( 
    <ScrollView>
      <View style={{borderWidth: 20, borderColor: 'white', borderTopWidth: 50}}>
        <Landing/>
        {/* <Test/> */}
      </View>
    </ScrollView>
  );
}