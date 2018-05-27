import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import SunActivityPage from './src/pages/SunActivityPage';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SunActivityPage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 60,
    },
});
