import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'column',
  },

  scrollView: {
    height: '20%',
    width: '80%',
    margin: 20,
    alignSelf: 'center',
    padding: 20,
    borderWidth: 5,
    borderRadius: 5,
    borderColor: 'black',
    backgroundColor: 'lightblue',
  },

  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    paddingBottom: 50,
  },

  logo: {
    marginTop: 100,
    marginBottom: 50,
  },

  inputView: {
    width: '80%',
    backgroundColor: '#ced6de',
    borderRadius: 25,
    height: 50,
    marginBottom: 0,
    justifyContent: 'center',
    padding: 20,
    marginTop: 10,
  },
  errorText: {
    marginBottom: 20,
    color: 'red',
  },

  inputText: {
    height: 50,
    color: 'black',
  },
  forgot: {
    color: 'white',
    fontSize: 11,
  },
  loginBtn: {
    width: '80%',
    color: '#275AB6',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },

  button: {
    color: '#f194ff',
  },
  label: {
    margin: 8,
    color: 'black',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    color: 'white',
  },
  loginText: {
    color: 'white',
  },
});

export default styles;
