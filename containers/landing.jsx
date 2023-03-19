import React, { Component } from 'react';
import { FlatList, Text, TextInput, View, Button, Alert} from 'react-native';
import Item from '../utils/item'


export default class landing extends Component {
  state = {
    nameInput: "",
    shelfLifeInput: new Date().getDate(),
    counter: 0,
    items: [new Item("default", "", "")]
  };

  update = () => {
    console.log("hi")
    // open camera to take photo
    // pass photo into receipt parser
    // receipt parser will return list of names, pass them into database, and return list of shelf lives
    // final return will be a list of names and shelf lives

    // simulate output (prob json?), replace this line with actual output after functions are all integrated together
    let output = [["apple", "march 1"], ["orange", "march 2"]]
    for (let i=0;i<output.length;i++){
      this.state.items.push(new Item(output[i][0], output[i][1]))
      this.setState({})
    }
    
    // if (this.state.nameInput){
    //   this.state.items.push(new Item(this.state.nameInput, this.state.shelfLifeInput, ""))
    //   this.setState({
    //     counter: this.state.counter + 1,
    //     nameInput: "",
    //     shelfLifeInput: "",
    //   })
    // }
  }

  checkShelfLife = (item) => {
    if (this.state.counter < 2){
      return "🟢"
    } else if (this.state.counter < 4){
      return "🟡"
    } 
    return "🔴"
  }

  deletePrompt = (item) => {
    Alert.alert('Delete this item?', '', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {text: 'OK', onPress: () => {
        this.state.items.splice(this.state.items.indexOf(item.name), 1)
        this.setState({})
      }},
    ]);
  }

  render(){
    return (
      <View>
        <Text>Fresh Check {this.state.counter}</Text>
        <Button title="take picture/add new item" onPress={this.update}></Button>
        <TextInput style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
            }} onChangeText={newText => this.setState({nameInput: newText})} onSubmitEditing={this.update}>{this.state.nameInput}</TextInput>
        <TextInput style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
            }} onChangeText={newText => this.setState({shelfLifeInput: newText})} onSubmitEditing={this.update}>{this.state.shelfLifeInput}</TextInput>
        <FlatList data={this.state.items} renderItem={({item}) => 
        <View>
          <Text>{this.checkShelfLife(item)} {item.name} {item.expiry_date} <Text onPress={() => this.deletePrompt(item)}>🗑️</Text></Text>
        </View> }/>
      </View>
  );}
}
