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
          <View style={{flex: 1}}>
            <Text style={styles.pageTitleText}>profile</Text>
          </View>
        </View>

        <View style={styles.profileContentView}>
          <View style={{flex: 1}}>
            <Image
              style={{
                width: 140,
                height: 140,
                borderRadius: 140 / 2,
              }}
              source={require('../assets/Bitmap.png')}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
