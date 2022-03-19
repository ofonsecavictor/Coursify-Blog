import React, {useState, useEffect} from 'react';
import {View, Text,Image, TouchableOpacity,ScrollView } from 'react-native';
import {styles} from './styles';
import api from '../config/api';


export function Categories () {
    const [categories, setCategories] = useState ([])
    const [posts, setPosts] = useState ([])
    const [media, setMedia] = useState ([])
    useEffect(() => {
        api
          .get('/wp-json/wp/v2/categories')
          .then(response => setCategories(response.data))
          .catch(err => {
            console.error('ops! ocorreu um erro' + err);
          });
      }, []);

      useEffect(() => {
        api
          .get('/wp-json/wp/v2/posts')
          .then(response => setPosts(response.data))
          .catch(err => {
            console.error('ops! ocorreu um erro' + err);
          });
      }, []);

      useEffect(() => {
        api
          .get('/wp-json/wp/v2/media')
          .then(response => setMedia(response.data))
          .catch(err => {
            console.error('ops! ocorreu um erro' + err);
          });
      }, []);

    return (
        <ScrollView style={{width: '100%', height: '100%'}}>
        {categories.map((item, index) => {
          return (
                                          <View>
        <View style={styles.titlecontainer}>
             <Text key={item.name} style={styles.title}>{item.name}</Text>
                    <Text>VER MAIS</Text>
            </View>

            <ScrollView horizontal={true}>
        {posts.map((item, id) => {
          return (
                    <View style={styles.contentcontainer}>
                    <Text key={id} style={styles.subtitle}> {item.title.rendered}</Text>
                        <Text style={styles.description}>{item.excerpt.rendered}</Text>
                        <View>
                <Image style={styles.image} source={item.id} />
                </View>
                        <TouchableOpacity>
                        <Text style={styles.more}>Leia mais</Text>
                       </TouchableOpacity>
                       </View>
         );
             })}
        </ScrollView>
                       </View>
                                  );
                                })}
        </ScrollView>
    )
}