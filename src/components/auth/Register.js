import React, { Fragment, useState } from 'react';
import { SafeAreaView, ImageBackground, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import ImagePath from '../../assets/ImagePath';
import MyStatusBar from '../../widgets/MyStatusBar';
import Colors from '../../assets/Colors';
import { normalize } from '../../utils/helpers/mixins';
import Fonts from '../../assets/Typography';
import TextInputField from '../../widgets/TextInputField';


export default function Register(props) {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [Email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

    return (
        <Fragment>
            <MyStatusBar backgroundColor={Colors.primary} barStyle="light-content" />
            <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ImageBackground source={ImagePath.innerBg1} resizeMode='cover' style={{width: '100%', height: '100%', position: 'absolute'}} />
                  <ScrollView>
                  <View style={{alignItems: 'center', padding: normalize(20), width: '100%'}}>
                      <Text style={{fontSize: normalize(30), color: Colors.white, fontWeight: Fonts.bold, marginBottom: normalize(25)}}>Register</Text>

                      <TextInputField
                        imageIcon={ImagePath.user}
                        placeholder={'First Name'}
                        value={firstName}
                        onChangeText={val => setFirstName(val)}
                    />
                    <TextInputField
                        imageIcon={ImagePath.user}
                        placeholder={'Last Name'}
                        value={lastName}
                        onChangeText={val => setLastName(val)}
                    />
                    <TextInputField
                        imageIcon={ImagePath.email}
                        placeholder={'Email Id'}
                        value={Email}
                        onChangeText={val => setEmail(val)}
                    />
                    <TextInputField
                        imageIcon={ImagePath.mobile}
                        placeholder={'Phone Number'}
                        value={phoneNumber}
                        onChangeText={val => setPhoneNumber(val)}
                    />
                    <TextInputField
                        imageIcon={ImagePath.key}
                        placeholder={'Password'}
                        value={password}
                        onChangeText={val => setPassword(val)}
                    />
                    <TextInputField
                        imageIcon={ImagePath.key}
                        placeholder={'Confirm Password'}
                        value={confirmPassword}
                        onChangeText={val => setConfirmPassword(val)}
                    />

                    <TouchableOpacity style={{height: normalize(40), backgroundColor: Colors.secondary, color: Colors.white, alignSelf: 'stretch', alignItems: 'center', borderRadius: normalize(50), overflow: 'hidden', marginBottom: normalize(15)}} onPress={() => props.navigation.navigate('OtpValidation')}>
                          <ImageBackground source={ImagePath.buttonBg} resizeMode='cover' style={{width: '100%', height: '100%', position: 'absolute', borderRadius: normalize(50)}} />
                          <Text style={{fontSize: normalize(15), color: Colors.white, fontWeight: Fonts.bold, lineHeight: normalize(42)}}>SIGN UP</Text>
                    </TouchableOpacity>

                    <View style={{flexDirection: 'row'}}>
                      <Text style={{fontWeight: Fonts.bold, color: Colors.white, fontSize: normalize(15)}}>Have an account? </Text>
                      <TouchableOpacity  onPress={() => props.navigation.navigate('Login')}>
                        <Text style={{fontWeight: Fonts.bold, color: Colors.white, fontSize: normalize(15)}}>Login</Text>
                      </TouchableOpacity>
                    </View>

                </View>
                  </ScrollView>
            </SafeAreaView>
        </Fragment>
    )
    
}