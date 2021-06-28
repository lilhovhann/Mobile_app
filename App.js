import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';



const App = () => (
  <SafeAreaView >
    <View>
      <Text >
       Title
      </Text>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
    
  </SafeAreaView>
);



export default App;