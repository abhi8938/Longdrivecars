import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import NavBar from '../../components/NavBar';
import CustomTextInput from '../../components/CustomTextInput';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Button } from './../../components/Button';
import CustomImagePicker from '../../components/CustomImagePicker';
import ImagePicker  from 'react-native-image-crop-picker';
export default class UserIdentifcation extends Component {
    state = {
        AadharNumber: 'xxxx-xxxx-xxxx',
        LicenseNumber: 'xx-xxxx-xxx',
        fileNameAadharFront: 'Front Upload',
        fileNameAadharBack: 'Back Upload',
        fileNameLicense: 'License Upload'
    }
  
openPicker = (name:string) =>{
   return ImagePicker.openCamera({
        width: 300,
        height: 200,
        cropping: true,
      }).then(image => {
          console.log(`image`,image);
          let fileName:string = image.path;
          let names: string[]= fileName.split('/');
          console.log(`name`,name.length - 1);
        if(name== 'AF'){
            this.setState({fileNameAadharFront:names[names.length - 1]})
        }else if(name == 'AB'){
            this.setState({fileNameAadharBack:names[names.length - 1]})
        }else if(name == 'L'){
            this.setState({fileNameLicense:names[names.length - 1]})
        }
      });
}

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#98BDCF' }}>
                <NavBar
                    title={true}
                    titleText={'User Verification'}
                    back={false}
                    container={{ top: hp('4%'), position: 'relative', zIndex: 0 }}
                />
                <ScrollView contentContainerStyle={{ paddingTop: hp('2%') }} style={{ marginTop: hp('5%'), paddingLeft: wp('1%') }}>
                    <Text style={styles.heading}>Aadhar</Text>
                    <CustomTextInput IconSource={require('../../Assets/fingerprint.png')} icon={true} style={styles.input} Label={true} labelText='Aadhar Number' value={this.state.AadharNumber} onChangeText={(AadharNumber) => this.setState({ AadharNumber: AadharNumber })} />
                    <CustomImagePicker  fileName={this.state.fileNameAadharFront} Title='Upload Aadhar Front' onPress={() => this.openPicker('AF')} />
                    <CustomImagePicker fileName={this.state.fileNameAadharBack} Title='Upload Aadhar Back' onPress={() => this.openPicker('AB')} />

                    <Text style={styles.heading}>License</Text>
                    <CustomTextInput IconSource={require('../../Assets/id-card.png')} icon={true} style={styles.input} Label={true} labelText='License Number' value={this.state.LicenseNumber} onChangeText={(LicenseNumber) => this.setState({ LicenseNumber: LicenseNumber })} />
                    <CustomImagePicker fileName={this.state.fileNameLicense} Title='Upload License Front' onPress={() => this.openPicker('L')} />

                    <Button
                        onPress={() => this.props.navigation.navigate('Home')}
                        textStyle={{ color: '#000', fontSize: wp('5%') }}
                        style={styles.button}
                    >Proceed</Button>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    label: {
        marginLeft: wp('13%'),
        fontSize: wp('4.5%'),
        color: '#f5F5F5',
        marginBottom: hp('1%')
    },
    button: {
        alignSelf: 'center',
        width: wp('80%'),
        marginTop: hp('3%'),
        height: hp('8%'),
        borderRadius: 10,
        backgroundColor: '#fff'
    },
    input: {
        backgroundColor: '#44586A',
        borderRadius: 10,
        marginLeft: wp('3%')
    },
    heading: {
        fontSize: wp('6%'),
        color: '#F0F0F0',
        fontWeight: 'bold',
        marginTop: hp('2%'),
        marginBottom: hp('2%'),
        alignSelf: 'center'
    }
})
