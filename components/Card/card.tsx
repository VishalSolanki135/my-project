import React from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { styles } from './cardStyle';


interface CarouselProps {
  items: { image: any; description: string }[];
}

const Card: React.FC<CarouselProps> = ({ items }) => {
  const renderItem = ({ item }: { item: { image: any; description: string } }) => {
    return (
      <TouchableOpacity activeOpacity={0.9} style={styles.card}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <Carousel
      data={items}
      renderItem={renderItem}
      sliderWidth={300}
      itemWidth={300}
      layout="default"
      autoplay={true}
      autoplayInterval={2000}
      loop={true}
    />
  );
}

export default Card;
