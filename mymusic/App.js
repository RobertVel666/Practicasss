/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Switch, TextInput, Alert} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      textValue: "",
    };
  }
  onChangeText =() =>{
    const {text} = this.state
    Alert.alert(text)
  }

  onChange = (value) => {
    console.warn(`El switch cambiara a: ${value}`)
    this.setState({switchValue: value})
  }
  onPressLearnMore(){
    console.warn('Presionaste el boton')
  }
  render() {
    return (
      <View style = {styles.container}>
      <Switch 
        onValueChange = {() => this.onChange(!this.state.switchValue)}
        value = {this.state.switchValue}
      />
      <Button
          onPress={this.onPressLearnMore}
          onPress={this.onChangeText}
          title = "Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text style = {styles.welcome}> My music - Roberto</Text>
        <Text style = {styles.instructions}>To get started, edit App.js</Text>
        <Text style = {styles.instructions}>{instructions}</Text>
        <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => this.setState({text})}
        text = {this.state.textValue}
        placeholder = "Yeah"
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
