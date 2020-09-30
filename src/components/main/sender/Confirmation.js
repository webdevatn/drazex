import React, { Fragment, useState } from 'react';
import { SafeAreaView, ImageBackground, Text, TouchableOpacity, View, ScrollView, Image } from 'react-native';
import MyStatusBar from '../../../widgets/MyStatusBar';
import Colors from '../../../assets/Colors';
import ImagePath from '../../../assets/ImagePath';
import Fonts from '../../../assets/Typography';
import { normalize } from '../../../utils/helpers/mixins';
import Header from '../../../widgets/Header';

export default function Confirmation(props) {

    return (
        <Fragment>
            <MyStatusBar backgroundColor={Colors.primary} barStyle="light-content" />
            <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ScrollView style={{width: '100%', backgroundColor: Colors.primary}}>
                    <Header  text={'Confirmation'}  onPress={() => {props.navigation.navigate('Menu')}}/>
                    <View style={{backgroundColor: Colors.white, borderTopLeftRadius: normalize(30), borderTopRightRadius: normalize(30), paddingLeft: normalize(15), paddingRight: normalize(15), marginTop: normalize(80)}}>
                            <View style={{padding: normalize(20), backgroundColor: Colors.white, borderRadius: normalize(30), marginTop: normalize(-50), elevation: 3, marginBottom: normalize(20), shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8,    shadowRadius: 20,  minHeight: normalize(550)}}>
                                
                                    <View style={{alignItems: 'center', padding: normalize(20)}}>
                                        <Image source={ImagePath.money} style={{marginBottom: normalize(15)}}/>
                                        <Text style={{fontSize: normalize(19), color: Colors.primary, fontWeight: Fonts.bold, textAlign: 'center', marginBottom: normalize(15)}}>Your payment is successfully authorized.</Text>
                                        <Text style={{fontSize: normalize(16), color: Colors.gray_dark, fontWeight: Fonts.regular, textAlign: 'center'}}>You will be charged when Mr. Charles got the package.</Text>
                                    </View>

                                    <TouchableOpacity style={{height: normalize(42), backgroundColor: Colors.secondary, color: Colors.white, alignSelf: 'stretch', alignItems: 'center', borderRadius: normalize(50), overflow: 'hidden'}}  onPress={() => props.navigation.navigate('SenderHome')}>
                                        <ImageBackground source={ImagePath.buttonBg} resizeMode='cover' style={{width: '100%', height: '100%', position: 'absolute', borderRadius: normalize(50)}} />
                                        <Text style={{fontSize: normalize(14), color: Colors.white, fontWeight: Fonts.bold, lineHeight: normalize(42)}}>BACK TO HOME</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{height: normalize(42), backgroundColor: Colors.secondary, color: Colors.white, alignSelf: 'stretch', alignItems: 'center', borderRadius: normalize(50), overflow: 'hidden', marginTop: normalize(10)}} onPress={() => props.navigation.navigate('TransporterHome')}>
                                        <ImageBackground source={ImagePath.buttonBg} resizeMode='cover' style={{width: '100%', height: '100%', position: 'absolute', borderRadius: normalize(50)}} />
                                        <Text style={{fontSize: normalize(14), color: Colors.white, fontWeight: Fonts.bold, lineHeight: normalize(42)}}>CONTINUE TO TRANSPORTER</Text>
                                    </TouchableOpacity>
                            </View>
                        </View>
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    )
    
}