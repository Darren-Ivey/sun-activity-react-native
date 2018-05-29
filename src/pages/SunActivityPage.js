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
            fetchCoordinatesError: undefined,
            getCurrentPositionError: undefined
        };
    }

    sunActivity (date, latitude, longitude) {
        return SunCalc.getTimes(date, latitude, longitude);
    }

    getSunActivity (postcode, date) {
        if (postcode) {
            fetchCoordinates(postcode)
                .then((response) => {
                    return {
                        formattedDate: moment(date).toDate(),
                        latitude: response.result.latitude,
                        longitude: response.result.longitude
                    }
                })
                .then((data) => {
                    this.setState({
                        sunActivity: this.sunActivity(data.formattedDate, data.latitude, data.longitude),
                        fetchCoordinatesError: undefined,
                        getCurrentPositionError: undefined
                    });
                })
                .catch(({error}) => {
                    this.setState({fetchCoordinatesError: error});
                })
        } else {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    this.setState({
                        sunActivity: this.sunActivity(moment(date).toDate(), position.coords.latitude, position.coords.longitude),
                        fetchCoordinatesError: undefined,
                        getCurrentPositionError: undefined
                    });
                },
                (error) => this.setState({ getCurrentPositionError: error })
            );
        }
    }

    render () {
        return (
            <View style={styles.pageSunActivity}>
                <Text style={styles.pageSunActivityHeader}>
                    Sunrise and Sunset
                </Text>
                <LocationAndDateForm
                    fetchCoordinatesError={this.state.fetchCoordinatesError}
                    getCurrentPositionError={this.state.getCurrentPositionError}
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