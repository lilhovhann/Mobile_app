import React from 'react';
import {View, Text} from 'react-native';
import MyDrawer from './MyDrawer';

const Welcome = ({route}) => {
  return (
    <View>
      <Text>Welcome {route.params.text}</Text>
    </View>
  );
};

MyDrawer;

export default Welcome;
