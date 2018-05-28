import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class SunActivity extends Component {
    render () {
        return (
            <View style={styles.sunActivity}>
                <Text style={styles.sunActivityResults}>
                    Your sunrise: <Text className={styles.sunActivityResultsValue}>sunrise</Text>
                </Text>
                <Text style={styles.sunActivityResults}>
                    Your sunset: <Text style={styles.sunActivityResultsValue}>sunset</Text>
                </Text>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    sunActivity: {
        marginTop: 32,
        borderWidth: 1,
        borderColor: '#d9d9d9',
    },
    sunActivityResults: {
        fontSize: 16,
        margin: 16,
    },
    sunActivityResultsValue: {
        fontWeight: '400'
    }
});