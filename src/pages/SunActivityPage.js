import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LocationAndDateForm from '../components/LocationAndDateForm/LocationAndDateForm';
import SunActivity from '../components/SunActivity/SunActivity';
import { fetchCoordinates } from '../services/services';
import SunCalc from 'suncalc';
import moment from 'moment';

export default class SunActivityPage extends Component {

    constructor (props) {
        super(props);
        this.state = {
            sunActivity: undefined
        };
    }

    getSunActivity (postcode, date) {
        fetchCoordinates(postcode)
            .then((response) => {
                const formattedDate = moment(date).toDate();
                const { latitude, longitude } = response.result;
                const sunActivity = SunCalc.getTimes(formattedDate, latitude, longitude);
                this.setState({sunActivity}, ()=> { console.log("state:",this.state.sunActivity) });
        })
    }

    render () {
        return (
            <View style={styles.pageSunActivity}>
                <Text style={styles.pageSunActivityHeader}>
                    Sunrise and Sunset
                </Text>
                <LocationAndDateForm  getSunActivity={this.getSunActivity} />
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