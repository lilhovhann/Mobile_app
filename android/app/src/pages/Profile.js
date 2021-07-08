import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import Svg from 'react-native-svg';
import {Path} from 'react-native-svg';
import styles from '../styles/ComponentStyles';

const Profile = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.profileContainer}>
        <View style={styles.profileTitleView}>
          <View style={styles.iconView}>
            <Svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                fill="#2B64CB"
              />
            </Svg>
          </View>
          <View style={styles.pageTitleTextView}>
            <Text style={styles.pageTitleText}>profile</Text>
          </View>
        </View>

        <View style={styles.profilePicView}>
          <View style={{flex: 1}}>
            <Image
              style={styles.profpicStyle}
              source={require('../assets/Bitmap.png')}
            />
          </View>
          <View style={styles.imageDownloadIconFrame}>
            <Svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z"
                fill="#2B64CB"
              />
            </Svg>
          </View>
          <View style={styles.imageDownloadIcon}>
            <Svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M11.7895 3.68421V5.88737C11.7895 5.88737 10.3232 5.89474 10.3158 5.88737V3.68421H8.10526C8.10526 3.68421 8.11263 2.21789 8.10526 2.21053H10.3158V0H11.7895V2.21053H14V3.68421H11.7895ZM9.57895 6.63158V4.42105H7.36842V2.21053H1.47368C0.663158 2.21053 0 2.87368 0 3.68421V12.5263C0 13.3368 0.663158 14 1.47368 14H10.3158C11.1263 14 11.7895 13.3368 11.7895 12.5263V6.63158H9.57895ZM1.47368 12.5263L3.68421 9.57895L5.15789 11.7895L7.36842 8.8421L10.3158 12.5263H1.47368Z"
                fill="white"
              />
            </Svg>
          </View>
          <View style={styles.cameraIconFrame}>
            <Svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z"
                fill="#2B64CB"
              />
            </Svg>
          </View>
          <View style={styles.cameraIcon}>
            <Svg
              width="12"
              height="11"
              viewBox="0 0 12 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.2 0L3.102 1.2H1.2C0.54 1.2 0 1.74 0 2.4V9.6C0 10.26 0.54 10.8 1.2 10.8H10.8C11.46 10.8 12 10.26 12 9.6V2.4C12 1.74 11.46 1.2 10.8 1.2H8.898L7.8 0H4.2ZM6 9C4.344 9 3 7.656 3 6C3 4.344 4.344 3 6 3C7.656 3 9 4.344 9 6C9 7.656 7.656 9 6 9ZM7.92 6C7.92 7.06039 7.06039 7.92 6 7.92C4.93961 7.92 4.08 7.06039 4.08 6C4.08 4.93961 4.93961 4.08 6 4.08C7.06039 4.08 7.92 4.93961 7.92 6Z"
                fill="white"
              />
            </Svg>
          </View>
        </View>
        <View style={styles.userNameView}>
          <Text style={styles.userNameText}>Gene Hilliard</Text>
        </View>
        <View style={styles.mailView}>
          <Svg
            style={styles.mailLogo}
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18 0H2C0.9 0 0.01 0.9 0.01 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z"
              fill="#334455"
            />
          </Svg>
        </View>
        <View style={styles.mailTextView}>
          <Text style={styles.mailText}>sweet_joe@email.com</Text>
        </View>
        <View style={styles.companyMailTextView}>
          <Text style={styles.companyMailText}>Company Email</Text>
        </View>
        <View style={styles.line1}></View>
      </View>
    </ScrollView>
  );
};

export default Profile;
