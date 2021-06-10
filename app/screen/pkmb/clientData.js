
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

const screenHeight = Dimensions.get('screen')


function ClientData() {
    return(
        <View style={styles.container} >
            
            {/* <View style={{ backgroundColor:"#FFFFFF", width : "100%" }}>
              <Image style={{width:"100%", height:199}} source={require('../../../app/assets/poster.jpeg')}></Image>
            </View> */}

            <View style={{
              backgroundColor:"#FFFFFF",
              paddingBottom:20
            }}>
            <ScrollView style={{
              backgroundColor:"#fff", 
            }}>
                <View style={{padding:10, justifyContent:"center", alignItems:'center'}} >
                  <TouchableOpacity  style={styles.box} 
                      onPress={()=> {
                          console.log('does not work');
                      }
                    }>
                      <View style={textBoxStyle}>
                        <Icon style={[styles.iconBox, {paddingLeft:10}]} type="ionicon" name={"person-circle"}></Icon>

                        <Text style={styles.textStyle}>900010078 - Indah Maulina</Text>
                      </View>
                  </TouchableOpacity>
                </View>
                <View style={{padding:10, justifyContent:"center", alignItems:'center'}} >
                  <TouchableOpacity  style={styles.box} 
                      onPress={()=> {
                          console.log('does not work');
                      }
                    }>
                      <View style={textBoxStyle}>
                        <Icon style={[styles.iconBox, {paddingLeft:10}]} type="ionicon" name={"person-circle"}></Icon>

                        <Text style={styles.textStyle}>900010078 - Indah1 Maulina</Text>
                      </View>
                  </TouchableOpacity>
                </View>
                <View style={{padding:10, justifyContent:"center", alignItems:'center'}} >
                  <TouchableOpacity  style={styles.box} 
                      onPress={()=> {
                          console.log('does not work');
                      }
                    }>
                      <View style={textBoxStyle}>
                        <Icon style={[styles.iconBox, {paddingLeft:10}]} type="ionicon" name={"person-circle"}></Icon>

                        <Text style={styles.textStyle}>900010078 - Indah2 Maulina</Text>
                      </View>
                  </TouchableOpacity>
                </View>
                <View style={{padding:10, justifyContent:"center", alignItems:'center'}} >
                  <TouchableOpacity  style={styles.box} 
                      onPress={()=> {
                          console.log('does not work');
                      }
                    }>
                      <View style={textBoxStyle}>
                        <Icon style={[styles.iconBox, {paddingLeft:10}]} type="ionicon" name={"person-circle"}></Icon>

                        <Text style={styles.textStyle}>900010078 - Indah3 Maulina</Text>
                      </View>
                  </TouchableOpacity>
                </View>
                <View style={{padding:10, justifyContent:"center", alignItems:'center'}} >
                  <TouchableOpacity  style={styles.box} 
                      onPress={()=> {
                          console.log('does not work');
                      }
                    }>
                      <View style={textBoxStyle}>
                        <Icon style={[styles.iconBox, {paddingLeft:10}]} type="ionicon" name={"person-circle"}></Icon>

                        <Text style={styles.textStyle}>900010078 - Indah4 Maulina</Text>
                      </View>
                  </TouchableOpacity>
                </View>
                <View style={{padding:10, justifyContent:"center", alignItems:'center'}} >
                  <TouchableOpacity  style={styles.box} 
                      onPress={()=> {
                          console.log('does not work');
                      }
                    }>
                      <View style={textBoxStyle}>
                        <Icon style={[styles.iconBox, {paddingLeft:10}]} type="ionicon" name={"person-circle"}></Icon>

                        <Text style={styles.textStyle}>900010078 - Indah5 Maulina</Text>
                      </View>
                  </TouchableOpacity>
                </View>
                <View style={{padding:10, justifyContent:"center", alignItems:'center'}} >
                  <TouchableOpacity  style={styles.box} 
                      onPress={()=> {
                          console.log('does not work');
                      }
                    }>
                      <View style={textBoxStyle}>
                        <Icon style={[styles.iconBox, {paddingLeft:10}]} type="ionicon" name={"person-circle"}></Icon>

                        <Text style={styles.textStyle}>900010078 - Indah6 Maulina</Text>
                      </View>
                  </TouchableOpacity>
                </View>
                <View style={{padding:10, justifyContent:"center", alignItems:'center'}} >
                  <TouchableOpacity  style={styles.box} 
                      onPress={()=> {
                          console.log('does not work');
                      }
                    }>
                      <View style={textBoxStyle}>
                        <Icon style={[styles.iconBox, {paddingLeft:10}]} type="ionicon" name={"person-circle"}></Icon>

                        <Text style={styles.textStyle}>900010078 - Indah7 Maulina</Text>
                      </View>
                  </TouchableOpacity>
                </View>
                <View style={{padding:10, justifyContent:"center", alignItems:'center'}} >
                  <TouchableOpacity  style={styles.box} 
                      onPress={()=> {
                          console.log('does not work');
                      }
                    }>
                      <View style={textBoxStyle}>
                        <Icon style={[styles.iconBox, {paddingLeft:10}]} type="ionicon" name={"person-circle"}></Icon>

                        <Text style={styles.textStyle}>900010078 - Indah8 Maulina</Text>
                      </View>
                  </TouchableOpacity>
                </View>
                <View style={{padding:10, justifyContent:"center", alignItems:'center'}} >
                  <TouchableOpacity  style={styles.box} 
                      onPress={()=> {
                          console.log('does not work');
                      }
                    }>
                      <View style={textBoxStyle}>
                        <Icon style={[styles.iconBox, {paddingLeft:10}]} type="ionicon" name={"person-circle"}></Icon>

                        <Text style={styles.textStyle}>900010078 - Indah9 Maulina</Text>
                      </View>
                  </TouchableOpacity>
                </View>
                <View style={{padding:10, justifyContent:"center", alignItems:'center'}} >
                  <TouchableOpacity  style={styles.box} 
                      onPress={()=> {
                          console.log('does not work');
                      }
                    }>
                      <View style={textBoxStyle}>
                        <Icon style={[styles.iconBox, {paddingLeft:10}]} type="ionicon" name={"person-circle"}></Icon>

                        <Text style={styles.textStyle}>900010078 - Indah10 Maulina</Text>
                      </View>
                  </TouchableOpacity>
                </View>
                <View style={{padding:10, justifyContent:"center", alignItems:'center'}} >
                  <TouchableOpacity  style={styles.box} 
                      onPress={()=> {
                          console.log('does not work');
                      }
                    }>
                      <View style={textBoxStyle}>
                        <Icon style={[styles.iconBox, {paddingLeft:10}]} type="ionicon" name={"person-circle"}></Icon>

                        <Text style={styles.textStyle}>900010078 - Indah11 Maulina</Text>
                      </View>
                  </TouchableOpacity>
                </View>
           
                
            </ScrollView>

            </View>
            
        </View>
    )
}

export default ClientData

const textBoxStyle = {
  alignItems: "center",
  flexDirection:"row",

  
};


const styles = StyleSheet.create({
    container: {
      flexDirection: "column",
      backgroundColor: "transparent",
      height: screenHeight.height,
      // flex:1
      
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