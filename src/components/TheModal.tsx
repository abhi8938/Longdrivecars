import React, { Component } from 'react'
import { Text, StyleSheet, View, Modal, Alert, TouchableOpacity, Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Button } from './Button';

type onPressEvent = () => void;
type ModalProps = {
    visible?: boolean
    onRequestClose?: onPressEvent
    onPressCity?:onPressEvent
    onPressArea?:onPressEvent
    onPressStart?:onPressEvent
    onPressEnd?: onPressEvent
    proceed:onPressEvent
    start?:string,
    end?:string
}

export default class TheModal extends Component<ModalProps> {

    renderDateTime(){
        const start = this.props.start? this.props.start: '...';
        const end = this.props.end? this.props.end: '...'
        const textStyle = this.props.start? {fontWeight: '800', fontSize:wp('4.3%')}:null;
        return(
        <View style={[styles.firstContainer,{flexDirection:'row', justifyContent:'space-between'}]}>
             <TouchableOpacity onPress={this.props.onPressStart} style={ { paddingLeft: wp('3%'), borderBottomWidth:0 }}>
                <Text style={{ color: '#ccc', fontSize: wp('4%'), fontWeight: 'bold', }}>Start Date </Text>
                <Text style={[{ color: '#F5F5F5', fontSize: wp('6%'), fontWeight: 'bold', lineHeight:20 }, textStyle]}>{start}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.props.onPressEnd} style={{ paddingLeft: wp('3%'), borderBottomWidth:0, paddingRight:wp('3%') }}>
                <Text style={{ color: '#ccc', fontSize: wp('4%'), fontWeight: 'bold', }}>End Date </Text>
                <Text style={[{ color: '#F5F5F5', fontSize: wp('6%'), fontWeight: 'bold', lineHeight:20 }, textStyle]}>{end}</Text>
            </TouchableOpacity>
        </View>
        )
    }

    renderCity() {
        return (
            <View style={{flexDirection:'row',justifyContent:'space-between', borderBottomColor: '#F5F5F5', borderBottomWidth: 1}}>
            <TouchableOpacity onPress={this.props.onPressCity} style={[styles.firstContainer, { paddingLeft: wp('3%') }]}>
                <Text style={{ color: '#ccc', fontSize: wp('4%'), fontWeight: 'bold', padding: 0, margin: 0 }}>Select City </Text>
                <Text style={{ color: '#F5F5F5', fontSize: wp('6%'), fontWeight: 'bold', lineHeight:20, padding: 0, margin: 0 }}>...</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.props.onPressArea} style={[styles.firstContainer, { paddingLeft: wp('3%'), paddingRight:wp('3%') }]}>
                <Text style={{ color: '#ccc', fontSize: wp('4%'), fontWeight: 'bold', padding: 0, margin: 0 }}>Select Area </Text>
                <Text style={{ color: '#F5F5F5', fontSize: wp('6%'), fontWeight: 'bold', lineHeight:20, padding: 0, margin: 0 }}>...</Text>
            </TouchableOpacity>
            </View>
        )
    }

    closeButton() {
        return (
            <TouchableOpacity
                style={{ alignSelf: 'center', left:20 }}
                onPress={this.props.onRequestClose}
            >
                <Image
                    source={require('../Assets/cancel.png')}
                    style={{ width: wp('4.5%'), height: hp('2.5%') }}
                />
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <Modal
                visible={this.props.visible}
                onRequestClose={this.props.onRequestClose}
                animationType="slide"
                transparent={true}
            >
                <View style={styles.container}>
                    <View style={[styles.firstContainer, {
                        paddingLeft: wp('25%'),
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                    }]}>
                        <Text style={{ color: '#F5F5F5', fontSize: wp('5%'), fontWeight: 'bold' }}> Daily Trip </Text>
                        {this.closeButton()}
                    </View>
                    {this.renderCity()}
                    {this.renderDateTime()}
                     <Button
                       onPress={this.props.proceed}
                       textStyle={{color:'#000', fontSize:wp('4.5%')}}
                       style={styles.button}
                     >Proceed</Button>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    button:{
        width:wp('98%'),
          height:hp('8%'),
           borderWidth:2, 
           borderColor:'#fff', 
           backgroundColor: '#fff',
           elevation:0 ,
           borderRadius:0,
           marginBottom:0
    },
    firstContainer: {
        paddingTop: hp('1.5%'),
        paddingBottom: hp('1.5%')
    },
    container: {
        width: wp('98%'),
        backgroundColor: '#7C94AD',
        alignSelf: 'center',
        top: 150
    }
})
