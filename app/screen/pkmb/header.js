
import React from 'react'
import {
    StyleSheet, 
    Text, 
    View, 
    SafeAreaView, 
    StatusBar, 
    Platform
} from "react-native";
import { Icon } from "react-native-elements";
import {useNavigation} from '@react-navigation/native';


function HeaderBox() {
    
// const navigation = useNavigation();
    return (
        <View style={styles.container} >
            <View style={containerStyle}>
                <View style={iconHead}>
                        <Icon style={styles.iconStyle} type="ionicon" name={Platform.OS === "android" ? "chevron-back-outline" : "chevron-back-outline"} />
                </View>
                <View style={titleHead}>
                    <Text style={styles.textHeadStyle}> PKM Bermakna</Text>
                </View>
            </View>

            {/* <View  style={styles.container, containerStyle}>
            <View style={styles.headBox}></View>
            <Text>TEST</Text>
            </View> */}
        </View>
    )
}

const containerStyle = { 
    flexDirection: "row", 
    width: "100%", 
    height: 40 
};
const titleHead = {
    justifyContent:"center",
    flexBasis: 100,
    flexGrow:1,
    backgroundColor:"#0080ff"
};
const iconHead = {
    justifyContent:"center",
    width: "9%",
    backgroundColor:"#0080ff"
};

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "#0080ff"
      },
    textHeadStyle:{
        textAlign:"center",
        color: "#FCFCFC",
        fontWeight: "bold",
        fontSize: 15,
    },
    iconStyle: {
        paddingLeft: 13
    }
  });

  
export default HeaderBox