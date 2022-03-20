import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import HTMLView from 'react-native-htmlview';
import {styles} from './styles';
import {Header} from '../../components/Header'
import {Baseboard} from '../../components/ Baseboard'
export function PostsDetails ({navigation, route}) {

  
    return (
        <View style={{flex:1}}>
            <Header/>
            <ScrollView style={{flex:1, backgroundColor: '#fff'}}> 
            <Text style={styles.title}>{route.params.title}</Text>
            <HTMLView style={styles.content}value={route.params.content}/>
            <Baseboard/>
        </ScrollView>
        </View>
    )
}