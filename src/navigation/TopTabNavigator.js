import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {Text} from 'react-native';
import Colors from '../constants/Colors';
// import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import TabThreeScreen from '../screens/TabThreeScreen';
import ImagePreview from '../screens/ImagePreview';

const BottomTab = createMaterialTopTabNavigator();

export default function BottomTabNavigator() {
  // const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Documents"
      tabBarOptions={{activeTintColor: 'blue'}}>
      <BottomTab.Screen
        name="Camera"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({color}) => <Text>TabOne</Text>,
        }}
      />
      <BottomTab.Screen
        name="Documents"
        component={TabTwoScreen}
        options={{
          tabBarIcon: ({color}) => <Text>TabTwo</Text>,
        }}
      />
      <BottomTab.Screen
        name="Shared"
        component={TabThreeScreen}
        options={{
          tabBarIcon: ({color}) => <Text>TabTwo</Text>,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
// function TabBarIcon(props) {
//   return <Ionicons size={30} style={{marginBottom: -3}} {...props} />;
// }

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{headerShown: false}}
      />
      <TabOneStack.Screen
        name="preview"
        component={ImagePreview}
        options={{headerShown: false}}
      />
    </TabOneStack.Navigator>
  );
}

// const TabTwoStack = createStackNavigator();

// function TabTwoNavigator() {
//   return (
//     <TabTwoStack.Navigator>
//       <TabTwoStack.Screen
//         name="TabTwoScreen"
//         component={TabTwoScreen}
//         options={{headerTitle: 'Tab Two Title'}}
//       />
//     </TabTwoStack.Navigator>
//   );
// }
