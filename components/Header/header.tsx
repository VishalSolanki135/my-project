import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './headerStyle';

// React.FC is a tyescript type which means Functional Component. It is provided by @types/react. 
const Header: React.FC = () => {
  const options = ['Shop', 'Entertain', 'Dine'];

  return (
    <View style={styles.header}>
      {options.map((option, index) => (
        <Text key={index} style={styles.option}>
          {option}
        </Text>
      ))}
    </View>
  );
};

export default Header;
