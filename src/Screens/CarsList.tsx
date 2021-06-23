import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import NavBar from './../components/NavBar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CarItem from '../components/CarItem';
import { observable } from 'mobx';
import DateTime from './../components/DateTime';
import { observer } from 'mobx-react';
@observer
export default class CarsList extends Component {
    @observable
    visibleModal: false
    @observable
    isStartDateTimePickerVisible: boolean
    @observable
    isEndDateTimePickerVisible: boolean
    @observable
    start:string
    @observable
    end:string
    @observable
    city:string

    @observable
    Data = {
        CarData: [{
            Model: "Ford EcoSport",
            uri: require('../Assets/ecosport.png'),
            extraKM: 12
        }, {
            Model: "Hyundai Grand i10",
            uri: require('../Assets/hyundai.png'),
            extraKM: 8
        }],
        KMDATA: [{
            Limit: 300,
            selected: true
        }, {
            Limit: 400,
            selected: false
        }, {
            Limit: 'Unlimited',
            selected: false
        }]
    }

    componentDidMount = () => {
        let date = new Date();
      this.start = `${date.toDateString()}`;
      this.end = `${date.toDateString()}`;
    };
    
    handleSelect = (element, index) => {
        console.log(`element`, element, index)
    }
    renderListItem() {
        return this.Data.CarData.map((element, index) => {
            return <CarItem onPress={() => this.props.navigation.navigate('RideDetails')} data={element} kmdata={this.Data.KMDATA} />
        })

    }
    hideStartDateTimePicker = () => {
        this.isStartDateTimePickerVisible = false
    };
    hideEndDateTimePicker = () => {
        this.isEndDateTimePickerVisible = false
    };
    showStartDateTimePicker = () => {
       this.isStartDateTimePickerVisible = true
    };
    showEndDateTimePicker = () => {
        this.isEndDateTimePickerVisible = true
    };
    handleStartDatePicked = (date:Date) => {
        console.log("A Start date has been picked: ");
        this.start = `${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`
        this.hideStartDateTimePicker();
     
    };
    handleEndDatePicked = (date:Date) => {
        console.log("A end date has been picked: ", date);
      this.end = `${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`
      this.hideEndDateTimePicker() 
    };
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#98BDCF' }}>
                <NavBar
                    menu={false}
                    skip={false}
                    back={true}
                    logo={true}
                    logoStyle={{ marginRight: wp('40%') }}
                    container={{ paddingTop: hp('1%'), position: 'relative' }}
                    onPressBack={() => this.props.navigation.navigate('Service')}
                />
                <View style={{ marginTop: hp('1%'), paddingRight: wp('4%') }}>
                    <View style={styles.firstContainer}>
                        <TouchableOpacity 
                        onPress={this.showStartDateTimePicker}
                        style={styles.dateTimeTouchable}>
                             <Text style={{fontSize:wp('3.5%'), color:'#fff'}}>From:</Text>
                            <Text style={[styles.dateText]} >{this.start}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                         onPress={this.showEndDateTimePicker}
                        style={styles.dateTimeTouchable}>
                            <Text style={{fontSize:wp('3.5%'), color:'#fff'}}>To:</Text>
                            <Text style={styles.dateText}>{this.end}</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                    style={[styles.dateTimeTouchable,{flexDirection:'row', flex:0}]}>
                        <Image
                            source={require('../Assets/gps.png')}
                            style={{ width: wp('6%'), height: hp('3%'), resizeMode: 'contain' }}
                        />
                        <Text style={styles.dateText}>Delhi-NCR</Text>
                    </TouchableOpacity>
                    <View style={styles.fuelContainer} >
                        <Text style={{ fontSize: wp('4.5%'), color: '#F5F5F5' }}>Prices excludes fuel cost</Text>
                    </View>
                </View>
                <ScrollView contentContainerStyle={{ marginTop: hp('2%') }}>
                    {this.renderListItem()}
                </ScrollView>
                <DateTime
                    isvisible={this.isStartDateTimePickerVisible}
                    onConfirm={this.handleStartDatePicked}
                    onCancel={this.hideStartDateTimePicker}
                />
                <DateTime
                    isvisible={this.isEndDateTimePickerVisible}
                    onConfirm={this.handleEndDatePicked}
                    onCancel={this.hideEndDateTimePicker}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    fuelContainer: {
        borderRadius: 10,
        paddingLeft: wp('10%'),
        paddingRight: wp('10%'),
        padding: hp('2.5%'),
        margin: wp('1%'),
        backgroundColor: '#7C94AD',
        alignSelf: 'center'
    },
    firstContainer: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    dateTimeTouchable: {
        flex:1,
        justifyContent:'flex-start',
        marginLeft: wp('2%'),
        paddingBottom: hp('2%'),
        flexDirection: 'column'
    },
    dateText: {
        marginLeft:wp('1%'),
        fontSize: wp('4.2%'),
        color: '#535353'
    }
})

