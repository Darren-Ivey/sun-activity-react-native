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
    },
    sunActivityResults: {
    },
    sunActivityResultsValue: {
    }
});