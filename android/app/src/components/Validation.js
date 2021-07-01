import {Alert} from 'react-native';

const validateEmail = email => {
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  if (email.match(regexEmail)) {
    return true;
  } else {
    return false;
  }
};
const validate = (userName, password, navigation) => {
  if (userName == '' || password == '' || !validateEmail(userName)) {
    return Alert.alert('Email is not valid');
  } else {
    navigation.navigate('Welcome', {text: userName});
  }
};

export default validate;
