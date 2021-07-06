import React from 'react';
import Login from '../components/Login';
import ContactStackNavigator from '../navigation/Nav';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Welcome from './Welcome';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Welcome" component={Welcome} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
