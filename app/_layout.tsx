import { SplashScreen, Stack } from "expo-router";
import "./global.css"
import {useFonts} from "expo-font";
import { useEffect,useState } from "react";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
// import Icon from "react-native-vector-icons/Ionicons";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
// export default function RootLayout() {
//   const [fontsLoaded] = useFonts({
//     "Montserrat": require('./assets/fonts/Montserrat.ttf'),
//   });
  

//   useEffect(() => {
//     if(fontsLoaded){
//       SplashScreen.hideAsync();
//     }
//   }, [fontsLoaded]);

//   if(!fontsLoaded) return null;
//   return <Stack />;
// }
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
}