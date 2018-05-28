import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import DatePicker from '../DatePicker/DatePicker';

export default class LocationAndDateForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            postcode: '',
            date: ''
        };
    }

    updatePostCode (postcode) {
        this.setState({postcode});
    }

    updateDate (date) {
        this.setState({date});
    }

    render () {
        return (
            <View style={styles.form}>
                <Text style={styles.formHeader}>Search for your sunrise and sunset times</Text>
                <View style={styles.field}>
                    <Text>Postcode</Text>
                    <TextInput
                        maxLength={8}
                        style={styles.fieldInput}
                        onChangeText={(postcode)=> {this.updatePostCode(postcode)}} />
                </View>
                <View style={styles.field}>
                    <Text>Date</Text>
                    <DatePicker updateDate={(date)=>{this.updateDate(date)}} />
                </View>
                <View>
                    <View style={styles.footerButton}>
                        <Text color="#841584" onPress={this.handleSubmit} style={styles.footerButtonText} title="Submit form">
                            Find
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    form: {
        borderTopWidth: 2,
        borderColor: '#ffffff',
    },
    formHeader: {
        color: '#333',
        marginTop: 24,
        marginBottom: 16,
        fontSize: 16,
    },
    footerButton: {
        paddingTop: 8,
        paddingBottom: 8,
        paddingRight: 16,
        paddingLeft: 16,
        borderRadius: 4,
        backgroundColor: '#61b2a7',
        width: 'auto',
        alignSelf: 'flex-start'
    },
    footerButtonText: {
        fontWeight: '400',
        fontSize: 14,
        color: 'white',
        alignSelf: 'center'
    },
    field: {
        marginBottom: 16
    },
    fieldInput: {
        borderWidth: 1,
        borderColor: '#d9d9d9',
        padding: 4,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 2,
        fontSize: 12,
        maxWidth: 320
    }
});