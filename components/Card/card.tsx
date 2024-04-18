import React from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import { styles } from './cardStyle';

interface CardProps {
  image: any; // Replace 'any' with the type of your image data
  description: string;
}

const Card: React.FC<CardProps> = ({ image, description }) => (
  <TouchableOpacity activeOpacity={0.9} style={styles.card}>
    <Image source={image} style={styles.image} />
    <View style={styles.descriptionContainer}>
      <Text style={styles.description}>{description}</Text>
    </View>
  </TouchableOpacity>
);

export default Card;
