import React from 'react';
import {SafeAreaView, Image} from 'react-native';
import {styles} from './styles';

export function Header ({props,...rest}) {
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/logo-2.png')}/>
        </SafeAreaView>
    )
}