
import React from 'react'
import { Image } from 'react-native'
import {
  Text, 
  View, 
  StyleSheet
} from 'react-native'


function SlideTwo() {
    return(
        <View style={styles.container}>
            <View style={{ backgroundColor:"#FFFFFF", width : "100%" }}>
              <Image style={{width:"100%", height:199}} source={require('../../../app/assets/poster.jpeg')}></Image>
            </View>

            <View style={{
              backgroundColor:"#FFFFFF",
              justifyContent: 'center',
              alignItems: 'center',
            }}>
                <Image style={styles.imageStyle} source={require('../../../app/assets/icon/icon-wallet.png')}></Image>
                <Text style={styles.textSubtitle} >
                      Tips PKM, pertama
                </Text> 
                <Text style={styles.textStyling} >
                      Cara pertama, buat dua rekening yang berbeda / pecatatan keuangan yang sudah diipisah-pisahkan. 
                      Misalnya : Menggunakan amplop yang terpisah.
                      Sehingga Ibu bias mengontrol dengan baik keluar masuk uang yang dikelola untuk usaha ataupun keluarga.
                </Text>
                <View style={pointCarousel}>
                  <View style={[styles.circle]}></View>
                  <View style={[styles.circle, dotActiveColor]}></View>
                  <View style={styles.circle}></View>
                  <View style={styles.circle}></View>

                </View>
             

            </View>
            
            
        </View>
    )
}

export default SlideTwo


const pointCarousel = {
  width: 100,
  height: 147,
  padding:15, 
  position: 'relative',
  flexDirection: "row", 
  justifyContent: "space-evenly",
  alignItems: "flex-end", 
  backgroundColor:"transparent"
}

const dotInactiveColor ={
  backgroundColor: "grey"
}

const dotActiveColor={
  backgroundColor: "#0080ff"
}

const styles = StyleSheet.create({
    container: {
      flexDirection: "column",
      backgroundColor: "#FFFFFF",
      
    },
    textSubtitle : {
      color: '#202020',
      textAlign : 'center',
      fontSize: 15.7,
      paddingTop: 10,
      fontWeight: "bold"
    },
    textStyling : {
      color: '#202020',
      textAlign : 'center',
      fontSize: 12,
      padding: 10
    },
    imageStyle: {
      resizeMode:"center", 
      width:200, 
      height:130,
      paddingTop: 5,
      backgroundColor: "red"
    },
    circle:{
      width:10, 
      height:10, 
      borderWidth: 1,
      borderColor: "#0C0C0C", 
      borderRadius:100, 
      borderStyle:"solid"
    },
    circleActive:{
      backgroundColor: "#0080ff"
    },

  });