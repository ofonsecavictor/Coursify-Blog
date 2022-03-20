import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    titlecontainer:{
        flexDirection:'row',
        marginTop:46,
        alignItems: 'center',
        justifyContent:'space-between',
        marginLeft:15,
        marginRight:15,
        marginBottom:28,
    },
    title:{
        fontSize:22,
        fontWeight:'bold',
        color:'#2AB598',
    },
    contentcontainer:{
        width:235,
        height:325,
        borderRadius:12,
        marginLeft: 15,
        borderWidth:1,
        borderColor:'#f0f0f0'
        
    },
    image:{
        alignSelf: 'center',
        width:235,
        height:103,
    },
    subtitle:{
        fontSize:17,
        marginLeft:9,
        textAlign: 'left',
        fontWeight:'bold',        color:'#2AB598',
    },
    description:{
        fontSize:15,
        marginLeft:10,
        textAlign: 'left',
        marginTop:16,
        marginBottom:-30,
    },
    more:{
        color:'#FDA506',
        fontSize:16,
        marginLeft:10,
        fontWeight:'bold',
    }
})