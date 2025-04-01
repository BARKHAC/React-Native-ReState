import { SplashScreen, Stack } from "expo-router";
import "./global.css"
import {useFonts} from "expo-font";
import { useEffect,useState } from "react";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function RootLayout() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf"),
        "Montserrat-Bold": require("../assets/fonts/Montserrat-Bold.ttf"),
        "Montserrat-ExtraBold": require("../assets/fonts/Montserrat-ExtraBold.ttf"),
        "Montserrat-SemiBold": require("../assets/fonts/Montserrat-SemiBold.ttf"),
        "Montserrat-Medium": require("../assets/fonts/Montserrat-Medium.ttf"),
      });
      setFontsLoaded(true);
      SplashScreen.hideAsync();
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) return null;

  return <Stack screenOptions = {{ headerShown: false}}/>;
  // return (
  //   <Stack>
  //     <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
  //     <Stack.Screen name="insights" options={{ headerShown: false }} />
  //     <Stack.Screen name="signin" options={{ headerShown: false }} />
  //   </Stack>
  // );
}