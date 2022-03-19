import React from 'react';
import {View, Text,Image, TouchableOpacity } from 'react-native';
import {styles} from './styles'

export function Categories () {
    return (
        <View>
        <View style={styles.titlecontainer}>
            <Text style={styles.title}> CURSOS ONLINE</Text>
            <Text>VER MAIS</Text>
        </View>

        <View style={styles.contentcontainer}>
            <Image style={styles.image}source={require('../../assets/logo-2.png')}/>
            <Text style={styles.subtitle}> Como criar uma landing page de alta...</Text>
            <Text style={styles.description}> Como criar uma landing page de alta conversão é o que todo mundo precisa ter para otimizar ...</Text>
        <TouchableOpacity>
            <Text style={styles.more}>Leia mais</Text>
        </TouchableOpacity>
        </View>
        </View>
    )
}