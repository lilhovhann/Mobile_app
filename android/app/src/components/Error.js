import React from 'react';

import {Text} from 'react-native';
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
