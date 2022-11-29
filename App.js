import { useState } from 'react';
import { ImageBackground, SafeAreaView, StatusBar, Text, View } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screen/home.js';
import Details from './src/screen/details.js';
import Category from './src/components/category.js';
import SearchBar from './src/components/searchBar.js';
import AppIntroSlider from 'react-native-app-intro-slider';

const Stack = createNativeStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff'
  },
}
const slides = [
  {
    key: 1,
    title: 'AnimalWiki',
    text: 'Learn More about the animal Kingdom?',
    image: require('./assets/images/intro.png'),
  }
];
const renderItem = ({ item }) => {
  return (
    <View style={{}}>
      <ImageBackground source={item.image} style={{ height: '100%', }}>
        <Text style={{ fontSize: 36, fontWeight: '700', color: '#fff', textAlign: 'center', top:60 }}>{item.title}</Text>
        <Text style={{ fontSize: 25, fontWeight: '800', color: '#fff', textAlign: 'center', top: 500, textShadowColor: 'rgba(0, 0, 0, 0.6)', textShadowOffset: { width: 8, height: 0 } , textShadowRadius: 4}}>{item.text}</Text>
      </ImageBackground>
    </View>
  );
}
const renderDoneButton = () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#444684', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 25 }}>
      <Text style={{ fontSize: 18, fontWeight: '700', color: '#fff' }}>GET STARTED</Text>
    </View>
  );
}
export default function App() {
  const [intro, setIntro] = useState(false);
  return (
    <>
      {
        intro ? (
          <>
            <NavigationContainer theme={MyTheme}>
              <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Details" component={Details} />
                <Stack.Screen name="Category" component={Category} />
                <Stack.Screen name="Search" component={SearchBar} />
              </Stack.Navigator>
            </NavigationContainer>
            <StatusBar barStyle="dark-content" animated={true} backgroundColor='#fff' />
          </>
        ) : (
          <SafeAreaView style={{ flex: 1 }}>
            <AppIntroSlider
              data={slides}
              onDone={() => setIntro(true)}
              renderItem={renderItem}
              bottomButton={true}
              renderDoneButton={renderDoneButton}
            />
          </SafeAreaView>
        )
      }
    </>
  );
}

