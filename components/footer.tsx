import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Footer: React.FC = () => {
  return (
    <View style={styles.footer}>
      <Ionicons name="home-outline" size={24} color="white" />
      <Ionicons name="search-outline" size={24} color="white" />
      <Ionicons name="car-outline" size={24} color="white" />
      <Ionicons name="information-circle-outline" size={24} color="white" />
      <Ionicons name="chatbubble-ellipses-outline" size={24} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
  },
});

export default Footer;
