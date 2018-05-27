import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LocationAndDateForm from '../components/LocationAndDateForm/LocationAndDateForm';

export default class SunActivityPage extends Component {
    render () {
        return (
            <View style={styles.pageSunActivity}>
                <Text style={styles.pageSunActivityHeader}>
                    Sunrise and Sunset
                </Text>
                <LocationAndDateForm />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pageSunActivity: {
        backgroundColor: '#f7f7f7',
        paddingTop: 8,
        paddingRight: 32,
        paddingBottom: 32,
        paddingLeft: 32,
    },
    pageSunActivityHeader: {
        color: '#333',
        fontWeight: '300',
        paddingBottom: 8,
        marginTop: 24,
    }
});