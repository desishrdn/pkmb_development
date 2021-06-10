
import React from 'react'
import {StyleSheet, Text, View} from "react-native";

function ContainerBoxWithColor() {
    return (
        <View>
            <View>
                <Text style={styles.headFont}>PKM Bermakna</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    mainview :{
        flexDirection: "row",
        height: 36
    },
    container: {
        flex: 0.3,
        padding: 20,
        backgroundColor: "#0080ff",
      },
    headFont:{
        fontSize : 12.7,
        color : '#FCFCFC',
        textAlign : 'center',
        marginBottom: 15
    
    }
  });

export default ContainerBoxWithColor