import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';

export function Header () {
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/logo-2.png')}/>
        </SafeAreaView>
    )
}