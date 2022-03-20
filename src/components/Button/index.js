import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {styles} from './styles'

export function Button ({title, props, ...rest}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity {...rest}style={styles.button}>
            <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </View>

    )
}