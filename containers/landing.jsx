import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default class landing extends Component {
    //var ItemArray = ["apple", 'banana', 'orange']
    // var myItem = new Item("apple", "oct 7, 2023")
    // ItemArray.push(myItem)

    render(){
      return (
      <View>
          <Text>hi</Text>
          {/* <Text>{ItemArray}</Text> */}
          <StatusBar style="auto" />
      </View>
      );
      }
}
