import React from 'react';
import {View, Text} from 'react-native';
import {Header} from '../../components/Header'
import {Categories} from '../../components/Categories'
import {Posts} from '../../components/Posts'
export function HomeScreen() {
    return(
        <View style={{flex:1, alignItems: 'center'}}>
            <Header/>
            <Categories/>

        </View>
    )
}