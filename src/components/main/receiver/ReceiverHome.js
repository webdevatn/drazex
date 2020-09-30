import React, { Fragment, useState } from 'react';
import { SafeAreaView, ImageBackground, Text, TouchableOpacity, View, ScrollView, Image } from 'react-native';
import MyStatusBar from '../../../widgets/MyStatusBar';
import Colors from '../../../assets/Colors';
import ImagePath from '../../../assets/ImagePath';
import Fonts from '../../../assets/Typography';
import { normalize } from '../../../utils/helpers/mixins';
import Header from '../../../widgets/Header';

export default function ReceiverHome(props) {


    return (
        <Fragment>
            <MyStatusBar backgroundColor={Colors.primary} barStyle="light-content" />
            <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ScrollView style={{width: '100%', backgroundColor: Colors.primary}}>
                    <Header text={'Home'}  onPress={() => {props.navigation.navigate('Menu')}}/>
                    <Text style={{textAlign: 'center', fontSize: normalize(22), padding: normalize(30), color: Colors.white, lineHeight: normalize(30)}}>Your package in on the way</Text>
                    <View style={{backgroundColor: Colors.white, borderTopLeftRadius: normalize(30), borderTopRightRadius: normalize(30), paddingLeft: normalize(15), paddingRight: normalize(15), marginTop: normalize(50)}}>
                            <View style={{padding: normalize(20), backgroundColor: Colors.white, borderRadius: normalize(30), marginTop: normalize(-50), elevation: 3, marginBottom: normalize(20), shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8,    shadowRadius: 20, minHeight: normalize(550)}}>
                                    <View style={{alignItems: 'center'}}>
                                        <Image source={ImagePath.scanner2} resizeMode='contain' style={{maxWidth: normalize(200)}} />
                                    </View>
                                    <View style={{alignItems: 'center'}}>
                                        <View style={{marginBottom: normalize(15)}}>
                                            <Image source={ImagePath.img2} resizeMode='contain' style={{width: normalize(80), height: normalize(80), borderRadius: normalize(80)}} />
                                        </View>
                                        <Text style={{textAlign: 'center', fontSize: normalize(15), paddingLeft: normalize(15), paddingRight: normalize(15), marginBottom: normalize(5)}}>Meet Mr. Roberto Oliveira 12 Jun, 20 @ 7:45PM</Text>
                                        <Text style={{textAlign: 'center', fontSize: normalize(13), color: Colors.secondary}}>At Paris Charles de Gaulle Airport</Text>
                                    </View>
                            </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    )
    
}