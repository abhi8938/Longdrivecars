import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, TextInput, Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

type CustomeTextProps ={
    Label?:boolean,
    labelText?:string
    icon?:boolean,
    style?:any,
    value:string,
    onChangeText:any,
    IconSource?:any
}

export default class CustomTextInput extends Component<CustomeTextProps>{
    renderText(){
        if( this.props.Label){
            return(
                <Text style={[styles.label]}>{this.props.labelText}</Text>
            )
        }
    }
    renderIcon(){
        if(this.props.icon){
            return(
                <Image
                source={this.props.IconSource}
                style={{ marginBottom:hp('1.5%'), width:wp('9%'), height:hp('4.5%'), resizeMode:'contain'}}
                />
            )
        }
    }
    render(){
    return(
    <View>
        {this.renderText()}
           <View style={{flexDirection:'row', alignItems:'center'}}>
               {this.renderIcon()}
              <TextInput
                 style={[styles.textinput, this.props.style]}
                 value = {this.props.value}
                 onChangeText={this.props.onChangeText}  
            />
            </View>
            </View>
    )
    }
}

const styles = StyleSheet.create({
    label:{
        marginLeft:wp('13%'),
        fontSize:wp('4.5%'),
        color:'#010812',
        marginBottom:hp('1.5%')
    },
    textinput:{
        paddingLeft:wp('3%'),
        marginBottom:hp('2%'),
        fontSize:wp('5%'),
        color:'#fff',
        borderRadius:4,
      width:wp('78%'),
      height:hp('8%'),
      backgroundColor:'#44586A'
    },
})
