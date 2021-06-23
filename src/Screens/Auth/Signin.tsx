import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image, TextInput } from 'react-native'
import {  GoogleSigninButton } from 'react-native-google-signin';
import loginServices from './../../services/loginServices';
import { inject, observer } from 'mobx-react';
import NavBar from './../../components/NavBar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Button } from './../../components/Button';
import CustomTextInput from './../../components/CustomTextInput';
import { Actions,  } from 'react-native-router-flux';
type signInProps = {
    login?:loginServices
}
@inject('login')
@observer
export default class Signin extends Component<signInProps> {
    state={
        text:'Login with email',
        password:'Password'
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
    renderForgotPassword(){
        return(
            <TouchableOpacity
             style={styles.forgotSection}
            >
                <Text style={{ color:'#000', borderBottomWidth:1, borderBottomColor:'#000'}}>Forgot password</Text>
            </TouchableOpacity>
        )
    }

    renderBottomText(){
        return(
            <View style={{flexDirection:"row", flex:1, alignItems:'center', justifyContent:'center'}}>
                <Text style={{color:'#495154', fontSize:wp('5%'), marginRight:wp('3%')}}>Not signed up yet?</Text>
                <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Signup')}
                ><Text style ={{color:'#000',fontSize:wp('5%')}}>Sign up</Text></TouchableOpacity>
            </View>
        )
    }
    render() {
        console.log(`props`,this.props);
        return (
            <View style={{ flex: 1, backgroundColor: '#98BDCF',  }}>
                <NavBar
                    menu={false}
                    skip={false}
                    back={true}
                    logo={false}
                    title={true}
                    titleText={'Sign in'}
                    logoStyle={{ marginRight: wp('40%') }}
                    container={{ top: hp('5%'), position: 'relative', justifyContent: 'flex-start', paddingBottom:hp('5%'), }}
                    onPressBack={() => this.props.navigation.goBack() }
                />
                <View style={{height:'65%', alignItems:'center', justifyContent:'space-between'}}>
                <View style={styles.LoginContainer}>
                 {this.renderFacebook()}
                 {this.renderGoogle()}
                 <CustomTextInput
                  style={{backgroundColor: '#44586A',
                  borderRadius: 10}}
                 value={this.state.text}
                 onChangeText={(text) => this.setState({ text:text})}
                 />
                 <CustomTextInput
                  style={{backgroundColor: '#44586A',
                  borderRadius: 10}}
                 value={this.state.password}
                 onChangeText={(password) => this.setState({ password:password})}
                 />
                 {this.renderForgotPassword()}
                </View>

                <Button
                onPress={() => this.props.navigation.navigate('Home')}
                textStyle={{color:'#000', fontSize:wp('5%')}}
                style={styles.button}
                >Proceed</Button>
                </View>
                {this.renderBottomText()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    forgotSection:{
      width:wp('80%'),
      alignItems:'flex-end'
    },
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
      paddingTop:hp('6%')
    }
})

