import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';


export default class LocationAndDateForm extends Component {

    handleSubmit () {
        console.log("Click!");
    }

    render () {
        return (
            <View>
                <Text style={styles.formHeader}>Search for your sunrise and sunset times</Text>
                <View style={styles.field}>
                    <Text style={styles.fieldLabel}>Postcode</Text>
                    <TextInput style={styles.fieldInput} />
                </View>
                <View style={styles.field}>
                    <Text style={styles.fieldLabel}>Date</Text>
                    <TextInput style={styles.fieldInput} />
                </View>
                <View style={styles.footer}>
                    <Button onPress={this.handleSubmit} style={styles.footerButton} title="Submit form">
                        Find
                    </Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    formHeader: {
        color: '#333',
        marginTop: 24,
        marginBottom: 16,
        fontSize: 14,
    },
    fieldLabel: {
    },
    fieldInputText: {
    },
    footerButton: {
    },
    footer: {
    },
    field: {
        marginBottom: 16
    },
    fieldInput: {
        borderWidth: 1,
        borderColor: 'black',
    }
});