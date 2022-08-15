import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Header({ title, backBtn, searchBtn }) {
    const navigation = useNavigation();
    return (
        <View style={{ flexDirection: 'row', justifyContent: "space-between", paddingHorizontal: 20, paddingVertical: 10, alignItems: "center", }}>
            {backBtn && (
                <Pressable
                    onPress={() => {
                        navigation.goBack();
                    }}
                >
                    <Ionicons name="md-arrow-back-outline" size={24} color="black" />
                </Pressable>
            )}

            <Text style={{ color: '#444684', fontWeight: "700", fontSize: 28 }}>{title}</Text>
            {
                searchBtn && (
                    <Pressable onPress={() => navigation.navigate('Search', title)}>
                        <FontAwesome name="search" size={20} color="#198BA4" />
                    </Pressable>
                )
            }
        </View>
    )
}