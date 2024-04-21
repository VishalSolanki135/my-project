import React from 'react';
import { View, StyleSheet, ScrollView, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import Header from './components/Header/header';
import Footer from './components/footer';
import FogOverlay from './components/blackFop';
import Card from './components/Card/card';
import { styles } from './AppStyle';

// Cards Dara
const carouselData = [
  { image: require('./assets/dineIn.jpg'), description: 'Dine In' },
  { image: require('./assets/movie.jpg'), description: 'Dine In' },
  { image: require('./assets/shopping.jpg'), description: 'Dine In' },
];

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/girls.jpg')}
        style={styles.background}
      >
        {/* Header */}
        <Header />

        {/* Middle scrolable content */}
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          {/* Centered text */}
          <View style={styles.centeredTextContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.textCenter1}>Bosinni</Text>
            </View>
            <Text style={styles.textCenter}>
              20% STUDENT OFFER {'\n'} AT BOSSINI
            </Text>
            <Text style={styles.textCenter1}>06 Jan - 01 Jun</Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>View All Offers</Text>
            <View style={styles.arrowContainer}>
              <Ionicons name="arrow-forward" color="black"></Ionicons>
            </View>
          </TouchableOpacity>
          {/* Carousel */}
          <Card items={carouselData} />
          <Card items={carouselData} />
          <Card items={carouselData} />
        </ScrollView>
        <FogOverlay />
        <Footer />
      </ImageBackground>
    </View>
  );
};


export default App;
