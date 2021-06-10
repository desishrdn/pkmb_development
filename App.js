import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View, Dimensions, SafeAreaView } from 'react-native';
import {MainPKMB, HeaderBox, FooterBox, SlideOne, ClientData} from './app/index'


const { width, height } = Dimensions.get('screen');

const screenHeight = Dimensions.get('screen').height

export default function App() {
  return (
    <View style={styles.container}>

      <HeaderBox  ></HeaderBox>
      {/* <Text>Open up App.js to start working on your app!</Text>  */}
       
       {/* <MainPKMB ></MainPKMB> */}
       {/* <SlideOne></SlideOne> */}
       <ClientData></ClientData>
       {/* <FooterBox></FooterBox> */}
       <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // paddingBottom: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#FFFFFF",
    width: width,
    height: height,
    flex:1,
    // position="absolute",
  },
});
