import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export const TextPretty = (props) =>{
    return(
        <View style={[styles.container, props.style]}>
            <Text style={[styles.leftText,props.styleLeft]}>{props.left}</Text>
            <Text style={[ styles.rightText,props.styleRight]}>{props.right}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
container:{
flexDirection:'row',
justifyContent:'space-between',
paddingLeft:wp('3%'),
paddingRight:wp('3%'),
marginBottom:wp('1%')
},
leftText:{
color:'#535353',
fontSize:wp('4%')
},
rightText:{
color:'#F5F5F5',
fontSize:wp('4.5%')    
}
})