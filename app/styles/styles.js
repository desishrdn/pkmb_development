
import { StyleSheet, StatusBar} from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
    },
    paddingTopStatusBar:{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    title: {
        fontSize: 10,
        color: '#000',
        backgroundColor: '#fff'
    },
    button: {
        fontSize: 12,
        color: '#000',
        backgroundColor: '#fff'
    },
    textHeader:{
        textAlign:"center",
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 15,
    },
    blueActive:{
        backgroundColor: "#3498DB"
    },
    bluePNM:{
        backgroundColor:"#1a67b2"
    },
    greenMekaar:{
        backgroundColor:"green"
    },
    greyInactive:{
        backgroundColor:'#D0D3D4'
    }
    
});