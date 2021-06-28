import React from 'react';
import {View, StyleSheet, Button, TextInput, Alert, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from './Welcome';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Log in</Text>
      <TextInput style={styles.input} placeholder="user name" />
      <TextInput style={styles.input} placeholder="password" />
      <View style={styles.checkboxContainer}>
        <CheckBox />
        <Text style={styles.label}>Remember me</Text>
      </View>
      <Button
        color="#f194ff"
        title="Log in"
        onPress={() => navigation.navigate('Welcome')}
      />
    </View>
  );
};

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Welcome" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  button: {
    color: '#f194ff',
  },
  label: {
    margin: 8,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
});

export default App;
