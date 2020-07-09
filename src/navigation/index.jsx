/* eslint-disable react/jsx-props-no-spreading */
import { string } from 'prop-types';
import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  DrawerActions,
  useNavigation
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import NotFoundScreen from '../screens/NotFoundScreen';
import TopTabNavigator from './TopTabNavigator';
// import LinkingConfiguration from './LinkingConfiguration';

const headerLeftStyles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  button: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
const HeaderLeft = () => {
  const navigation = useNavigation();
  return (
    <View style={headerLeftStyles.container}>
      <TouchableOpacity
        style={headerLeftStyles.button}
        onPress={() => {
          navigation.dispatch(DrawerActions.toggleDrawer());
        }}
      >
        <Icon name="rocket" color="#000" size={30} />
      </TouchableOpacity>
    </View>
  );
};

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem label="Help" onPress={() => {}} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="leftDrawer"
      drawerPosition="left"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="root" component={TabNavigator} />
    </Drawer.Navigator>
  );
};

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={TopTabNavigator} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
    </Stack.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitle: 'scandoc',
        headerLeft: () => <HeaderLeft />
      }}
    >
      <Stack.Screen name="Root" component={MyDrawer} />
    </Stack.Navigator>
  );
};

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
const Navigation = ({ colorScheme }) => {
  return (
    <NavigationContainer
      // linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
};

Navigation.propTypes = {
  colorScheme: string.isRequired
};

export default Navigation;
