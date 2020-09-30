import React, { Fragment, useState } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import ImagePath from '../assets/ImagePath';
import Colors from '../assets/Colors';
import Fonts from '../assets/Typography';
import { normalize } from '../utils/helpers/mixins';
import PropTypes from 'prop-types'

export default function Header(props) {

    const onPress = () => {
        if (props.onPress) {
            props.onPress();
        }
    };


    return (
          <View style={{padding: normalize(10), paddingLeft: normalize(15), paddingRight: normalize(15), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: Colors.primary, width: '100%'}}>
              <TouchableOpacity onPress={() => { onPress() }}>
                  <Image source={ImagePath.menu}  resizeMode='contain' style={{width: normalize(27), height: normalize(18)}}/>    
              </TouchableOpacity>
              <Text style={{color: Colors.white, fontWeight: Fonts.bold, fontSize: normalize(25)}}>{props.text}</Text>
              <View style={{flexDirection: 'row'}}>
              <TouchableOpacity>
                  <Image source={ImagePath.notification} resizeMode='contain' style={{width: normalize(22), height: normalize(27)}}/>   
              </TouchableOpacity>
              {/* <TouchableOpacity style={{marginLeft: normalize(10)}}>
                  <Image source={ImagePath.scanner} resizeMode='contain' style={{width: normalize(27), height: normalize(23)}}/>   
              </TouchableOpacity>
              <TouchableOpacity style={{marginLeft: normalize(10)}}>
                  <Image source={ImagePath.flash} resizeMode='contain' style={{width: normalize(27), height: normalize(23)}}/>   
              </TouchableOpacity> */}
              </View>
        </View>
    )
    
}


Header.propTypes = {
    text: PropTypes.string,
}

Header.defaultProps = {
    text: "",
}