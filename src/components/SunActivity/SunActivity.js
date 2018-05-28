import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';

export default class SunActivity extends Component {
    render () {
        return (
            <View style={styles.sunActivity}>
                <Text style={styles.sunActivityResults}>
                    Your sunrise: <Text className={styles.sunActivityResultsValue}>
                    { this.props.sunActivity ? moment(this.props.sunActivity.sunrise).format("HH:mm"): undefined }
                </Text>
                </Text>
                <Text style={styles.sunActivityResults}>
                    Your sunset: <Text style={styles.sunActivityResultsValue}>
                    { this.props.sunActivity ? moment(this.props.sunActivity.sunset).format("HH:mm"): undefined }
                </Text>
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