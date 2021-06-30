import React, {useState} from 'react';
import {View, Button, TextInput, Alert, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from '../styles/ComponentStyles';

const Login = ({navigation}) => {
  const [userName, setUserName] = useState('');
  return (
    <View style={styles.container}>
      <Text>Log in</Text>
      <TextInput
        style={styles.input}
        placeholder="username"
        onChangeText={username => setUserName(username)}
      />
      <TextInput style={styles.input} placeholder="password" />
      <View style={styles.checkboxContainer}>
        <CheckBox />
        <Text style={styles.label}>Remember me</Text>
      </View>
      <Button
        color="#f194ff"
        title="Log in"
        onPress={() => emptyCheck(userName, navigation)}
      />
    </View>
  );
};

export default Login;
