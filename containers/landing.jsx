import React, { Component } from 'react';
import { FlatList, Text, TextInput, View, Button} from 'react-native';
import Item from '../utils/item'

export default class landing extends Component {
  state = {
    text: "",
    counter: 0,
    items: [new Item("default", "", "")]
  };

  update = () => {
    if (this.state.text){
      this.state.items.push(new Item(this.state.text, "", ""))
      this.setState({
        counter: this.state.counter + 1,
        text: ""
      })
    }
  }

  render(){
    return (
      <View>
        <Text>Fresh Check {this.state.counter}</Text>
        <Button title="take picture/add new item" onPress={this.update}></Button>
        <TextInput name="blabla" style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
            }} onChangeText={newText => this.setState({text: newText})} onSubmitEditing={this.update}>{this.state.text}</TextInput>
        <FlatList data={this.state.items} renderItem={({item}) => <Text>{item.name}{item.expiry_date}</Text>}/>
      </View>
  );}
}
