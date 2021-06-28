import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Welcome = ({route}) => {
  return (
    <View>
      <Text>Welcome {route.params.text}</Text>
    </View>
  );
};

export default Welcome;
