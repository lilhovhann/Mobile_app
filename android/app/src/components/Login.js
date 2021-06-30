import React, {useState} from 'react';
import {Image} from 'react-native';

import {
  View,
  Button,
  TextInput,
  Alert,
  Text,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from '../styles/ComponentStyles';
import emptyCheck from './Validation';

const Login = ({navigation}) => {
  const [userName, setUserName] = useState('');
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./axele.png')} />
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="user name"
          onChangeText={username => setUserName(username)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput style={styles.inputText} placeholder="password" />
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox />
        <Text style={styles.label}>Remember me</Text>
      </View>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => emptyCheck(userName, navigation)}>
        <Text style={styles.loginText}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
