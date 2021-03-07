import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state={Num1:0, Num2:0};
  }

  Suma=()=>{
    var N1 = this.state.Num1;
    var N2 = this.state.Num2;
    var R = N1 * N2;
    alert(R)
  }
  render(){
    return (
      <View style={styles.container}>
        <TextInput style={ styles.TextInput } placeholder='Num1' onChangeText={ Num1=>this.setState({ Num1 }) } />
        <TextInput style={ styles.TextInput } placeholder='Num2' onChangeText={ Num2=>this.setState({ Num2 }) }  />
        <Button title="Sum" style={ styles.TextInput }  onPress={ this.Suma }/>
        <StatusBar style="auto" />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6BBB13',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextInput: {
    borderWidth:1, 
    margin: 10, 
    borderColor: '#fff', 
    padding: 10, 
    color: '#fff'
  }
});
