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
  View,
  Text,
  StatusBar,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
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
function HomeScreen() {
  return (
    <View 
    style={{
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
      }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();
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
        contentContainerStyle={{ flex:1 }}
        style={{height: '100%', width: '100%', backgroundColor: 'white'}}>
        {/* <StatusBar /> */}
        <Navigation colorScheme={colorScheme} />
      </ScrollView>
    </SafeAreaView>
  );
};
