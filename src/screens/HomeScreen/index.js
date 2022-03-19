import React from 'react';
import {View, Text} from 'react-native';
import {Header} from '../../components/Header'
import {Categories} from '../../components/Categories'

export function HomeScreen() {
    return(
        <View style={{flex:1}}>
            <Header/>
            <Categories/>
            <Text> OLÁ MUNDO, SOU A HOME SCREEN </Text>
        </View>
    )
}