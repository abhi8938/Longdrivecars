import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native'
import NavBar from '../components/NavBar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import TopTabs, { TopTabsState } from './../components/TopTabs';
import CarCard from './../components/CarCard';
import { TextPretty } from './../components/TextPretty';
import  CustomTextInput from '../components/CustomTextInput';
import { Button } from '../components/Button';
import ContentBlock from '../components/ContentBlock';
import { observer } from 'mobx-react';

const topTabsState = new TopTabsState();
type RideDetailsProps = {
    Data: any
}
@observer
export default class RideDetails extends Component<RideDetailsProps> {
    state = {
        promo: 'Enter Promo Code'
    }
    renderBookingDates() {
        return (
            <View style={styles.dateTextContainer}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.heading}>Start Date</Text>
                    <Text style={[styles.dateText, { borderRightWidth: 1, borderRightColor: '#535353', flex: 1 }]}>18 Aug 04:30 a.m.</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <Text style={styles.heading}>End Date</Text>
                    <Text style={styles.dateText}>9 Aug 04:00 a.m.</Text>
                </View>
            </View>
        )
    }
    renderBookingDetails(limit:string) {
        return (
            <View style={{ paddingTop: hp('2%') }}>
                <TextPretty left={'Duration'} right={'23.5 hrs'} />
                <TextPretty left={'Kms imit'} right={limit} />
                <TextPretty left={'Fuel'} right={'To be paid by you'} />
            </View>
        )
    }
    renderFareDetails() {
        return (
            <View style={{ paddingTop: hp('3%'), paddingBottom: hp('2%') }}>
                <TextPretty left={'Base Fare'} right={'₹ 2607'} />
                <TextPretty styleLeft={{ fontSize: wp('3%') }} left={'incl discount for long trips, if applicable'} />
                <TextPretty left={'Insurance & GST'} right={'Included'} />
                <TextPretty left={'Refundable Security Deposit'} right={'₹ 5000'} />
                <TextPretty styleLeft={{ color: '#2d2e2e' }} styleRight={{ color: '#2d2e2e' }} style={styles.title} left={'Total'} right={'₹ 7957'} />
                <TextPretty style={{ marginTop: hp('1%'), }} left={'Extra Kms charge'} right={'₹ 12/Km'} />
            </View>
        )
    }

    renderPromocode() {
        return (
            <View style={{ alignItems:'center', flexDirection: 'row', paddingLeft: wp('3%') }}>
                <CustomTextInput
                    style={styles.promoInput}
                    value={this.state.promo}
                    onChangeText={(promo) => this.setState({ promo: promo })}
                />
                <Button style={styles.buttonPromo}>Apply</Button>
            </View>
        )
    }
    renderTandC() {
        return (
            <View style={{ paddingTop:hp('1.5%'), paddingLeft:wp('3%'), paddingRight:wp('3%')}}>
                <Text style={styles.TandC}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.</Text>
                <Text style={styles.TandC}>Contrary to popular belief, Lorem Ipsum is not simply random text</Text>
                <Text style={styles.TandC}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</Text>
                <Text style={styles.TandC}>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable</Text>
            </View>
        )
    }

    render() {
        let limit;
        if(topTabsState.currentTab == 0){
            limit = '300 Kms'
        }else if(topTabsState.currentTab == 1){
            limit = '400 kms'
        }else if(topTabsState.currentTab == 2){
            limit = 'Unlimited Kms'
        }
        return (
            <View style={{ flex: 1, backgroundColor: '#98BDCF' }}>
                <NavBar
                    menu={false}
                    skip={false}
                    back={true}
                    logo={true}
                    logoStyle={{ marginRight: wp('40%') }}
                    container={{ paddingTop:hp('1%'), position: 'relative' }}
                    onPressBack={() => this.props.navigation.navigate('Service')}
                />
                <TopTabs state={topTabsState} content={['300 KMS', '400 KMS', 'UNLIMITED KMS']} />
                <ScrollView>
                <CarCard
                     source={require('../Assets/ecosport.png')}
                     car='Ford Ecosport'
                     fuel='Diesel'
                     control='Manual'
                     seats='5 Seats'
                 />
                 {this.renderBookingDates()}
                 {this.renderBookingDetails(limit)}
                 {this.renderFareDetails()}
                 {this.renderPromocode()}
                 {this.renderTandC()}
                 <View style={{flexDirection:'row', justifyContent:'space-evenly', alignItems:'center'}}>
                 <Button miniStyle={{fontSize:wp('3%'), color:'#000', display: 'flex',}} minitext={'Pay balance on pickup'} onPress={() => this.props.navigation.navigate('Signin')} textStyle={{ color:'#000', fontSize:wp('4.5%')}} style={styles.proceed}>Pay ₹200 now</Button>
                 <View style={{ width:wp('.3%'), height:hp('7%'), backgroundColor:'#000', elevation:3, marginBottom:hp('1%')}}/>
             <Button onPress={() => this.props.navigation.navigate('Signin')} textStyle={{ color:'#000', fontSize:wp('4.5%')}} style={styles.proceed}>Pay ₹2607 Now </Button>
             </View>
                  </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    promoInput:{
        width: wp('70%'), 
        backgroundColor: 'rgba(52, 78, 97, 0.5)', 
        borderRadius: 10,
        color: '#ccc', 
        fontSize:wp('4.5%'), 
        height:hp('7%') 
},
    proceed:{
      backgroundColor:'#fff',
      width:wp('40%'), 
      height:hp('8%'),
      alignSelf:'center'
    },
    TandC:{
       color:'#535353',
       fontSize:wp('4.4%'),
       marginBottom:hp('2%')
    },
    buttonPromo: {
        paddingTop:hp('1%'),
        paddingBottom:hp('1%'),
        marginLeft: wp('5%'),
        paddingLeft: wp('5%'),
        paddingRight: wp('5%'),
        backgroundColor: '#fff'
    },
    title: {
        paddingLeft:1,
        paddingRight:1,
        marginLeft:wp('3%'),
        marginRight:wp('3%'),
        paddingTop: hp('.5%'),
        paddingBottom: hp('.5%'),
        marginTop: hp('1%'),
        borderBottomColor: '#7C94AD',
        borderTopColor: '#7C94AD',
        borderBottomWidth: 1,
        borderTopWidth: 1
    },
    dateTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: wp('3%')
    },
    heading: {
        color: '#535353',
        fontSize: wp('4%')

    },
    firstContainer: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    dateTimeTouchable: {

    },
    dateText: {
        fontSize: wp('4.5%'),
        color: '#F5F5F5'
    }
})

