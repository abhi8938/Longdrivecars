import React, { Component } from 'react'
import { Text, StyleSheet, View,  TouchableOpacity, Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export type onPressEvent = () => void;
export type NavBarProps ={
    back?: boolean
    onPressBack?: onPressEvent
    skip?:boolean
    logo?:boolean
    menu?:boolean
    onPress?:onPressEvent
    skipPress?: onPressEvent
    logoStyle?:any
    container?:any
    title?:boolean
    titleText?:string

}

export default class NavBar extends Component<NavBarProps> {

    renderBack(){
        if(this.props.back == true){
            return(
            <TouchableOpacity
            style={{marginLeft:wp('5%')}}
            onPress={this.props.onPressBack}
            >
            <Image
                source={require('../Assets/back.png')}
                style={{ width:wp('5%'), height:hp('3%')}}
            />
            </TouchableOpacity>
            )
        }
    }

  renderSkip(){
      if(this.props.skip == true){
          return(
            <TouchableOpacity
            onPress={this.props.skipPress} 
            style={{marginRight:wp('5%'), marginBottom:hp('3%')}}
            >
            <Text style={{fontSize:wp('5.5%'), color:'#fff'}}>SKIP</Text>
            </TouchableOpacity>
          )
      }
  }
  renderLogo(){
      if(this.props.logo == true){
          return(
            <Image
            source={require('../Assets/Logo.png')}
            style={[{width:wp('24%'), height:hp('13%'), resizeMode:'contain'},this.props.logoStyle]}
            />
          )
      }
  }

  renderMenu(){
      if(this.props.menu == true){
          return(
            <TouchableOpacity
            style={{marginLeft:wp('5%'), marginBottom:hp('3%')}}
            onPress={this.props.onPress}
            >
            <Image
                source={require('../Assets/menu.png')}
                style={{ width:wp('6%'), height:hp('3.4%')}}
            />
            </TouchableOpacity>
          )
      }
  }

  renderTitle(){
      if(this.props.title){
          return(
              <Text style={{color:'#fff', fontSize:wp('6.7%'), left:wp('30%'), alignSelf:'center'}}>{this.props.titleText}</Text>
          )
      }
  }

    render() {
        return (
            <View style={[{ width:'100%',justifyContent:'space-between', alignItems:'center', flexDirection:'row', zIndex:1, position:'absolute'},this.props.container]}>
           {this.renderBack()}
           {this.renderMenu()}
           {this.renderTitle()}
           {this.renderLogo()}
           {this.renderSkip()}
           
           </View>
    
        )
    }
}

const styles = StyleSheet.create({})
