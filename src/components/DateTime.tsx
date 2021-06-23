import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import DateTimePicker from "react-native-modal-datetime-picker";
type onPressEvent = () => void;
type dateTimeProps ={
    isvisible:boolean
    onConfirm:any
    onCancel: onPressEvent
}
export default class DateTime extends Component<dateTimeProps> {
    render() {
        return (
            <DateTimePicker
            isVisible={this.props.isvisible}
            onConfirm={this.props.onConfirm}
            onCancel={this.props.onCancel}
            mode={"datetime"}
        />
        )
    }
}

const styles = StyleSheet.create({})
