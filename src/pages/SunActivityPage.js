import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LocationAndDateForm from '../components/LocationAndDateForm/LocationAndDateForm';
import SunActivity from '../components/SunActivity/SunActivity';
import { fetchCoordinates } from '../services/services';
import SunCalc from 'suncalc';
import moment from 'moment';

export default class SunActivityPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sunActivity: undefined,
            error: undefined
        };
    }

    getSunActivity (postcode, date) {
        fetchCoordinates(postcode)
            .then((response) => {
                return {
                    formattedDate: moment(date).toDate(),
                    latitude: response.result.latitude,
                    longitude: response.result.longitude
                }
            })
            .then((data) => {
                const sunActivity = SunCalc.getTimes(data.formattedDate, data.latitude, data.longitude);
                this.setState({sunActivity});
            })
            .catch((error)=> {
                this.setState({error});
            })
    }

    render () {
        return (
            <View style={styles.pageSunActivity}>
                <Text style={styles.pageSunActivityHeader}>
                    Sunrise and Sunset
                </Text>
                <LocationAndDateForm
                    error={this.state.error}
                    getSunActivity={(postcode, date)=> { this.getSunActivity(postcode, date) }} />
                <SunActivity sunActivity={this.state.sunActivity} />
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