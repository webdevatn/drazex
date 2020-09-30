import React, { Fragment, useState } from 'react';
import { SafeAreaView, ImageBackground, Text, TouchableOpacity, View, TextInput, ScrollView, Image } from 'react-native';
import MyStatusBar from '../../../widgets/MyStatusBar';
import Colors from '../../../assets/Colors';
import ImagePath from '../../../assets/ImagePath';
import Fonts from '../../../assets/Typography';
import { normalize } from '../../../utils/helpers/mixins';
import Header from '../../../widgets/Header';
import { connect } from 'react-redux';
import { tokenRequestAction } from '../../../actions/index';


function Menu(props) {

    return (
        <Fragment>
            <MyStatusBar backgroundColor={Colors.primary} barStyle="light-content" />
            <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <View style={{backgroundColor:  Colors.primary, width: '100%', height: '100%'}}>
                      <ImageBackground source={ImagePath.menuBg} resizeMode='contain' style={{width: '100%', height: normalize(250), position: 'absolute'}} />
                      <View style={{padding: normalize(15)}}>
                            <TouchableOpacity onPress={() => { props.navigation.goBack() }}>
                                <Image source={ImagePath.backArrow} resizeMode='contain' />
                            </TouchableOpacity>
                            <View style={{alignItems: 'center', marginBottom: normalize(100)}}>
                                <Image source={ImagePath.img2} resizeMode='cover' style={{width: normalize(90), height: normalize(90), borderRadius: normalize(90), marginBottom: normalize(10)}} />
                                <Text style={{fontSize: normalize(20), fontWeight: Fonts.bold, color: Colors.white}}>Alex Garcia</Text>
                            </View>
                            <View>
                                <TouchableOpacity style={{paddingTop: normalize(12), paddingBottom: normalize(12),  borderBottomWidth: 1, borderBottomColor: Colors.gray_dark}}><Text style={{fontSize: normalize(22), color: Colors.white}} onPress={() => {props.navigation.navigate('SenderHome')}}>Home</Text></TouchableOpacity>
                                <TouchableOpacity style={{paddingTop: normalize(12), paddingBottom: normalize(12),  borderBottomWidth: 1, borderBottomColor: Colors.gray_dark}}><Text  style={{fontSize: normalize(22), color: Colors.white}}>Order History</Text></TouchableOpacity>
                                <TouchableOpacity style={{paddingTop: normalize(12), paddingBottom: normalize(12),  borderBottomWidth: 1, borderBottomColor: Colors.gray_dark}}><Text style={{fontSize: normalize(22), color: Colors.white}} onPress={() => {props.navigation.navigate('Profile')}}>My Profile</Text></TouchableOpacity>
                                <TouchableOpacity style={{paddingTop: normalize(12)}} onPress={()=>{props.tokenRequestAction(null)}}><Text style={{fontSize: normalize(22), color: Colors.white}}>Logout</Text></TouchableOpacity>
                            </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Menu);