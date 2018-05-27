import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class SunActivityPage extends Component {
    render () {
        return (
            <View style={styles.pageSunActivity}>
                <Text style={styles.pageSunActivity}>
                    Sunrise and Sunset
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pageSunActivity: {
        backgroundColor: '#f7f7f7',
    }
});