/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  //StyleSheet,
  ScrollView,
  //View,
  //Text,
  StatusBar,
} from 'react-native';
// import Navigation from './navigation';
// import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import {NavigationContainer} from '@react-navigation/native';
import NavigationComp from './components/Navigation';
// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

export default () => {
  // const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  // if (!isLoadingComplete) {
  //   return null;
  // } else {
  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{height: '100%', width: '100%', backgroundColor: 'wheat'}}>
          {/* <StatusBar /> */}
          <NavigationContainer>
            <NavigationComp />
          </NavigationContainer>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
