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

const Error = props => {
  if (emptyCheck) {
    return <Text style={styles.errorText}>{props.text}</Text>;
  } else {
    <Text></Text>;
  }
};

export default Error;
