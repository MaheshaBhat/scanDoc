/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Navigation from './navigation';
// import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  scrollView: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white'
  },
  svContentContainer: {
    flex: 1
  }
});

export default () => {
  // const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  // if (!isLoadingComplete) {
  //   return null;
  // } else {
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.svContentContainer}
        style={styles.scrollView}
      >
        {/* <StatusBar /> */}
        <Navigation colorScheme={colorScheme} />
      </ScrollView>
    </SafeAreaView>
  );
};
