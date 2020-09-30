import React, { Fragment } from 'react';
import { SafeAreaView, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import ImagePath from '../../assets/ImagePath';
import MyStatusBar from '../../widgets/MyStatusBar';
import Colors from '../../assets/Colors';
import { normalize } from '../../utils/helpers/mixins';
import Fonts from '../../assets/Typography';

export default function UserType(props) {

    return (
        <Fragment>
            <MyStatusBar backgroundColor={Colors.primary} barStyle="light-content" />
            <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ImageBackground source={ImagePath.innerBg1} resizeMode='cover' style={{width: '100%', height: '100%', position: 'absolute'}} />
                <View style={{alignItems: 'center', padding: normalize(20), width: '100%'}}>
                      <Text style={{fontSize: normalize(30), color: Colors.white, fontWeight: Fonts.bold, marginBottom: normalize(25)}}>Are you a?</Text>
                      <TouchableOpacity style={{padding: normalize(10), backgroundColor: Colors.white, color: Colors.primary, alignSelf: 'stretch', alignItems: 'center', borderRadius: normalize(50), marginBottom: normalize(15)}} onPress={() => props.navigation.navigate('Login')}>
                        <Text style={{fontSize: normalize(20), color: Colors.primary, fontWeight: Fonts.regular}}>Sender</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={{padding: normalize(10), backgroundColor: Colors.white, color: Colors.primary, alignSelf: 'stretch', alignItems: 'center', borderRadius: normalize(50), marginBottom: normalize(15)}} onPress={() => props.navigation.navigate('Login')}>
                        <Text style={{fontSize: normalize(20), color: Colors.primary, fontWeight: Fonts.regular}}>Receiver</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={{padding: normalize(10), backgroundColor: Colors.white, color: Colors.primary, alignSelf: 'stretch', alignItems: 'center', borderRadius: normalize(50)}} onPress={() => props.navigation.navigate('Login')}>
                        <Text style={{fontSize: normalize(20), color: Colors.primary, fontWeight: Fonts.regular}}>Transporter</Text>
                      </TouchableOpacity>
                </View>
            </SafeAreaView>
        </Fragment>
    )
    
}