import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, Text, TouchableOpacity, View, } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

const Drawer = createDrawerNavigator();

const HeaderLeft = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <TouchableOpacity
        style={{ height:30, width:30, justifyContent:'center', alignItems:'center'}}
        onPress={() => {
          navigation.dispatch(DrawerActions.toggleDrawer());
        }}>
        <Ionicons name='md-menu' color='#000' size={20 } />
      </TouchableOpacity>
    </View>
  );
};
// function TabBarIcon(props: { name: string; color: string , size: Number, onPress: Function }) {
//   return <Ionicons style={{ marginBottom: -3 }} {...props} />;
// }
// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator 
      screenOptions={{ 
        headerShown: true, 
        headerTitle: 'scandoc', 
        headerLeft: ()=><HeaderLeft />,
      }}
        >
        <Stack.Screen name="Root" component={LeftDrawer} 
        //options={{
          //drawerIcon: () => <Ionicons name='md-menu' color='#000' size={20 } onPress={()=>null} />
        //}}
        />
      </Stack.Navigator>
      {/* <LeftDrawer /> */}
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function CustomDrawerContent(props:any) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem label="Help" onPress={() => alert('Link to help')} />
    </DrawerContentScrollView>
  );
}

function LeftDrawer() {
  return (
    <Drawer.Navigator 
    initialRouteName="RightDrawer" 
    drawerPosition="left"
    drawerContent={props => <CustomDrawerContent {...props} />
    
  }
    >
      <Drawer.Screen name="RightDrawer" component={RootNavigator} 
      // options={{ drawerIcon:() => <Ionicons name='md-menu' color='#000' size={20 } onPress={()=>null} /> }} 
      />
    </Drawer.Navigator>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
