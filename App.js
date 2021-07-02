import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Dimensions } from 'react-native';
import Route from './app/index'


const { width, height } = Dimensions.get('screen');

const screenHeight = Dimensions.get('screen').height

export default function App() {
  return (
    
    <Route />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex:1,
  },
});
