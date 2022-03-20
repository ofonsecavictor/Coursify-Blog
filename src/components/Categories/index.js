import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity,ScrollView } from 'react-native';
import {styles} from './styles';
import api from '../../config/api';
import {useNavigation} from '@react-navigation/native';
import HTML from 'react-native-renders-html';


export function Categories () {
  const navigation = useNavigation();
    const [categories, setCategories] = useState ([])
    const [posts, setPosts] = useState ([])
    const [media, setMedia] = useState ([])

    useEffect(() => {
      api
        .get('/wp-json/wp/v2/categories/82')
        .then(response => setCategories(response.data))
        .catch(err => {
          console.error('ops! ocorreu um erro' + err);
        });
    }, []);

      useEffect(() => {
        api
          .get('/wp-json/wp/v2/posts?categories=82')
          .then(response => setPosts(response.data))
          .catch(err => {
            console.error('ops! ocorreu um erro' + err);
          });
      }, []);

      useEffect(() => {
        api
          .get('/wp-json/wp/v2/media/?include=5053')
          .then(response => setMedia(response.data))
          .catch(err => {
            console.error('ops! ocorreu um erro' + err);
          });
      }, []);

    return (
        <ScrollView style={{width: '100%', height: '100%'}}>
           <View>
        <View style={styles.titlecontainer}>
             <Text  style={styles.title}>{categories.name}</Text>
             <TouchableOpacity>
             <Text>VER MAIS</Text>
             </TouchableOpacity>
            </View>

            <ScrollView horizontal={true}>
        {posts.map((posts, id) => {
          return (
                    <TouchableOpacity key={id} style={styles.contentcontainer} 
                    onPress = {() => navigation.navigate('PostsDetails', 
                    {id: posts.id, 
                    title:posts.title.rendered, 
                    media: posts.featured_media, 
                    content:posts.content.rendered})
                    }>

{media.map((media) => {
          return (
                <Image style={{width: 235, height:103, borderTopRightRadius: 12,borderTopLeftRadius: 12}}source={{ uri: media.media_details.sizes.medium.source_url || '' }}

                />
                );
              })}
                    <Text style={styles.subtitle}>{posts.title.rendered}</Text>
                    
                        <HTML numberOfLines={4} html={posts.excerpt.rendered} style={styles.description}/>
                        <TouchableOpacity>
                        <Text style={styles.more}>Leia mais</Text>
                       </TouchableOpacity>
                       </TouchableOpacity>
         );
             })}
        </ScrollView>
                       </View>

        </ScrollView>
    )
}