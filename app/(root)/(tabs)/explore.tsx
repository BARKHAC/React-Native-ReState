import { View, Text, Image, TouchableOpacity, ScrollView, ImageSourcePropType } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Search from "../../../components/Search";
import { ExploreCards, CashBackedCards } from "@/components/Cards";
import { useNavigation } from "@react-navigation/native";
import { useRouter } from 'expo-router';

const Header = () => (
  <SafeAreaView className="bg-menu">
    <View className="flex-row justify-between items-center px-4 py-4">
      <Image source={require("../../../assets/icons/cashbackedlogo.png")} className="w-8 h-9" />
      <Search />
      <View className="flex-row gap-2">
        <Text className="text-font text-2xl font-montserratBold">10</Text>
        <Image source={require("../../../assets/icons/specialLike.png")} className="w-8 h-8" />
      </View>
    </View>
  </SafeAreaView>
);

// **Lists of Cards with Images**
const exploreImages = [
  require("../../../assets/images/quickExplore1.png"),
  require("../../../assets/images/quickExplore2.png"),
  require("../../../assets/images/quickExplore3.png"),
  require("../../../assets/images/popular1.png"),
  require("../../../assets/images/popular2.png"),
  require("../../../assets/images/popular3.png"),
  require("../../../assets/images/maylike1.png"),
  require("../../../assets/images/maylike2.png"),
  require("../../../assets/images/maylike3.png"),
];

const cashbackImages = [
  { uri: require("../../../assets/images/cashBChallenge1.png"), title: "Nike" },
  { uri: require("../../../assets/images/cashBChallenge2.png"), title: "Ikea" },
  { uri: require("../../../assets/images/cashBChallenge3.png"), title: "Starbucks" },
];

// **Reusable Section Component**
const Section = ({ title, children,titleColor }: { title: string; children: React.ReactNode; titleColor?:string }) => (
  <View className="px-5 mt-5">
    
    <View className="flex flex-row items-center justify-between">
      <Text className="font-montserrat ml-3 text-xl text-white" style={{ color: titleColor ?? "white",textDecorationLine: "underline", }}>{title}</Text>
      <TouchableOpacity>
        <Image source={require("../../../assets/icons/explorenext.png")} className="mr-1" />
      </TouchableOpacity>
    </View>
    <View className="flex-row mt-3">{children}</View>
  </View>
);

const Explore = () => {
  const router = useRouter();

    const navigateToChallenges = (title: string, image: string) => {
        router.push({
            pathname: '/challenges',
            params: { title, image },
        });
    };

  return (
    <>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
        <SafeAreaView className="bg-background h-full">
          {/* Quick Explore Section */}
          <Section title="Quick Explore">
            {exploreImages.slice(0, 3).map((img, index) => (
              <ExploreCards key={index} index={index} imageSource={img} />
            ))}
          </Section>

          {/* CashBacked Challenges Section */}
          <Section titleColor="#FF9D00" title="CashBacked Challenges">
            {cashbackImages.map((item, index) => (
              <CashBackedCards
                key={index} 
                index={index} 
                imageSource={item.uri} 
                title={item.title} 
                onPress={() => navigateToChallenges(item.title, item.uri)}
              />
            ))}
          </Section>

          {/* Popular Around You Section */}
          <Section titleColor="#A455DC" title="Popular Around You">
            {exploreImages.slice(3, 6).map((img, index) => (
              <ExploreCards key={index} index={index} imageSource={img} />
            ))}
          </Section>

          {/* You May Like Section */}
          <Section title="You May Like">
            {exploreImages.slice(6, 9).map((img, index) => (
              <ExploreCards key={index} index={index} imageSource={img} />
            ))}
          </Section>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};
export default Explore;
