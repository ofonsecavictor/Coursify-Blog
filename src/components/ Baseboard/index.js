import React from 'react';
import {View, Text, Image, Linking} from'react-native';
import { styles } from './styles';
import {Button} from '../../components/Button';


export function Baseboard () {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/logo-coursify-w.png')}/>
            <Text style={styles.text}>O Coursify.me é uma plataforma de ensino a distância,{'\n'} 
                onde qualquer pessoa ou empresa pode construir seu{'\n'}  
                EAD e vender cursos pela internet.</Text>
                <Button onPress={() => Linking.openURL("https://coursify.me/?locale=pt-BR")}
  title="Quero conhecer a plataforma!"/>

        </View>
    )
}