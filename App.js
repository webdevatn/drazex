/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Image, Platform, Dimensions, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Colors from './src/assets/Colors';
import ImagePath from './src/assets/ImagePath';
import Fonts from './src/assets/Typography';
import { normalize } from './src/utils/helpers/mixins';

// SPLASH
import Splash from './src/components/splash';

// AUTH
import UserType from './src/components/auth/UserType';
import Login from './src/components/auth/Login';
import Register from './src/components/auth/Register';
import OtpValidation from './src/components/auth/OtpValidation';

// BOTTOM TABS
import Airports from './src/components/main/TabNavigator/Airports';
import OpenTrips from './src/components/main/TabNavigator/OpenTrips';
import TrackTrip from './src/components/main/TabNavigator/TrackTrip';

// SHARED
import Menu from './src/components/main/shared/Menu';
import Profile from './src/components/main/shared/Profile';
import OrderHistory from './src/components/main/shared/OrderHistory';

// SENDER
import SenderHome from './src/components/main/sender/SenderHome';
import ReceiverDetails from './src/components/main/sender/ReceiverDetails';
import Payment from './src/components/main/sender/Payment';
import Confirmation from './src/components/main/sender/Confirmation';

// TRANSPORTER
import TransporterHome from './src/components/main/transporter/TransporterHome';
import SelectTransporter from './src/components/main/transporter/SelectTransporter';
import QrScanner from './src/components/main/transporter/QrScanner';

// RECEIVER
import ReceiverHome from './src/components/main/receiver/ReceiverHome';

import { getTokenRequest } from "./src/actions/index"


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator 
      tabBarOptions={{
        activeBackgroundColor: Colors.gray_light, inactiveBackgroundColor: Colors.white,
        safeAreaInsets: { bottom: 0 }, style: {height: Platform.OS === "android" ? normalize(60) : normalize(60),
          borderTopColor: Colors.gray_medium} }}
    >

      <Tab.Screen name="Airports" component={Airports} options={{tabBarIcon: ({ focused }) => (
            <View style={{alignItems: 'center'}}>
              <Image style={{marginTop: normalize(10), height: normalize(20), width: normalize(20), height: normalize(25), width: normalize(25), marginBottom: normalize(3)}} source={focused ? ImagePath.airplane : ImagePath.airplane}
              resizeMode='contain' />
              <Text style={{color: Colors.gray_dark, fontWeight: Fonts.bold}}>Airports</Text>
            </View>), tabBarLabel: ""}} 
        />
        <Tab.Screen name="OpenTrips" component={OpenTrips} options={{tabBarIcon: ({ focused }) => (
            <View style={{alignItems: 'center'}}>
              <Image style={{marginTop: Platform.OS === 'android' ? normalize(10) : Dimensions.get('window').height > 736 ? normalize(0) : normalize(10), height: normalize(20), width: normalize(20), height: normalize(25), width: normalize(25), marginBottom: normalize(3)}} source={focused ? ImagePath.suitcase : ImagePath.suitcase}
              resizeMode='contain' />
              <Text style={{color: Colors.gray_dark, fontWeight: Fonts.bold}}>  Open Trips</Text>
            </View>
            ), tabBarLabel: ""}} 
        />
        <Tab.Screen name="TrackTrip" component={TrackTrip} options={{tabBarIcon: ({ focused }) => (
              <View style={{alignItems: 'center'}}>
                <Image style={{marginTop: Platform.OS === 'android' ? normalize(10) : Dimensions.get('window').height > 736 ? normalize(0) : normalize(10), height: normalize(20), width: normalize(20), height: normalize(25), width: normalize(25), marginBottom: normalize(3)}} source={focused ? ImagePath.search : ImagePath.search}
              resizeMode='contain' />
              <Text style={{color: Colors.gray_dark, fontWeight: Fonts.bold}}>   Track Trip</Text>
              </View>
            ), tabBarLabel: ""}} 
        />
      </Tab.Navigator>
  )};


  function App(props) {

    useEffect(() => {
      setTimeout(function () {
        props.getTokenRequest();
      }, 3000);  
    }, []);

    if (props.loading) {
      return (
        <Splash />
      )
    }

  return (
    <NavigationContainer>
      {props.token == null ?
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"UserType"}>
                <Stack.Screen name="UserType" component={UserType} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="OtpValidation" component={OtpValidation} />
            </Stack.Navigator>
        :
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"SenderHome"}> 
                {/* <Stack.Screen name="BottomTab" component={BottomTab} />  */}
                <Stack.Screen name="SenderHome" component={SenderHome} />            
                <Stack.Screen name="ReceiverDetails" component={ReceiverDetails} />   
                <Stack.Screen name="Payment" component={Payment} />   
                <Stack.Screen name="Confirmation" component={Confirmation} />  

                <Stack.Screen name="TransporterHome" component={TransporterHome} />              
                <Stack.Screen name="SelectTransporter" component={SelectTransporter} />              
                <Stack.Screen name="QrScanner" component={QrScanner} />   

                <Stack.Screen name="ReceiverHome" component={ReceiverHome} /> 

                <Stack.Screen name="Menu" component={Menu} />   
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="OrderHistory" component={OrderHistory} /> 
            </Stack.Navigator> 
          }
        {/* IF TRANSPORTER */}
        {/* <Stack.Navigator screenOptions={{ headerShown: false }}>        
            <Stack.Screen name="TransporterHome" component={TransporterHome} />              
            <Stack.Screen name="SelectTransporter" component={SelectTransporter} />              
            <Stack.Screen name="QrScanner" component={QrScanner} />              
        </Stack.Navigator> */}
        {/* IF RECEIVER */}
        {/* <Stack.Navigator screenOptions={{ headerShown: false }}>        
            <Stack.Screen name="ReceiverHome" component={ReceiverHome} />                          
        </Stack.Navigator> */}
    </NavigationContainer>
  );

};



const mapStateToProps = state => {
  return {
    token: state.TokenReducer.token,
    status: state.TokenReducer.status,
    loading: state.TokenReducer.loading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTokenRequest: () => {
      dispatch(getTokenRequest())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
