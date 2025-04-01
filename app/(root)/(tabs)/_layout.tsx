import { View, Text, Image, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { Tabs, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

const TabsLayout = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const router = useRouter();

  const openCreateModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const handleOptionPress = (option: string) => {
    closeModal();
    console.log(`Selected option: ${option}`);
  };

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#01021E",
            position: "absolute",
            borderTopColor: "transparent",
            borderTopWidth: 0,
            borderBottomWidth: 0,
            minHeight: 50,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: 8,
                }}
              >
                <View>
                  <Image
                    source={require("../../../assets/icons/home.png")}
                    style={{
                      width: 27,
                      height: 27,
                      tintColor: focused ? "#FFD700" : "#FAFAFA",
                      resizeMode: "contain",
                    }}
                  />
                </View>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: "Explore",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: 12,
                }}
              >
                <View>
                  <Image
                    source={require("../../../assets/icons/explore.png")}
                    style={{
                      width: 30,
                      height: 30,
                      tintColor: focused ? "#FFD700" : "#FAFAFA",
                      resizeMode: "contain",
                    }}
                  />
                </View>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarButton: (props) => (
              // <TouchableOpacity
              //   {...props}
              //   onPress={openCreateModal}
              //   style={{
              //     flex: 1,
              //     alignItems: "center",
              //     justifyContent: "center",
              //   }}
              // >
              //   <Image
              //     source={require("../../../assets/icons/create.png")}
              //     style={{
              //       width: 37,
              //       height: 37,
              //       tintColor: "#FAFAFA",
              //       resizeMode: "contain",
              //       marginTop: 5,
              //     }}
              //   />
              // </TouchableOpacity>
              <TouchableOpacity
  onPress={openCreateModal}
  style={{
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 1,  // Add paddingTop to match other buttons
  }}
>
  <Image
    source={require("../../../assets/icons/create.png")}
    style={{
      width: 44,
      height: 44,
      tintColor: "#FAFAFA",
      resizeMode: "contain",
    }}
  />
</TouchableOpacity>
            ),
          }}
          listeners={({ navigation }) => ({
            tabPress: (e) => {
              e.preventDefault();
              openCreateModal();
            },
          })}
        />
        <Tabs.Screen
          name="cashbacks"
          options={{
            title: "CashBacks",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: 7,
                }}
              >
                <View>
                  <Image
                    source={require("../../../assets/icons/cashbacks.png")}
                    style={{
                      height: 29,
                      width: 29,
                      tintColor: focused ? "#FFD700" : "#FAFAFA",
                      resizeMode: "contain",
                    }}
                  />
                </View>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: 7,
                }}
              >
                <View>
                  <Image
                    source={require("../../../assets/icons/profile.png")}
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? "#FFD700" : "#FAFAFA",
                      resizeMode: "contain",
                    }}
                  />
                </View>
              </View>
            ),
          }}
        />
      </Tabs>

      {/* Create Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text className="font-montserrat"style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>

            <Text className="font-montserrat"style={styles.modalTitle}>Choose an option:</Text>

            <View style={styles.optionsContainer}>
              <TouchableOpacity
                style={styles.optionSquare}
                onPress={() => handleOptionPress("poll")}
              >
                <View style={styles.iconContainer}>
                  <Image
                    source={require('../../../assets/icons/polls.png')}  // Add your Poll icon
                    style={styles.optionIcon}
                    resizeMode="contain"
                  />
                </View>
                <Text className="font-montserrat" style={styles.optionLabel}>Poll</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.optionSquare}
                onPress={() => handleOptionPress("photo")}
              >
                <View style={styles.iconContainer}>
                  <Image
                    source={require('../../../assets/icons/camera.png')}  // Add your Photo icon
                    style={styles.optionIcon}
                    resizeMode="contain"
                  />
                </View>
                <Text className="font-montserrat" style={styles.optionLabel}>Photo</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.optionSquare}
                onPress={() => handleOptionPress("video")}
              >
                <View style={styles.iconContainer}>
                  <Image
                    source={require('../../../assets/icons/video.png')}  // Add your Video icon
                    style={styles.optionIcon}
                    resizeMode="contain"
                  />
                </View>
                <Text className="font-montserrat" style={styles.optionLabel}>Video</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#2C2929",
    width: "100%",
    padding: 20,
    paddingBottom: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 15,
    left: 15,
    padding: 5,
    zIndex: 1,
  },
  closeButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  modalTitle: {
    color: "white",
    fontSize: 18,
    marginBottom: 20,
    marginTop: 10,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 10,
  },
  optionSquare: {
    alignItems: "center",
    width: 80,
  },
  iconContainer: {
    width: 70,
    height: 70,
    backgroundColor: "#444",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  optionIcon: {
    width: 35,
    height: 35,
    // tintColor: "white",
  },
  optionLabel: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
  },
});

export default TabsLayout;
