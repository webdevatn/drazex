import React, { Fragment, useState } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import ImagePath from '../assets/ImagePath';
import Colors from '../assets/Colors';
import Fonts from '../assets/Typography';
import { normalize } from '../utils/helpers/mixins';
import PropTypes from 'prop-types';

export default function Footer(props) {

    const onPress = () => {
        if (props.onPress) {
            props.onPress();
        }
    };


    return (
        <View style={{padding: normalize(10), paddingLeft: normalize(15), paddingRight: normalize(15), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: Colors.white, width: '100%'}}>
        <TouchableOpacity onPress={() => { onPress() }}>
            <View style={{alignItems: 'center'}}>
                <Image style={{marginTop: normalize(10), height: normalize(20), width: normalize(20), height: normalize(25), width: normalize(25), marginBottom: normalize(3)}} source={ImagePath.airplane}></Image>
                <Text style={{color: Colors.gray_dark, fontWeight: Fonts.bold}}>Airports</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { onPress() }}>
            <View style={{alignItems: 'center'}}>
                <Image style={{marginTop: Platform.OS === 'android' ? normalize(10) : Dimensions.get('window').height > 736 ? normalize(0) : normalize(10), height: normalize(20), width: normalize(20), height: normalize(25), width: normalize(25), marginBottom: normalize(3)}} source={ImagePath.suitcase}
                resizeMode='contain' />
                <Text style={{color: Colors.gray_dark, fontWeight: Fonts.bold}}>Open Trips</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { onPress() }}>
            <View style={{alignItems: 'center'}}>
                <Image style={{marginTop: Platform.OS === 'android' ? normalize(10) : Dimensions.get('window').height > 736 ? normalize(0) : normalize(10), height: normalize(20), width: normalize(20), height: normalize(25), width: normalize(25), marginBottom: normalize(3)}} source={ImagePath.search}
                resizeMode='contain' />
                <Text style={{color: Colors.gray_dark, fontWeight: Fonts.bold}}>Track Trip</Text>
              </View>
        </TouchableOpacity>
        </View>
    )
}