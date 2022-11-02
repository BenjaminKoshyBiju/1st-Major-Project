import { View, Text, SafeAreaViewBase, SafeAreaViewComponent, SafeAreaFrameContext, Image, TextInput, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {ChevronDownIcon, UserIcon, AdjustmentsVerticalIcon, MagnifyingGlassIcon} from "react-native-heroicons/outline";
import Categories from 'W:/Builds/Zomato-Clone/client/components/Categories.js';
import FeaturedRow from 'W:/Builds/Zomato-Clone/client/components/FeaturedRow.js';
import sanityclient from 'W:/Builds/Zomato-Clone/client/sanity.js';


const HomeScreen = () => {
    const navigation=useNavigation();
    const [featuredCategories,setFeaturedCategories]=useState([])
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        });       
    },[]);
    useEffect(() =>{
      sanityclient.fetch('*[_type=="featured"]{ ..., restaurants[]->{ ...,  dishes[]-> } }').then((data) => {
        setFeaturedCategories(data);
      });
    },[]);
    
  return (
    <SafeAreaView className="bg-white pt-5">
      
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU",
        }}
            className="H-7 W-7 bg-gray-300 p-4 rounded-full"
        />
         <View style={{width: 285}}>
            <Text className="font-bold text-gray-400 text-xs">Deliver Now!
            </Text>
            <Text className="font-bold text-xl">
                Current Location
                <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
        </View>

        <UserIcon size={30} color={"#00CCBB"} />
      </View>
      <View className='flex-row items-center space-x-2 pb-2 mx-4' >
        <View className='flex-row flex-1 space-x-2 bg-gray-200 p-3'>
        <MagnifyingGlassIcon color="gray" size={20}/>
        <TextInput
            placeholder="Restaurants near you"
            keyboardType="default"/>
        
            </View>  
            <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>
      {/*body scroll area */}
      <ScrollView className="bg-gray-100">
        
        {/*for categories */}
        <Categories/>
        {/*for featured rows */}
        {featuredCategories?.map(category=>(
            <FeaturedRow
            key={category._id}
            id={category._id}
              title={category.name}
              description={category.short_description}
              featuredCategory="featured"/>
        ))}
      </ScrollView>
    
      </SafeAreaView>
  );
};

export default HomeScreen;

