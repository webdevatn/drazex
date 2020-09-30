import React, { Fragment } from 'react';
import { SafeAreaView, Image } from 'react-native';
import ImagePath from '../../assets/ImagePath';
import MyStatusBar from '../../widgets/MyStatusBar';
import Colors from '../../assets/Colors';

export default function Splash(props) {

    return (
        <Fragment>
            <MyStatusBar backgroundColor={Colors.status_bar} barStyle="light-content" />
            <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Image source={ImagePath.splash} resizeMode='cover' />
            </SafeAreaView>
        </Fragment>
    )
    
}