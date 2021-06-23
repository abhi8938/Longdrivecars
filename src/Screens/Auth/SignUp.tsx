import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image, TextInput } from 'react-native'
import NavBar from './../../components/NavBar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {  GoogleSigninButton } from 'react-native-google-signin';
import loginServices from './../../services/loginServices';
import { inject, observer } from 'mobx-react';
import { Button } from './../../components/Button';
import  CustomTextInput  from './../../components/CustomTextInput';
type signUpProps = {
    login?:loginServices
}
@inject('login')
@observer
export default class SignUp extends Component<signUpProps> {
    state={
        text:'Sign up with email'
    }

    renderFacebook() {
        return (
           <TouchableOpacity
           onPress={this.props.login._facebookSignIn}
           style={styles.facebook}
           >
               <Image
               source={require('../../Assets/facebook-logo.png')}
               style={styles.logo}
               />
               <View style={{flex:1, alignItems:'center'}}>
               <Text style={{ color:'#fff'}}>Sign in with Facebook</Text>
               </View>
               </TouchableOpacity>
        )
    }

    renderGoogle() {
        return (
            <GoogleSigninButton
                style={{ width: wp('80%'), height: hp('9%'), marginBottom:hp('2%'), elevation:4, borderRadius:15 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Light}
                onPress={this.props.login._googleSignIn}
              />
        )
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#98BDCF',  }}>
                <NavBar
                    menu={false}
                    skip={false}
                    back={true}
                    logo={false}
                    title={true}
                    titleText={'Sign Up'}
                    logoStyle={{ marginRight: wp('40%') }}
                    container={{ top: hp('5%'), position: 'relative', justifyContent: 'flex-start', paddingBottom:hp('5%'), }}
                    onPressBack={() => this.props.navigation.goBack()}
                />
                <View style={{height:'90%', alignItems:'center', justifyContent:'space-around'}}>
                <View style={styles.LoginContainer}>
                 {this.renderFacebook()}
                 {this.renderGoogle()}
                 <CustomTextInput
                 style={{backgroundColor: '#44586A',
                 borderRadius: 10}}
                 value={this.state.text}
                 onChangeText={(text) => this.setState({ text:text})}
                 />
                </View>
                <Button
                onPress={() => this.props.navigation.navigate('UserDetails')}
                textStyle={{color:'#000', fontSize:wp('5%')}}
                style={styles.button}
                >Proceed</Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button:{
       width:wp('78%'),
       height:hp('8%'),
       backgroundColor:'#fff'
    },

    facebook:{
        marginBottom:hp('2%'),
        borderRadius:5,
       flexDirection:'row',
       width:wp('78%'),
       height:hp('8.5%'),
       alignItems:'center',
       backgroundColor:'#093C7C',
       paddingLeft:wp('3%'),
       elevation:4
    },
    logo:{
        marginRight:wp('3%'),
        resizeMode:'contain',
        width:wp('6%'),
        height:hp('4%')
    },
    LoginContainer:{
      width:wp('100%'),
      alignItems:'center',
      paddingTop:hp('5%')
    }
})
