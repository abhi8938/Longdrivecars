import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native'
import NavBar from '../../components/NavBar';
import CustomTextInput from '../../components/CustomTextInput';
import { Button } from './../../components/Button';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ImagePicker from 'react-native-image-crop-picker';
export default class UserDetails extends Component {

    state={
        fullName:'Name',
        Mobile:'xxxxx-xxxxx',
        Email:'xxxx@xxx.com',
        DOB:'01/01/0001',
        Locality:'Street/Locality',
        City:'City',
        Password:'Paxxxxrd',
        confirmPassword:'Psxxxxrd',
        sourceProfile: require('../../Assets/user.png')

    }
    openPicker = () => {
      return ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            console.log(image);
            this.setState({ sourceProfile:{uri:image.path}});
          }).catch(err =>{
              console.log(`error`, err);
          })
    }
    renderPic(){
            return(
                <TouchableOpacity
                onPress={this.openPicker}
                >
                <Image
                  source={this.state.sourceProfile}
                  style={styles.pic}
                />
                </TouchableOpacity>
            )
    }
    render() {
      
        return (
            <View style={{ flex:1,backgroundColor:'#98BDCF'}}>
                <NavBar
                 title={true}
                 titleText={'User Details'} 
                 back={false}
                 container={{ top:hp('4%'), position:'relative', zIndex:0}}
                />
                <ScrollView contentContainerStyle={{paddingTop:hp('2%')}} style={{marginTop:hp('5%'), paddingLeft:wp('1%')}}>
                {this.renderPic()}
                <CustomTextInput IconSource={require('../../Assets/name.png')} icon={true} style={styles.input}Label={true} labelText='Full Name' value={this.state.fullName} onChangeText={(fullName)=>this.setState({ fullName:fullName})} />
                <CustomTextInput IconSource={require('../../Assets/smartphone-call.png')} icon={true} style={styles.input}Label={true} labelText='Mobile' value={this.state.Mobile} onChangeText={(Mobile)=>this.setState({ Mobile:Mobile})} />
                <CustomTextInput IconSource={require('../../Assets/mail.png')} icon={true} style={styles.input}Label={true} labelText='Email' value={this.state.Email} onChangeText={(Email)=>this.setState({ Email:Email})} />
                <CustomTextInput IconSource={require('../../Assets/calendar.png')} icon={true} style={styles.input}Label={true} labelText='Date of Birth' value={this.state.DOB} onChangeText={(DOB)=>this.setState({ DOB:DOB})} />
                <CustomTextInput IconSource={require('../../Assets/key.png')} icon={true} style={styles.input}Label={true} labelText='Password' value={this.state.Password} onChangeText={(Password)=>this.setState({ Password:Password})} />
                <CustomTextInput IconSource={require('../../Assets/password.png')} icon={true} style={styles.input}Label={true} labelText='Confirm password' value={this.state.confirmPassword} onChangeText={(confirmPassword)=>this.setState({ confirmPassword:confirmPassword})} />

                <Text style={styles.heading}>Address Section</Text>
                <CustomTextInput IconSource={require('../../Assets/location-on-road.png')} icon={true} style={styles.input}Label={true} labelText='Locality' value={this.state.Locality} onChangeText={(Locality)=>this.setState({ Locality:Locality})} />
                <CustomTextInput IconSource={require('../../Assets/cityscape.png')} icon={true} style={styles.input}Label={true} labelText='City' value={this.state.City} onChangeText={(City)=>this.setState({ City:City})} />
                <Button
                 onPress={() => this.props.navigation.navigate('UserIdentification')}
                textStyle={{color:'#000', fontSize:wp('5%')}}
                style={{ alignSelf: 'center', width:wp('80%'), marginTop: hp('1%'),  height:hp('8%'), borderWidth:2, borderColor:'#fff', backgroundColor: '#fff' }}
                >Proceed</Button>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pic:{
        paddingTop:hp('1%'),
        paddingBottom:hp('1%'),
         alignSelf:'center', 
         width:wp('35%'),
         height:hp('20%'), 
         resizeMode:'cover',
         backgroundColor:'#989A97',
         borderRadius:10,
         marginBottom:hp('2%'),
    },
    input:{
        backgroundColor: '#44586A', 
        borderRadius: 10,
        marginLeft:wp('3%')
    },
    heading:{
        fontSize:wp('6%'),
        color:'#F5F5F5',
        fontWeight:'bold',
        marginTop:hp('2%'),
        marginBottom:hp('2%'),
        alignSelf:'center'
    }
})

