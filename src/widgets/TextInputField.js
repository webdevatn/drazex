import React, { useState, useEffect } from 'react';
import {
    View,
    TextInput,
    Image
} from 'react-native';
import Colors from '../assets/Colors';
import PropTypes from 'prop-types'
import {normalize} from '../utils/helpers/mixins'

export default function TextInputField(props) {

    return (


        <View style={{marginBottom: normalize(15)}}>

            <TextInput style={{fontSize: normalize(15), paddingStart:normalize(50),  width:normalize(280),  height: normalize(40), borderWidth: 0, backgroundColor: Colors.white, borderRadius: normalize(50) }} placeholder={props.placeholder} keyboardType={props.keyboardType} secureTextEntry={props.secureTextEntry} placeholderTextColor={Colors.gray_dark} value={props.value}  value={props.value} maxLength={props.maxLength}
                onChangeText={(text) => { onChangeText(text) }} />   

            <Image source={props.imageIcon} style={{position:'absolute',left:20,top:15}}/>    
                
        </View>

    )

}

TextInputField.propTypes = {
    text: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    keyboardType: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    onChangeText: PropTypes.func,
    value:PropTypes.string,
    maxLength: PropTypes.number,
    imageIcon:PropTypes.any

}

TextInputField.defaultProps = {
    text: "",
    placeholder: '',
    keyboardType: 'default',
    secureTextEntry: false,
    onChangeText: null,
    value: null,
    maxLength: null,
    imageIcon:null
}