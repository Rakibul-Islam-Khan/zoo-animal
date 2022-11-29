import { View, Text, SafeAreaView, Pressable, ImageBackground, Button } from 'react-native'
import React from 'react'
import { Ionicons ,Feather, AntDesign} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';
export default function Details({ route }) {
  const [sound, setSound] = React.useState(false);
  const navigation = useNavigation();
  const { animal } = route.params;
  const { name, image, description, music } = animal;
  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(require('../../assets/mp3/Cockatiel.mp3'));
    setSound(sound);
    await sound.playAsync(); 
  }
  const stopSound = async () => {
    await sound.pauseAsync();
    setSound(false);
  }
  return (
    <SafeAreaView>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center",}}>
      <ImageBackground source={{ uri: image }} style={{ height: 250, width: '100%', alignItems: "center", justifyContent: "center" }}>
        {
          sound ? (
            <Pressable onPress={() => stopSound()}>
              <AntDesign name="pause" size={50} color="white" />
            </Pressable>
          ) : (
            <Pressable onPress={() => playSound()}>
              <Feather name="play" size={50} color="white" />
            </Pressable>
          )
        }
        {/* <Button title="Play Sound" onPress={() => playSound()} />
        <Button title="stop Sound" onPress={() => stopSound()} /> */}

      </ImageBackground>
        </View>
      <Pressable
        onPress={() => { navigation.goBack() }}
        style={{ zIndex: 10, position: 'absolute', top: 203, left: 30 }}>
        <Ionicons name="arrow-back-circle" size={50} color="black" />
      </Pressable>
      <View style={{ backgroundColor: '#fff', borderTopLeftRadius: 20, borderTopRightRadius: 20, marginTop: -20, height: '100%', paddingHorizontal: 20, paddingTop: 50, zIndex: 5 }}>
        <Text style={{ fontSize: 28, fontWeight: '700' }}>{name}</Text>
        <Text style={{ lineHeight: 30, textAlign: "justify", fontSize: 20, marginTop: 20 }}>{description}</Text>
      </View>
    </SafeAreaView>
  )
}