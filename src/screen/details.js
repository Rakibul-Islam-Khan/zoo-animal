import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  ImageBackground,
} from "react-native";
import React from "react";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Audio } from "expo-av";
export default function Details({ route }) {
  const [sound, setSound] = React.useState(false);
  const navigation = useNavigation();
  const { animal } = route.params;
  const { name, image, description, music } = animal;
  const storeData = async (value) => {
    try {
      const store = await AsyncStorage.setItem(
        "@storage_Key",
        JSON.stringify(value)
      );
      console.log(store);
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@storage_Key");
      console.log(value);
      if (value !== null) {
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  };
  getData();
  storeData(name);
  console.log(image);
  const playSound = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(music);
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.log(error);
    }
  };
  const stopSound = async () => {
    await sound.pauseAsync();
    setSound(false);
  };
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ImageBackground
          source={{ uri: image }}
          style={{
            height: 250,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {sound ? (
            <Pressable onPress={() => stopSound()}>
              <AntDesign name="pause" size={50} color="white" />
            </Pressable>
          ) : (
            <Pressable onPress={() => playSound()}>
              <Feather name="play" size={50} color="white" />
            </Pressable>
          )}
        </ImageBackground>
      </View>
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          zIndex: 100,
          transform: [{ translateY: -44 }, { translateX: 35 }],
        }}
      >
        <Ionicons name="arrow-back-circle" size={50} color="black" />
      </Pressable>
      <View
        style={{
          backgroundColor: "#fff",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: "100%",
          paddingHorizontal: 20,
          transform: [{ translateY: -70 }],
          paddingTop: 40,
        }}
      >
        <Text style={{ fontSize: 28, fontWeight: "700" }}>{name}</Text>
        <Text
          style={{
            lineHeight: 30,
            textAlign: "justify",
            fontSize: 20,
            marginTop: 20,
          }}
        >
          {description}
        </Text>
      </View>
    </SafeAreaView>
  );
}
