import React from 'react'
import { View, Text, FlatList, SafeAreaView, ImageBackground, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { animalData } from '../data/animalData.js'
import Header from './header.js';

export default function Category({ route })  {
    // const [isLoading, setIsLoading] = React.useState(true);
    const navigation = useNavigation();
    const { category } = route.params;
    const animals = animalData.filter((item) => item.class === category);
    // if (isLoading) {
    //     return (
    //         <View style={{ ...style, backgroundColor: "#fff", borderRadius: 20, overflow: "hidden", alignItems: "center", justifyContent: "center" }}>
    //             <Text>Loading...</Text>
    //         </View>
    //     )
    // }
    const AnimalItem = ({ item }) => {
        return (
            <Pressable
            onPress={() => {navigation.navigate('Details', { animal: item })}}
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
        <SafeAreaView style={{flex:1}}>
            <Header title={category} backBtn={true} searchBtn={true}/>
            <FlatList
                data={animals}
                renderItem={({ item }) => <AnimalItem item={item} />}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    )
}