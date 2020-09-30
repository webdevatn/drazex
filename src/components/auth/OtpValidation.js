import React, { Fragment, useState, useEffect } from 'react';
import { SafeAreaView, ImageBackground, Text, TouchableOpacity, View, TextInput } from 'react-native';
import ImagePath from '../../assets/ImagePath';
import MyStatusBar from '../../widgets/MyStatusBar';
import Colors from '../../assets/Colors';
import { normalize } from '../../utils/helpers/mixins';
import Fonts from '../../assets/Typography';
import OtpInputs from 'react-native-otp-inputs';

export default function OtpValidation(props) {

    
        setTimeout(function () {
            props.navigation.navigate('Login')
        }, 2000);  
      

    return (
        <Fragment>
            <MyStatusBar backgroundColor={Colors.primary} barStyle="light-content" />
            <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ImageBackground source={ImagePath.innerBg1} resizeMode='cover' style={{width: '100%', height: '100%', position: 'absolute'}} />
                <View style={{alignItems: 'center', padding: normalize(20), width: '100%'}}>
                      <Text style={{fontSize: normalize(30), color: Colors.white, fontWeight: Fonts.bold, marginBottom: normalize(25)}}>OTP Validation</Text>
                    <Text style={{fontSize: normalize(16), fontWeight: Fonts.bold, color: Colors.white, textAlign: 'center', marginBottom: normalize(15), lineHeight: normalize(25)}}>Insert one-time password from your email</Text>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: normalize(15)}}>
                            <OtpInputs handleChange={(code) => console.log(code)} numberOfInputs={4} inputStyles={{backgroundColor: Colors.white, flexDirection: 'row', justifyContent: 'space-between', width: normalize(60), height: normalize(45), borderRadius: normalize(5), fontSize: normalize(25), textAlign: 'center', lineHeight: normalize(30)}} />
                      </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                            <TouchableOpacity><Text style={{color: Colors.gray_medium}}>Resend</Text></TouchableOpacity>
                            <Text style={{color: Colors.gray_medium}}>0:60s</Text>
                        </View>
                </View>
            </SafeAreaView>
        </Fragment>
    )
    
}