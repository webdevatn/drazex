import React, { Fragment, useState } from 'react';
import { SafeAreaView, ImageBackground, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import MyStatusBar from '../../../widgets/MyStatusBar';
import Colors from '../../../assets/Colors';
import ImagePath from '../../../assets/ImagePath';
import Fonts from '../../../assets/Typography';
import { normalize } from '../../../utils/helpers/mixins';
import Header from '../../../widgets/Header';
import Footer from '../../../widgets/Footer';
import SenderInputField from '../../../widgets/SenderInputField';
import { BottomTab } from '../../../../App';

export default function SenderHome(props) {

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
                    <Header text={'Home'} onPress={() => {props.navigation.navigate('Menu')}}/>
                    <Text style={{textAlign: 'center', fontSize: normalize(22), padding: normalize(25), color: Colors.white, lineHeight: normalize(30)}}>Please add your package details here</Text>
                    <View style={{backgroundColor: Colors.white, borderTopLeftRadius: normalize(30), borderTopRightRadius: normalize(30), paddingLeft: normalize(15), paddingRight: normalize(15), marginTop: normalize(50)}}>
                            <View style={{padding: normalize(20), backgroundColor: Colors.white, borderRadius: normalize(30), marginTop: normalize(-50), elevation: 3, marginBottom: normalize(20), shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8,    shadowRadius: 20, minHeight: normalize(550)}}>
                                    <SenderInputField
                                        imageIcon={ImagePath.calendar}
                                        placeholder={'Choose Date'}
                                        value={Date}
                                        onChangeText={val => setDate(val)}
                                    />
                                    <SenderInputField
                                        imageIcon={ImagePath}
                                        placeholder={'Pickup Location'}
                                        value={Pickup}
                                        onChangeText={val => setPickup(val)}
                                    />
                                    <SenderInputField
                                        imageIcon={ImagePath}
                                        placeholder={'Dropup Location'}
                                        value={Dropup}
                                        onChangeText={val => setDropup(val)}
                                    />
                                    <SenderInputField
                                        imageIcon={ImagePath}
                                        placeholder={'No. of Packages'}
                                        value={Packages}
                                        onChangeText={val => setPackages(val)}
                                    />
                                    <SenderInputField
                                        imageIcon={ImagePath.lbs}
                                        placeholder={'Total Weight'}
                                        value={Weight}
                                        onChangeText={val => setWeight(val)}
                                    />
                                    <TouchableOpacity style={{height: normalize(42), backgroundColor: Colors.secondary, color: Colors.white, alignSelf: 'stretch', alignItems: 'center', borderRadius: normalize(50), overflow: 'hidden'}}>
                                        <ImageBackground source={ImagePath.buttonBg} resizeMode='cover' style={{width: '100%', height: '100%', position: 'absolute', borderRadius: normalize(50)}} />
                                        <Text style={{fontSize: normalize(14), color: Colors.white, fontWeight: Fonts.bold, lineHeight: normalize(42)}} onPress={() => props.navigation.navigate('ReceiverDetails')}>ADD</Text>
                                    </TouchableOpacity>
                            </View>
                            <View >
                                <TouchableOpacity style={{
                                    marginBottom: normalize(10),
                                    height: normalize(40), width: '100%', alignItems: 'center',
                                    justifyContent: 'center', borderRadius: normalize(20),
                                    backgroundColor: Colors.white
                                }} onPress={() => { props.navigation.navigate("BottomTab") }}>
                                </TouchableOpacity>
                            </View>
                    </View>  
                    <Footer/>                
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    )
    
}