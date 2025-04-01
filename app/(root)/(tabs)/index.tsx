import React, { useState } from "react";
import { View, Image, Dimensions, ScrollView, Text, Modal, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TapGestureHandler, State } from 'react-native-gesture-handler';

// Define the type for the image object
interface ImageItem {
  uri: string;
  height: number;
}

// Local images with types
const localImages: ImageItem[] = [
  { uri: Image.resolveAssetSource(require("../../../assets/images/homeFeed1.png")).uri, height: 350 },
  { uri: Image.resolveAssetSource(require("../../../assets/images/homeFeed2.png")).uri, height: 280 },
  { uri: Image.resolveAssetSource(require("../../../assets/images/homeFeed3.png")).uri, height: 200 },
  { uri: Image.resolveAssetSource(require("../../../assets/images/homeFeed4.png")).uri, height: 300 },
  { uri: Image.resolveAssetSource(require("../../../assets/images/homeFeed5.jpg")).uri, height: 300 },
  { uri: Image.resolveAssetSource(require("../../../assets/images/homeFeed6.jpg")).uri, height: 300 },
  { uri: Image.resolveAssetSource(require("../../../assets/images/homeFeed7.jpg")).uri, height: 300 },
];

const { width } = Dimensions.get("window");
const numColumns = 2;
const columnWidth = width / numColumns - 10; // Adjust for spacing

const MasonryGrid = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [dimmedImageIndex, setDimmedImageIndex] = useState<number | null>(null);
  const [showIcons, setShowIcons] = useState<boolean>(false);
  const [heartAnimation, setHeartAnimation] = useState<string | null>(null);
  const [likedImages, setLikedImages] = useState<Set<string>>(new Set());

  const handleImageClick = (uri: string) => {
    setSelectedImage(uri);
    setShowIcons(false);
    setDimmedImageIndex(null);
  };

  const handleLongPress = (colIndex: number, imgIndex: number) => {
    const uniqueIndex = colIndex * 100 + imgIndex;
    if (dimmedImageIndex === uniqueIndex) {
      setShowIcons(false);
      setDimmedImageIndex(null);
    } else {
      setDimmedImageIndex(uniqueIndex);
      setShowIcons(true);
    }
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleDoubleTap = (uri: string) => {
    const newLikedImages = new Set(likedImages);
    if (newLikedImages.has(uri)) {
      newLikedImages.delete(uri); // Remove like
    } else {
      newLikedImages.add(uri); // Add like
    }
    setLikedImages(newLikedImages);
    setHeartAnimation(uri); // Trigger heart animation
  };

  const onModalDoubleTapEvent = (event: any) => {
    if (event.nativeEvent.state === State.END) {
      setHeartAnimation(selectedImage);
    }
  };

  const columns: ImageItem[][] = Array.from({ length: numColumns }, () => []);
  localImages.forEach((image, index) => {
    columns[index % numColumns].push(image);
  });

  return (
    <ScrollView contentContainerStyle={{ flexDirection: "row", justifyContent: "space-between", padding: 5 }}>
      {columns.map((column, colIndex) => (
        <View key={colIndex} style={{ width: columnWidth }}>
          {column.map((image, imgIndex) => {
            const isDimmed = dimmedImageIndex === colIndex * 100 + imgIndex;
            const uniqueIndex = colIndex * 100 + imgIndex;

            return (
              <View key={imgIndex} style={{ marginBottom: 10 }}>
                <TouchableOpacity
                  onPress={() => handleImageClick(image.uri)}
                  onLongPress={() => handleLongPress(colIndex, imgIndex)}
                  activeOpacity={1}
                >
                  <View
                    style={{
                      width: "100%",
                      height: image.height,
                      borderRadius: 10,
                      opacity: isDimmed ? 0.7 : 1,
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      source={{ uri: image.uri }}
                      style={{ width: "100%", height: "100%", borderRadius: 10 }}
                    />
                    {showIcons && isDimmed && (
                      <View
                        style={{
                          position: "absolute",
                          top: 10,
                          right: 10,
                          backgroundColor: "rgba(0, 0, 0, 0.5)",
                          padding: 5,
                          borderRadius: 5,
                        }}
                      >
                        <TouchableOpacity>
                          <Icon name="heart" size={20} color="white" style={{ marginBottom: 10 }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <Icon name="comment" size={20} color="white" style={{ marginBottom: 10 }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <Icon name="share" size={20} color="white" />
                        </TouchableOpacity>
                      </View>
                    )}
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      ))}

      {/* Full Screen Post View Modal */}
      <Modal visible={!!selectedImage} transparent={true} animationType="fade">
        <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
          <View style={{ flex: 1 }}>
            {/* Header with back button */}
            <View style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 10,
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              zIndex: 10,
              backgroundColor: "rgba(0,0,0,0.5)"
            }}>
              <TouchableOpacity onPress={handleCloseModal}>
                <Icon name="arrow-left" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="ellipsis-v" size={24} color="white" />
              </TouchableOpacity>
            </View>

            {/* Main image content */}
            <View style={{ flex: 1, justifyContent: "center" }}>
              <GestureHandlerRootView style={{ flex: 1 }}>
                <TapGestureHandler
                  onHandlerStateChange={onModalDoubleTapEvent}
                  numberOfTaps={2}
                >
                  <View style={{ flex: 1, justifyContent: "center" }}>
                    <Image
                      source={{ uri: selectedImage! }}
                      style={{ width: width, height: width, alignSelf: "center" }}
                      resizeMode="contain"
                    />

                    {/* Heart animation in full screen */}
                    {heartAnimation === selectedImage && (
                      <View style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        justifyContent: "center",
                        alignItems: "center"
                      }}>
                        <Icon name="heart" size={80} color="red" />
                      </View>
                    )}
                  </View>
                </TapGestureHandler>
              </GestureHandlerRootView>
            </View>

            {/* Bottom action buttons */}
            <View style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: "rgba(0,0,0,0.5)",
              padding: 15,
            }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity onPress={() => selectedImage && handleDoubleTap(selectedImage)}>
                    <Icon
                      name="heart"
                      size={28}
                      color={likedImages.has(selectedImage!) ? "red" : "white"}
                      style={{ marginRight: 20 }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Icon name="comment" size={28} color="white" style={{ marginRight: 20 }} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Icon name="share" size={28} color="white" />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity>
                  <Icon name="bookmark" size={28} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    </ScrollView>
  );
};

const Header = () => {
  return (
    <SafeAreaView className="bg-menu">
      <View className="flex-row justify-between items-center px-4 py-4">
        {/* <Text className="text-font text-xl font-montserratBold">Your App</Text> */}
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

export default function Index() {
  return (
    <>
      <Header />
      <SafeAreaView className="bg-background flex-1">
        <View className="mt-5">
          <MasonryGrid />
        </View>
      </SafeAreaView>
    </>
  );
}
