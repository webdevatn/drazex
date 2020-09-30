import React, { Fragment, useState } from 'react';
import { SafeAreaView, ImageBackground, Text, TouchableOpacity, View, ScrollView, Image } from 'react-native';
import MyStatusBar from '../../../widgets/MyStatusBar';
import Colors from '../../../assets/Colors';
import ImagePath from '../../../assets/ImagePath';
import Fonts from '../../../assets/Typography';
import { normalize } from '../../../utils/helpers/mixins';
import Header from '../../../widgets/Header';
import Footer from '../../../widgets/Footer';
import SenderInputField from '../../../widgets/SenderInputField';

export default function ReceiverDetails(props) {

    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [PhoneNumber, setPhoneNumber] = useState('')
    const [EmailId, setEmailId] = useState('')

    return (
        <Fragment>
            <MyStatusBar backgroundColor={Colors.primary} barStyle="light-content" />
            <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ScrollView style={{width: '100%', backgroundColor: Colors.primary}}>
                    <Header  text={'Receiver Details'}  onPress={() => {props.navigation.navigate('Menu')}}/>
                    <View style={{backgroundColor: Colors.white, borderTopLeftRadius: normalize(30), borderTopRightRadius: normalize(30), paddingLeft: normalize(15), paddingRight: normalize(15), marginTop: normalize(130)}}>
                            <View style={{padding: normalize(20), backgroundColor: Colors.white, borderRadius: normalize(30), marginTop: normalize(-50), elevation: 3, marginBottom: normalize(20), shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8,    shadowRadius: 20, minHeight: normalize(550)}}>
                                    <View style={{alignItems: 'center', marginBottom: normalize(20), marginTop: normalize(-80)}}>
                                        <TouchableOpacity style={{width: normalize(120), height: normalize(120), borderRadius: normalize(120), borderWidth: 1, borderColor: Colors.gray_medium, backgroundColor: Colors.white, alignItems: 'center', justifyContent: 'center'}}>
                                        <Image source={ImagePath.camera} style={{}} />
                                        </TouchableOpacity>
                                    </View>
                                    <SenderInputField
                                        imageIcon={ImagePath}
                                        placeholder={'First Name'}
                                        value={FirstName}
                                        onChangeText={val => setFirstName(val)}
                                    />
                                    <SenderInputField
                                        imageIcon={ImagePath}
                                        placeholder={'Last Name'}
                                        value={LastName}
                                        onChangeText={val => setLastName(val)}
                                    />
                                    <SenderInputField
                                        imageIcon={ImagePath}
                                        placeholder={'Phone Number'}
                                        value={PhoneNumber}
                                        onChangeText={val => setPhoneNumber(val)}
                                    />
                                    <SenderInputField
                                        imageIcon={ImagePath}
                                        placeholder={'Email Id'}
                                        value={EmailId}
                                        onChangeText={val => setEmailId(val)}
                                    />
                                    <TouchableOpacity style={{height: normalize(42), backgroundColor: Colors.secondary, color: Colors.white, alignSelf: 'stretch', alignItems: 'center', borderRadius: normalize(50), overflow: 'hidden'}}  onPress={() => props.navigation.navigate('Payment')}>
                                        <ImageBackground source={ImagePath.buttonBg} resizeMode='cover' style={{width: '100%', height: '100%', position: 'absolute', borderRadius: normalize(50)}} />
                                        <Text style={{fontSize: normalize(14), color: Colors.white, fontWeight: Fonts.bold, lineHeight: normalize(42)}}>ADD</Text>
                                    </TouchableOpacity>
                            </View>
                        </View>
                        <Footer/>
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    )
    
}