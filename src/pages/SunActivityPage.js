import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LocationAndDateForm from '../components/LocationAndDateForm/LocationAndDateForm';
import SunActivity from '../components/SunActivity/SunActivity';

export default class SunActivityPage extends Component {
    render () {
        return (
            <View style={styles.pageSunActivity}>
                <Text style={styles.pageSunActivityHeader}>
                    Sunrise and Sunset
                </Text>
                <LocationAndDateForm />
                <SunActivity />
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
        fontSize: 20,
        paddingBottom: 8,
        marginTop: 24,
    }
});