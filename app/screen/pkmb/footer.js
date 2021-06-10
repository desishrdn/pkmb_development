
import React from 'react'
import {
    StyleSheet, 
    Text, 
    View, 
    StatusBar, 
    Platform,
    Button,
    Alert
} from "react-native";
import { Icon } from "react-native-elements";


function FooterBox() {
    return (
        <View style={styles.container} >
             <View style={footDownload}>
                <Text style={styles.textSubtitle}>Sudah Baca Intruksi? </Text>
                <View >
                    <Button  title="Download Modul" onPress={() => Alert.alert('File Berhasil didownload')}/>
                </View>
            </View>
        </View>
    )
}


const footDownload = {
    width: "100%", 
    flexDirection: "row", 
    justifyContent: 'space-evenly',
    alignItems: "center",
    backgroundColor:"#CCE5FF",
    paddingLeft: 15,
    paddingRight: 15
  }

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
      },
    textFooter : {
      color: '#1a67b2',
      textAlign : 'center',
      fontSize: 15.7,
      paddingTop: 10,
      fontWeight: "bold"
    }
  });

  
export default FooterBox