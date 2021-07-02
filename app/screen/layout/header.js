
import React from 'react'
import {
    StyleSheet, 
    Text, 
    View, 
    StatusBar, 
    Platform
} from "react-native";
import { Icon } from "react-native-elements";
import {useNavigation, useRoute} from '@react-navigation/native';
import styles from '../../styles/styles';


function HeaderBox() {
    
    
    const navigation = useNavigation()
    const route = useRoute()
    
    const BackButtonHandler = () => {
        route.name === "TipsScreen" ? navigation.navigate("SurveyScreen") : navigation.replace("TipsScreen") 
    }

    return (
        <View style={stylesApp.container} >
            <View style={containerStyle}>
                <View>
                        <Icon  size={25}
                                type="ionicon" 
                                name={Platform.OS === "android" ? "chevron-back-outline" : "chevron-back-outline"} 
                                onPress={() => BackButtonHandler()}/>
                </View>
                <View>
                    <Text style={styles.textHeader}> {route.name === "SurveyScreen" ? "Survey PKM Bermakna" : "PKM Bermakna"}</Text>
                </View>
                <View></View>
            </View>

        </View>
    )
}

const containerStyle = { 
    flexDirection: "row", 
    padding : 10,
    justifyContent: "space-between"
};

const stylesApp = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "#1A67B2"
      },

  });

  
export default HeaderBox