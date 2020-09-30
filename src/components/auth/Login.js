import React, { Fragment, useState, useEffect } from 'react';
import { SafeAreaView, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import ImagePath from '../../assets/ImagePath';
import MyStatusBar from '../../widgets/MyStatusBar';
import Colors from '../../assets/Colors';
import { normalize } from '../../utils/helpers/mixins';
import Fonts from '../../assets/Typography';
import TextInputField from '../../widgets/TextInputField';
import { connect } from 'react-redux';
import { tokenRequestAction } from "../../actions/index"

function Login(props) {

  const [Email, setEmail] = useState('')
  const [password, setPassword] = useState('')

    return (
        <Fragment>
            <MyStatusBar backgroundColor={Colors.primary} barStyle="light-content" />
            <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ImageBackground source={ImagePath.innerBg1} resizeMode='cover' style={{width: '100%', height: '100%', position: 'absolute'}} />
                <View style={{alignItems: 'center', padding: normalize(20), width: '100%'}}>
                      <Text style={{fontSize: normalize(30), color: Colors.white, fontWeight: Fonts.bold, marginBottom: normalize(25)}}>Log In</Text>

                      <TextInputField
                        imageIcon={ImagePath.email}
                        placeholder={'Email Address'}
                        value={Email}
                        onChangeText={val => setEmail(val)}
                    />
                    <TextInputField
                        imageIcon={ImagePath.key}
                        placeholder={'Password'}
                        value={password}
                        onChangeText={val => setPassword(val)}
                    />

                    <TouchableOpacity style={{height: normalize(40), backgroundColor: Colors.secondary, color: Colors.white, alignSelf: 'stretch', alignItems: 'center', borderRadius: normalize(50), overflow: 'hidden', marginBottom: normalize(15)}} 
                    onPress={()=>{props.tokenRequestAction("QWERTY")}}>
                          <ImageBackground source={ImagePath.buttonBg} resizeMode='cover' style={{width: '100%', height: '100%', position: 'absolute', borderRadius: normalize(50)}} />
                          <Text style={{fontSize: normalize(15), color: Colors.white, fontWeight: Fonts.bold, lineHeight: normalize(42)}}>LOGIN</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={{marginBottom: normalize(15)}}><Text style={{color: Colors.gray_medium}}>Forgot Password?</Text></TouchableOpacity>

                    <View style={{flexDirection: 'row'}}>
                      <Text style={{fontWeight: Fonts.bold, color: Colors.white, fontSize: normalize(15)}}>Don't have an account? </Text>
                      <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
                        <Text style={{fontWeight: Fonts.bold, color: Colors.white, fontSize: normalize(15)}}>Register</Text>
                      </TouchableOpacity>
                    </View>

                </View>
            </SafeAreaView>
        </Fragment>
    )
    
}


const mapStateToProps = state => {
  return {
      token: state.TokenReducer.token,
      status: state.TokenReducer.status,
  }
}

const mapDispatchToProps = dispatch => {
  return {
      tokenRequestAction: (token) => {
          dispatch(tokenRequestAction(token))
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);