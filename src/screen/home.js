import { SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/header.js'
import Card from '../components/card.js'

export default function Home() {
    return (
        <SafeAreaView style={{flex:1}}>
                <Header title={'Animal Wiki'} backBtn={false}/>
            <ScrollView>
                <Card category="Birds" name="Rainbow Lorikeet" image={require('../../assets/images/parrot.png')} style={{ backgroundColor: "lightblue" }} />
                <Card category="Reptiles" name="Chamelion" image={require('../../assets/images/lizard.png')} style={{ backgroundColor: "purple" }} />
                <Card category="Mammals" name="Lion" image={require('../../assets/images/lion.png')} style={{ backgroundColor: "teal" }} />
                <Card category="Amphibians" name="Poison Dart Frog" image={require('../../assets/images/frog.png')} style={{ backgroundColor: "royalblue" }} />
                <Card category="Fish" name="Dory" image={require('../../assets/images/fish.png')} style={{ backgroundColor: "tomato" }} />
            </ScrollView>
        </SafeAreaView>
    )
}