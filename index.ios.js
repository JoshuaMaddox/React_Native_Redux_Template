// To change the name do the following: 
// Change names in index.ios.js class and AppRegistry
// Change name in package.json
// Delete anroid and ios folders
// Terminal: react-native upgrade
// Terminal: npm i


import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import App from './app/index'

export default class NewApp extends Component {
  render() {
    return (
      <App />
    )
  }
}

AppRegistry.registerComponent('NewApp', () => NewApp);
