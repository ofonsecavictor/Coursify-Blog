import React from 'react';
import {View, ScrollView } from 'react-native';
import {Header} from '../../components/Header'
import {Categories} from '../../components/Categories'
import {Baseboard} from '../../components/ Baseboard'
import { styles } from './styles';
export function HomeScreen() {
    return(
        <View style={styles.container}>
            <Header/>
            <ScrollView style={{flex:1, backgroundColor: '#fff'}}>
            <Categories/>
            <Baseboard/>
            </ScrollView>
        </View>
    )
}