import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import ProfileItems from '../component/ProfileItems'

export default function Profile() {
	

  return (
    <View style={styles.container}>
      <Image
        style={{height: 200}}
        source={{uri: require ("../assets/profile.jpg")}} 
      /> 

      <ProfileItems name="Username" value="Ehsan Hamdard"/>
      <ProfileItems name="Gmail" value="ehsan.hamdard723@gmail.com"/>
      <ProfileItems name="Gender" value="Male"/>
      <ProfileItems name="Profile" value="0093786409744"/>
      <ProfileItems name="Address" value="Herat Afghanistan"/>
      </View>
      );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

});

