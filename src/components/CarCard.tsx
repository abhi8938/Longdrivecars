import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

type CarCardProps ={
    car:string,
    source:any,
    seats:string,
    control:string,
    fuel:string,
}

export default class CarCard extends Component<CarCardProps> {
    render() {
        return (
            <View style={{ flexDirection:'row', paddingTop:hp('3%'), paddingBottom:hp('2%'), paddingLeft:wp('4%')}}>
                <Image
                style={{width: wp('30%'), height: hp('10%')}}
                source={this.props.source}
                />
                <View style={{paddingLeft:wp('5%'), flex:1,justifyContent:'center'}} >
                    <Text style={{ fontSize: wp('5%'), color: '#F5F5F5', marginBottom: hp('.5%') }}>{this.props.car}</Text>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Text style={[styles.text,{borderRightWidth:1}]}>{this.props.seats}</Text>
                        <Text style={[styles.text, {paddingLeft:wp('1%'),borderRightWidth:1}]}>{this.props.control}</Text>
                        <Text style={[styles.text,{paddingLeft:wp('1%')}]}>{this.props.fuel}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text:{
       fontSize:wp('4.2%'),
       color:'#535353',
       borderRightColor:'#535353',
       paddingRight:wp('1%'),
       lineHeight:hp('2.2%'),
       marginTop:hp('.5%')
    }
})
