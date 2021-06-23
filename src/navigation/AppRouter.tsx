
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Router, Scene, Drawer, Stack, Actions, } from 'react-native-router-flux';
import { observer,Provider} from "mobx-react";
// import notificationServices from '../services/notificationServices';
import loginServices from '../services/loginServices';
import AuthLoadingScreen from './../Screens/AuthLoadingScreen';
import HomePage from './../Screens/HomePage';
import CarDetails from './../Screens/CarDetails';
import SignUp from './../Screens/Auth/SignUp';
import Signin from './../Screens/Auth/Signin';
import PaymentScreen from './../Screens/PaymentScreen';
import CarsList from './../Screens/CarsList';
import DrawerMenu from './DrawerMenu';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ServiceScreen from './../Screens/ServiceScreen';
import RideDetails from './../Screens/RideDetails';
import UserDetails from './../Screens/Registration/UserDetails';
import UserIdentifcation from './../Screens/Registration/UserIdentification';
const LoginServices = new loginServices();
// const NotificationServices = new notificationServices();
export default class AppRouter extends Component {
    constructor(props) {
        super(props);
    // NotificationServices.checkHasPermission();
    // NotificationServices.createChannel();
      }
    
      async componentDidMount(){
        // NotificationServices.messageListener();
        //     NotificationServices.NotificationListener();
        //     NotificationServices.NotificationDisplayedListener();
        //     NotificationServices.NotificationOpened();
        //     NotificationServices.NotificationOpenedAppClosed();
      }
    
      componentWillUnmount(){
    //     NotificationServices.messageListener();
    //         NotificationServices.NotificationDisplayedListener();
    //         NotificationServices.NotificationListener();
    //         NotificationServices.NotificationOpened();
      }
    render() {
        return (
            <Provider login={LoginServices}>
      <Router>
       <Drawer key='Root' contentComponent={DrawerMenu} >
       <Scene key='authloading' component={AuthLoadingScreen} hideNavBar />  
       <Scene key='Home'  component={HomePage} hideNavBar initial />  
       <Scene key='CarDetails'  component={CarDetails} hideNavBar/>  
       <Scene key='Signup'  component={SignUp} hideNavBar/>  
       <Scene key='Signin'  component={Signin} hideNavBar/>  
       <Scene key='Payment'  component={PaymentScreen} hideNavBar/>  
       <Scene key='Carslist'  component={CarsList} hideNavBar/>
       <Scene key='Service'  component={ServiceScreen} hideNavBar/>
       <Scene key='RideDetails'  component={RideDetails} hideNavBar/>
       <Scene key='UserDetails'  component={UserDetails} hideNavBar/>
       <Scene key='UserIdentification'  component={UserIdentifcation} hideNavBar/>
       </Drawer>  
    </Router>
    </Provider>
        )
    }
}

const styles = StyleSheet.create({})
