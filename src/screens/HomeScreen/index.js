import React from 'react';
import {View, Text, ScrollView } from 'react-native';
import {Header} from '../../components/Header'
import {Categories} from '../../components/Categories'
import {Baseboard} from '../../components/ Baseboard'
export function HomeScreen() {
    return(
        <View style={{flex:1, backgroundColor: '#fff'}}>
            <Header/>
            <ScrollView style={{flex:1, backgroundColor: '#fff'}}>
            <Categories/>
            <Categories/>
            <Categories/>
            <Baseboard/>
            </ScrollView>
        </View>
    )
}