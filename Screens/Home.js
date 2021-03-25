import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ImageSlider from 'react-native-image-slider'

export default function App() {
	let images = [
		require("../assets/bg.jpg"),
		require("../assets/rice.jpg"),
		require("../assets/steak.jpg"),

	]
  return (
    <View style={styles.container}>
      <View styles.containerImageSlider>
      	<ImageSlider
      		style={styles.ImageSlider}
      		images={images}
      		autoplayWithInterval={7000}
      	/>

      </View>
      <Text style={styles.categoryText}>Categories</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  containerImageSlider:{ 
  height: 170
  margin: 8 
},
ImageSlider:{
	borderRadius: 10
},

categoryText:{
	margin:10,
	fontSize:16,
	fontWeight: "bold"
}

});

