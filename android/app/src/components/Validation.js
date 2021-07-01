const emptyCheck = (userName, password, navigation) => {
  if (userName == '' || password == '') {
    return false;
  } else {
    navigation.navigate('Welcome', {text: userName});
  }
};

export default emptyCheck;
