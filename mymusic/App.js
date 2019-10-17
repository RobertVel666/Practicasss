/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Switch, TextInput} from 'react-native';

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
      switchValue: false,
    };
  }
  onChangeText =(text) =>{
    alert("title","Es lo que se escribio")
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
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
      <Switch 
        onValueChange = {() => this.onChange(!this.state.switchValue)}
        value = {this.state.switchValue}
      />
      <Button
          onPress={this.onPressLearnMore}
          title = "Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text style = {styles.welcome}> My music - Roberto</Text>
        <Text style = {styles.instructions}>To get started, edit App.js</Text>
        <Text style = {styles.instructions}>{instructions}</Text>
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
