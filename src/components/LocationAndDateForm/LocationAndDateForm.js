import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';


export default class LocationAndDateForm extends Component {

    handleSubmit () {
        console.log("Click!");
    }

    render () {
        return (
            <View style={styles.form}>
                <Text style={styles.formHeader}>Search for your sunrise and sunset times</Text>
                <View style={styles.field}>
                    <Text style={styles.fieldLabel}>Postcode</Text>
                    <TextInput />
                </View>
                <View style={styles.field}>
                    <Text style={styles.fieldLabel}>Date</Text>
                    <TextInput />
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
    form: {
    },
    formHeader: {
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
    }
});