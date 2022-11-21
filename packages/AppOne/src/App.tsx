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
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export interface IPropsAppOne {
  numberProps?: number;
  stringProps?: string;
}

const HomeScreen = (props: any) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>

      <TouchableOpacity onPress={() => props.navigation.navigate('Detail')}>
        <Text>Go to DetailScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

const DetailScreen = (props: any) => {
  return (
    <View style={styles.container}>
      <Text>DetailScreen</Text>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Text>Go back</Text>
      </TouchableOpacity>
    </View>
  );
};

const Stack = createNativeStackNavigator();

const App: React.FC<IPropsAppOne> = props => {
  const stringProps = props?.stringProps;
  const numberProps = props?.numberProps;
  console.log('🚀 ~ file: App.tsx ~ line 48 ~ stringProps', stringProps);
  console.log('🚀 ~ file: App.tsx ~ line 48 ~ numberProps', numberProps);
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'yellow',
  },
});

export default App;
