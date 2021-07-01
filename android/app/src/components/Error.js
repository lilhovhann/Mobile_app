import React from 'react';

import {
  View,
  Button,
  TextInput,
  Alert,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/ComponentStyles';
import emptyCheck from './Validation';

const Error = () => {
  if (emptyCheck) {
    return <Text style={styles.errorText}>This field is required</Text>;
  } else {
    <Text></Text>;
  }
};

export default Error;
