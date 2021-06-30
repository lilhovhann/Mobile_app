import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  button: {
    color: '#f194ff',
  },
  label: {
    margin: 8,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
});

export default styles;
