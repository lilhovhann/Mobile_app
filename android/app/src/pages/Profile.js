import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import styles from '../styles/ComponentStyles';
import {Icon} from 'react-native-elements';

const Profile = ({navigation}) => {
  return (
    <ScrollView>
      <View
        style={[
          styles.profileContainer,
          {
            flexDirection: 'column',
          },
        ]}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1, paddingTop: 8}}>
            <Icon
              name="close"
              type="evilicon"
              color="#0d89ec"
              size={30}
              onPress={() => console.log('hello')}
            />
          </View>
          <View style={{flex: 2}}>
            <Text style={styles.pageTitle}>profile</Text>
          </View>
        </View>
        <View style={{flex: 3}}>
          <Image
            style={{width: '100%', height: 200}}
            source={require('../assets/profpic.jpeg')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
