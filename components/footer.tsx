import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Footer: React.FC = () => {
  const icons = [
    'home-outline',
    'search-outline',
    'car-outline',
    'information-circle-outline',
    'chatbubble-ellipses-outline'
  ];

  return (
    <View style={styles.footer}>
      {/* Mapping over the icons array to render Ionicons */}
      {icons.map((name, index) => (
        <Ionicons key={index} name={name} size={24} color="white" />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    position: 'absolute', // Position the footer at the bottom of the screen
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent', // Transparent background color
  },
});

export default Footer;
