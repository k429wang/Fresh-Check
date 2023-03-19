import React, { Component } from 'react';
import { FlatList, Text, TextInput, ScrollView, View, Button, Alert} from 'react-native';
import Item from '../utils/item'

export default class Home extends Component {
  state = {
    nameInput: "",
    shelfLifeInput: "",
    items: []
  };

  update = () => {
    if (this.state.nameInput && this.state.shelfLifeInput){
      this.state.items.push(new Item(this.state.nameInput, this.state.shelfLifeInput))
      this.setState({
        nameInput: "",
        shelfLifeInput: ""
      })
    } else {
      // open camera to take photo
      // pass photo into receipt parser
      // receipt parser will return list of names, pass them into database, and return list of shelf lives
      // final return will be a list of names and shelf lives
      this.props.navigation.navigate("Camera")

      var output = [["PNUT BTTR", "365"], ["CHIPS", "30"], ["SKIM MILK", "10"], ["BANANA", "7"], ["OATRSN COOKIES", "30"]]

      for (let i=0;i<5;i++){
        this.state.items.push(new Item(output[i][0], output[i][1]))
        this.setState({})
      }
    }
  }

  checkShelfLife = (item) => {
    if (item.shelf_life > 7){
      return "🟢"
    } else if (item.shelf_life < 3){
      return "🔴"
    } 
    return "🟡"
  }

  deletePrompt = (item) => {
    Alert.alert('Delete this item?', '', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {text: 'OK', onPress: () => {
        var index = 0;
        for (let i=0;i<this.state.items.length;i++){
          if (this.state.items[i] == item){
            index = this.state.items.indexOf(this.state.items[i])
          }
        }
        this.state.items.splice(index, 1)
        this.setState({})
      }},
    ]);
  }

  render(){
    return (
      <View>
        <Text>Fresh Check </Text>
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
          <Text>{this.checkShelfLife(item)} {item.name} {item.shelf_life} days <Text onPress={() => this.deletePrompt(item)}>🗑️</Text></Text>
        </View> }/>
      </View>
  );}
}
