import {View,Text, Image, TextInput} from 'react-native'
import React, {useState} from 'react';
import {useLocalSearchParams, usePathname, router } from 'expo-router';
import { useDebouncedCallback } from 'use-debounce';


const Search = () =>{
    const path = usePathname();
    const params = useLocalSearchParams< {query?: string}>();
    const[search, setSearch] = useState(params.query);

    const debouncedSearch = useDebouncedCallback((text:string)=> router.setParams({query:text}),500)

    const handleSearch = (text: string) =>{
        setSearch(text);
        // Update the URL query parameter with the debounced search term
        debouncedSearch(text);

        // If you want to perform an action immediately without waiting for the debounce
        // router.setParams({query: text});
    }
    return(
        // <View className ="flex flex-row items-center justify-between w-1/2 h-10 px-1 rounded-lg bg-white border border-primary-100 mt-1 mr-1">
        //     <View className="flex-1 flex flex-row items-center justify-start z-50">
        //     <Image source={require('../assets/icons/exploreSearchBar.png')} className="size-5 mr-2 ml-1" resizeMode='contain'/>
        //     <TextInput
        //         value = {search}
        //         onChangeText = {handleSearch}
        //         placeholder="Explore more.."
        //         className = "text-sm font-montserrat text-primary-100 bg- flex-1 px-2"
        //     />
        //     </View>
           
           
        // </View>
        <View className="flex flex-row items-center w-1/2 h-10 px-2 rounded-lg bg-white border border-primary-100  mr-1 ml-4">
    <Image source={require('../assets/icons/exploreSearchBar.png')} className="size-4 mr-2" resizeMode="contain" />
    <TextInput
        value={search}
        onChangeText={handleSearch}
        placeholder="Explore more.."
        placeholderTextColor="#A0A0A0"
        className="text-sm font-montserrat text-primary-100 flex-1 h-full px-2"
        style={{ textAlignVertical: 'center',  paddingTop: 0,
            paddingBottom: 0 }}  // Ensures vertical centering
    />
</View>


    )
}

export default Search;