import React, {useState, useEffect} from 'react';
import {View, Text,Image, TouchableOpacity,ScrollView } from 'react-native';
import {styles} from './styles';
import api from '../config/api';

export function Posts () {
    const [posts, setPosts] = useState ([])

    useEffect(() => {
        api
          .get('/wp-json/wp/v2/posts?categories=732')
          .then(response => setPosts(response.data))
          .catch(err => {
            console.error('ops! ocorreu um erro' + err);
          });
      }, []);
      

    return (
        <ScrollView horizontal={true}>
        {posts.map((item, id) => {
          return (

                    <View style={styles.contentcontainer}>
                 <Image style={styles.image} source={item.id} />
                    <Text style={styles.subtitle}> {item.title.rendered}</Text>
                        <Text style={styles.description}>{item.content.rendered}</Text>
                        <TouchableOpacity>
                        <Text style={styles.more}>Leia mais</Text>
                       </TouchableOpacity>
                       </View>



         );
             })}
        </ScrollView>
    )
}