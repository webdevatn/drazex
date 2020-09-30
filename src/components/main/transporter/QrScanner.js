import React, { Fragment, useState } from 'react';
import { SafeAreaView, ImageBackground, Text, TouchableOpacity, View, ScrollView, Image } from 'react-native';
import MyStatusBar from '../../../widgets/MyStatusBar';
import Colors from '../../../assets/Colors';
import ImagePath from '../../../assets/ImagePath';
import Fonts from '../../../assets/Typography';
import { normalize } from '../../../utils/helpers/mixins';
import Header from '../../../widgets/Header';

export default function QrScanner(props) {

    return (
        <Fragment>
            <MyStatusBar backgroundColor={Colors.primary} barStyle="light-content" />
            <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ScrollView style={{width: '100%', backgroundColor: Colors.primary}}>
                    <Header text={'QR Scan'}  onPress={() => {props.navigation.navigate('Menu')}}/>
                    <Text style={{textAlign: 'center', fontSize: normalize(22), padding: normalize(25), color: Colors.white, lineHeight: normalize(30)}}>Place your phone properly to scan the code</Text>
                    <View style={{ alignSelf: 'center', marginBottom: normalize(10)}}>
                    <Image source={ImagePath.scanner1} resizeMode="contain" style={{maxWidth: normalize(230)}} />
                    </View>
                    <TouchableOpacity style={{height: normalize(42), backgroundColor: Colors.secondary, color: Colors.white, alignSelf: 'stretch', alignItems: 'center', borderRadius: normalize(50), overflow: 'hidden', marginTop: normalize(10), width: normalize(280), alignSelf: 'center'}} onPress={() => props.navigation.navigate('ReceiverHome')}>
                                        <ImageBackground source={ImagePath.buttonBg} resizeMode='cover' style={{width: '100%', height: '100%', position: 'absolute', borderRadius: normalize(50)}} />
                                        <Text style={{fontSize: normalize(14), color: Colors.white, fontWeight: Fonts.bold, lineHeight: normalize(42)}}>CONTINUE TO RECEIVER</Text>
                                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    )
    
}