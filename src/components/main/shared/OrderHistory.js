import React, { Fragment, useState } from 'react';
import { SafeAreaView, ImageBackground, Text, TouchableOpacity, View, TextInput, ScrollView } from 'react-native';
import MyStatusBar from '../../../widgets/MyStatusBar';
import Colors from '../../../assets/Colors';
import ImagePath from '../../../assets/ImagePath';
import Fonts from '../../../assets/Typography';
import { normalize } from '../../../utils/helpers/mixins';
import Header from '../../../widgets/Header';

export default function OrderHistory(props) {

    return (
        <Fragment>
            <MyStatusBar backgroundColor={Colors.primary} barStyle="light-content" />
            <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ScrollView style={{width: '100%', backgroundColor: Colors.primary}}>
                    <Header text={'Order History'} onPress={() => {props.navigation.navigate('Menu')}}/>
                    <Text style={{textAlign: 'center', fontSize: normalize(22), padding: normalize(25), color: Colors.white, lineHeight: normalize(30)}}>Please add your package details here</Text>
                    <View style={{backgroundColor: Colors.white, borderTopLeftRadius: normalize(30), borderTopRightRadius: normalize(30), height: normalize(100), paddingLeft: normalize(15), paddingRight: normalize(15)}}>
                            <View>
                                    
                            </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    )
    
}