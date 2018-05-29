import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Button from 'react-native-button';
import DatePicker from '../DatePicker/DatePicker';
import CheckBox from 'react-native-check-box';
import moment from 'moment';

export default class LocationAndDateForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            postcode: '',
            date: moment(),
            useLocation: false
        };
    }

    updatePostCode (postcode) {
        this.setState({postcode});
    }

    updateDate (date) {
        this.setState({date});
    }

    handleSubmit () {
        const { useLocation, postcode, date } = this.state;
        if (useLocation) {
            this.props.getSunActivityUserLocation(date)
        } else {
            this.props.getSunActivityPostCode(postcode, date)
        }
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

    handleCheckBox () {
        this.setState({
            postcode: '',
            useLocation: !this.state.useLocation
        })
    }

    handleFetchCoordinatesError () {
        const { fetchCoordinatesError } = this.props;
        if (fetchCoordinatesError) {
            return (fetchCoordinatesError === 404 || fetchCoordinatesError === 400) ? this.renderInputError() : this.renderServiceError();
        }
    }

    renderGetCurrentPositionError () {
        if (this.props.getCurrentPositionError) {
            return (
                <View style={styles.error}>
                    <Text style={styles.errorMessage}>Unable to access your location</Text>
                </View>
            )
        }
    }

    render () {
        const { postcode, date, useLocation } = this.state;
        return (
            <View style={styles.form}>
                <Text style={styles.formHeader}>Search for your sunrise and sunset times</Text>
                <View style={styles.field}>
                    <Text>Postcode</Text>
                    {
                        !useLocation &&
                        <TextInput
                            editable={!useLocation}
                            value={!useLocation ? postcode : ''}
                            maxLength={8}
                            style={styles.fieldInput}
                            onChangeText={(postcode) => {this.updatePostCode(postcode)}} />
                    }
                </View>
                <View style={styles.field}>
                    <CheckBox
                        checkBoxColor={'#C7C2BA'}
                        rightText={'Use my location'}
                        onClick={()=> {this.handleCheckBox()}}
                        isChecked={useLocation} />
                </View>
                <View style={styles.field}>
                    <Text>Date</Text>
                    <DatePicker date={date} updateDate={(date)=>{this.updateDate(date)}} />
                </View>
                <View>
                    {this.handleFetchCoordinatesError()}
                    {this.renderGetCurrentPositionError()}
                    <Button
                        style={styles.footerButton}
                        onPress={() => this.handleSubmit()}>
                        Find
                    </Button>
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
        fontWeight: '400',
        fontSize: 14,
        color: 'white',
        alignSelf: 'flex-start'
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
    fieldCheckBox: {
        color: '#d9d9d9',
    },
    error: {
        marginBottom: 24,
    },
    errorMessage: {
        color: '#FF4500',
    },
    label: {

    }
});