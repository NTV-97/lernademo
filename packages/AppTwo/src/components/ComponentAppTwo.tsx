import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export interface IPropsComponentAppTwo {
  text: string;
}

const ComponentAppTwo: React.FC<IPropsComponentAppTwo> = ({text}) => {
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  );
};

export default ComponentAppTwo;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
