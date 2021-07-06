import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './android/app/src/components/Login';
import Welcome from './android/app/src/pages/Welcome';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import ContactStackNavigator from './android/app/src/navigation/Nav';
import MyDrawer from './android/app/src/pages/MyDrawer';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Welcome" component={Welcome} />
      </Stack.Navigator> */}

      <MyDrawer />
    </NavigationContainer>
  );
}
