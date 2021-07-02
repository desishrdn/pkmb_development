
import React from 'react'
import { Image } from 'react-native'
import {
  Text, 
  View, 
  StyleSheet,
  Dimensions,
  Button,
  Alert
} from 'react-native'

const screenHeight = Dimensions.get('screen').height

function FormKuisioner() {
    return(
        <View style={styles.container}>
            

            <View style={{
              backgroundColor:"#FFFFFF",
              justifyContent: 'center',
              alignItems: 'center',
            }}>
                <Image style={styles.imageStyle} source={require('../../../app/assets/icon/icon-wallet.png')}></Image>
                <Text style={styles.textSubtitle} >
                      Tips PKM, pertama
                </Text> 
                {/* <Text style={styles.textStyling} >
                      Cara pertama, buat dua rekening yang berbeda / pecatatan keuangan yang sudah diipisah-pisahkan. 
                      Misalnya : Menggunakan amplop yang terpisah.
                      Sehingga Ibu bias mengontrol dengan baik keluar masuk uang yang dikelola untuk usaha ataupun keluarga.
                </Text> */}
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

function FooterBox() {
  return (
      <View style={styles.containerFoot} >
           <View style={footDownload}>
              <Text style={styles.textQuestion}>Pertanyaan 1 dari 7 </Text>
              <View  >
                  <Button  title="Selanjutnya" />
              </View>
          </View>
      </View>
  )
}

export default function FormSurvey() {
  return (
    <View style={styles.container}>

      {/* <Text>Open up App.js to start working on your app!</Text>  */}
       <FormKuisioner></FormKuisioner>
       {/* <MainPKMB ></MainPKMB> */}
       {/* <SlideOne></SlideOne> */}
       {/* <ClientData></ClientData> */}
       <FooterBox></FooterBox>
       {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const pointCarousel = {
  width: 100,
  height: "35%",
  padding: 15, 
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


const footDownload = {
  width: "100%", 
  flexDirection: "row", 
  justifyContent: 'space-between',
  alignItems: "center",
  backgroundColor:"#CCE5FF",
  padding:10
}

// const styles = StyleSheet.create({
//   container: {
//       flexDirection: "column",
//       backgroundColor: "#FFFFFF",
      
//     },
// });


const styles = StyleSheet.create({
    container: {
      flexDirection: "column",
      backgroundColor: "#FFFFFF",
      flex:1,
      height: screenHeight,
      
    },
    containerFoot:{
      flexDirection: "column",
      backgroundColor: "#FFFFFF",
    },
    textQuestion : {
      color: '#1a67b2',
      textAlign : 'center',
      fontSize: 18,
      paddingTop: 5,
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
    textFooter : {
      color: '#1a67b2',
      textAlign : 'center',
      fontSize: 15.7,
      paddingTop: 10,
      fontWeight: "bold"
    }

  });