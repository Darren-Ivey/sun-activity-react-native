import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import DatePicker from '../DatePicker/DatePicker';
import moment from 'moment';

export default class LocationAndDateForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            postcode: '',
            date: moment()
        };
    }

    updatePostCode (postcode) {
        this.setState({postcode});
    }

    updateDate (date) {
        this.setState({date});
    }

    handleSubmit () {
        this.props.getSunActivity(this.state.postcode, this.state.date)
    }

    renderInputError () {
        return (
            <View style={styles.error}>
                <Text style={styles.errorMessage}>Sorry, we can't find a location for that postcode. Please check your postcode is valid or try another.</Text>
            </View>
        )
    }

    renderServiceError () {
        return (
            <View style={styles.error}>
                <Text style={styles.errorMessage}>Please try again.</Text>
            </View>
        )
    }

    handleError () {
        if (this.props.error) {
            console.log("Error: ", this.props.error)
            return (this.props.error === 404 || this.props.error === 400) ? this.renderInputError() : this.renderServiceError();
        }
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
                    <DatePicker date={ this.state.date } updateDate={(date)=>{this.updateDate(date)}} />
                </View>
                <View>
                    { this.handleError() }
                    <View style={styles.footerButton}>
                        <Text onPress={()=> {this.handleSubmit()}} style={styles.footerButtonText} title="Submit form">
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
        padding: 10,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 2,
        fontSize: 12,
        maxWidth: 320
    },
    error: {
        marginBottom: 24,
    },
    errorMessage: {
        color: '#FF4500',
    }
});