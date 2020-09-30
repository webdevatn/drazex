import React, { Fragment, useState } from 'react';
import { SafeAreaView, ImageBackground, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import MyStatusBar from '../../../widgets/MyStatusBar';
import Colors from '../../../assets/Colors';
import ImagePath from '../../../assets/ImagePath';
import Fonts from '../../../assets/Typography';
import { normalize } from '../../../utils/helpers/mixins';
import Header from '../../../widgets/Header';
import TransporterInputField from '../../../widgets/TransporterInputField';

export default function TransporterHome(props) {

    const [Date, setDate] = useState('')
    const [Pickup, setPickup] = useState('')
    const [Dropup, setDropup] = useState('')
    const [Packages, setPackages] = useState('')
    const [Weight, setWeight] = useState('')

    return (
        <Fragment>
            <MyStatusBar backgroundColor={Colors.primary} barStyle="light-content" />
            <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ScrollView style={{width: '100%', backgroundColor: Colors.primary}}>
                    <Header text={'Home'}  onPress={() => {props.navigation.navigate('Menu')}}/>
                    <Text style={{textAlign: 'center', fontSize: normalize(22), padding: normalize(25), color: Colors.white, lineHeight: normalize(30)}}>Select Pickup Airport & Destination Airport</Text>
                    <View style={{backgroundColor: Colors.white, borderTopLeftRadius: normalize(30), borderTopRightRadius: normalize(30), paddingLeft: normalize(15), paddingRight: normalize(15), marginTop: normalize(50)}}>
                            <View style={{padding: normalize(20), backgroundColor: Colors.white, borderRadius: normalize(30), marginTop: normalize(-50), elevation: 3, marginBottom: normalize(20), shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8,    shadowRadius: 20, minHeight: normalize(550)}}>
                                    <Text style={{color: Colors.primary, fontWeight: Fonts.bold, marginBottom: normalize(7)}}>FLYING FROM</Text>
                                    <TransporterInputField
                                        imageIcon={ImagePath.location}
                                        imageSecondIcon={ImagePath.dropArrow}
                                        placeholder={'Flying From'}
                                        value={Date}
                                        onChangeText={val => setDate(val)}
                                    />
                                    <Text style={{color: Colors.primary, fontWeight: Fonts.bold, marginBottom: normalize(7)}}>FLYING TO</Text>
                                    <TransporterInputField
                                        imageIcon={ImagePath.location}
                                        imageSecondIcon={ImagePath.dropArrow}
                                        placeholder={'Flying To'}
                                        value={Date}
                                        onChangeText={val => setDate(val)}
                                    />
                                    <Text style={{color: Colors.primary, fontWeight: Fonts.bold, marginBottom: normalize(7)}}>FLIGHT NAME</Text>
                                    <TransporterInputField
                                        imageIcon={ImagePath.airplane}
                                        placeholder={'Flight Name'}
                                        value={Dropup}
                                        onChangeText={val => setDropup(val)}
                                    />
                                    <Text style={{color: Colors.primary, fontWeight: Fonts.bold, marginBottom: normalize(7)}}>FLIGHT NUMBER</Text>
                                    <TransporterInputField
                                        imageIcon={ImagePath.airplane}
                                        placeholder={'Flight Number'}
                                        value={Packages}
                                        onChangeText={val => setPackages(val)}
                                    />
                                    <Text style={{color: Colors.primary, fontWeight: Fonts.bold, marginBottom: normalize(7)}}>TRAVELING DATE</Text>
                                    <TransporterInputField
                                        imageIcon={ImagePath.calendar}
                                        placeholder={'Traveling Date'}
                                        value={Packages}
                                        onChangeText={val => setPackages(val)}
                                    />
                                    <Text style={{color: Colors.primary, fontWeight: Fonts.bold, marginBottom: normalize(7)}}>TRAVELING TIME</Text>
                                    <TransporterInputField
                                        imageIcon={ImagePath.time}
                                        placeholder={'Traveling Time'}
                                        value={Packages}
                                        onChangeText={val => setPackages(val)}
                                    />
                                    <Text style={{color: Colors.primary, fontWeight: Fonts.bold, marginBottom: normalize(7)}}>AVAILABLE SPACE</Text>
                                    <TransporterInputField
                                        imageIcon={ImagePath.suitcase}
                                        imageSecondIcon={ImagePath.lbs}
                                        placeholder={'Available Space'}
                                        value={Weight}
                                        onChangeText={val => setWeight(val)}
                                    />
                                    <TouchableOpacity style={{height: normalize(42), backgroundColor: Colors.secondary, color: Colors.white, alignSelf: 'stretch', alignItems: 'center', borderRadius: normalize(50), overflow: 'hidden'}} onPress={() => props.navigation.navigate('SelectTransporter')}>
                                        <ImageBackground source={ImagePath.buttonBg} resizeMode='cover' style={{width: '100%', height: '100%', position: 'absolute', borderRadius: normalize(50)}} />
                                        <Text style={{fontSize: normalize(14), color: Colors.white, fontWeight: Fonts.bold, lineHeight: normalize(42)}}>SUBMIT</Text>
                                    </TouchableOpacity>
                            </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    )
    
}