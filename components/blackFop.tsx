import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const FogOverlay: React.FC = () => {
  return (
    <View style={styles.overlay}>
      <LinearGradient
        colors={['rgba(26, 26, 28, 0.3)', 'rgba(38, 36, 38, 0.1)', 'rgba(50, 47, 47, 0.7)', 'rgba(61, 59, 57, 0.7)', 'rgba(71, 71, 68, 0.7)']}
        style={styles.gradient}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 120,
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Semi-transparent black color
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '100%',
    backgroundColor: 'transparent',
    zIndex: 1,
    overflow: 'hidden',
  },
});

export default FogOverlay;
