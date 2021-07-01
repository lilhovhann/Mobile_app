import React, {useState} from 'react';
import {Image} from 'react-native';
import {View, TextInput, Text, Button} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from '../styles/ComponentStyles';
import emptyCheck from './Validation';

import Error from './Error';

const Login = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  console.log('Login page has started');
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/axele.png')} />
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="user name"
          onChangeText={username => setUserName(username)}
        />
      </View>
      {!userName && <Error />}
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="password"
          onChangeText={password => setPassword(password)}
        />
      </View>
      {!password && <Error />}
      <View style={styles.checkboxContainer}>
        <CheckBox />
        <Text style={styles.label}>Remember me</Text>
      </View>

      <Button
        disabled={!userName || !password}
        title={'Log in'}
        color="#275AB6"
        style={styles.loginBtn}
        onPress={() => emptyCheck(userName, password, navigation)}></Button>
    </View>
  );
};

export default Login;
