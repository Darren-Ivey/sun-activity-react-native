import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'

export default class MyDatePicker extends Component {

    render(){
        return (
            <DatePicker
                style={{width: '100%'}}
                mode="date"
                format="DD-MM-YYYY"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        borderWidth: 1,
                        borderColor: '#d9d9d9',
                        padding: 4,
                        marginTop: 8,
                        marginBottom: 8,
                        borderRadius: 2,
                        maxWidth: 320,
                    }
                }}
                onDateChange={
                    (date) => {this.props.updateDate(date)}
                }
            />
        )
    }
}