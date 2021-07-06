import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../pages/Welcome';

const Stack = createStackNavigator();

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} />
    </Stack.Navigator>
  );
};

export default ContactStackNavigator;
