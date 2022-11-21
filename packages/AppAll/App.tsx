/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import AppOne from '@app/one';
import AppTwo from '@app/two';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [isShowAppOne, setIsShowAppOne] = useState(true);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.container}>
        <View style={{flex: 1}}>
          {isShowAppOne ? (
            <AppOne numberProps={1} stringProps={'asd'} />
          ) : (
            <AppTwo isDarkMode={isDarkMode} />
          )}
        </View>
        <TouchableOpacity
          onPress={() => setIsShowAppOne(!isShowAppOne)}
          style={styles.touch}>
          <Text style={{color: 'white'}}>Change App Show</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  touch: {
    // flex: 1,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    paddingVertical: 16,
    borderRadius: 8,
    marginTop: 16,
  },
});

export default App;
