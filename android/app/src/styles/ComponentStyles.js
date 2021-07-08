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

  profileContainer: {
    flex: 1,
    backgroundColor: '#F2F4F5',
    flexDirection: 'column',
    alignItems: 'center',
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

  pageTitleTextView: {
    flex: 1,
    left: 158,
    height: 14,
    top: 12,
  },
  pageTitleText: {
    position: 'absolute',
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 14.06,
    textAlign: 'center',
    color: '#112233',
    textTransform: 'uppercase',
    letterSpacing: 4,
  },

  iconView: {
    left: 16,
    top: 13,
    position: 'absolute',
  },
  profpic: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    height: undefined,
    aspectRatio: 2,
  },

  profpicStyle: {
    width: 140,
    height: 140,
    borderRadius: 140 / 2,
  },
  iconchik: {
    margin: 5,
    position: 'absolute',
    top: 0,
    left: 0,
    width: 25,
    height: 25,
    color: 'tomato',
  },

  profileTitleView: {
    flex: 1,
    height: 40,
    flexDirection: 'row',
    position: 'relative',
    backgroundColor: '#E5E5E5',
  },
  profilePicView: {
    flex: 1,
    width: 210.49,
    height: 140,
    marginTop: 30,
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative',
  },
  imageDownloadIconFrame: {
    flex: 1,
    top: 72,
    left: 162,
    textAlign: 'center',
    position: 'absolute',
  },
  imageDownloadIcon: {
    flex: 1,
    top: 80,
    left: 170.2,
    textAlign: 'center',
    position: 'absolute',
  },
  cameraIconFrame: {
    flex: 1,
    top: 107,
    left: 136.2,
    textAlign: 'center',
    position: 'absolute',
  },
  cameraIcon: {
    flex: 1,
    top: 116,
    left: 145.2,
    textAlign: 'center',
    position: 'absolute',
  },

  userNameView: {
    flex: 1,
    width: 210.49,
    height: 140,
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative',
  },

  userNameText: {
    color: '#334455',
    position: 'absolute',
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 21.09,
    textAlign: 'center',
  },
  mailView: {
    flex: 1,
    top: 299,
    left: 18,
    textAlign: 'center',
    position: 'absolute',
  },
  mailLogo: {
    flex: 1,
    left: 18,
    position: 'absolute',
  },

  mailTextView: {
    flex: 1,
    width: 142,
    height: 16,
    top: 287,
    left: 110,
    flexDirection: 'column',
    position: 'absolute',
  },
  mailText: {
    color: '#334455',
    position: 'absolute',
    fontFamily: 'Roboto',
    fontWeight: '500',

    fontSize: 14,
    lineHeight: 16.41,
  },
  companyMailTextView: {
    flex: 1,
    width: 98,
    height: 16,
    top: 309,
    left: 110,
    alignItems: 'center',
    flexDirection: 'column',
    position: 'absolute',
  },
  companyMailText: {
    color: '#334455',
    position: 'absolute',
    fontFamily: 'Roboto',
    fontWeight: '500',

    fontSize: 14,
    lineHeight: 16.41,
    textAlign: 'center',
  },
});

export default styles;
