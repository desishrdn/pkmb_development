import React,{useState} from 'react'
import { HeaderBox } from '../layout/index'
import { View, Text, Dimensions, FlatList, TouchableOpacity, StatusBar,ScrollView, ImageBackground, Button, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Card, CardItem } from "react-native-elements";
import styles from '../../styles/styles';

export default function PKMScreen() {

  const question = [
    {
      key:'question1',
      option:'A',
      text: 'Tes1',
      
     
    },
    {
      
      key:'question2',
      option:'B',
      text: 'Tes2',
      
    },
    {
      
      key:'question3',
      option:'C',
      text: 'Tes3',
      
    },
  ];


    const navigation = useNavigation()
    const {width, height} = Dimensions.get('screen')

    const[showNextQuestion, setShowNextQuestion] = useState(false);
      
    const onNext = () => {
      setShowNextQuestion(true);
    }




    const FooterPage = () => {
      return(
        <View style={stylesApp.footer}>
            <View style={{padding:10,  alignItems:'center', width:width, backgroundColor: "#d3e6f9", flexDirection:'row', justifyContent:'space-around'}}> 
            <Text style={{fontSize: 20, fontWeight: 'bold', color:'#1a67b2'}} >Pertanyaan 1 dari 7 </Text>
              <Button title="Lanjut" onPress={() => onNext()}></Button>
            </View>

          </View>
      )
    }


     
    const FormQuestion = () => {
      
          
        const AnswerBox = ({item}) => {
          return(
          <TouchableOpacity >
            <Card containerStyle={{borderRadius: 4}} >
                  <View style={{flexDirection:"row", alignContent:'center', paddingRight:5}}>
                    <Text> </Text>
                    <Text></Text>
                  </View>
            </Card>
          </TouchableOpacity>
            
          )

        }

    return(
      
        <ImageBackground source={require('../../assets/bg1.png')} style={stylesApp.container}>
            <View>
                <Text style={stylesApp.headerText}>MINAH BINTI ASNAM - 098765432</Text>
                <Text style={stylesApp.subheaderText}>Kelompok Garuda</Text>
            </View>
              <Card containerStyle={{borderRadius:4,  backgroundColor:'#f5f9fe'}}>
                  <View style={stylesApp.paddingForm}>
                      <Text style={{fontSize:15, paddingRight:5}}>1. </Text>
                      <Text style={stylesApp.questionStyle}>Pertanyaan ......................................................................</Text>
                  </View>

                  <View>
                      {/* <FlatList 
                                data={question} 
                                renderItem={AnswerBox} 
                                keyExtractor={(item) => item.key}
                                /> */}
                        <AnswerBox/>
    </View>
                   
              </Card>

            <FooterPage/>
           
        </ImageBackground>
        
            

        );
    }
    
    

    return(
      <>
      { setShowNextQuestion === true ? (
        console.log('masuknyet'),
        <View style={{flex: 1}}>
          <HeaderBox></HeaderBox>
             <Text>BOSAN!</Text>
         </View>
        ) : (
       
          <View style={{flex: 1}}>
              <HeaderBox></HeaderBox>
              <FormQuestion/>
          </View>
      )} 
      </>
    );
}



const stylesApp = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex:1,
        justifyContent: 'space-between',
        alignItems: 'center',
      },
    footer:{
      justifyContent:'flex-end',
    },
    paddingForm:{
      paddingHorizontal:10,
      flexDirection:"row",
      justifyContent:'center', 
      alignItems: "center"
    
    },
    questionStyle:{
      fontSize:15,
      fontWeight:'bold'
    },
    headerText:{
      color:'#FFF',
      fontSize: 20,
      paddingLeft:15,
      paddingRight:40,
    },
    subheaderText:{
      color:'#FFF',
      fontSize: 15,
      paddingLeft:15,
      paddingRight:10,
    }
    
  });