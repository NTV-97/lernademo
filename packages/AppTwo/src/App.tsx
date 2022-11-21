/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export interface IPropsAppTwo {
  isDarkMode: boolean;
}

const App: React.FC<IPropsAppTwo> = ({isDarkMode}) => {
  const darkMode = isDarkMode ? 'dark' : 'light';

  return (
    <View style={styles.container}>
      <Text>App 2</Text>
      <Text>{darkMode}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
  },
});

export default App;
