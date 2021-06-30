import {Alert} from 'react-native';

const emptyCheck = (userName, navigation) => {
  if (userName == '') {
    Alert.alert('Please enter the text to proceed');
  } else {
    navigation.navigate('Welcome', {text: userName});
  }
};

export default emptyCheck;
