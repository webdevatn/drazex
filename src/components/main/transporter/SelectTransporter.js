import React, { Fragment, useState } from 'react';
import { SafeAreaView, ImageBackground, Text, TouchableOpacity, View, ScrollView, Image } from 'react-native';
import MyStatusBar from '../../../widgets/MyStatusBar';
import Colors from '../../../assets/Colors';
import ImagePath from '../../../assets/ImagePath';
import Fonts from '../../../assets/Typography';
import { normalize } from '../../../utils/helpers/mixins';
import Header from '../../../widgets/Header';

export default function SelectTransporter(props) {

    return (
        <Fragment>
            <MyStatusBar backgroundColor={Colors.primary} barStyle="light-content" />
            <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ScrollView style={{width: '100%', backgroundColor: Colors.primary}}>
                    <Header text={'Senders'}  onPress={() => {props.navigation.navigate('Menu')}}/>
                    <Text style={{textAlign: 'center', fontSize: normalize(22), padding: normalize(25), color: Colors.white, lineHeight: normalize(30)}}>Select any sender from the below list</Text>
                    <View style={{backgroundColor: Colors.white, borderTopLeftRadius: normalize(30), borderTopRightRadius: normalize(30), paddingLeft: normalize(15), paddingRight: normalize(15), marginTop: normalize(50)}}>
                            <View style={{padding: normalize(20), backgroundColor: Colors.white, borderRadius: normalize(30), marginTop: normalize(-50), elevation: 3, marginBottom: normalize(20), shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8,    shadowRadius: 20, minHeight: normalize(550)}}>
                                    <View style={{alignItems: 'center', flexDirection: 'row', paddingBottom: normalize(15), borderBottomWidth: 1, borderColor: Colors.gray_medium}}>
                                        <View style={{width: normalize(50), height: normalize(50), borderRadius: normalize(50), marginRight: normalize(10)}}>
                                            <Image source={ImagePath.img1} style={{width: normalize(50), height: normalize(50), borderRadius: normalize(50)}} />
                                        </View>
                                        <View>
                                            <View style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginBottom: normalize(3)}}>
                                                <Text style={{fontSize: normalize(16), fontWeight: Fonts.bold , color: Colors.primary}}>John Doe</Text>
                                                <TouchableOpacity style={{height: normalize(20),            backgroundColor:   Colors.secondary, color: Colors.white,   alignSelf: 'stretch', alignItems: 'center', borderRadius: normalize(50), overflow: 'hidden'}}  onPress={() => props.navigation.navigate('QrScanner')}>
                                                    <ImageBackground source={ImagePath.buttonBg} resizeMode='cover' style={{width: '100%', height: '100%', position: 'absolute', borderRadius: normalize(50)}} />
                                                    <Text style={{fontSize: normalize(9), color: Colors.white, fontWeight: Fonts.bold, lineHeight: normalize(20), width: normalize(50), textAlign: 'center'}}>ACCEPT</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <Text style={{fontSize: normalize(13), fontWeight: Fonts.bold , color: Colors.secondary}}>Package Weight: 40 lbs</Text>
                                        </View>
                                    </View>
                                    <View style={{alignItems: 'center', flexDirection: 'row', paddingTop: normalize(15), paddingBottom: normalize(15), borderBottomWidth: 1, borderColor: Colors.gray_medium}}>
                                        <View style={{width: normalize(50), height: normalize(50), borderRadius: normalize(50), marginRight: normalize(10)}}>
                                            <Image source={ImagePath.img1} style={{width: normalize(50), height: normalize(50), borderRadius: normalize(50)}} />
                                        </View>
                                        <View>
                                            <View style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginBottom: normalize(3)}}>
                                                <Text style={{fontSize: normalize(16), fontWeight: Fonts.bold , color: Colors.primary}}>John Doe</Text>
                                                <TouchableOpacity style={{height: normalize(20),            backgroundColor:   Colors.secondary, color: Colors.white,   alignSelf: 'stretch', alignItems: 'center', borderRadius: normalize(50), overflow: 'hidden'}}  onPress={() => props.navigation.navigate('QrScanner')}>
                                                    <ImageBackground source={ImagePath.buttonBg} resizeMode='cover' style={{width: '100%', height: '100%', position: 'absolute', borderRadius: normalize(50)}} />
                                                    <Text style={{fontSize: normalize(9), color: Colors.white, fontWeight: Fonts.bold, lineHeight: normalize(20), width: normalize(50), textAlign: 'center'}}>ACCEPT</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <Text style={{fontSize: normalize(13), fontWeight: Fonts.bold , color: Colors.secondary}}>Package Weight: 40 lbs</Text>
                                        </View>
                                    </View>
                                    <View style={{alignItems: 'center', flexDirection: 'row', paddingTop: normalize(15), paddingBottom: normalize(15), borderBottomWidth: 1, borderColor: Colors.gray_medium}}>
                                        <View style={{width: normalize(50), height: normalize(50), borderRadius: normalize(50), marginRight: normalize(10)}}>
                                            <Image source={ImagePath.img1} style={{width: normalize(50), height: normalize(50), borderRadius: normalize(50)}} />
                                        </View>
                                        <View>
                                            <View style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginBottom: normalize(3)}}>
                                                <Text style={{fontSize: normalize(16), fontWeight: Fonts.bold , color: Colors.primary}}>John Doe</Text>
                                                <TouchableOpacity style={{height: normalize(20),            backgroundColor:   Colors.secondary, color: Colors.white,   alignSelf: 'stretch', alignItems: 'center', borderRadius: normalize(50), overflow: 'hidden'}}  onPress={() => props.navigation.navigate('QrScanner')}>
                                                    <ImageBackground source={ImagePath.buttonBg} resizeMode='cover' style={{width: '100%', height: '100%', position: 'absolute', borderRadius: normalize(50)}} />
                                                    <Text style={{fontSize: normalize(9), color: Colors.white, fontWeight: Fonts.bold, lineHeight: normalize(20), width: normalize(50), textAlign: 'center'}}>ACCEPT</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <Text style={{fontSize: normalize(13), fontWeight: Fonts.bold , color: Colors.secondary}}>Package Weight: 40 lbs</Text>
                                        </View>
                                    </View>
                                    <View style={{alignItems: 'center', flexDirection: 'row', paddingTop: normalize(15), paddingBottom: normalize(15),}}>
                                        <View style={{width: normalize(50), height: normalize(50), borderRadius: normalize(50), marginRight: normalize(10)}}>
                                            <Image source={ImagePath.img1} style={{width: normalize(50), height: normalize(50), borderRadius: normalize(50)}} />
                                        </View>
                                        <View>
                                            <View style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginBottom: normalize(3)}}>
                                                <Text style={{fontSize: normalize(16), fontWeight: Fonts.bold , color: Colors.primary}}>John Doe</Text>
                                                <TouchableOpacity style={{height: normalize(20),            backgroundColor:   Colors.secondary, color: Colors.white,   alignSelf: 'stretch', alignItems: 'center', borderRadius: normalize(50), overflow: 'hidden'}}  onPress={() => props.navigation.navigate('QrScanner')}>
                                                    <ImageBackground source={ImagePath.buttonBg} resizeMode='cover' style={{width: '100%', height: '100%', position: 'absolute', borderRadius: normalize(50)}} />
                                                    <Text style={{fontSize: normalize(9), color: Colors.white, fontWeight: Fonts.bold, lineHeight: normalize(20), width: normalize(50), textAlign: 'center'}}>ACCEPT</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <Text style={{fontSize: normalize(13), fontWeight: Fonts.bold , color: Colors.secondary}}>Package Weight: 40 lbs</Text>
                                        </View>
                                    </View>
                            </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    )
    
}