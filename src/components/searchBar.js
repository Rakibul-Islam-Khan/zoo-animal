import React from "react";
import { View, Text, TextInput, FlatList, Pressable, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "./header.js";
import { animalData } from "../data/animalData.js";

export default function SearchBar({ route }) {
    const category = route.params;
    const [searchText, setSearchText] = React.useState("");
    const navigation = useNavigation();
    const categoryAnimal = animalData.filter((item) => item.class === category);
    const animal = categoryAnimal.filter((planet) => {
        return planet.name.toLowerCase().includes(searchText.toLowerCase());
    });
    const AnimalItem = ({ item }) => {
        return (
            <Pressable
                onPress={() => { navigation.navigate('Details', { animal: item }) }}
            >
                <ImageBackground source={{ uri: item.image }} style={{ height: 130, marginHorizontal: 15, marginVertical: 10, alignItems: "center", justifyContent: "center" }} imageStyle={{ borderRadius: 10 }}>
                    <View>
                        <Text style={{ fontSize: 36, fontWeight: "700", color: '#fff' }}>{item.name}</Text>
                    </View>
                </ImageBackground >
            </Pressable>
        )
    }
    return (
        <>
            <View style={{ flexDirection: "row" }}>
                <Header backBtn={true} searchBtn={false} />
                <TextInput
                    style={{ height: 40, width: 280, marginVertical: 10 }}
                    placeholder="Search Animal"
                    onChangeText={(text) => setSearchText(text)}
                />
            </View>
            {
                animal.length > 0 ? (
                    <FlatList
                        data={animal}
                        renderItem={({ item }) => <AnimalItem item={item} />}
                        keyExtractor={(item) => item.id}
                    />
                ) :
                    (
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ fontSize: 24, fontWeight: "700" }}>No Animal Found</Text>
                        </View>
                    )
            }
        </>
    );
}
