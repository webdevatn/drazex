import React, { Fragment, useState } from 'react';
import { SafeAreaView, ImageBackground, Text, TouchableOpacity, View, ScrollView, Image } from 'react-native';
import MyStatusBar from '../../../widgets/MyStatusBar';
import Colors from '../../../assets/Colors';
import ImagePath from '../../../assets/ImagePath';
import Fonts from '../../../assets/Typography';
import { normalize } from '../../../utils/helpers/mixins';
import Header from '../../../widgets/Header';
import SenderInputField from '../../../widgets/SenderInputField';

export default function Profile(props) {

    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [PhoneNumber, setPhoneNumber] = useState('')
    const [EmailId, setEmailId] = useState('')

    return (
        <Fragment>
            <MyStatusBar backgroundColor={Colors.primary} barStyle="light-content" />
            <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ScrollView style={{width: '100%', backgroundColor: Colors.primary}}>
                    <Header  text={'My Profile'}  onPress={() => {props.navigation.navigate('Menu')}}/>
                    <View style={{backgroundColor: Colors.white, borderTopLeftRadius: normalize(30), borderTopRightRadius: normalize(30), paddingLeft: normalize(15), paddingRight: normalize(15), marginTop: normalize(130)}}>
                            <View style={{padding: normalize(20), backgroundColor: Colors.white, borderRadius: normalize(30), marginTop: normalize(-50), elevation: 3, marginBottom: normalize(20), shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8,    shadowRadius: 20, minHeight: normalize(550)}}>
                                    <View style={{alignItems: 'center', marginBottom: normalize(20), marginTop: normalize(-80)}}>
                                        <View style={{width: normalize(120), height: normalize(120), borderRadius: normalize(120), borderWidth: 1, borderColor: Colors.gray_medium, backgroundColor: Colors.white, alignItems: 'center', justifyContent: 'center'}}>
                                        <Image source={ImagePath.img2} style={{width: normalize(120), height: normalize(120), borderRadius: normalize(120)}} />
                                             <TouchableOpacity style={{width: normalize(40), height: normalize(40), borderRadius: normalize(40), borderWidth: 1, borderColor: Colors.gray_medium, backgroundColor: Colors.white, alignItems: 'center', justifyContent: 'center', position: 'absolute', right: 0, bottom: 0}}>
                                            <Image source={ImagePath.camera} style={{width: normalize(20), height: normalize(18)}} />                                       
                                        </TouchableOpacity>
                                        </View>
                                    </View>
                                    <SenderInputField
                                        imageIcon={ImagePath.pencil}
                                        placeholder={'John Doe'}
                                        value={FirstName}
                                        onChangeText={val => setFirstName(val)}
                                    />
                                    <SenderInputField
                                        imageIcon={ImagePath.pencil}
                                        placeholder={'john.doe786@gmail.com'}
                                        value={LastName}
                                        onChangeText={val => setLastName(val)}
                                    />
                                    <SenderInputField
                                        imageIcon={ImagePath.pencil}
                                        placeholder={'0001234567'}
                                        value={PhoneNumber}
                                        onChangeText={val => setPhoneNumber(val)}
                                    />
                                    <SenderInputField
                                        imageIcon={ImagePath.pencil}
                                        placeholder={'************'}
                                        value={EmailId}
                                        onChangeText={val => setEmailId(val)}
                                    />
                            </View>
                        </View>
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    )
    
}