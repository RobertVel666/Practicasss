/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { LoginView } from "./src/LoginView";
import { HomeView } from "./src/HomeView";
import { Actions, Scene, Router } from 'react-native-router-flux';

const scenes = Actions.create(
  <Scene key = "root">
    <Scene key = "login" component="LoginView"/>
    <Scene key = "home" component="HomeView"/>
  </Scene>
)

export default class App extends Component<Props> {
  render() {
    return <Router scenes = {scenes}/>
  }
}

const styles = StyleSheet.create({});
