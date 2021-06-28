import React from 'react';
import { Text, View } from 'react-native';

const HelloWorldApp = () => {
  console.log("Starting");
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Hello, hey!</Text>
    </View>
  )
}
export default HelloWorldApp;