// import { View, Text, Image, TouchableOpacity, SafeAreaView } from "react-native";
// import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";

// // Define the expected params structure
// type ChallengesScreenRouteParams = {
//   title: string;
//   uri: any; // Update to ImageSourcePropType if using TypeScript properly
// };

// const Header = () => {
//   return (
//     <SafeAreaView className="bg-menu">
//       <View className="flex-row justify-between items-center px-4 py-4">
//         <Image 
//             source={require('../assets/icons/cashbackedlogo.png')} 
//             className="w-8 h-9"
//           />
//         <View className="flex-row gap-2">
//          <Text className="text-font text-2xl font-montserratBold">10</Text>
//           <Image 
//             source={require('../assets/icons/specialLike.png')} 
//             className="w-8 h-8"
//           />
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export const Challenges = () => {
//   const navigation = useNavigation();
//   const route = useRoute<RouteProp<Record<string, ChallengesScreenRouteParams>, string>>();

//   const { title, uri } = route.params ?? {}; // Ensure params exist

//   return (
//     <>
//     <SafeAreaView>
//         <Header></Header>
//     <View className="flex-1 bg-background">
//       {/* Back Button */}
//       <TouchableOpacity onPress={() => navigation.goBack()} className="p-4">
//         <Text className="text-font text-sm font-montserratBold">← Back</Text>
//       </TouchableOpacity>

//       {/* Header Image */}
//       {uri && <Image source={uri} className="w-full h-40" resizeMode="cover" />}

//       {/* Challenge Details */}
//       <View className="p-4">
//         <Text className='text-font text-xl font-montserratBold mt-7'>{title} Converse Challenge:</Text>
//         <Text className="text-font text-m font-montserrat mt-2">
//           Show off your dunks in an all-weather strong capacity through images, videos, anything.
//         </Text>
//         <Text className="text-font text-m font-montserrat mt-2">✅ Your {title} dunks should be clearly visible.</Text>
//         <Text className="text-font text-m font-montserrat mt-2">✅ Use the hashtags #dunks365 #{title}CashBacked</Text>

//         <Text className="text-font text-m font-montserrat mt-2">
//           The more engagement you receive, the better offers and more you will avail! Let’s go! 🚀
//         </Text>
//       </View>
//     </View>
//     </SafeAreaView>
//     </>
//   );
// };

// export default Challenges;
import { View, Text, Image, TouchableOpacity, SafeAreaView } from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

// Define the expected params structure
type ChallengesScreenRouteParams = {
  title: string;
  uri: any; // Accepting the uri but not using it for now
};

// Define your const array or object to map titles to images and text
const challengeData = [
  {
    opt: "Nike",
    img: require("../assets/images/nike.jpg"),
    text1: "Show off your Nike dunks in all weather strong capacity through images, videos, anything!",
    text2: "✅ Your Nike dunks should be clearly visible.",
    text3: "✅ Use the hashtags #dunks365 #NikeCashBacked."
  },
  {
    opt: "Ikea",
    img: require("../assets/images/ikea.jpg"),
    text1: "Show off your Ikea builds with creativity. Use images, videos, or any media!",
    text2: "✅ Your Ikea builds should be clearly visible.",
    text3: "✅ Use the hashtags #builds365 #IkeaCashBacked."
  },
  {
    opt: "Starbucks",
    img: require("../assets/images/starbucks.jpg"),
    text1: "Show off your Starbucks order with flair. Use images, videos, or any media portraying your cafe latte!",
    text2: "✅ Your Starbucks order should be clearly visible.",
    text3: "✅ Use the hashtags #starbae365 #StarbucksCashBacked."
  },
  // Add more options here as needed
];

const Header = () => {
  return (
    <SafeAreaView className="bg-menu">
      <View className="flex-row justify-between items-center px-4 py-4">
        <Image
          source={require('../assets/icons/cashbackedlogo.png')}
          className="w-8 h-9"
        />
        <View className="flex-row gap-2">
          <Text className="text-font text-2xl font-montserratBold">10</Text>
          <Image
            source={require('../assets/icons/specialLike.png')}
            className="w-8 h-8"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export const Challenges = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<Record<string, ChallengesScreenRouteParams>, string>>();

  // Destructure the title and uri from params
  const { title, uri } = route.params ?? {};

  // Find the corresponding challenge data based on the title
  const challenge = challengeData.find(challenge => challenge.opt === title);

  return (
    <>
      <SafeAreaView className="flex-1 bg-background">
        <Header />
        <View className="flex-1 bg-background">
          {/* Back Button */}
          {/* <TouchableOpacity onPress={() => navigation.goBack()} className="p-4">
            <Text className="text-font text-sm font-montserratBold">← Back</Text>
          </TouchableOpacity> */}
          <TouchableOpacity 
                        className="mb-4 ml-3 mt-3" 
                        onPress={() => navigation.goBack()}
                      >
                        <View className="flex-row items-center">
                          {/* <Image 
                          //   source={require('../assets/icons/back.png')} // Make sure you have this icon
                            
                            className="w-6 h-6 mr-2" 
                          /> */}
                          <Icon name="arrow-left" size={18} color="white" />
                          <Text className="text-font text-m font-montserrat"> Back</Text>
                        </View>
                      </TouchableOpacity>

          {/* Header Image */}
          {challenge && <Image source={challenge.img} className="w-full h-40" resizeMode="cover" />}

          {/* Challenge Details */}
          <View className="p-4">
            <Text className="text-font text-xl font-montserratBold mt-7">
              {title} Challenge:
            </Text>
            <Text className="text-font text-lg font-montserrat mt-2">
              {challenge ? challenge.text1 : "Challenge details not available."}
            </Text>
            <Text className="text-font text-lg font-montserrat mt-2">
              {challenge ? challenge.text2 : "Challenge details not available."}
            </Text>
            <Text className="text-font text-lg font-montserrat mt-2">
              {challenge ? challenge.text3 : "Challenge details not available."}
            </Text>

            {/* You can add more dynamic content here if necessary */}
            <Text className="text-font text-m font-montserrat mt-2">
              The more engagement you receive, the better offers and more you will avail! Let’s go! 🚀
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Challenges;
