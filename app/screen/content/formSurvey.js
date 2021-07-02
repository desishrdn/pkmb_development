
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native'
import { Image } from 'react-native'
import {
  Text, 
  View, 
  StyleSheet,
  Dimensions
} from 'react-native'
import { Icon } from "react-native-elements";

const screenHeight = Dimensions.get('screen').height


function FormSurvey() {
    return(
        <View style={styles.container} >
           
            
        </View>
    )
}

export default FormSurvey

const textBoxStyle = {
  alignItems: "center",
  flexDirection:"row",

  
};


const styles = StyleSheet.create({
    container: {
      flexDirection: "column",
      backgroundColor: "transparent",
      height: screenHeight,
      flex:1
      
    },
    box:{ 
      borderRadius: 8,
      backgroundColor: "#99CCFF",
      width: "90%",
      padding: 10,
      justifyContent:"center",
      elevation: 5
    },
    textStyle : {
      color: '#202020',
      textAlign : 'center',
      fontSize: 15,
      padding: 5
    },
  });