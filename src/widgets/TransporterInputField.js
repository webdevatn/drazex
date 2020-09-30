import React, { useState, useEffect } from 'react';
import {
    View,
    TextInput,
    Image
} from 'react-native';
import Colors from '../assets/Colors';
import PropTypes from 'prop-types'
import {normalize} from '../utils/helpers/mixins'

export default function TransporterInputField(props) {

    return (


        <View style={{marginBottom: normalize(15)}}>

            <TextInput style={{fontSize: normalize(15), paddingStart:normalize(45), paddingEnd:normalize(40), height: normalize(42), borderWidth: 1, borderColor: Colors.gray_light, backgroundColor: Colors.white_dark, borderRadius: normalize(5)}} placeholder={props.placeholder} keyboardType={props.keyboardType} secureTextEntry={props.secureTextEntry} placeholderTextColor={Colors.gray_dark} value={props.value}  value={props.value} maxLength={props.maxLength}
                onChangeText={(text) => { onChangeText(text) }} />   

            <Image source={props.imageIcon} resizeMode="contain" style={{position:'absolute',left:10,top:9, width: normalize(25), height: normalize(25)}}/>  

            <Image source={props.imageSecondIcon} resizeMode="contain" style={{position:'absolute',right:10,top:9}}/>    
                
        </View>

    )

}

TransporterInputField.propTypes = {
    text: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    keyboardType: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    onChangeText: PropTypes.func,
    value:PropTypes.string,
    maxLength: PropTypes.number,
    imageIcon:PropTypes.any,
    imageSecondIcon:PropTypes.any

}

TransporterInputField.defaultProps = {
    text: "",
    placeholder: '',
    keyboardType: 'default',
    secureTextEntry: false,
    onChangeText: null,
    value: null,
    maxLength: null,
    imageIcon:null,
    imageSecondIcon:null,

}