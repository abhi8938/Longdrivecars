import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, ImageBackground, TimePickerAndroid, } from 'react-native'
import NavBar from './../components/NavBar';
import { SliderBox } from 'react-native-image-slider-box';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import TheModal from '../components/TheModal';
import DateTime from './../components/DateTime';
const images = [
    {
        image: require('../Assets/banner.jpg'),
        text1: 'Self drive car',
        text2: 'Lowest price in hyderabad'
    }
]
const ImageComponent = (props) => {
    return (
        <ImageBackground
            source={props.source.uri.image}
            style={styles.ImageBackground}
        >
            <View style={styles.overlay} />
            <View style={{ width: wp('100%'), height: hp('20%'), marginBottom: hp('3%'), paddingLeft: wp('5%'), paddingRight: wp('5%'), justifyContent: 'flex-start' }}>
                <Text style={[styles.text, { fontSize: wp('7%'), fontWeight: 'bold', marginBottom: hp('1%') }]}>{props.source.uri.text1}
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={[styles.text, { fontSize: wp('4.5%'), fontWeight: '500', marginRight: wp('3%'), }]}>{props.source.uri.text2}
                    </Text>
                    <Text style={[styles.text, { fontSize: wp('5.5%'), fontWeight: 'bold' }]}>{props.source.uri.coupon}
                    </Text>
                </View>
            </View>
        </ImageBackground>
    )
}

export default class ServiceScreen extends Component {
    state = {
        visibleModal: false,
        isStartDateTimePickerVisible: false,
        isEndDateTimePickerVisible: false,
        start:'',
        end:'',
        city:''
    }
    handlePress = () => {
        this.setState({ visibleModal: true });
    }
    hideStartDateTimePicker = () => {
        this.setState({ isStartDateTimePickerVisible: false });
    };
    hideEndDateTimePicker = () => {
        this.setState({ isEndDateTimePickerVisible: false });
    };
    showStartDateTimePicker = () => {
        this.setState({ isStartDateTimePickerVisible: true });
    };
    showEndDateTimePicker = () => {
        this.setState({ isEndDateTimePickerVisible: true });
    };
    handleStartDatePicked = (date:Date) => {
        console.log("A Start date has been picked: ");
        this.setState({ start: `${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`}, () => {
            this.hideStartDateTimePicker();
        } );
     
    };
    handleEndDatePicked = (date:Date) => {
        console.log("A end date has been picked: ", date);
        this.setState({ end:`${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`}, () => {
            this.hideEndDateTimePicker();
        })
       
    };
    render() {
        return (
            <View style={styles.container}>
                <NavBar
                    menu={false}
                    skip={false}
                    back={true}
                    logo={true}
                    logoStyle={{ marginRight: wp('40%') }}
                    container={{ top: hp('1%'), position: 'relative' }}
                    onPressBack={() => this.props.navigation.navigate('Home')}
                />
                <TouchableOpacity
                    onPress={this.handlePress}
                    style={styles.serviceContainer}>
                    <Text style={{ color: '#F5F5F5', fontSize: wp('6%') }}>Daily Rentals</Text>
                    <Text style={{ color: '#E2E5DE', fontSize: wp('4.5%') }}>For daily trips </Text>
                </TouchableOpacity>
                <SliderBox
                    ImageComponent={ImageComponent}
                    sliderBoxHeight={hp('40%')}
                    images={images}
                    onCurrentImagePressed={index =>
                        console.warn(`image ${index} pressed`)
                    }
                    dotStyle={{
                        width: 7,
                        height: 7,
                        borderRadius: 15,
                        padding: 0,
                        margin: 0
                    }}
                />
                <TheModal
                    start={this.state.start}
                    end={this.state.end}
                    onPressStart={this.showStartDateTimePicker}
                    onPressEnd={this.showEndDateTimePicker}
                    proceed={() => this.props.navigation.navigate('Carslist')}
                    visible={this.state.visibleModal}
                    onRequestClose={() => this.setState({ visibleModal: false, start:'', end:''  })}
                    onPressArea={() => {console.log(('pressed'))}}
                    />
                <DateTime
                    isvisible={this.state.isStartDateTimePickerVisible}
                    onConfirm={this.handleStartDatePicked}
                    onCancel={this.hideStartDateTimePicker}
                />
                <DateTime
                    isvisible={this.state.isEndDateTimePickerVisible}
                    onConfirm={this.handleEndDatePicked}
                    onCancel={this.hideEndDateTimePicker}
                />
              
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: '#000',
    },
    ImageBackground: {
        width: wp('100%'),
        height: hp('36%'),
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    serviceContainer: {
        marginTop: hp('10%'),
        backgroundColor: '#7C94AD',
        padding: wp('3%'),
        marginBottom: hp('5%')
    },
    container: {
        backgroundColor: '#98BDCF',
        flex: 1
    },
    overlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: '#fff',
        opacity: 0.5
    }
})
