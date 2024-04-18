// styles.ts

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    card: {
        width: '100%', // Adjust as needed
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 5
      },
      image: {
        width: '100%',
        height: 150, // Adjust as needed
      },
      descriptionContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderBottomRightRadius: 10,
      },
      description: {
        color: 'white',
        fontSize: 14,
      },
});
