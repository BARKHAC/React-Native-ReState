// import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native'
// import React from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';

// const Header = () => {
//   return (
//     <SafeAreaView className="bg-menu">
//       <View className="flex-row justify-between items-center px-4 py-4">
//         {/* <Text className="text-font text-xl font-montserratBold">Your App</Text> */}
//         <Image 
//             source={require('../../../assets/icons/cashbackedlogo.png')} 
//             className="w-8 h-9"
//           />
//         <View className="flex-row gap-2">
//          <Text className="text-font text-2xl font-montserratBold">10</Text>
//           <Image 
//             source={require('../../../assets/icons/specialLike.png')} 
//             className="w-8 h-8"
//           />
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// const ProfileCard = () => {
//     return(
//         <View className='py-10 w-full bg-card rounded-lg shadow-md mt-7'>
//             <View className='flex-row flex mt-2 bg-card'>
//                 <View className='flex flex-col ml-7'>
//                     <Image 
//                         source={require('../../../assets/icons/userprofile.png')} 
//                         className="size-28 relative rounded-full" 
//                         style={{resizeMode: 'contain'}}
//                     />
//                 </View>
//                 <View className="flex flex-col mt-5 ml-6">
//                     <Text className='text-font text-xl font-montserratBold'>Barkha Chainani</Text>
//                     <View className='flex flex-row gap-2 mt-1'>
//                         <Image 
//                             source={require('../../../assets/icons/location.png')}  
//                             style={{resizeMode: 'contain'}}
//                         />
//                         <Text className='text-font text-sm font-montserrat'>Orlando,FL</Text>
//                     </View>
//                     <View className='flex flex-row mt-1'>
//                         <Image 
//                             source={require('../../../assets/icons/badge.png')}  
//                             style={{resizeMode: 'contain'}}
//                         />
//                         <Text className='text-font text-sm font-montserrat' style={{color:'#FFD700'}}>Gold Tier Microinfluencer</Text>
//                     </View>
//                 </View>
//             </View>
//         </View>
//     )
// }

// const Cashbacks = () => {
//     return(
//         <>
//         <Header></Header>
//         <SafeAreaView className="flex-1 bg-background">
//             <ScrollView
//                 showsVerticalScrollIndicator={false}
//                 contentContainerStyle={{
//                     paddingBottom: 100,
//                     // Removing horizontal padding from ScrollView
//                 }}
//             >
//                 {/* Container with padding for all content except ProfileCard */}
//                 <View className="px-7">
//                     {/* Full width ProfileCard */}
//                     <View className="mx-[-28px]">
//                         <ProfileCard />
//                     </View>
                    
//                     <Text className='text-font text-xl font-montserratBold mt-7'>Rewards:</Text>
                    
//                     <View className='py-6 bg-card rounded-lg shadow-md mt-4 flex flex-row'>
//                         <View>
//                             <Image 
//                                 source={require('../../../assets/icons/groceriesCat.png')} 
//                                 className="w-20 h-20 rounded-lg ml-4" 
//                                 style={{resizeMode: 'cover'}}
//                             />
//                         </View>
//                         <View className='flex flex-col mt-5 ml-4'>
//                             <Text className='text-font text-sm font-montserratBold'>Groceries</Text>
//                             <Text className='text-font text-sm font-montserrat mt-2'>$40.00</Text>
//                         </View>
//                         <TouchableOpacity>
//                             <View className="px-3 py-0.5 ml-10 mt-5 bg-button-redeem rounded-lg justify-center items-center h-10">
//                                 <Text className='text-font text-sm font-montserratBold item-center'>Redeem</Text>
//                             </View>
//                         </TouchableOpacity>
//                         <TouchableOpacity>
//                             <Image className="ml-6" source={require('../../../assets/icons/playinsights.png')} style={{ marginTop: 20 }} />
//                         </TouchableOpacity>
//                     </View>
//                     <View className='py-6 bg-card rounded-lg shadow-md mt-4 flex flex-row'>
//                         <View>
//                             <Image 
//                                 source={require('../../../assets/icons/electronicsCat.png')} 
//                                 className="w-20 h-20 rounded-lg ml-4" 
//                                 style={{resizeMode: 'cover'}}
//                             />
//                         </View>
//                         <View className='flex flex-col mt-5 ml-4'>
//                             <Text className='text-font text-sm font-montserratBold'>Electronics</Text>
//                             <Text className='text-font text-sm font-montserrat mt-2'>$20.00</Text>
//                         </View>
//                         <TouchableOpacity>
//                             <View className="px-3 py-0.5 ml-7 mt-5 bg-button-redeem rounded-lg justify-center items-center h-10">
//                                 <Text className='text-font text-sm font-montserratBold item-center'>Redeem</Text>
//                             </View>
//                         </TouchableOpacity>
//                         <TouchableOpacity>
//                             <Image className="ml-6" source={require('../../../assets/icons/playinsights.png')} style={{ marginTop: 20 }} />
//                         </TouchableOpacity>
//                     </View>
//                     <View className='py-6 bg-card rounded-lg shadow-md mt-4 flex flex-row'>
//                         <View>
//                             <Image 
//                                 source={require('../../../assets/icons/restaurantCat.png')} 
//                                 className="w-20 h-20 rounded-lg ml-4" 
//                                 style={{resizeMode: 'cover'}}
//                             />
//                         </View>
//                         <View className='flex flex-col mt-5 ml-4'>
//                             <Text className='text-font text-sm font-montserratBold'>Restaurants</Text>
//                             <Text className='text-font text-sm font-montserrat mt-2'>$15.00</Text>
//                         </View>
//                         <TouchableOpacity>
//                             <View className="px-3 py-0.5 ml-6 mt-5 bg-button-redeem rounded-lg justify-center items-center h-10">
//                                 <Text className='text-font text-sm font-montserratBold item-center'>Redeem</Text>
//                             </View>
//                         </TouchableOpacity>
//                         <TouchableOpacity>
//                             <Image className="ml-6" source={require('../../../assets/icons/playinsights.png')} style={{ marginTop: 20 }} />
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </ScrollView>
//         </SafeAreaView>
//         </>
//     )
// }

// export default Cashbacks

// app/(tabs)/cashbacks.tsx
// app/(tabs)/cashbacks.tsx
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const Header = () => {
  return (
    <SafeAreaView className="bg-menu">
      <View className="flex-row justify-between items-center px-4 py-4">
        <Image 
            source={require('../../../assets/icons/cashbackedlogo.png')} 
            className="w-8 h-9"
          />
        <View className="flex-row gap-2">
         <Text className="text-font text-2xl font-montserratBold">10</Text>
          <Image 
            source={require('../../../assets/icons/specialLike.png')} 
            className="w-8 h-8"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const ProfileCard = () => {
    return(
        <View className='py-10 w-full bg-card rounded-lg shadow-md mt-7'>
            <View className='flex-row flex mt-2 bg-card'>
                <View className='flex flex-col ml-7'>
                    <Image 
                        source={require('../../../assets/icons/userprofile.png')} 
                        className="size-28 relative rounded-full" 
                        style={{resizeMode: 'contain'}}
                    />
                </View>
                <View className="flex flex-col mt-5 ml-6">
                    <Text className='text-font text-xl font-montserratBold'>Barkha Chainani</Text>
                    <View className='flex flex-row gap-2 mt-1'>
                        <Image 
                            source={require('../../../assets/icons/location.png')}  
                            style={{resizeMode: 'contain'}}
                        />
                        <Text className='text-font text-sm font-montserrat'>Orlando,FL</Text>
                    </View>
                    <View className='flex flex-row mt-1'>
                        <Image 
                            source={require('../../../assets/icons/badge.png')}  
                            style={{resizeMode: 'contain'}}
                        />
                        <Text className='text-font text-sm font-montserrat' style={{color:'#FFD700'}}>Gold Tier Microinfluencer</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const Cashbacks = () => {
    const router = useRouter();
    
    const navigateToInsights = (category: string) => {
        router.push({
            pathname: '/insights',
            params: { category }
        });
    };
    
    return(
        <>
        <Header></Header>
        <SafeAreaView className="flex-1 bg-background">
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 100,
                }}
            >
                <View className="px-7">
                    <View className="mx-[-28px]">
                        <ProfileCard />
                    </View>
                    
                    <Text className='text-font text-xl font-montserratBold mt-7'>Rewards:</Text>
                    
                    <View className='py-6 bg-card rounded-lg shadow-md mt-4 flex flex-row'>
                        <View>
                            <Image 
                                source={require('../../../assets/icons/groceriesCat.png')} 
                                className="w-20 h-20 rounded-lg ml-4" 
                                style={{resizeMode: 'cover'}}
                            />
                        </View>
                        <View className='flex flex-col mt-5 ml-4'>
                            <Text className='text-font text-sm font-montserratBold'>Groceries</Text>
                            <Text className='text-font text-sm font-montserrat mt-2'>$40.00</Text>
                        </View>
                        <TouchableOpacity>
                            <View className="px-3 py-0.5 ml-10 mt-5 bg-button-redeem rounded-lg justify-center items-center h-10">
                                <Text className='text-font text-sm font-montserratBold item-center'>Redeem</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigateToInsights('Groceries')}>
                            <Image className="ml-6" source={require('../../../assets/icons/playinsights.png')} style={{ marginTop: 20 }} />
                        </TouchableOpacity>
                    </View>
                    <View className='py-6 bg-card rounded-lg shadow-md mt-4 flex flex-row'>
                        <View>
                            <Image 
                                source={require('../../../assets/icons/electronicsCat.png')} 
                                className="w-20 h-20 rounded-lg ml-4" 
                                style={{resizeMode: 'cover'}}
                            />
                        </View>
                        <View className='flex flex-col mt-5 ml-4'>
                            <Text className='text-font text-sm font-montserratBold'>Electronics</Text>
                            <Text className='text-font text-sm font-montserrat mt-2'>$20.00</Text>
                        </View>
                        <TouchableOpacity>
                            <View className="px-3 py-0.5 ml-7 mt-5 bg-button-redeem rounded-lg justify-center items-center h-10">
                                <Text className='text-font text-sm font-montserratBold item-center'>Redeem</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigateToInsights('Electronics')}>
                            <Image className="ml-6" source={require('../../../assets/icons/playinsights.png')} style={{ marginTop: 20 }} />
                        </TouchableOpacity>
                    </View>
                    <View className='py-6 bg-card rounded-lg shadow-md mt-4 flex flex-row'>
                        <View>
                            <Image 
                                source={require('../../../assets/icons/restaurantCat.png')} 
                                className="w-20 h-20 rounded-lg ml-4" 
                                style={{resizeMode: 'cover'}}
                            />
                        </View>
                        <View className='flex flex-col mt-5 ml-4'>
                            <Text className='text-font text-sm font-montserratBold'>Restaurants</Text>
                            <Text className='text-font text-sm font-montserrat mt-2'>$15.00</Text>
                        </View>
                        <TouchableOpacity>
                            <View className="px-3 py-0.5 ml-6 mt-5 bg-button-redeem rounded-lg justify-center items-center h-10">
                                <Text className='text-font text-sm font-montserratBold item-center'>Redeem</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigateToInsights('Restaurants')}>
                            <Image className="ml-6" source={require('../../../assets/icons/playinsights.png')} style={{ marginTop: 20 }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
        </>
    )
}

export default Cashbacks;