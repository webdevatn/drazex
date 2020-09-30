import React, { Fragment, useState } from 'react';
import { SafeAreaView, ImageBackground, Text, TouchableOpacity, View, ScrollView, Image } from 'react-native';
import MyStatusBar from '../../../widgets/MyStatusBar';
import Colors from '../../../assets/Colors';
import ImagePath from '../../../assets/ImagePath';
import Fonts from '../../../assets/Typography';
import { normalize } from '../../../utils/helpers/mixins';
import Header from '../../../widgets/Header';
import SenderInputField from '../../../widgets/SenderInputField';

export default function Payment(props) {

    const [CardNumber, setCardNumber] = useState('')
    const [CVV, setCVV] = useState('')
    const [Expiry, setExpiry] = useState('')

    return (
        <Fragment>
            <MyStatusBar backgroundColor={Colors.primary} barStyle="light-content" />
            <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ScrollView style={{width: '100%', backgroundColor: Colors.primary}}>
                    <Header  text={'Payment'}  onPress={() => {props.navigation.navigate('Menu')}}/>
                    <View style={{backgroundColor: Colors.white, borderTopLeftRadius: normalize(30), borderTopRightRadius: normalize(30), paddingLeft: normalize(15), paddingRight: normalize(15), marginTop: normalize(80)}}>
                            <View style={{padding: normalize(20), backgroundColor: Colors.white, borderRadius: normalize(30), marginTop: normalize(-50), elevation: 3, marginBottom: normalize(20), shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8,    shadowRadius: 20, minHeight: normalize(550)}}>
                                <Text style={{fontSize: normalize(15), color: Colors.black, fontWeight: Fonts.bold, marginBottom: normalize(10)}}>Card Number</Text>
                                    <SenderInputField
                                        imageIcon={ImagePath}
                                        placeholder={'0000-0000-0000-0000'}
                                        value={CardNumber}
                                        onChangeText={val => setCardNumber(val)}
                                    />
                                    <View style={{ flexDirection: 'column'}}>
                                        <SenderInputField
                                            imageIcon={ImagePath}
                                            placeholder={'CVV'}
                                            value={CVV}
                                            onChangeText={val => setCVV(val)}
                                        />
                                        <SenderInputField
                                            imageIcon={ImagePath}
                                            placeholder={'Expiry'}
                                            value={Expiry}
                                            onChangeText={val => setExpiry(val)}
                                        />
                                    </View>
                                    <Text style={{textAlign: 'right', color: Colors.primary, fontSize: normalize(15), marginBottom: normalize(40)}}>+ Add New Card</Text>

                                    <View style={{justifyContent: 'space-between', marginBottom: normalize(20), flexDirection: 'row'}}>
                                        <Text style={{fontSize: normalize(15), color: Colors.black, fontWeight: Fonts.bold}}>Total Amount</Text>
                                        <Text style={{color: Colors.primary, fontSize: normalize(15)}}>$8.00</Text>
                                    </View>

                                    <TouchableOpacity style={{height: normalize(42), backgroundColor: Colors.secondary, color: Colors.white, alignSelf: 'stretch', alignItems: 'center', borderRadius: normalize(50), overflow: 'hidden'}}  onPress={() => props.navigation.navigate('Confirmation')}>
                                        <ImageBackground source={ImagePath.buttonBg} resizeMode='cover' style={{width: '100%', height: '100%', position: 'absolute', borderRadius: normalize(50)}} />
                                        <Text style={{fontSize: normalize(14), color: Colors.white, fontWeight: Fonts.bold, lineHeight: normalize(42)}}>CONFIRM PAYMENT</Text>
                                    </TouchableOpacity>
                            </View>
                        </View>
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    )
    
}