import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { Button } from './Button';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { observer } from 'mobx-react';
type CarItemProps = {
    data: any,
   kmdata:any,
   onPress:any
}
@observer
export default class CarItem extends Component<CarItemProps> {
    state={
        index:0
    }
    renderLeft() {
        const { data } = this.props;
        const source = data.uri ? data.uri  : require('../Assets/ecosport.png');
        return (
            <View style={styles.leftContainer}>
                <Text style={{ fontSize: wp('5%'), textAlign: 'center', color: '#F5F5F5', marginBottom: hp('1.5%') }}>{data.Model}</Text>
                <Image
                    source={source}
                    style={{ width: wp('30%'), height: hp('10%') }}
                />
                <Button
                    textStyle={{ fontSize: wp('4.5%'), fontWeight: 'bold' }}
                    onPress={this.props.onPress}
                    style={styles.button}
                >Book</Button>
            </View>
        )
    }
    renderCostCards() {
        const { data } = this.props;
        return (this.props.kmdata.map((element, index) => {
            let Selected = null;
            let selectedText = null;
            console.log(`lement`,element);
            if(element.selected){
                Selected = {
                    borderColor: '#7C94AD',
                    borderWidth: 1.5,
                    borderRadius: 2,
                }
                selectedText ={
                   color:'#7C94AD'
                }
                }
            return (
                <TouchableOpacity
                onPress={() => {
                    this.props.kmdata.map((element, i) =>{
                        if(i == index){
                            return element.selected = true
                        }else{
                            return element.selected = false
                        }
                    })
                } }
                    style={[styles.costItem, Selected]}
                >
                    <Text style={{ color: '#fff', fontSize: wp('4%'), fontWeight: 'bold' }}>₹ 2607</Text>
                    <View style={{ paddingLeft: wp('3%') }}>
                        <Text style={[styles.costText, selectedText]}>Kms limit: {element.Limit} kms</Text>
                        <Text style={[styles.costText, selectedText]}>Extra Kms @ ₹ {data.extraKM}/km</Text>
                    </View>
                </TouchableOpacity>
            )
        })

        )
    }
    renderRight() {
        const { data } = this.props;
        return (
            <View style={styles.rightContainer}>
                {this.renderCostCards()}
            </View>
        )
    }
    render() {
        const { data } = this.props;
        console.log(`data`,data);
        return (
            <View style={styles.container}>
                {this.renderLeft()}
                {this.renderRight()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    costText: {
        color: '#535353',
        fontSize: wp('3.5%')
    },
    costItem: {
        paddingLeft: wp('3%'),
        paddingTop: hp('2%'),
        paddingBottom: hp('1.5%'),
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#F5F5F5',
        marginTop: hp('3.5%'),
        width: wp('30%'),
        paddingLeft: wp('3%'),
        paddingRight: wp('3%'),
        paddingTop: hp('1.5%'),
        paddingBottom: hp('1%')
    },
    container: {
        paddingTop:hp('1.5%'),
        paddingBottom:hp('1.5%'),
        flexDirection: 'row',
        borderBottomColor: '#989A97',
        borderBottomWidth: 2,
    },
    leftContainer: {
        padding: wp('3%'),
        paddingTop: hp('1%'),
        paddingBottom: hp('1%'),
        width: '40%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    rightContainer: {
        flex: 2,
        paddingRight:wp('1%')
    }
})
