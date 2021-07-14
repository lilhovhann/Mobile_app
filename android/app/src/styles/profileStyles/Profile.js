import {StyleSheet} from 'react-native';

const profileStyles = StyleSheet.create({
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

  profileContainer: {
    backgroundColor: '#F2F4F5',
    flexDirection: 'column',
    // flexBasis: '100%',
    alignItems: 'center',
  },
  profileTitleView: {
    flex: 1,
    height: 40,
    flexDirection: 'row',
    // position: 'relative',
    backgroundColor: '#E5E5E5',
  },
  iconView: {
    left: 16,
    top: 13,
    position: 'absolute',
  },
  profilePicView: {
    flex: 1,
    width: 210.49,
    height: 140,
    marginTop: 30,
    alignItems: 'center',
    flexDirection: 'column',
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
    height: 21,
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'column',
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
    paddingTop: 14,
  },

  mailTextView: {
    flex: 1,
    width: 142,
    height: 16,
    flexDirection: 'column',
  },
  mailText: {
    color: '#334455',
    position: 'absolute',
    fontFamily: 'Roboto',
    fontWeight: '900',
    fontSize: 14,
    lineHeight: 16.41,
  },
  companyMailText: {
    color: '#778899',
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 14,
    paddingTop: 6,
    textAlign: 'left',
  },
  line1: {
    flex: 1,
    width: 287,
    height: 1,

    left: 93,
    position: 'absolute',
    backgroundColor: '#CBD4E5',
  },
  phoneLogoView: {
    flex: 1,
    top: 350,
    zIndex: 10,
    left: 19,
    width: 18,
    height: 18,
    position: 'absolute',
  },
  phoneTextView: {
    flex: 1,
    top: 350,
    left: 73,
    flexDirection: 'column',
    position: 'absolute',
  },
  phoneText: {
    color: '#334455',
    position: 'relative',
    fontFamily: 'Roboto',
    fontWeight: '900',

    fontSize: 14,
    lineHeight: 16.41,
  },
});

export default profileStyles;
