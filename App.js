import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import SignupScreen from './SignupScreen'


export class App extends Component {
  render() {
    return (
      <View>
        <SignupScreen/>
      </View>
    )
  }
}

export default App;

