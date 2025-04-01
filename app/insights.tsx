// app/insights.tsx
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import Icon from "react-native-vector-icons/FontAwesome";

// Define types for our data
type DataPoint = {
  month: string;
  interactions: number;
};

type StatsData = {
  views: string;
  ratio: string;
  likes: string;
  comments: string;
  shares: string;
};

// Define the structure of our data objects
interface GraphDataType {
  groceries: DataPoint[];
  electronics: DataPoint[];
  restaurants: DataPoint[];
  [key: string]: DataPoint[]; // Index signature for string access
}

interface StatsDataType {
  groceries: StatsData;
  electronics: StatsData;
  restaurants: StatsData;
  [key: string]: StatsData; // Index signature for string access
}

// Simple data for the graphs
const graphData: GraphDataType = {
  groceries: [
    { month: 'Jan', interactions: 45 },
    { month: 'Feb', interactions: 80 },
    { month: 'Mar', interactions: 65 },
    { month: 'Apr', interactions: 90 },
    { month: 'May', interactions: 120 },
    { month: 'Jun', interactions: 100 },
  ],
  electronics: [
    { month: 'Jan', interactions: 30 },
    { month: 'Feb', interactions: 40 },
    { month: 'Mar', interactions: 75 },
    { month: 'Apr', interactions: 60 },
    { month: 'May', interactions: 90 },
    { month: 'Jun', interactions: 150 },
  ],
  restaurants: [
    { month: 'Jan', interactions: 60 },
    { month: 'Feb', interactions: 40 },
    { month: 'Mar', interactions: 90 },
    { month: 'Apr', interactions: 120 },
    { month: 'May', interactions: 110 },
    { month: 'Jun', interactions: 85 },
  ],
};

// Stats data for each category
const statsData: StatsDataType = {
  groceries: {
    views: '100K',
    ratio: '0.3',
    likes: '250',
    comments: '40',
    shares: '10'
  },
  electronics: {
    views: '80K',
    ratio: '0.5',
    likes: '180',
    comments: '25',
    shares: '15'
  },
  restaurants: {
    views: '150K',
    ratio: '0.2',
    likes: '320',
    comments: '60',
    shares: '30'
  }
};

// Header component
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

// Simple graph component
const SimpleGraph = ({ data }: { data: DataPoint[] }) => {
  const maxInteraction = Math.max(...data.map(item => item.interactions));
  
  return (
    <View className="mb-4 mt-2">
      <View className="flex-row justify-between mb-1">
        {data.map((item, index) => (
          <View key={index} className="items-center">
            <Text className="text-font text-xs font-montserrat">{item.month}</Text>
          </View>
        ))}
      </View>
      <View className="flex-row justify-between h-40 items-end">
        {data.map((item, index: number) => {
          const height = (item.interactions / maxInteraction) * 100;
          return (
            <View key={index} className="items-center">
              <View 
                className="bg-button-redeem rounded-t-md w-10" 
                style={{ height: `${height}%` }} 
              />
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default function Insights() {
  const router = useRouter();
  const { category } = useLocalSearchParams();
  const categoryStr = category as string || "groceries"; // Provide a default value;
  
  // Get the appropriate data based on category
  const data = graphData[categoryStr.toLowerCase()];
  const stats = statsData[categoryStr.toLowerCase()];
  
  return (
    <>
      <Header />
      <SafeAreaView className="flex-1 bg-background">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 100,
          }}
        >
          <View className="px-7 py-5">
            <TouchableOpacity 
              className="mb-4" 
              onPress={() => router.back()}
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
            
            <Text className="text-font text-xl font-montserratBold mb-6">
              {categoryStr}
            </Text>
            
            <View className="bg-card rounded-lg shadow-md p-4 mb-6">
              <Text className="text-font text-lg font-montserratBold mb-2">
                Interaction Over Time
              </Text>
              <SimpleGraph data={data} />
            </View>
            
            <View className="bg-card rounded-lg shadow-md p-4">
              <Text className="text-font text-lg font-montserratBold mb-4">
                Engagement Stats
              </Text>
              
              <View className="mb-3">
                <Text className="text-font text-base font-montserratBold">
                  Views
                </Text>
                <Text className="text-font text-sm font-montserrat">
                  {stats.views} in the last week
                </Text>
              </View>
              
              <View className="mb-3">
                <Text className="text-font text-base font-montserratBold">
                  Your Views to Purchase Ratio
                </Text>
                <Text className="text-font text-sm font-montserrat">
                  {stats.ratio}
                </Text>
              </View>
              
              <View>
                <Text className="text-font text-base font-montserratBold">
                  Engagement
                </Text>
                <Text className="text-font text-sm font-montserrat">
                  {stats.likes} likes, {stats.comments} comments, {stats.shares} shares in the last week
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}