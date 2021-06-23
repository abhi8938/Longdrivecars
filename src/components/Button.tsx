import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

export const Button =(props) => {
        return (
            <TouchableOpacity
            onPress={props.onPress}
            style={[styles.button, props.style]}
            >
                <Text style={[styles.text, props.textStyle]}>{props.children}</Text>
                <Text style={[{fontWeight:'bold',display:'none'}, props.miniStyle]}>{props.minitext}</Text>
            </TouchableOpacity>
        )
}

const styles = StyleSheet.create({
    button:{
alignItems:'center',
justifyContent:'center',
borderRadius:5,
elevation:5,
marginBottom:10
    },
    text:{

    }
})
