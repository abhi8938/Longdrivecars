import React from 'react';
import {
  Image,
  AsyncStorage,
  StyleSheet,
  View,
  Text,
  Alert
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { observer, inject } from 'mobx-react';
import { Actions } from 'react-native-router-flux';
import { toJS } from 'mobx';

@observer
export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    // this.bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  bootstrapAsync = async () => {
      // const userToken = await AsyncStorage.getItem('userToken');
      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      // if(userToken){
      
      // return  
      // }else{
      //   return this.props.navigation.navigate('auth');
      // }
     
    
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={{ flex:1, padding:0, justifyContent:'center', alignItems:'center', backgroundColor:'#fff'}}>
        <View style={{ width:wp('100%'), paddingTop:hp('18%'), alignItems:'center'}}>
          <Text style={{color:'#000', fontSize:wp('10%')}}>LongDriveCars</Text>
        </View>
      </View>
    );
  }
}
const styles =  StyleSheet.create({
  lottie: {
    width:wp('100%'),
    height:hp('40%'),

  },
})
