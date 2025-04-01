// import {View,Text,TouchableOpacity,Image} from 'react-native'
// import React from 'react'

// interface Props{
//     onPress?:()=>void;
// }

// export const ExploreCards = ({onPress}: Props) =>{
//     return(
//         <TouchableOpacity onPress={onPress} className="flex flex-col items-start w-20 h-30 relative">
//             <Image source={require('../assets/images/quickExplore1.png')} className="w-30 h-30 rounded-xl ml-6"/>
//         </TouchableOpacity>
//     )
// }

// export const CashBackedCards = ({onPress}:Props) =>{
//     return(
//         <TouchableOpacity onPress={onPress} className="flex flex-col items-start w-20 h-30 relative">
//         <Image source={require('../assets/images/cashBChallenge1.png')} className="w-30 h-30 rounded-xl ml-6"/>
//     </TouchableOpacity>
//     )
// }

import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

interface Props {
  onPress?: () => void;
  index: number; // Position in the list
  imageSource: any; // Pass image dynamically
}

export const ExploreCards = ({ onPress, index, imageSource }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex flex-col items-start w-20 h-30 relative ${index === 0 ? "ml-3" : "ml-[53px]"}`}
    >
      <Image source={imageSource} className="w-30 h-30 rounded-xl" />
    </TouchableOpacity>
  );
};

export const CashBackedCards = ({ onPress, index, imageSource }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex flex-col items-start w-20 h-30 relative ${index === 0 ? "ml-3" : "ml-[53px]"}`}
    >
      <Image source={imageSource} className="w-30 h-30 rounded-xl" />
    </TouchableOpacity>
  );
};
