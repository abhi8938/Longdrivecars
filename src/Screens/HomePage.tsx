import React, { Component } from 'react'
import { Text, StyleSheet, View, ImageBackground, StatusBar, TouchableOpacity, Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SliderBox } from 'react-native-image-slider-box';
import Faded from './../components/Faded';
import { Button } from '../components/Button';
import { Actions } from 'react-native-router-flux';
import NavBar from '../components/NavBar';
const images = [
    {
        image: require('../Assets/background1.jpg'),
        text1: 'Free Washing ',
        text2: 'We Keep Our Cars Neat & Clean'
    },
    {
        image: require('../Assets/background2.jpg'),
        text1: 'Book 2 Days above Get 100 Per Day Discount',
        text2: 'Apply Code:',
        coupon: 'LONGDRIVECARLOVE'
    },
    {
        image: require('../Assets/background3.jpg'),
        text1: 'Book 5 Days above Get 200 Per Day Discount',
        text2: 'Apply Code:',
        coupon: 'LONGDRIVECARKISS'
    },
    {
        image: require('../Assets/background4.jpg'),
        text1: 'Zero Deposit',
        text2: 'No Security Deposit after 10 Bookings( T & C apply)'
    },
    {
        image: require('../Assets/background5.jpg'),
        text1: 'Lowest Prices & Unlimited Kms Never Before ',
        text2: 'No Hidden Charges'
    }
]
const ImageComponent = (props) => {
    return (
            <ImageBackground
                source={props.source.uri.image}
                style={styles.ImageBackground}
            >
                <View style={styles.overlay} />
                <Faded color={"#98BDCF"} direction="up" height={hp('30%')} >
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
                </Faded>
            </ImageBackground>
    )
}

export default class HomePage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
                     <NavBar 
                     onPress={() => this.props.navigation.openDrawer()} 
                     skip={true} 
                     menu={true} 
                     logo={true}
                     skipPress={() => this.props.navigation.navigate('Service')}
                     container={{ top:hp('5%')}}
                     />
                <SliderBox
                    ImageComponent={ImageComponent}
                    sliderBoxHeight={hp('80%')}
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
              <View style={{flex:1, alignItems:'center'}}>
                <Button onPress={() => this.props.navigation.navigate('Signup')}
                 textStyle={{ color:'#000', fontSize:wp('5%')}}
                  style={{  width:wp('90%'), height:hp('8%'),backgroundColor:'#fff'}}>Sign Up</Button>
                  <Button
                  onPress={() => this.props.navigation.navigate('Signin')}
                  textStyle={{color:'#000', fontSize:wp('5%')}}
                  style={{ width:wp('90%'),  height:hp('8%'), borderWidth:2, borderColor:'#fff', backgroundColor: '#fff', }}
                  >Login</Button>
               </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: '#fff',
    },
    container: {
        flex: 1,
        backgroundColor: '#98BDCF',
    },
    ImageBackground: {
        width: wp('100%'),
        height: hp('80%'),
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    overlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: '#98BDCF',
        opacity: 0.5
    }
})
