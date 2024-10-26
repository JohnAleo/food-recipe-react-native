/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import { AppNavigator } from '@/navigators';
import { colors } from '@/theme';






function App(): React.JSX.Element {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StatusBar 
        barStyle={'dark-content'}
        backgroundColor={colors.palette.white}
        />
      <NavigationContainer>
        <AppNavigator/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


export default App;
