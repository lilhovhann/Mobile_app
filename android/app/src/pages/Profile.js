import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import Svg from 'react-native-svg';
import {Path} from 'react-native-svg';
import profileStyles from '../styles/profileStyles/Profile';

const Profile = () => {
  return (
    <ScrollView>
      <View style={profileStyles.profileContainer}>
        <View style={profileStyles.profileTitleView}>
          <View style={profileStyles.iconView}>
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
          <View style={profileStyles.pageTitleTextView}>
            <Text style={profileStyles.pageTitleText}>profile</Text>
          </View>
        </View>

        <View style={profileStyles.profilePicView}>
          <View style={{flex: 1}}>
            <Image
              style={profileStyles.profpicStyle}
              source={require('../assets/Bitmap.png')}
            />
          </View>
          <View style={profileStyles.imageDownloadIconFrame}>
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
          <View style={profileStyles.imageDownloadIcon}>
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
          <View style={profileStyles.cameraIconFrame}>
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
          <View style={profileStyles.cameraIcon}>
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
        <View style={profileStyles.userNameView}>
          <Text style={profileStyles.userNameText}>Gene Hilliard</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 18,
            alignItems: 'flex-start',
            marginTop: 46,
            height: 40,
            width: '100%',
          }}>
          <View style={profileStyles.mailView}>
            <Svg
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
          <View
            style={{
              flexDirection: 'column',
              position: 'absolute',
              marginLeft: 73,
              alignContent: 'flex-end',
              height: 40,
              flex: 1,
            }}>
            <View style={profileStyles.mailTextView}>
              <Text style={profileStyles.mailText}>sweet_joe@email.com</Text>
            </View>
            <View>
              <Text style={profileStyles.companyMailText}>Company Email</Text>
            </View>
          </View>
        </View>
        <View style={[(profileStyles.line1, {top: 345})]}></View>

        <View
          style={{
            flexDirection: 'row',
            marginLeft: 18,
            alignItems: 'flex-start',
            marginTop: 46,
            height: 40,
            width: '100%',
          }}>
          <View
            style={[
              profileStyles.mailView,
              {backgroundColor: 'green', width: 18},
            ]}>
            <Svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.62 7.79C5.06 10.62 7.38 12.93 10.21 14.38L12.41 12.18C12.68 11.91 13.08 11.82 13.43 11.94C14.55 12.31 15.76 12.51 17 12.51C17.55 12.51 18 12.96 18 13.51V17C18 17.55 17.55 18 17 18C7.61 18 0 10.39 0 1C0 0.45 0.45 0 1 0H4.5C5.05 0 5.5 0.45 5.5 1C5.5 2.25 5.7 3.45 6.07 4.57C6.18 4.92 6.1 5.31 5.82 5.59L3.62 7.79Z"
                fill="#334455"
              />
            </Svg>
          </View>
          <View
            style={{
              flexDirection: 'column',
              position: 'absolute',
              marginLeft: 73,
              height: 40,
              flex: 1,
            }}>
            <View style={profileStyles.mailTextView}>
              <Text style={profileStyles.mailText}>+1 123-456-7896</Text>
            </View>
            <View>
              <Text style={profileStyles.companyMailText}>Mobile</Text>
            </View>
          </View>
          <View
            style={{
              position: 'relative',
              marginLeft: 328,
              marginTop: 16,
            }}>
            <Svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.43323e-05 10.59L1.41003 12L7.41003 6L1.41003 0L3.43323e-05 1.41L4.58003 6L3.43323e-05 10.59Z"
                fill="#2B64CB"
              />
            </Svg>
          </View>
        </View>

        <View style={(profileStyles.line1, {top: 427})}></View>

        <View
          style={{
            flexDirection: 'row',
            marginLeft: 18,
            alignItems: 'flex-start',
            marginTop: 46,
            height: 40,
            width: '100%',
          }}>
          <View style={profileStyles.mailView}>
            <Svg
              width="18"
              height="22"
              viewBox="0 0 18 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.04729 0H8.76357C4.94921 0.125036 2.01751 3.34472 2.01751 7.12706V9.37771H1.85989C0.819615 9.37771 0 10.1904 0 11.222V19.7557C0 20.7873 0.819615 21.6 1.85989 21.6H16.1401C17.1804 21.6 18 20.7873 18 19.7557V11.222C18 10.1904 17.1804 9.37771 16.1401 9.37771H16.0771V6.93951C16.0771 3.1259 12.9247 0 9.04729 0ZM10.3713 17.63C10.4029 17.8489 10.2452 18.0364 10.0246 18.0364H8.9843H7.94402C7.72335 18.0364 7.56573 17.8489 7.59726 17.63L8.00707 15.692C7.62878 15.3481 7.37659 14.848 7.47116 14.2853C7.56573 13.6289 8.13316 13.0975 8.79516 13.0037H8.9843C9.83544 13.0037 10.529 13.6914 10.529 14.5354C10.529 15.0043 10.3083 15.4419 9.96153 15.7232L10.3713 17.63ZM5.07539 9.37743H12.9878V6.93923C12.9878 4.75109 11.191 3.00059 9.01585 3.00059C8.9528 3.00059 8.88975 3.0084 8.8267 3.01622C8.76366 3.02403 8.70061 3.03185 8.63756 3.03185C6.58853 3.2194 5.07539 5.03242 5.07539 7.06426V9.37743Z"
                fill="#334455"
              />
            </Svg>
          </View>
          <View
            style={{
              flexDirection: 'column',
              position: 'absolute',
              marginLeft: 73,
              alignContent: 'flex-end',
              height: 40,
              flex: 1,
            }}>
            <View style={profileStyles.mailTextView}>
              <Text style={profileStyles.mailText}>********</Text>
            </View>
            <View>
              <Text style={profileStyles.companyMailText}>Password</Text>
            </View>
          </View>
          <View
            style={{
              position: 'relative',
              marginLeft: 328,
              marginTop: 16,
            }}>
            <Svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.43323e-05 10.59L1.41003 12L7.41003 6L1.41003 0L3.43323e-05 1.41L4.58003 6L3.43323e-05 10.59Z"
                fill="#2B64CB"
              />
            </Svg>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
