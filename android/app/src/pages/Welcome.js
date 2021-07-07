import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from '../styles/ComponentStyles';

const Welcome = ({route, navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Welcome {route.params.text}</Text>

      <Button
        title={'menu'}
        color="#275AB6"
        style={styles.loginBtn}
        onPress={() => navigation.openDrawer()}></Button>
    </View>
  );
};

export default Welcome;
