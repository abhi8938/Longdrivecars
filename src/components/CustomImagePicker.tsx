import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

type CustomImagePickerProps = {
    onPress: () => any,
    fileName: string,
    Title: string
}
export default class CustomImagePicker extends Component<CustomImagePickerProps> {
    render() {
        return (
                <View style={{paddingLeft:wp('12%'),paddingBottom:hp('2%')}}>

                    <Text style={styles.label}>{this.props.Title}</Text>
                    <TouchableOpacity
                        onPress={this.props.onPress}
                        style={[styles.button]}
                    >
                       <Image
                       source={require('../Assets/picture.png')}
                       style={{ width:wp('7%'), height:hp('3.5%'), resizeMode:'contain', marginRight:wp('2%')}}
                        />
                        <Text style={{ fontSize: wp('4.2%'), color: '#fff', fontWeight: '500' }}>{this.props.fileName}</Text>
                    </TouchableOpacity>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    label: {
        fontSize: wp('4.5%'),
        color: '#000',
        marginBottom: hp('1%')
    },
    button: {
        alignItems:'center',
        width: wp('78%'),
        marginTop: hp('1%'),
        height: hp('8%'),
        borderRadius: 10,
        flexDirection:'row',
        backgroundColor: 'rgba(52, 78, 97, 1)',
        paddingLeft:wp('2%'),
    }
})

