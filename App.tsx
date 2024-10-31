

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
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';






function App(): React.JSX.Element {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StatusBar 
        barStyle={'dark-content'}
        backgroundColor={colors.palette.white}
        />
        <BottomSheetModalProvider>
          <NavigationContainer>
            <AppNavigator/>
          </NavigationContainer>
      </BottomSheetModalProvider>
    </SafeAreaProvider>
  );
}


export default App;
