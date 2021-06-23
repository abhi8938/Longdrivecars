import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Actions } from 'react-native-router-flux';
const Link = (props) => {
    return (
        <View style={{flexDirection:'row', alignItems:'center', paddingLeft:wp('5%')}}>
            <Image
            source={props.source}
            style={{ width:wp('10%'), height:hp('5%'), resizeMode:'contain'}}
            />
        <TouchableOpacity
            style={styles.touchable}
            onPress={props.onPress}
        >
            <Text style={styles.link}>{props.children}</Text>
        </TouchableOpacity>
        </View>
    )
}

export default class DrawerMenu extends Component {
    render() {
        return (
            <View style={{ paddingTop: hp('5%'), flex: 1, backgroundColor: '#98BDCF' }}>
                {/* <View style={styles.userContainer}>
                    <Text style={{ color: '#E2E2E2', fontSize: wp('6%'), marginBottom: hp('1%') }}>Abhishek Singh</Text>
                    <Text style={{ color: '#E2E2E2', fontSize: wp('5%'), marginBottom: hp('.5%') }}>abhishek8938@gmail.com</Text>
                </View> */}
                <View>
                    <Link source={require('../Assets/share.png')}>Refer</Link>
                    <Link onPress={() => this.props.navigation.push('Signup')} source={require('../Assets/clipboard.png')}>Register</Link>
                    <Link onPress={() => Actions.replace('Signin')} source={require('../Assets/login.png')}>Login</Link>
                    <Link source={require('../Assets/chip.png')}>Tariffs</Link>
                    <Link source={require('../Assets/tag.png')}>Offers</Link>
                    <Link source={require('../Assets/customer-service.png')}>Help & Support</Link>
                    <Link source={require('../Assets/location.png')}>location</Link>
                </View>
                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center', paddingBottom: hp('1.5%') }}>
                    <TouchableOpacity style={{marginLeft:wp('3%'), marginRight:wp('3%')}} >
                      <Image
                        source={require('../Assets/facebook.png')}
                        style={{width:wp('11%'), height:hp('5.5%')}}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft:wp('3%'), marginRight:wp('3%')}}>
                    <Image
                        source={require('../Assets/twitter.png')}
                        style={{width:wp('11%'), height:hp('5.5%')}}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft:wp('3%'), marginRight:wp('3%')}}>
                    <Image
                        source={require('../Assets/linkedin.png')}
                        style={{width:wp('11%'), height:hp('5.5%')}}
                      />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bottomText: {
        color: '#98BDCF',
        fontSize: wp('4%'),
        paddingLeft: wp('2%'),
        paddingRight: wp('2%'),
        borderRightWidth: 1,
        borderColor: '#98BDCF'
    },
    link: {
        color: '#495154',
        fontSize: wp('5%')
    },
    touchable: {
        paddingLeft: wp('5%'),
        paddingTop: hp('3%'),
        paddingBottom: hp('3%')
    },
    userContainer: {
        paddingLeft: wp('10%'),
        paddingTop: hp('2%'),
        paddingBottom: hp('2%'),
        backgroundColor: '#7C94AD'
    }

})
