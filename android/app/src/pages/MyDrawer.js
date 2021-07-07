import React from 'react';
import Login from '../components/Login';
import {
  createDrawerNavigator,
  swipeEnabled,
  disableGestures,
  navigationOptions,
} from '@react-navigation/drawer';
import Welcome from './Welcome';
import Profile from './Profile';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Welcome" component={Welcome} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
