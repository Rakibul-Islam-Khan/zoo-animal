import { View, Text, Image, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
export default function Details({ route }) {
  const { animal } = route.params;
  const { name, image, description } = animal;
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Image source={{ uri: image }} style={{ width: '100%', height: 250 }} />
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