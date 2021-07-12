import React,{useState} from 'react'
import { HeaderBox } from '../layout/index'
import { View, Text, Dimensions, StatusBar,ScrollView, ImageBackground, Button, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Card } from "react-native-elements";
import { RadioButton } from 'react-native-paper';

export default function SurveyScreen() {

  const navigation = useNavigation()
  
  const {width, height} = Dimensions.get('screen')
  
  

  const question = [
    {
      questionKey:'question1',
      questionText: 'Tes1',
      option: [
        {
          label: 'Coca Cola',
          id:'1'
        },
        {
          label: 'Fanta',
          id:'2'
        },
        {
          label: 'Sprite',
          id:'3'
        },
      ]
      
     
    },
    {
      
      questionKey:'question2',
      questionText: 'Tes2',
      option: [
        {
          label: 'P',
          id:'1'
        },
        {
          label: 'U',
          id:'2'
        },
        {
          label: 'Pp',
          id:'3'
        },
      ]
      
    },
    {
      
      questionKey:'question3',
      questionText: 'Tes3',
      option: [
        {
          label: '1',
          id:'1'
        },
        {
          label: '2',
          id:'2'
        },
        {
          label: '3',
          id:'3'
        },
      ]
      
    },
    {
      
      questionKey:'question8',
      questionText: 'AAAAAAAAAAAAAAA Im SOOOOOOOOOOOOOOOOOO TIREDDDDDDDDDDDDDDD. HELP MEEEEEEEEE!!!!!!',
      option: [
        {
          label: 'Maybe',
          id:'1'
        },
        {
          label: 'Yes',
          id:'2'
        },
        {
          label: 'No',
          id:'3'
        },
      ]
    }
    
  ];



    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleAnswerButtonClick = (buttonText) => {
      const nextQuestion = currentQuestion + 1;
      setCurrentQuestion(nextQuestion);

      if (nextQuestion < question.length) {
        setCurrentQuestion(nextQuestion);
        if((nextQuestion+1) === question.length){
         setButtonText('Submit');
        }

      } else {
        setShowResult(true);
        
      }
    };
    
    const [buttonText, setButtonText] = useState('Lanjut')

    const [showResult, setShowResult] = useState(false);
      

    const FooterPage = () => {

      return(
        <View style={stylesApp.footer}>
            <View style={{padding:10,  alignItems:'center', width:width, backgroundColor: "#d3e6f9", flexDirection:'row', justifyContent:'space-around'}}> 
            
              <Text style={{fontSize: 20, fontWeight: 'bold', color:'#1a67b2'}} >Pertanyaan {currentQuestion+1} dari {question.length} </Text>
              <Button title={buttonText} onPress={() => handleAnswerButtonClick(buttonText)}></Button>
            </View>
        </View>
      )
    }


     
    const FormQuestion = () => {
        const [selectChecked, setSelectChecked] = useState(null);

        const handleOptionPress =(option, index) => {
          setSelectChecked(option)
        };


   
        const AnswerBox = () => {

          return(
            <>
            {question[currentQuestion].option.map((option, index) => (
              // console.log(index),
                <Card containerStyle={{borderRadius:4}}>
                        <View style={stylesApp.box}> 
          
                              <RadioButton
                              key={index}
                              value={option.id} 
                              status={
                                option.id === selectChecked ? 'checked' : 'unchecked'
                              }
                              onPress={() => handleOptionPress(option.id, index)}
                            
                              />

                            <View style={{flex:4, alignSelf: 'center'}}>
                                <Text>{option.label}</Text>
                            </View> 
                          
                        </View>
                </Card> 
            ))}
            </>
          )

        }

        const IsQuestion = () =>{
          return(
            <View style={stylesApp.paddingForm}>
            <Text style={{fontSize:15, paddingRight:5}}>{currentQuestion+1}. </Text>
            <Text style={stylesApp.questionStyle}>{question[currentQuestion].questionText}</Text></View>
          )

        }

    return(
      
        <ImageBackground  source={require('../../assets/bg1.png')} style={stylesApp.container}>
            <View >
                <Text style={stylesApp.headerText}>MINAH BINTI ASNAM - 098765432</Text>
                <Text style={stylesApp.subheaderText}>Kelompok Garuda</Text>
            </View>
            <View style={{justifyContent:'center', alignself:'center', margin:50, flex:1, width:'100%'}}>
                <Card containerStyle={{borderRadius:10, elevation:0, borderWidth:0, backgroundColor:'transparent'}}>
                                              
                  <IsQuestion/>
                
                  <ScrollView >
                    <AnswerBox />
                  </ScrollView>
                  
                </Card>
            </View>    
              
        </ImageBackground>

        );
    }
    
    

    return(
      <>
        { showResult === true ? (
        <View style={{flex: 1}}>
          {/* <HeaderBox></HeaderBox> */}
          <View style={{alignItems:'center', justifyContent:'center', flex:1}}>
              <Text >DATA BERHASIL DI SUBMIT THANK YOU GAIS</Text>
              <Button title='Back to Home' 
                      onPress={() => navigation.navigate('ClientScreen')}></Button>
          </View>

         </View>
        ) : (
       
          <View style={{flex: 1}}>
              <HeaderBox></HeaderBox>
              <FormQuestion/>
              <FooterPage/>
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
      padding:5,
      flexDirection:'row',
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
    },
    box:{
      flexDirection:'row', 
      alignContent:'center', 
      justifyContent:'center'
    },
    selected:{
      backgroundColor: "coral",
      borderWidth: 0,
    }
    
  });