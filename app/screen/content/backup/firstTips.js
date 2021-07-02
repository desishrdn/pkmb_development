
import React,{useState} from 'react'
import {
  Text, 
  View, 
  StyleSheet,
  Image,
  Modal,
  StatusBar,Dimensions
} from 'react-native'
import styles from '../../styles/styles';
import { Card } from "react-native-elements";
import ImageViewer from 'react-native-image-zoom-viewer'; 
import AppIntroSlider from 'react-native-app-intro-slider';


const screenHeight = Dimensions.get('screen').height
function FirstTips() {
  
  const [modal, setModal] = useState(false);
  
  const images = [{
    props: {
        source: require("../../assets/poster.jpeg")
    }
  }]

  const ImageView = () => {
    modal === true ? setModal(false) : setModal(true)
  }
  
  
 


  
  const ContentView = () => {
    return(
      <View style={{
        backgroundColor:"#FFFFFF",
        justifyContent: 'center',
        alignItems: 'center',
      }}>
            <Image style={stylesApp.imageStyle} source={require('../../../app/assets/icon/icon-pagi.png')}></Image>
            <Text style={stylesApp.textSubtitle} >
                  Semangat Pagi!
            </Text> 
            <Text style={stylesApp.textStyling} >
                  Taukah betapa pentingnya memisahkan Keuangan Usaha dan Kepentingan Keluarga?
                  Yuk bu, simak tips dari tes kami untuk membiasakan diri memisakan kedua hal tersebut.
            </Text>
          
       
      </View>
    )
  }
  


  
    return(
        <View style={styles.container,{backgroundColor:'#FFF', height:screenHeight}}>
              <Modal visible={modal} transparent={modal}>
                <ImageViewer backgroundColor={'#fff'} enableSwipeDown={true} imageUrls={images} onSwipeDown={() => ImageView()} />
              </Modal>
      
              <View style={styles.paddingTopStatusBar}>
                <Card containerStyle={{borderRadius: 5}}>
                  <Card.Image source={require("../../assets/poster.jpeg")} onPress={() => ImageView()} />
                </Card>
              </View>

              <View>
                  <ContentView></ContentView>
                  
              </View>
              
        </View>
    )
    
}

export default FirstTips


const stylesApp = StyleSheet.create({
    containerStyle: {
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
      paddingTop: 5
    },
    buttonCircle: {
      width: 40,
      height: 40,
      backgroundColor: 'rgba(0, 0, 0, .2)',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    slide: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'blue',
    },
    image: {
      width: 320,
      height: 320,
      marginVertical: 32,
    },
    text: {
      color: 'rgba(255, 255, 255, 0.8)',
      textAlign: 'center',
    },
    title: {
      fontSize: 22,
      color: 'white',
      textAlign: 'center',
    },

  });