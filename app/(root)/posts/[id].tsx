import {View,Text} from 'react-native'
import React from 'react';
import { useLocalSearchParams } from 'expo-router';

const Post = () =>{
    const {id} = useLocalSearchParams()
    return(
        <View>
            <Text>Post{id}</Text>
        </View>
    )
}
export default Post