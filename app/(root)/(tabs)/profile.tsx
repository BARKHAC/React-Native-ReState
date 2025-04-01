import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet,ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

interface GridItem {
  id: string;
  source: any;  // 'any' is acceptable here since it's referencing images/videos, but you can specify the type if needed
}

// ProfileCard Component
const ProfileCard = () => {
  return (
    <View className='py-5 w-full bg-card rounded-lg shadow-md mt-7'>
      <View className='flex justify-center bg-card'>
        <View className='flex flex-col items-center'>
          <Image
            source={require('../../../assets/icons/userprofile.png')}
            className="size-28 rounded-full mt-2"
            style={{ resizeMode: 'contain' }}
          />
          {/* Profile details */}
          <Text className='text-font text-xl font-montserratBold mt-4'>
            Barkha Chainani
          </Text>
          <View className='flex flex-row items-center gap-2 mt-1'>
            <Image
              source={require('../../../assets/icons/location.png')}
              style={{ resizeMode: 'contain' }}
            />
            <Text className='text-font text-sm font-montserrat'>Orlando, FL</Text>
          </View>
          <View className='flex flex-row items-center mt-2'>
            <Image
              source={require('../../../assets/icons/badge.png')}
              style={{ resizeMode: 'contain' }}
            />
            <Text className='text-font text font-montserrat' style={{ color: '#FFD700' }}>
              Gold Tier Microinfluencer
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

// Header Component
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

// ProfileSection Component (with tabs and grid)
const ProfileSection = () => {
  const [selectedTab, setSelectedTab] = useState("images");

  // Sample data for images, videos, and tagged content
  const images = [
    { id: "1", source: require("../../../assets/images/profile1.jpg") },
    { id: "2", source: require("../../../assets/images/profile2.jpg") },
    { id: "3", source: require("../../../assets/images/profile3.jpg") },
    { id: "4", source: require("../../../assets/images/profile4.jpg") },
    { id: "5", source: require("../../../assets/images/profile5.jpg") },
    { id: "6", source: require("../../../assets/images/profile6.jpg") },
    { id: "7", source: require("../../../assets/images/profile7.jpg") },
    { id: "8", source: require("../../../assets/images/profile8.jpg") },
    { id: "9", source: require("../../../assets/images/homeFeed7.jpg") },
    { id: "10", source: require("../../../assets/images/homeFeed6.jpg") },
  ];
  const videos = [
    { id: "1", source: require("../../../assets/images/profile4.jpg") },
    { id: "2", source: require("../../../assets/images/profile5.jpg") },
    { id: "3", source: require("../../../assets/images/profile6.jpg") },
  ];
  const tagged = [
    { id: "1", source: require("../../../assets/images/profile7.jpg") },
    { id: "2", source: require("../../../assets/images/profile8.jpg") },
  ];

  // Render Grid Item
  const renderItem = ({ item }: { item: GridItem }) => (
    <View style={styles.gridItem}>
      <Image source={item.source} style={styles.gridImage} />
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === "images" && styles.activeTab]}
          onPress={() => setSelectedTab("images")}
        >
          <Text style={[styles.tabText, selectedTab === "images" && styles.activeTabText]}className="font-montserrat">Images</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === "videos" && styles.activeTab]}
          onPress={() => setSelectedTab("videos")}
        >
          <Text style={[styles.tabText, selectedTab === "videos" && styles.activeTabText]}className="font-montserrat">Videos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === "tagged" && styles.activeTab]}
          onPress={() => setSelectedTab("tagged")}
        >
          <Text style={[styles.tabText, selectedTab === "tagged" && styles.activeTabText]}className="font-montserrat">Tagged</Text>
        </TouchableOpacity>
      </View>

      {/* Grid Section */}
      <View style={styles.gridContainer}>
        {selectedTab === "images" && (
          <FlatList
            data={images}
            keyExtractor={(item) => item.id}
            numColumns={3}
            renderItem={renderItem}
          />
        )}
        {selectedTab === "videos" && (
          <FlatList
            data={videos}
            keyExtractor={(item) => item.id}
            numColumns={3}
            renderItem={renderItem}
          />
        )}
        {selectedTab === "tagged" && (
          <FlatList
            data={tagged}
            keyExtractor={(item) => item.id}
            numColumns={3}
            renderItem={renderItem}
          />
        )}
      </View>
    </View>
  );
};

// Profile Component
// const Profile = () => {
//   return (
//     <>
//       <Header />
//       <SafeAreaView className="bg-background h-full">
//       <ScrollView>
//         <ProfileCard />
//         <ProfileSection />
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };
const Profile = () => {
  return (
    <SafeAreaView className="bg-background h-full">
      <FlatList
        ListHeaderComponent={<Header />}
        data={[1]} // Placeholder for content that would be rendered below the header
        renderItem={({}) => (
          <>
            <ProfileCard />
            <ProfileSection />
          </>
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  tabText: {
    fontSize: 18,
    color: "#FAFAFA",
  },
  activeTab: {
    borderBottomColor: "#FFD700", // Gold color for active tab
  },
  activeTabText: {
    color: "#FFD700", // Gold color for active tab text
  },
  gridContainer: {
    flex: 1,
  },
  gridItem: {
    flex: 1,
    margin: 5,
  },
  gridImage: {
    width: "100%",
    height: 120,
    borderRadius: 10,
    resizeMode: "cover",
  },
});
