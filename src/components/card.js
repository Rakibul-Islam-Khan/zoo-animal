import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Card({ category, name, image, style }) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Category', { category: category })}
            style={{ flex: 1, margin: 10, position: "relative" }}
        >
            <View
                style={[
                    style,
                    {
                        borderRadius: 10,
                        marginHorizontal: 15,
                        justifyContent: "space-between",
                        flexDirection: "row",
                        alignItems: "center",
                        height: 126,
                    },
                ]}
            >
                <View style={{ marginLeft: 15, width: 120 }}>
                    <Text style={{ color: "#fff" }}>{category}</Text>
                    <Text style={{ fontSize: 24, fontWeight: "700" }}>{name}</Text>
                </View>
                <Image style={{ flex: 1 }} source={image} resizeMode="contain" />
            </View>
        </TouchableOpacity>
    );
}
